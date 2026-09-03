const ICONS = ["\ud83c\udf05","\u23f0","\ud83d\udcaa","\ud83d\udebf","\ud83d\udca7","\ud83c\udf4e","\ud83d\udcd6","\ud83e\uddd8","\ud83d\udeb6","\u2600\ufe0f","\ud83e\uddca","\ud83e\uddb7","\ud83d\udecf\ufe0f","\ud83e\udde0","\u270d\ufe0f","\ud83e\uddf9","\ud83d\udcf5","\ud83c\udf75"];
const RANKS = [[1,"\u041d\u043e\u0432\u0438\u0447\u043e\u043a \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430","\ud83c\udf31"],[3,"\u0418\u0441\u043a\u0430\u0442\u0435\u043b\u044c \u0440\u0435\u0436\u0438\u043c\u0430","\ud83e\udded"],[5,"\u0421\u0442\u0440\u0430\u0436 \u0443\u0442\u0440\u0430","\ud83d\udee1\ufe0f"],[8,"\u0412\u043e\u0438\u043d \u0434\u0438\u0441\u0446\u0438\u043f\u043b\u0438\u043d\u044b","\u2694\ufe0f"],[12,"\u0425\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c \u0440\u0438\u0442\u0443\u0430\u043b\u0430","\ud83d\udd25"],[18,"\u041c\u0430\u0441\u0442\u0435\u0440 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430","\ud83d\udc51"],[25,"\u041b\u0435\u0433\u0435\u043d\u0434\u0430 \u0441\u0435\u0440\u0438\u0438","\ud83d\udc09"]];
const ACH = [
  {id:"first", name:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0448\u0430\u0433", desc:"\u0417\u0430\u043a\u0440\u043e\u0439 \u043b\u044e\u0431\u043e\u0439 \u043a\u0432\u0435\u0441\u0442", ico:"\u2728"},
  {id:"perfect1", name:"\u0427\u0438\u0441\u0442\u044b\u0439 \u0434\u0435\u043d\u044c", desc:"\u0417\u0430\u043a\u0440\u043e\u0439 \u0432\u0441\u0435 \u043a\u0432\u0435\u0441\u0442\u044b \u0437\u0430 \u0434\u0435\u043d\u044c", ico:"\u2600\ufe0f"},
  {id:"streak3", name:"\u0422\u0440\u0438 \u0434\u043d\u044f \u043f\u043e\u0434\u0440\u044f\u0434", desc:"\u0421\u0435\u0440\u0438\u044f 3 \u0434\u043d\u044f", ico:"\ud83d\udd25"},
  {id:"streak7", name:"\u041d\u0435\u0434\u0435\u043b\u044f \u0433\u0435\u0440\u043e\u044f", desc:"\u0421\u0435\u0440\u0438\u044f 7 \u0434\u043d\u0435\u0439", ico:"\ud83c\udfc6"},
  {id:"streak21", name:"\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430", desc:"\u0421\u0435\u0440\u0438\u044f 21 \u0434\u0435\u043d\u044c", ico:"\ud83d\udc8e"},
  {id:"wake5", name:"\u0420\u0430\u043d\u043d\u044f\u044f \u043f\u0442\u0430\u0448\u043a\u0430", desc:"5 \u0440\u0430\u0437 \u043e\u0442\u043c\u0435\u0442\u044c \u043f\u043e\u0434\u044a\u0451\u043c", ico:"\ud83d\udc26"},
  {id:"lvl5", name:"\u041f\u044f\u0442\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c", desc:"\u0414\u043e\u0441\u0442\u0438\u0433\u043d\u0438 5 \u0443\u0440\u043e\u0432\u043d\u044f", ico:"\u2b50"},
  {id:"done50", name:"\u041f\u043e\u043b\u0441\u043e\u0442\u043d\u0438", desc:"50 \u043e\u0442\u043c\u0435\u0442\u043e\u043a \u0432\u0441\u0435\u0433\u043e", ico:"\ud83c\udfaf"}
];
const DEFAULTS = [
  {id:"wake", name:"\u041f\u043e\u0434\u044a\u0451\u043c \u0432 6:00", icon:"\u23f0", xp:20},
  {id:"sport", name:"\u0417\u0430\u0440\u044f\u0434\u043a\u0430 / \u0441\u043f\u043e\u0440\u0442", icon:"\ud83d\udcaa", xp:25},
  {id:"shower", name:"\u0414\u0443\u0448", icon:"\ud83d\udebf", xp:15},
  {id:"water", name:"\u0421\u0442\u0430\u043a\u0430\u043d \u0432\u043e\u0434\u044b", icon:"\ud83d\udca7", xp:10},
  {id:"sun", name:"\u0421\u0432\u0435\u0442 / \u043f\u0440\u043e\u0433\u0443\u043b\u043a\u0430", icon:"\u2600\ufe0f", xp:15}
];
const LOCAL_KEY = "rassvet_tma_v1";
const $ = (id) => document.getElementById(id);
const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
function todayKey(d = new Date()) {
  const z = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function monthKey(d = new Date()) {
  const z = n => String(n).padStart(2, "0");
  return `m${d.getFullYear()}_${z(d.getMonth() + 1)}`;
}
function parseDay(key) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function emptyState() {
  return { habits: DEFAULTS.map(h => ({ ...h })), logs: {}, xp: 0, coins: 0, bestStreak: 0, achievements: [], created: todayKey(), remind: false };
}
let state = emptyState();
let editId = null;
let pickIcon = "\ud83c\udf05";
let syncLabel = "\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e";
function haptic(type = "light") {
  try {
    if (type === "success") tg?.HapticFeedback?.notificationOccurred("success");
    else tg?.HapticFeedback?.impactOccurred(type);
  } catch (e) {}
}
function cloudAvailable() {
  return !!(tg && tg.CloudStorage && typeof tg.CloudStorage.getItem === "function");
}
function cloudGetItems(keys) {
  return new Promise((resolve) => {
    if (!cloudAvailable()) return resolve({});
    tg.CloudStorage.getItems(keys, (err, values) => resolve(err ? {} : (values || {})));
  });
}
function cloudSet(key, value) {
  return new Promise((resolve) => {
    if (!cloudAvailable()) return resolve(false);
    const str = typeof value === "string" ? value : JSON.stringify(value);
    if (str.length > 4000) return resolve(false);
    tg.CloudStorage.setItem(key, str, (err) => resolve(!err));
  });
}
function cloudGetKeys() {
  return new Promise((resolve) => {
    if (!cloudAvailable()) return resolve([]);
    tg.CloudStorage.getKeys((err, keys) => resolve(err ? [] : (keys || [])));
  });
}
function packLogs(logs) {
  const byMonth = {};
  for (const [day, map] of Object.entries(logs || {})) {
    const ids = Object.entries(map).filter(([, v]) => v).map(([id]) => id);
    if (!ids.length) continue;
    const mk = monthKey(parseDay(day));
    const dd = day.slice(8);
    if (!byMonth[mk]) byMonth[mk] = {};
    byMonth[mk][dd] = ids;
  }
  return byMonth;
}
function unpackLogs(byMonth) {
  const logs = {};
  for (const [mk, days] of Object.entries(byMonth || {})) {
    const ym = mk.replace(/^m/, "").replace("_", "-");
    for (const [dd, ids] of Object.entries(days || {})) {
      const key = `${ym}-${dd}`;
      logs[key] = {};
      (ids || []).forEach(id => { logs[key][id] = true; });
    }
  }
  return logs;
}
function persistLocal() { localStorage.setItem(LOCAL_KEY, JSON.stringify(state)); }
async function persistCloud() {
  if (!cloudAvailable()) return;
  await cloudSet("meta", { xp: state.xp, coins: state.coins, bestStreak: state.bestStreak, achievements: state.achievements, created: state.created, remind: state.remind });
  await cloudSet("habits", state.habits);
  const packed = packLogs(state.logs);
  for (const mk of Object.keys(packed)) await cloudSet(mk, packed[mk]);
}
async function save() {
  persistLocal();
  await persistCloud();
  setSync(cloudAvailable() ? "\u043e\u0431\u043b\u0430\u043a\u043e Telegram" : "\u0442\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e");
}
async function load() {
  let loaded = null;
  if (cloudAvailable()) {
    const keys = await cloudGetKeys();
    const want = ["meta", "habits", ...keys.filter(k => /^m\d{4}_\d{2}$/.test(k))];
    const raw = await cloudGetItems(want.length ? want : ["meta", "habits"]);
    if (raw.meta || raw.habits) {
      const meta = raw.meta ? JSON.parse(raw.meta) : {};
      const habits = raw.habits ? JSON.parse(raw.habits) : DEFAULTS;
      const months = {};
      for (const [k, v] of Object.entries(raw)) {
        if (/^m\d{4}_\d{2}$/.test(k) && v) { try { months[k] = JSON.parse(v); } catch (e) {} }
      }
      loaded = { ...emptyState(), ...meta, habits: Array.isArray(habits) && habits.length ? habits : DEFAULTS.map(h => ({ ...h })), logs: unpackLogs(months) };
      setSync("\u043e\u0431\u043b\u0430\u043a\u043e Telegram");
    }
  }
  if (!loaded) {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (raw) loaded = { ...emptyState(), ...JSON.parse(raw) };
    } catch (e) {}
  }
  state = loaded || emptyState();
  if (!state.habits?.length) state.habits = DEFAULTS.map(h => ({ ...h }));
  persistLocal();
}
function setSync(text) {
  syncLabel = text;
  const el = $("syncLabel");
  if (el) el.textContent = "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435: " + text;
}
function levelFromXp(xp) {
  let lvl = 1, need = 100, left = xp;
  while (left >= need) { left -= need; lvl++; need = 100 + (lvl - 1) * 40; }
  return { lvl, into: left, need, total: xp };
}
function rankFor(lvl) {
  let r = RANKS[0];
  for (const x of RANKS) if (lvl >= x[0]) r = x;
  return r;
}
function dayLog(key = todayKey()) {
  if (!state.logs[key]) state.logs[key] = {};
  return state.logs[key];
}
function isDone(id, key = todayKey()) { return !!state.logs[key]?.[id]; }
function countDone(key = todayKey()) {
  const log = state.logs[key] || {};
  return state.habits.filter(h => log[h.id]).length;
}
function isPerfect(key) { return state.habits.length > 0 && countDone(key) === state.habits.length; }
function computeStreak() {
  let s = 0;
  const d = new Date();
  if (countDone(todayKey()) === 0) d.setDate(d.getDate() - 1);
  for (let i = 0; i < 400; i++) {
    const k = todayKey(d);
    if (countDone(k) > 0) { s++; d.setDate(d.getDate() - 1); } else break;
  }
  return s;
}
function totalMarks() {
  let n = 0;
  for (const k of Object.keys(state.logs)) n += Object.values(state.logs[k]).filter(Boolean).length;
  return n;
}
function wakeCount() {
  let n = 0;
  for (const k of Object.keys(state.logs)) if (state.logs[k].wake) n++;
  return n;
}
function daysPlayed() {
  return Object.keys(state.logs).filter(k => Object.values(state.logs[k]).some(Boolean)).length;
}
function perfectDays() { return Object.keys(state.logs).filter(isPerfect).length; }
function grantAch(id) {
  if (state.achievements.includes(id)) return;
  state.achievements.push(id);
  const a = ACH.find(x => x.id === id);
  toast(`${a.ico} \u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435: ${a.name}`);
  haptic("success");
}
function checkAch() {
  if (totalMarks() >= 1) grantAch("first");
  if (isPerfect(todayKey())) grantAch("perfect1");
  const st = computeStreak();
  if (st >= 3) grantAch("streak3");
  if (st >= 7) grantAch("streak7");
  if (st >= 21) grantAch("streak21");
  if (wakeCount() >= 5) grantAch("wake5");
  if (levelFromXp(state.xp).lvl >= 5) grantAch("lvl5");
  if (totalMarks() >= 50) grantAch("done50");
}
function greet() {
  const h = new Date().getHours();
  if (h < 5) return "\u0422\u0438\u0445\u0430\u044f \u043d\u043e\u0447\u044c";
  if (h < 11) return "\u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e";
  if (h < 17) return "\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c";
  if (h < 22) return "\u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440";
  return "\u041f\u043e\u0437\u0434\u043d\u0438\u0439 \u0447\u0430\u0441";
}
function userName() {
  const u = tg?.initDataUnsafe?.user;
  return u?.first_name || "";
}
function fmtDate(d = new Date()) {
  return d.toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" });
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "&#39;" }[c]));
}
function renderToday() {
  const name = userName();
  $("greet").textContent = name ? `${greet()}, ${name}` : greet();
  $("todayLabel").textContent = fmtDate();
  const L = levelFromXp(state.xp);
  const rank = rankFor(L.lvl);
  $("lvlLabel").textContent = `\u0423\u0440\u043e\u0432\u0435\u043d\u044c ${L.lvl}`;
  $("rankName").textContent = rank[1];
  $("avatar").textContent = rank[2];
  $("xpBar").style.width = Math.min(100, (L.into / L.need) * 100) + "%";
  $("xpText").textContent = `${L.into} / ${L.need} XP`;
  $("coinsText").textContent = `${state.coins} \u2726`;
  const done = countDone();
  const total = state.habits.length;
  const streak = computeStreak();
  state.bestStreak = Math.max(state.bestStreak || 0, streak);
  $("stStreak").textContent = streak;
  $("stBest").textContent = state.bestStreak;
  $("stToday").textContent = `${done}/${total}`;
  $("doneLabel").textContent = `${done} \u0438\u0437 ${total}`;
  $("perfectBox").classList.toggle("on", total > 0 && done === total);
  setSync(syncLabel);
  const list = $("habitList");
  list.innerHTML = "";
  state.habits.forEach(h => {
    const el = document.createElement("div");
    el.className = "habit" + (isDone(h.id) ? " done" : "");
    el.innerHTML = `<div class="check">\u2713</div><div class="h-ico">${h.icon}</div><div class="h-body"><div class="name">${escapeHtml(h.name)}</div><div class="sub">\u043d\u0430\u0436\u043c\u0438, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c</div></div><div class="xp-chip">${isDone(h.id) ? "\u0433\u043e\u0442\u043e\u0432\u043e" : "+" + h.xp + " XP"}</div>`;
    let timer;
    el.addEventListener("click", () => toggleHabit(h.id));
    el.addEventListener("contextmenu", e => { e.preventDefault(); openEdit(h.id); });
    el.addEventListener("touchstart", () => { timer = setTimeout(() => openEdit(h.id), 520); }, { passive: true });
    el.addEventListener("touchend", () => clearTimeout(timer));
    list.appendChild(el);
  });
}
async function toggleHabit(id) {
  const log = dayLog();
  const h = state.habits.find(x => x.id === id);
  if (!h) return;
  if (log[id]) {
    log[id] = false;
    state.xp = Math.max(0, state.xp - h.xp);
    state.coins = Math.max(0, state.coins - Math.ceil(h.xp / 5));
    toast("\u041e\u0442\u043c\u0435\u0442\u043a\u0430 \u0441\u043d\u044f\u0442\u0430");
  } else {
    log[id] = true;
    state.xp += h.xp;
    state.coins += Math.ceil(h.xp / 5);
    toast(`+${h.xp} XP`);
    haptic("medium");
    burst();
    if (countDone() === state.habits.length && state.habits.length) {
      state.xp += 20; state.coins += 5;
      toast("\u0418\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043d\u044c! +20 XP");
      burst(true);
    }
  }
  checkAch(); await save(); renderAll();
}
function renderJournal() {
  const now = new Date();
  $("monthLabel").textContent = now.toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
  const cal = $("cal"); cal.innerHTML = "";
  ["\u043f\u043d","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043f\u0442","\u0441\u0431","\u0432\u0441"].forEach(d => { const e = document.createElement("div"); e.className = "dow"; e.textContent = d; cal.appendChild(e); });
  const y = now.getFullYear(), m = now.getMonth();
  const start = (new Date(y, m, 1).getDay() + 6) % 7;
  const days = new Date(y, m + 1, 0).getDate();
  for (let i = 0; i < start; i++) cal.appendChild(document.createElement("div"));
  const tk = todayKey();
  for (let day = 1; day <= days; day++) {
    const d = new Date(y, m, day); const k = todayKey(d);
    const el = document.createElement("div"); el.className = "day"; el.textContent = day;
    if (k === tk) el.classList.add("today");
    const c = countDone(k); const t = state.habits.length || 1; const p = c / t;
    if (c > 0 && p < .5) el.classList.add("p1");
    else if (p >= .5 && p < 1) el.classList.add("p2");
    else if (p >= 1 && c > 0) el.classList.add("p3");
    cal.appendChild(el);
  }
  $("sumDays").textContent = daysPlayed();
  $("sumDone").textContent = totalMarks();
  $("sumPerfect").textContent = perfectDays();
}
function renderAch() {
  const box = $("achList");
  box.innerHTML = `<h2 style="font-size:15px;margin-bottom:4px">\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f</h2>`;
  ACH.forEach(a => {
    const got = state.achievements.includes(a.id);
    const row = document.createElement("div");
    row.className = "ach" + (got ? " got" : "");
    row.innerHTML = `<div class="ico">${a.ico}</div><div><div class="t">${a.name}</div><div class="d">${got ? "\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e" : a.desc}</div></div>`;
    box.appendChild(row);
  });
  $("remindState").textContent = state.remind ? "\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b" : "\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u044b";
}
function renderAll() { renderToday(); renderJournal(); renderAch(); }
function toast(msg) {
  const t = $("toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._id); toast._id = setTimeout(() => t.classList.remove("show"), 1800);
}
function burst(big = false) {
  const c = $("confetti"); const ctx = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  const parts = Array.from({ length: big ? 80 : 28 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 160, y: innerHeight * 0.28,
    vx: (Math.random() - 0.5) * 6, vy: -Math.random() * 7 - 2, s: Math.random() * 5 + 3,
    col: Math.random() > .5 ? "#fbbf24" : "#34d399", life: 70
  }));
  let frame = 0;
  (function tick() {
    ctx.clearRect(0, 0, c.width, c.height);
    parts.forEach(p => { p.vy += 0.22; p.x += p.vx; p.y += p.vy; p.life--; ctx.globalAlpha = Math.max(0, p.life / 80); ctx.fillStyle = p.col; ctx.fillRect(p.x, p.y, p.s, p.s * 0.7); });
    frame++; if (frame < 90) requestAnimationFrame(tick); else ctx.clearRect(0, 0, c.width, c.height);
  })();
}
function openAdd() {
  editId = null; $("modalTitle").textContent = "\u041d\u043e\u0432\u044b\u0439 \u043a\u0432\u0435\u0441\u0442"; $("fName").value = ""; $("fXp").value = "15"; pickIcon = "\ud83c\udf05"; $("editExtra").style.display = "none"; paintIcons(); $("modal").classList.add("on");
}
function openEdit(id) {
  const h = state.habits.find(x => x.id === id); if (!h) return;
  editId = id; $("modalTitle").textContent = "\u041a\u0432\u0435\u0441\u0442"; $("fName").value = h.name; $("fXp").value = String(h.xp); pickIcon = h.icon; $("editExtra").style.display = "flex"; paintIcons(); $("modal").classList.add("on");
}
function paintIcons() {
  const box = $("iconPick"); box.innerHTML = "";
  ICONS.forEach(ic => { const b = document.createElement("button"); b.textContent = ic; if (ic === pickIcon) b.classList.add("on"); b.onclick = () => { pickIcon = ic; paintIcons(); }; box.appendChild(b); });
}
function closeModal() { $("modal").classList.remove("on"); }
async function saveHabit() {
  const name = $("fName").value.trim(); if (!name) { toast("\u041d\u0430\u043f\u0438\u0448\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"); return; }
  const xp = Number($("fXp").value) || 15;
  if (editId) { const h = state.habits.find(x => x.id === editId); if (h) { h.name = name; h.icon = pickIcon; h.xp = xp; } }
  else state.habits.push({ id: "h_" + Date.now().toString(36), name, icon: pickIcon, xp });
  await save(); closeModal(); renderAll();
}
async function deleteHabit() {
  if (!editId) return;
  state.habits = state.habits.filter(h => h.id !== editId);
  await save(); closeModal(); renderAll();
}
function setupTelegramChrome() {
  const inside = !!(tg && (tg.initData || tg.initDataUnsafe?.user));
  if (!inside) { $("outBanner").classList.add("on"); return; }
  try {
    tg.ready(); tg.expand();
    tg.setHeaderColor?.("#0c0a09"); tg.setBackgroundColor?.("#0c0a09");
    if (tg.MainButton) {
      tg.MainButton.setParams({ text: "\u041d\u041e\u0412\u042b\u0419 \u041a\u0412\u0415\u0421\u0422", color: "#f59e0b", text_color: "#1c1003", is_visible: true });
      tg.MainButton.onClick(openAdd);
    }
  } catch (e) {}
}
function requestReminders() {
  if (!tg) { toast("\u0422\u043e\u043b\u044c\u043a\u043e \u0432\u043d\u0443\u0442\u0440\u0438 Telegram"); return; }
  if (typeof tg.requestWriteAccess === "function") {
    tg.requestWriteAccess((ok) => { state.remind = !!ok; save(); renderAch(); toast(ok ? "\u041e\u043a. \u041d\u0430\u0436\u043c\u0438 /utro \u0432 \u0447\u0430\u0442\u0435 \u0431\u043e\u0442\u0430" : "\u0414\u043e\u0441\u0442\u0443\u043f \u043d\u0435 \u0432\u044b\u0434\u0430\u043d"); });
  } else toast("\u041d\u0430\u043f\u0438\u0448\u0438 \u0431\u043e\u0442\u0443 /utro");
}
document.querySelectorAll("nav.tabs button").forEach(b => {
  b.onclick = () => {
    document.querySelectorAll("nav.tabs button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    const tab = b.dataset.tab;
    $("screenToday").classList.toggle("on", tab === "today");
    $("screenJournal").classList.toggle("on", tab === "journal");
    $("screenAchieve").classList.toggle("on", tab === "achieve");
  };
});
$("btnAdd").onclick = openAdd;
$("btnCancel").onclick = closeModal;
$("btnSave").onclick = saveHabit;
$("btnDelete").onclick = deleteHabit;
$("modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
$("btnWipe").onclick = async () => {
  if (!confirm("\u0421\u0442\u0435\u0440\u0435\u0442\u044c \u0432\u0435\u0441\u044c \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441?")) return;
  state = emptyState(); await save(); renderAll();
};
$("btnExport").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(state)], { type: "application/json" }));
  a.download = "rassvet-backup.json"; a.click();
};
$("btnRemind").onclick = requestReminders;
$("btnResetHint").onclick = () => document.querySelector('[data-tab="achieve"]').click();
setupTelegramChrome();
load().then(renderAll);
