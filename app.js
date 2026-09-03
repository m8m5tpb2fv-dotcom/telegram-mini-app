const ICONS = ["\uD83C\uDF05","\u23F0","\uD83D\uDCAA","\uD83D\uDEBF","\uD83D\uDCA7","\uD83C\uDF4E","\uD83D\uDCD6","\uD83E\uDDD8","\uD83D\uDEB6","\u2600\uFE0F","\uD83E\uDDCA","\uD83E\uDDB7","\uD83D\uDECF\uFE0F","\uD83E\uDDE0","\u270D\uFE0F","\uD83E\uDDF9","\uD83D\uDCF5","\uD83C\uDF75"];
const RANKS = [
  [1,"Novice","\uD83C\uDF31"],
  [3,"Seeker","\uD83E\uDDED"],
  [5,"Guard","\uD83D\uDEE1\uFE0F"],
  [8,"Warrior","\u2694\uFE0F"],
  [12,"Keeper","\uD83D\uDD25"],
  [18,"Master","\uD83D\uDC51"],
  [25,"Legend","\uD83D\uDC09"]
];
RANKS[0][1] = "\u041D\u043E\u0432\u0438\u0447\u043E\u043A \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430";
RANKS[1][1] = "\u0418\u0441\u043A\u0430\u0442\u0435\u043B\u044C \u0440\u0435\u0436\u0438\u043C\u0430";
RANKS[2][1] = "\u0421\u0442\u0440\u0430\u0436 \u0443\u0442\u0440\u0430";
RANKS[3][1] = "\u0412\u043E\u0438\u043D \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u044B";
RANKS[4][1] = "\u0425\u0440\u0430\u043D\u0438\u0442\u0435\u043B\u044C \u0440\u0438\u0442\u0443\u0430\u043B\u0430";
RANKS[5][1] = "\u041C\u0430\u0441\u0442\u0435\u0440 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430";
RANKS[6][1] = "\u041B\u0435\u0433\u0435\u043D\u0434\u0430 \u0441\u0435\u0440\u0438\u0438";
const ACH = [
  {id:"first", name:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0433", desc:"\u0417\u0430\u043A\u0440\u043E\u0439 \u043B\u044E\u0431\u043E\u0439 \u043A\u0432\u0435\u0441\u0442", ico:"\u2728"},
  {id:"perfect1", name:"\u0427\u0438\u0441\u0442\u044B\u0439 \u0434\u0435\u043D\u044C", desc:"\u0417\u0430\u043A\u0440\u043E\u0439 \u0432\u0441\u0435 \u043A\u0432\u0435\u0441\u0442\u044B \u0437\u0430 \u0434\u0435\u043D\u044C", ico:"\u2600\uFE0F"},
  {id:"streak3", name:"\u0422\u0440\u0438 \u0434\u043D\u044F \u043F\u043E\u0434\u0440\u044F\u0434", desc:"\u0421\u0435\u0440\u0438\u044F 3 \u0434\u043D\u044F", ico:"\uD83D\uDD25"},
  {id:"streak7", name:"\u041D\u0435\u0434\u0435\u043B\u044F \u0433\u0435\u0440\u043E\u044F", desc:"\u0421\u0435\u0440\u0438\u044F 7 \u0434\u043D\u0435\u0439", ico:"\uD83C\uDFC6"},
  {id:"streak21", name:"\u0416\u0435\u043B\u0435\u0437\u043D\u0430\u044F \u043F\u0440\u0438\u0432\u044B\u0447\u043A\u0430", desc:"\u0421\u0435\u0440\u0438\u044F 21 \u0434\u0435\u043D\u044C", ico:"\uD83D\uDC8E"},
  {id:"wake5", name:"\u0420\u0430\u043D\u043D\u044F\u044F \u043F\u0442\u0430\u0448\u043A\u0430", desc:"5 \u0440\u0430\u0437 \u043E\u0442\u043C\u0435\u0442\u044C \u043F\u043E\u0434\u044A\u0451\u043C", ico:"\uD83D\uDC26"},
  {id:"lvl5", name:"\u041F\u044F\u0442\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C", desc:"\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438 5 \u0443\u0440\u043E\u0432\u043D\u044F", ico:"\u2B50"},
  {id:"done50", name:"\u041F\u043E\u043B\u0441\u043E\u0442\u043D\u0438", desc:"50 \u043E\u0442\u043C\u0435\u0442\u043E\u043A \u0432\u0441\u0435\u0433\u043E", ico:"\uD83C\uDFAF"}
];
const DEFAULTS = [
  {id:"wake", name:"\u041F\u043E\u0434\u044A\u0451\u043C \u0432 6:00", icon:"\u23F0", xp:20},
  {id:"sport", name:"\u0417\u0430\u0440\u044F\u0434\u043A\u0430 / \u0441\u043F\u043E\u0440\u0442", icon:"\uD83D\uDCAA", xp:25},
  {id:"shower", name:"\u0414\u0443\u0448", icon:"\uD83D\uDEBF", xp:15},
  {id:"water", name:"\u0421\u0442\u0430\u043A\u0430\u043D \u0432\u043E\u0434\u044B", icon:"\uD83D\uDCA7", xp:10},
  {id:"sun", name:"\u0421\u0432\u0435\u0442 / \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0430", icon:"\u2600\uFE0F", xp:15}
];
const LOCAL_KEY = "rassvet_tma_v1";
const $ = (id) => document.getElementById(id);
const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
function todayKey(d) {
  d = d || new Date();
  const z = n => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
}
function emptyState() {
  return { habits: DEFAULTS.map(function(h){ return {id:h.id,name:h.name,icon:h.icon,xp:h.xp}; }), logs: {}, xp: 0, coins: 0, bestStreak: 0, achievements: [], created: todayKey(), remind: false };
}
let state = emptyState();
let editId = null;
let pickIcon = "\uD83C\uDF05";
function haptic(type) {
  try {
    if (!tg || !tg.HapticFeedback) return;
    if (type === "success") tg.HapticFeedback.notificationOccurred("success");
    else tg.HapticFeedback.impactOccurred(type || "light");
  } catch (e) {}
}
function persistLocal() {
  try { localStorage.setItem(LOCAL_KEY, JSON.stringify(state)); } catch (e) {}
}
function save() {
  persistLocal();
  var el = $("syncLabel");
  if (el) el.textContent = "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435: \u044D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E";
}
function load() {
  try {
    var raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      state = emptyState();
      for (var k in parsed) state[k] = parsed[k];
    }
  } catch (e) {}
  if (!state.habits || !state.habits.length) state.habits = emptyState().habits;
  if (!state.logs) state.logs = {};
  if (!state.achievements) state.achievements = [];
}
function levelFromXp(xp) {
  var lvl = 1, need = 100, left = xp || 0;
  while (left >= need) { left -= need; lvl++; need = 100 + (lvl - 1) * 40; }
  return { lvl: lvl, into: left, need: need };
}
function rankFor(lvl) {
  var r = RANKS[0];
  for (var i = 0; i < RANKS.length; i++) if (lvl >= RANKS[i][0]) r = RANKS[i];
  return r;
}
function dayLog(key) {
  key = key || todayKey();
  if (!state.logs[key]) state.logs[key] = {};
  return state.logs[key];
}
function isDone(id, key) { return !!(state.logs[key || todayKey()] && state.logs[key || todayKey()][id]); }
function countDone(key) {
  key = key || todayKey();
  var log = state.logs[key] || {};
  var n = 0;
  (state.habits || []).forEach(function(h){ if (log[h.id]) n++; });
  return n;
}
function computeStreak() {
  var s = 0;
  var d = new Date();
  if (countDone(todayKey()) === 0) d.setDate(d.getDate() - 1);
  for (var i = 0; i < 400; i++) {
    if (countDone(todayKey(d)) > 0) { s++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return s;
}
function totalMarks() {
  var n = 0;
  Object.keys(state.logs || {}).forEach(function(k){
    Object.keys(state.logs[k] || {}).forEach(function(id){ if (state.logs[k][id]) n++; });
  });
  return n;
}
function grantAch(id) {
  if (state.achievements.indexOf(id) >= 0) return;
  state.achievements.push(id);
  var a = ACH.filter(function(x){ return x.id === id; })[0];
  if (a) toast(a.ico + " " + a.name);
}
function checkAch() {
  if (totalMarks() >= 1) grantAch("first");
  if (state.habits.length && countDone() === state.habits.length) grantAch("perfect1");
  var st = computeStreak();
  if (st >= 3) grantAch("streak3");
  if (st >= 7) grantAch("streak7");
  if (st >= 21) grantAch("streak21");
  var wake = 0;
  Object.keys(state.logs || {}).forEach(function(k){ if (state.logs[k].wake) wake++; });
  if (wake >= 5) grantAch("wake5");
  if (levelFromXp(state.xp).lvl >= 5) grantAch("lvl5");
  if (totalMarks() >= 50) grantAch("done50");
}
function greet() {
  var h = new Date().getHours();
  if (h < 5) return "\u0422\u0438\u0445\u0430\u044F \u043D\u043E\u0447\u044C";
  if (h < 11) return "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E";
  if (h < 17) return "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C";
  if (h < 22) return "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440";
  return "\u041F\u043E\u0437\u0434\u043D\u0438\u0439 \u0447\u0430\u0441";
}
function userName() {
  var u = tg && tg.initDataUnsafe && tg.initDataUnsafe.user;
  return (u && u.first_name) || "";
}
function escapeHtml(s) {
  var d = document.createElement("div");
  d.textContent = String(s == null ? "" : s);
  return d.innerHTML;
}
function toast(msg) {
  var t = $("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._id);
  toast._id = setTimeout(function(){ t.classList.remove("show"); }, 1800);
}
function burst() {
  var c = $("confetti");
  if (!c || !c.getContext) return;
  var ctx = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  var parts = [];
  for (var i = 0; i < 30; i++) {
    parts.push({ x: innerWidth/2, y: innerHeight*0.28, vx: (Math.random()-0.5)*6, vy: -Math.random()*7-2, s: Math.random()*5+3, col: Math.random()>0.5?"#fbbf24":"#34d399", life: 70 });
  }
  var frame = 0;
  function tick() {
    ctx.clearRect(0,0,c.width,c.height);
    parts.forEach(function(p){ p.vy += 0.22; p.x += p.vx; p.y += p.vy; p.life--; ctx.globalAlpha = Math.max(0, p.life/80); ctx.fillStyle = p.col; ctx.fillRect(p.x,p.y,p.s,p.s*0.7); });
    frame++;
    if (frame < 90) requestAnimationFrame(tick);
    else ctx.clearRect(0,0,c.width,c.height);
  }
  tick();
}
function renderToday() {
  var name = userName();
  if ($("greet")) $("greet").textContent = name ? (greet() + ", " + name) : greet();
  if ($("todayLabel")) $("todayLabel").textContent = new Date().toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" });
  var L = levelFromXp(state.xp);
  var rank = rankFor(L.lvl);
  if ($("lvlLabel")) $("lvlLabel").textContent = "\u0423\u0440\u043E\u0432\u0435\u043D\u044C " + L.lvl;
  if ($("rankName")) $("rankName").textContent = rank[1];
  if ($("avatar")) $("avatar").textContent = rank[2];
  if ($("xpBar")) $("xpBar").style.width = Math.min(100, (L.into / L.need) * 100) + "%";
  if ($("xpText")) $("xpText").textContent = L.into + " / " + L.need + " XP";
  if ($("coinsText")) $("coinsText").textContent = (state.coins || 0) + " \u2726";
  var done = countDone();
  var total = state.habits.length;
  var streak = computeStreak();
  state.bestStreak = Math.max(state.bestStreak || 0, streak);
  if ($("stStreak")) $("stStreak").textContent = streak;
  if ($("stBest")) $("stBest").textContent = state.bestStreak;
  if ($("stToday")) $("stToday").textContent = done + "/" + total;
  if ($("doneLabel")) $("doneLabel").textContent = done + " \u0438\u0437 " + total;
  if ($("perfectBox")) $("perfectBox").classList.toggle("on", total > 0 && done === total);
  save();
  var list = $("habitList");
  if (!list) return;
  list.innerHTML = "";
  state.habits.forEach(function(h) {
    var el = document.createElement("div");
    el.className = "habit" + (isDone(h.id) ? " done" : "");
    el.innerHTML = '<div class="check">\u2713</div><div class="h-ico">' + h.icon + '</div><div class="h-body"><div class="name">' + escapeHtml(h.name) + '</div><div class="sub">\u043D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043C\u0435\u0442\u0438\u0442\u044C</div></div><div class="xp-chip">' + (isDone(h.id) ? "\u0433\u043E\u0442\u043E\u0432\u043E" : ("+" + h.xp + " XP")) + '</div>';
    el.addEventListener("click", function(){ toggleHabit(h.id); });
    var timer;
    el.addEventListener("contextmenu", function(e){ e.preventDefault(); openEdit(h.id); });
    el.addEventListener("touchstart", function(){ timer = setTimeout(function(){ openEdit(h.id); }, 520); }, {passive:true});
    el.addEventListener("touchend", function(){ clearTimeout(timer); });
    list.appendChild(el);
  });
}
function toggleHabit(id) {
  var log = dayLog();
  var h = null;
  state.habits.forEach(function(x){ if (x.id === id) h = x; });
  if (!h) return;
  if (log[id]) {
    log[id] = false;
    state.xp = Math.max(0, (state.xp || 0) - h.xp);
    state.coins = Math.max(0, (state.coins || 0) - Math.ceil(h.xp / 5));
    toast("\u041E\u0442\u043C\u0435\u0442\u043A\u0430 \u0441\u043D\u044F\u0442\u0430");
  } else {
    log[id] = true;
    state.xp = (state.xp || 0) + h.xp;
    state.coins = (state.coins || 0) + Math.ceil(h.xp / 5);
    toast("+" + h.xp + " XP");
    haptic("medium");
    burst();
    if (countDone() === state.habits.length && state.habits.length) {
      state.xp += 20; state.coins += 5;
      toast("\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0435\u043D\u044C! +20 XP");
    }
  }
  checkAch();
  save();
  renderAll();
}
function renderJournal() {
  var now = new Date();
  if ($("monthLabel")) $("monthLabel").textContent = now.toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
  var cal = $("cal"); if (!cal) return;
  cal.innerHTML = "";
  ["\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431","\u0432\u0441"].forEach(function(d){ var e = document.createElement("div"); e.className = "dow"; e.textContent = d; cal.appendChild(e); });
  var y = now.getFullYear(), m = now.getMonth();
  var start = (new Date(y, m, 1).getDay() + 6) % 7;
  var days = new Date(y, m + 1, 0).getDate();
  for (var i = 0; i < start; i++) cal.appendChild(document.createElement("div"));
  var tk = todayKey();
  for (var day = 1; day <= days; day++) {
    var d = new Date(y, m, day);
    var k = todayKey(d);
    var el = document.createElement("div");
    el.className = "day";
    el.textContent = day;
    if (k === tk) el.classList.add("today");
    var c = countDone(k);
    var t = state.habits.length || 1;
    var p = c / t;
    if (c > 0 && p < 0.5) el.classList.add("p1");
    else if (p >= 0.5 && p < 1) el.classList.add("p2");
    else if (p >= 1 && c > 0) el.classList.add("p3");
    cal.appendChild(el);
  }
  var played = 0, perfect = 0;
  Object.keys(state.logs || {}).forEach(function(k){
    if (countDone(k) > 0) played++;
    if (state.habits.length && countDone(k) === state.habits.length) perfect++;
  });
  if ($("sumDays")) $("sumDays").textContent = played;
  if ($("sumDone")) $("sumDone").textContent = totalMarks();
  if ($("sumPerfect")) $("sumPerfect").textContent = perfect;
}
function renderAch() {
  var box = $("achList"); if (!box) return;
  box.innerHTML = '<h2 style="font-size:15px;margin-bottom:4px">\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F</h2>';
  ACH.forEach(function(a){
    var got = state.achievements.indexOf(a.id) >= 0;
    var row = document.createElement("div");
    row.className = "ach" + (got ? " got" : "");
    row.innerHTML = '<div class="ico">' + a.ico + '</div><div><div class="t">' + a.name + '</div><div class="d">' + (got ? "\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E" : a.desc) + '</div></div>';
    box.appendChild(row);
  });
  if ($("remindState")) $("remindState").textContent = state.remind ? "\u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B" : "\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u044B";
}
function renderAll() { renderToday(); renderJournal(); renderAch(); }
function paintIcons() {
  var box = $("iconPick"); if (!box) return;
  box.innerHTML = "";
  ICONS.forEach(function(ic){
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = ic;
    if (ic === pickIcon) b.className = "on";
    b.onclick = function(){ pickIcon = ic; paintIcons(); };
    box.appendChild(b);
  });
}
function openAdd() {
  editId = null;
  if ($("modalTitle")) $("modalTitle").textContent = "\u041D\u043E\u0432\u044B\u0439 \u043A\u0432\u0435\u0441\u0442";
  if ($("fName")) $("fName").value = "";
  if ($("fXp")) $("fXp").value = "15";
  pickIcon = "\uD83C\uDF05";
  if ($("editExtra")) $("editExtra").style.display = "none";
  paintIcons();
  if ($("modal")) $("modal").classList.add("on");
}
function openEdit(id) {
  var h = null;
  state.habits.forEach(function(x){ if (x.id === id) h = x; });
  if (!h) return;
  editId = id;
  if ($("modalTitle")) $("modalTitle").textContent = "\u041A\u0432\u0435\u0441\u0442";
  if ($("fName")) $("fName").value = h.name;
  if ($("fXp")) $("fXp").value = String(h.xp);
  pickIcon = h.icon;
  if ($("editExtra")) $("editExtra").style.display = "flex";
  paintIcons();
  if ($("modal")) $("modal").classList.add("on");
}
function closeModal() { if ($("modal")) $("modal").classList.remove("on"); }
function saveHabit() {
  var name = $("fName") ? $("fName").value.trim() : "";
  if (!name) { toast("\u041D\u0430\u043F\u0438\u0448\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"); return; }
  var xp = Number($("fXp") && $("fXp").value) || 15;
  if (editId) {
    state.habits.forEach(function(h){ if (h.id === editId) { h.name = name; h.icon = pickIcon; h.xp = xp; } });
  } else {
    state.habits.push({ id: "h_" + Date.now().toString(36), name: name, icon: pickIcon, xp: xp });
  }
  save(); closeModal(); renderAll();
}
function deleteHabit() {
  if (!editId) return;
  state.habits = state.habits.filter(function(h){ return h.id !== editId; });
  save(); closeModal(); renderAll();
}
function boot() {
  try {
    if (tg && (tg.initData || (tg.initDataUnsafe && tg.initDataUnsafe.user))) {
      tg.ready();
      tg.expand();
      if (tg.setHeaderColor) tg.setHeaderColor("#0c0a09");
      if (tg.setBackgroundColor) tg.setBackgroundColor("#0c0a09");
      if (tg.MainButton) {
        tg.MainButton.setParams({ text: "\u041D\u041E\u0412\u042B\u0419 \u041A\u0412\u0415\u0421\u0422", color: "#f59e0b", text_color: "#1c1003", is_visible: true });
        tg.MainButton.onClick(openAdd);
      }
    } else if ($("outBanner")) $("outBanner").classList.add("on");
  } catch (e) {}
  document.querySelectorAll("nav.tabs button").forEach(function(b){
    b.onclick = function(){
      document.querySelectorAll("nav.tabs button").forEach(function(x){ x.classList.remove("on"); });
      b.classList.add("on");
      var tab = b.getAttribute("data-tab");
      if ($("screenToday")) $("screenToday").classList.toggle("on", tab === "today");
      if ($("screenJournal")) $("screenJournal").classList.toggle("on", tab === "journal");
      if ($("screenAchieve")) $("screenAchieve").classList.toggle("on", tab === "achieve");
    };
  });
  if ($("btnAdd")) $("btnAdd").onclick = openAdd;
  if ($("btnCancel")) $("btnCancel").onclick = closeModal;
  if ($("btnSave")) $("btnSave").onclick = saveHabit;
  if ($("btnDelete")) $("btnDelete").onclick = deleteHabit;
  if ($("modal")) $("modal").addEventListener("click", function(e){ if (e.target.id === "modal") closeModal(); });
  if ($("btnWipe")) $("btnWipe").onclick = function(){
    if (!confirm("\u0421\u0442\u0435\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441?")) return;
    state = emptyState(); save(); renderAll();
  };
  if ($("btnExport")) $("btnExport").onclick = function(){
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(state)], {type:"application/json"}));
    a.download = "rassvet-backup.json"; a.click();
  };
  if ($("btnRemind")) $("btnRemind").onclick = function(){
    if (tg && typeof tg.requestWriteAccess === "function") {
      tg.requestWriteAccess(function(ok){ state.remind = !!ok; save(); renderAch(); toast(ok ? "OK" : "\u041D\u0435\u0442"); });
    } else toast("\u041E\u0442\u043A\u0440\u043E\u0439 \u0438\u0437 Telegram");
  };
  if ($("btnResetHint")) $("btnResetHint").onclick = function(){
    var btn = document.querySelector('[data-tab="achieve"]');
    if (btn) btn.click();
  };
  load();
  renderAll();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
