#!/usr/bin/env python3
"""Рассвет — Telegram-бот, который открывает Mini App и шлёт утренние напоминания."""

from __future__ import annotations

import asyncio
import json
import os
from pathlib import Path

from aiogram import Bot, Dispatcher, F
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import Command, CommandStart
from aiogram.types import (
    BotCommand,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    KeyboardButton,
    MenuButtonWebApp,
    Message,
    ReplyKeyboardMarkup,
    WebAppInfo,
)
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from dotenv import load_dotenv
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent
load_dotenv(ROOT / ".env")

BOT_TOKEN = os.environ.get("BOT_TOKEN", "").strip()
WEBAPP_URL = os.environ.get("WEBAPP_URL", "").strip()
REMIND_HOUR = int(os.environ.get("REMIND_HOUR", "6"))
REMIND_MINUTE = int(os.environ.get("REMIND_MINUTE", "20"))
TZ_NAME = os.environ.get("TZ", "Europe/Istanbul")
STORE = ROOT / "subscribers.json"


def webapp() -> WebAppInfo:
    if not WEBAPP_URL:
        raise RuntimeError("WEBAPP_URL не задан. Скопируй .env.example в .env")
    return WebAppInfo(url=WEBAPP_URL)


def open_kb() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="🌅 Открыть Рассвет", web_app=webapp())]
        ]
    )


def reply_kb() -> ReplyKeyboardMarkup:
    return ReplyKeyboardMarkup(
        keyboard=[[KeyboardButton(text="Открыть Рассвет", web_app=webapp())]],
        resize_keyboard=True,
    )


def load_subs() -> set[int]:
    if not STORE.exists():
        return set()
    try:
        data = json.loads(STORE.read_text(encoding="utf-8"))
        return {int(x) for x in data}
    except Exception:
        return set()


def save_subs(subs: set[int]) -> None:
    STORE.write_text(json.dumps(sorted(subs)), encoding="utf-8")


SUBS = load_subs()

WELCOME = (
    "<b>Рассвет</b> — мини-игра про утро.\n\n"
    "Отмечай подъём, зарядку, душ и любые свои ритуалы. "
    "За это капают XP, растёт серия и открываются звания.\n\n"
    "Прогресс хранится в облаке Telegram, отдельно сервер для квестов не нужен.\n\n"
    "Команды:\n"
    "/utro — включить утреннее напоминание\n"
    "/off — выключить напоминание"
)


async def cmd_start(message: Message) -> None:
    await message.answer(WELCOME, reply_markup=open_kb())
    await message.answer("Кнопка внизу тоже открывает приложение.", reply_markup=reply_kb())


async def cmd_app(message: Message) -> None:
    await message.answer("Открывай квесты дня:", reply_markup=open_kb())


async def cmd_utro(message: Message) -> None:
    SUBS.add(message.chat.id)
    save_subs(SUBS)
    await message.answer(
        f"Напоминание включено. Буду писать около "
        f"{REMIND_HOUR:02d}:{REMIND_MINUTE:02d} ({TZ_NAME}).",
        reply_markup=open_kb(),
    )


async def cmd_off(message: Message) -> None:
    SUBS.discard(message.chat.id)
    save_subs(SUBS)
    await message.answer("Напоминания выключены. Квесты по-прежнему в приложении.")


async def morning_ping(bot: Bot) -> None:
    text = (
        "Утро. Квесты ждут: подъём, движение, душ.\n"
        "Отметь то, что уже сделал — серия не любит пустые дни."
    )
    dead: list[int] = []
    for chat_id in list(SUBS):
        try:
            await bot.send_message(chat_id, text, reply_markup=open_kb())
        except Exception:
            dead.append(chat_id)
    if dead:
        for chat_id in dead:
            SUBS.discard(chat_id)
        save_subs(SUBS)


async def main() -> None:
    if not BOT_TOKEN or BOT_TOKEN.endswith("REPLACE_ME"):
        raise SystemExit("Укажи BOT_TOKEN в bot/.env")
    if not WEBAPP_URL.startswith("https://"):
        raise SystemExit("WEBAPP_URL должен быть публичным https:// адресом папки web/")

    bot = Bot(BOT_TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
    dp = Dispatcher()
    dp.message.register(cmd_start, CommandStart())
    dp.message.register(cmd_app, Command("app"))
    dp.message.register(cmd_utro, Command("utro"))
    dp.message.register(cmd_off, Command("off"))
    dp.message.register(cmd_app, F.text.func(lambda t: t and "рассвет" in t.lower()))

    await bot.set_chat_menu_button(
        menu_button=MenuButtonWebApp(text="Рассвет", web_app=webapp())
    )
    try:
        await bot.set_my_commands(
            [
                BotCommand(command="start", description="Открыть Рассвет"),
                BotCommand(command="app", description="Кнопка Mini App"),
                BotCommand(command="utro", description="Включить напоминание"),
                BotCommand(command="off", description="Выключить напоминание"),
            ]
        )
    except Exception:
        pass

    tz = ZoneInfo(TZ_NAME)
    scheduler = AsyncIOScheduler(timezone=tz)
    scheduler.add_job(morning_ping, "cron", hour=REMIND_HOUR, minute=REMIND_MINUTE, args=[bot])
    scheduler.start()

    print(f"Рассвет-бот запущен. Mini App: {WEBAPP_URL}")
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
