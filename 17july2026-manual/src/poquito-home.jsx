/* ===== poquito-home.jsx ===== */
// poquito-home.jsx — Pocket Dragon Home Module. Extends the onboarding design system
// (PQ tokens, HERO, Icon from poquito-ui.jsx). Exports to window.

// ── Line icons (24px viewBox, standalone — no containers per brand) ──
function HIcon({ name, size = 24, stroke = "currentColor", sw = 1.7, style }) {
  const p = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    home: <g {...p}><path d="M4 11.5L12 4.5l8 7" /><path d="M6 10v9.5h12V10" /><path d="M10 19.5v-5h4v5" /></g>,
    crown: <g {...p}><path d="M4 8l3.2 3L12 5.5 16.8 11 20 8l-1.4 10.5H5.4z" /><path d="M5.4 18.5h13.2" /></g>,
    gear: <g {...p}><circle cx="12" cy="12" r="3.2" /><path d="M12 3.2v2.3M12 18.5v2.3M3.2 12h2.3M18.5 12h2.3M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" /></g>,
    users: <g {...p}><circle cx="9" cy="9" r="3" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><path d="M16 6.2a3 3 0 010 5.6M20.5 19a5.5 5.5 0 00-3.5-5.1" /></g>,
    clock: <g {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g>,
    arrowR: <g {...p}><path d="M5 12h13M12.5 6l6 6-6 6" /></g>,
    // gameplay action icons (landing-page style, no box)
    create: <g {...p}><rect x="5" y="3.5" width="14" height="17" rx="3" /><path d="M12 8.5v7M8.5 12h7" /></g>,
    join: <g {...p}><path d="M13 4.5h4.5a1 1 0 011 1v13a1 1 0 01-1 1H13" /><path d="M9 8.5l3.5 3.5L9 15.5M12.5 12H3.5" /></g>,
    bot: <g {...p}><rect x="5" y="8.5" width="14" height="10" rx="3" /><path d="M12 5.5v3" /><circle cx="12" cy="4.4" r="1.3" fill={stroke} stroke="none" /><circle cx="9.4" cy="13" r="1.15" fill={stroke} stroke="none" /><circle cx="14.6" cy="13" r="1.15" fill={stroke} stroke="none" /><path d="M9.6 16h4.8" /></g>,
    leave: <g {...p}><path d="M14 19.5H6a1 1 0 01-1-1v-13a1 1 0 011-1h8" /><path d="M18 8.5l3.5 3.5L18 15.5M21 12H10.5" /></g>,
    lock: <g {...p}><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8 10.5V8a4 4 0 018 0v2.5" /></g>,
    cap: <g {...p}><path d="M12 4.5L2.5 9 12 13.5 21.5 9 12 4.5z" /><path d="M6.5 11v4.2c0 1.6 2.5 2.8 5.5 2.8s5.5-1.2 5.5-2.8V11" /><path d="M21.5 9v4.2" /></g>,
    grid: <g {...p}><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" /></g>,
    book: <g {...p}><path d="M5 4.5h11a2 2 0 012 2v13H7a2 2 0 01-2-2z" /><path d="M5 17.5a2 2 0 012-2h11" /></g>,
    dice: <g {...p}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="9" cy="9" r="1.2" fill={stroke} stroke="none" /><circle cx="15" cy="15" r="1.2" fill={stroke} stroke="none" /><circle cx="15" cy="9" r="1.2" fill={stroke} stroke="none" /><circle cx="9" cy="15" r="1.2" fill={stroke} stroke="none" /></g>,
    sliders: <g {...p}><path d="M4 8h9M17 8h3M4 16h3M11 16h9" /><circle cx="15" cy="8" r="2.3" /><circle cx="9" cy="16" r="2.3" /></g>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", ...style }}>{paths[name]}</svg>;
}

// ── Tile-tap sound (soft "pock", like a Mahjong tile) ────────────
let _actx = null;
function pock(kind) {
  try {
    if (!_actx) _actx = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = _actx;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    const sel = kind === "select";
    o.type = "triangle";
    o.frequency.setValueAtTime(sel ? 320 : 440, now);
    o.frequency.exponentialRampToValueAtTime(sel ? 180 : 300, now + 0.07);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(sel ? 0.14 : 0.06, now + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + (sel ? 0.16 : 0.09));
    o.connect(g); g.connect(ctx.destination);
    o.start(now); o.stop(now + 0.2);
  } catch (e) { /* no audio — silent */ }
}

// ── Mahjong suit glyphs ──────────────────────────────────────────
function SuitGlyph({ suit, size = 30, color = PQ.green }) {
  const s = size;
  if (suit === "bamboo") {
    const stalk = (x, h, top) => (
      <g key={x}>
        <rect x={x - 2.1} y={top} width={4.2} height={h} rx={2.1} fill="none" stroke={color} strokeWidth={1.7} />
        <line x1={x - 2.1} y1={top + h * 0.5} x2={x + 2.1} y2={top + h * 0.5} stroke={color} strokeWidth={1.4} />
      </g>
    );
    return (<svg width={s} height={s} viewBox="0 0 32 32">{stalk(8, 18, 9)}{stalk(16, 22, 6)}{stalk(24, 18, 9)}<path d="M16 4.5l-3 3M16 4.5l3 3" stroke={color} strokeWidth={1.7} strokeLinecap="round" fill="none" /></svg>);
  }
  if (suit === "dot") {
    const dot = (cx, cy) => <circle key={cx + "," + cy} cx={cx} cy={cy} r={3.2} fill="none" stroke={color} strokeWidth={1.7} />;
    return (<svg width={s} height={s} viewBox="0 0 32 32">{dot(16, 7)}{dot(7, 16)}{dot(25, 16)}{dot(16, 25)}<circle cx={16} cy={16} r={3.6} fill={color} /></svg>);
  }
  return (<svg width={s} height={s} viewBox="0 0 32 32"><g fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M7 8h18" /><path d="M11 8v6h11v4c0 3-1.5 5-4 6" /><path d="M11 14c-1 5-3 7.5-5 9" /></g></svg>);
}

// ── Hero panel (deep-green surface — whole box clickable → Profile) ──
const HERO_AVATAR = (typeof window !== "undefined" && window.__resources && window.__resources.girl) || "assets/avatars/poquito-girl.png";
function HeroPanel({ username = "avachen88", rp = 100, rpMax = 200, onOpen, onNotify }) {
  const pct = Math.max(0, Math.min(100, (rp / rpMax) * 100));
  const activeAvatar = (typeof AVATARS !== "undefined" && typeof window !== "undefined" && window.PocketDragonApp) ? avatarSrc(1) : HERO_AVATAR;
  
  return (
    <div style={{
      position: "relative", overflow: "hidden", borderRadius: 24, width: "100%", textAlign: "left",
      background: PQ.green, padding: "20px 20px 22px", color: PQ.off,
    }}>
      <button onClick={() => { pock("select"); onNotify && onNotify(); }} className="pq-press" style={{
        position: "absolute", top: 16, right: 16, zIndex: 2, width: 30, height: 30, borderRadius: "50%",
        background: "transparent", border: "none", cursor: "pointer", padding: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <XIcon name="bell" size={19} stroke="rgba(249,242,228,0.72)" />
        <span style={{ position: "absolute", top: 3, right: 4, width: 7, height: 7, borderRadius: "50%", background: PQ.rust, border: `1.5px solid ${PQ.green}` }} />
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button onClick={() => { pock("select"); onOpen && onOpen(); }} className="pq-press" style={{
          width: 88, height: 88, borderRadius: "50%", flexShrink: 0, overflow: "hidden", padding: 0, cursor: "pointer",
          background: "rgba(249,242,228,0.12)", border: "2px solid rgba(249,242,228,0.35)"
        }}>
          <img src={activeAvatar} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </button>
        <div style={{ flex: 1, minWidth: 0, paddingRight: 34 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(249,242,228,0.6)" }}>Hey</div>
          <div style={{ marginTop: 4, fontFamily: HERO, fontWeight: 700, fontSize: 23, letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 1.04, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{username}</div>
        </div>
      </div>
      <div style={{ marginTop: 18, display: "flex", justifyContent: "flex-end" }}>
        <span style={{ fontFamily: HERO, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: "rgba(249,242,228,0.72)" }}>{rp} / {rpMax} RP</span>
      </div>
      <div style={{ marginTop: 8, height: 6, borderRadius: 4, background: "rgba(249,242,228,0.16)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${PQ.rustSoft}, ${PQ.rust})`, borderRadius: 4 }} />
      </div>
      <div style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: PQ.off }}>FIREFLY I</span>
        <span style={{ fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(249,242,228,0.5)" }}>FIREFLY II</span>
      </div>
    </div>
  );
}

// ── Resume card ──
function ResumeCard({ onResume, onLeave }) {
  return (
    <div className="pq-banner" style={{
      borderRadius: 18, background: PQ.off, border: `1.5px solid ${PQ.line}`, padding: "16px 16px 16px 18px", flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
        <span className="pq-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: PQ.rust }} />
        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust }}>Your turn · Ongoing</span>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.45, color: PQ.inkSoft, fontWeight: 400 }}>Life happens. A bot stepped in. Pick up where you left off.</div>
      <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 7, fontFamily: HERO, fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.green }}>
        <HIcon name="clock" size={14} stroke={PQ.green} sw={1.8} /><span>Game 3 of 5</span>
      </div>
      <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
        <button onClick={() => { pock("select"); onLeave && onLeave(); }} className="pq-press" style={{
          flex: 1, height: 40, borderRadius: 12, cursor: "pointer", background: "transparent",
          border: `1.5px solid ${PQ.lineMid}`, color: PQ.ink, fontFamily: HERO, fontWeight: 700, fontSize: 11.5,
          letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        }}>Leave<HIcon name="leave" size={15} stroke={PQ.ink} sw={1.9} /></button>
        <button onClick={() => { pock("select"); onResume && onResume(); }} className="pq-press" style={{
          flex: 1, height: 40, borderRadius: 12, border: "none", cursor: "pointer",
          background: `linear-gradient(160deg, ${PQ.rustSoft} 0%, ${PQ.rust} 52%, ${PQ.rustDeep} 100%)`,
          color: PQ.off, fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        }}>Resume<HIcon name="arrowR" size={15} stroke={PQ.off} sw={2} /></button>
      </div>
    </div>
  );
}

// ── Hub action card ──
function HubCard({ icon, title, sub, subParts, active, onTap, delay = 0 }) {
  const accent = active ? PQ.rust : PQ.inkSoft;
  return (
    <button onClick={() => { pock("select"); onTap && onTap(); }} onMouseEnter={() => pock("hover")}
      className="pq-press pq-rise" style={{
        animationDelay: `${delay}ms`, boxSizing: "border-box", textAlign: "left", cursor: "pointer",
        background: PQ.off, border: `1.5px solid ${active ? "rgba(182,90,47,0.55)" : PQ.line}`,
        borderRadius: 18, padding: 16, width: "100%", flexShrink: 0,
        display: "flex", flexDirection: "row", alignItems: "center", gap: 14, overflow: "hidden",
      }}>
      <HIcon name={icon} size={26} stroke={accent} sw={1.8} style={{ flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15.5, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink, lineHeight: 1.12 }}>{title}</div>
        <div style={{ marginTop: 7, fontSize: 12, lineHeight: 1.45, color: PQ.inkSoft, fontWeight: 400, overflowWrap: "break-word", textWrap: "pretty" }}>
          {subParts ? subParts.map((p, i) => <span key={i} style={p.rust ? { color: PQ.rust, fontWeight: 600 } : null}>{p.t}</span>) : sub}
        </div>
      </div>
      <HIcon name="arrowR" size={20} stroke={accent} sw={2} style={{ flexShrink: 0 }} />
    </button>
  );
}

// ── Bottom navigation ──
const NAV = [
  { id: "home", label: "Hub", icon: "home" },
  { id: "profile", label: "Profile", icon: "users" },
  { id: "subscription", label: "Rules & Ranking", icon: "book" },
  { id: "settings", label: "Settings", icon: "sliders" },
];
function BottomNav({ active, onChange }) {
  return (
    <div style={{
      position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 20,
      background: PQ.off, borderTop: `1px solid ${PQ.line}`,
      padding: "10px 14px 26px", display: "flex", justifyContent: "space-around",
    }}>
      {NAV.map((t) => {
        const on = active === t.id;
        const col = on ? PQ.rust : PQ.inkFaint;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} className="pq-press" style={{
            background: "transparent", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "4px 10px", position: "relative",
          }}>
            <span style={{ position: "absolute", top: -10, width: 18, height: 3, borderRadius: 2, background: on ? PQ.rust : "transparent" }} />
            <HIcon name={t.icon} size={23} stroke={col} sw={on ? 1.9 : 1.6} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: col, textAlign: "center", lineHeight: 1.15, whiteSpace: "pre-line" }}>{t.label.replace(" & ", " &\n")}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Toast ──
function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div className="pq-toast" style={{
      position: "absolute", left: "50%", bottom: 104, transform: "translateX(-50%)", zIndex: 40,
      background: PQ.green, color: PQ.off, borderRadius: 12, padding: "11px 18px",
      fontFamily: HERO, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em",
      whiteSpace: "nowrap", boxShadow: "0 12px 30px -10px rgba(20,51,34,0.5)",
    }}>{msg}</div>
  );
}

// ── TabStub ──
function TabStub({ icon, label }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 40, gap: 16 }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: PQ.off, border: `1.5px solid ${PQ.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HIcon name={icon} size={32} stroke={PQ.inkFaint} sw={1.6} />
      </div>
      <div>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 20, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{label}</div>
        <div style={{ marginTop: 8, fontSize: 13.5, color: PQ.inkSoft, lineHeight: 1.5, maxWidth: 220 }}>Designed in the next module — this tab is wired and ready.</div>
      </div>
    </div>
  );
}

// ── Home screen ──
function HomeScreen({ showOngoing, onCard, onAvatar, onLeave, selected, onNotify }) {
  const A = (id) => ({ active: selected === id, onTap: () => onCard(id) });
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 16 }}>
      <HeroPanel onOpen={onAvatar} onNotify={onNotify} />
      <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 23, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>The Hub</div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, margin: "0 -4px", padding: "2px 4px 4px" }}>
        {showOngoing && <ResumeCard onResume={() => onCard("resume")} onLeave={onLeave} />}
        <HubCard icon="cap" title="Practice With Bots"
          subParts={[{ t: "Learn, experiment, and refine your game. Unranked and " }, { t: "offline", rust: true }, { t: "-ready." }]}
          {...A("practice")} delay={showOngoing ? 90 : 40} />
        <HubCard icon="grid" title="Join A Game" sub="Where it gets real. Private tables. Public matches. Ranked play."
          {...A("join")} delay={showOngoing ? 150 : 110} />
        <HubCard icon="users" title="Create A Game" sub="Your table. Your way. Invite friends or go public. Ranked play."
          {...A("create")} delay={showOngoing ? 210 : 180} />
      </div>
    </div>
  );
}

// ── Create Game · configuration screen ──
function CfgSection({ label, hint, children }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.inkSoft }}>{label}</div>
        {hint && <div style={{ fontFamily: HERO, fontSize: 13, fontWeight: 700, color: PQ.rust, letterSpacing: "0.02em" }}>{hint}</div>}
      </div>
      {children}
    </div>
  );
}

function VariantRow({ letter, name, subtitle, desc, active, onTap }) {
  return (
    <button onClick={() => { pock("select"); onTap && onTap(); }} className="pq-press" style={{
      width: "100%", textAlign: "left", cursor: "pointer", background: PQ.off,
      border: `1.5px solid ${active ? "rgba(182,90,47,0.55)" : PQ.line}`, borderRadius: 16, padding: "15px 16px",
      display: "flex", alignItems: "center", gap: 14,
    }}>
      <span style={{
        width: 48, height: 48, borderRadius: 13, flexShrink: 0, background: active ? PQ.rust : "rgba(20,51,34,0.05)",
        border: `1.5px solid ${active ? PQ.rust : PQ.line}`, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: HERO, fontWeight: 700, fontSize: 20, color: active ? PQ.off : PQ.green
      }}>{letter}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15.5, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{name}</span>
          <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: active ? PQ.rust : PQ.inkFaint }}>{subtitle}</span>
        </div>
        <div style={{ marginTop: 5, fontSize: 11.5, lineHeight: 1.35, color: PQ.inkSoft }}>{desc}</div>
      </div>
      <span style={{
        width: 22, height: 22, borderRadius: "50%", flexShrink: 0, border: `2px solid ${active ? PQ.rust : PQ.line}`,
        background: active ? PQ.rust : "transparent", display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        {active && <Icon name="check" size={13} stroke={PQ.off} sw={2.6} />}
      </span>
    </button>
  );
}

function Stepper({ label, value, min = 3, max = 4, onChange }) {
  const btn = (glyph, dis, fn) => (
    <button onClick={() => { if (dis) return; pock("select"); fn(); }} className={dis ? "" : "pq-press"} style={{
      width: 40, height: 40, borderRadius: 12, flexShrink: 0, cursor: dis ? "default" : "pointer",
      background: dis ? "rgba(20,51,34,0.03)" : PQ.off, border: `1.5px solid ${dis ? PQ.line : PQ.lineMid}`,
      color: dis ? PQ.inkFaint : PQ.ink, display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ width: 13, height: 1.8, borderRadius: 2, background: "currentColor", position: "relative" }}>
        {glyph === "+" && <span style={{ position: "absolute", left: "50%", top: "50%", width: 1.8, height: 13, borderRadius: 2, background: "currentColor", transform: "translate(-50%,-50%)" }} />}
      </span>
    </button>
  );
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14,
      padding: "7px 8px 7px 16px", border: `1.5px solid ${PQ.line}`, borderRadius: 14
    }}>
      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {btn("-", value <= min, () => onChange(value - 1))}
        <span style={{ minWidth: 22, textAlign: "center", fontFamily: HERO, fontWeight: 700, fontSize: 20, color: PQ.ink }}>{value}</span>
        {btn("+", value >= max, () => onChange(value + 1))}
      </div>
    </div>
  );
}

function VariantCounter({ letter, name, subtitle, value, min = 0, max = 10, onChange }) {
  const on = value > 0;
  const btn = (glyph, dis, fn) => (
    <button onClick={() => { if (dis) return; pock("select"); fn(); }} className={dis ? "" : "pq-press"} style={{
      width: 38, height: 38, borderRadius: 11, flexShrink: 0, cursor: dis ? "default" : "pointer",
      background: dis ? "rgba(20,51,34,0.03)" : PQ.off, border: `1.5px solid ${dis ? PQ.line : PQ.lineMid}`,
      color: dis ? PQ.inkFaint : PQ.ink, display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ width: 12, height: 1.8, borderRadius: 2, background: "currentColor", position: "relative" }}>
        {glyph === "+" && <span style={{ position: "absolute", left: "50%", top: "50%", width: 1.8, height: 12, borderRadius: 2, background: "currentColor", transform: "translate(-50%,-50%)" }} />}
      </span>
    </button>
  );
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "8px 10px 8px 12px", border: `1.5px solid ${on ? "rgba(182,90,47,0.55)" : PQ.line}`, borderRadius: 14
    }}>
      <span style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
        background: on ? PQ.rust : "rgba(20,51,34,0.05)", border: `1.5px solid ${on ? PQ.rust : PQ.line}`,
        fontFamily: HERO, fontWeight: 700, fontSize: 16, color: on ? PQ.off : PQ.inkSoft
      }}>{letter}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>{name}</div>
        <div style={{ marginTop: 2, fontSize: 11.5, color: PQ.inkSoft }}>{subtitle}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        {btn("-", value <= min, () => onChange(value - 1))}
        <span style={{ minWidth: 18, textAlign: "center", fontFamily: HERO, fontWeight: 700, fontSize: 19, color: on ? PQ.rust : PQ.ink }}>{value}</span>
        {btn("+", value >= max, () => onChange(value + 1))}
      </div>
    </div>
  );
}

function Chip({ label, active, onTap }) {
  return (
    <button onClick={() => { pock("select"); onTap && onTap(); }} className="pq-press" style={{
      flex: 1, height: 50, borderRadius: 13, cursor: "pointer",
      background: active ? PQ.rust : PQ.off, border: `1.5px solid ${active ? PQ.rust : PQ.line}`,
      color: active ? PQ.off : PQ.ink, fontFamily: HERO, fontWeight: 700, fontSize: 17,
    }}>{label}</button>
  );
}

function AccessOption({ icon, title, desc, active, onTap }) {
  return (
    <button onClick={() => { pock("select"); onTap && onTap(); }} className="pq-press" style={{
      width: "100%", textAlign: "left", cursor: "pointer", background: PQ.off,
      border: `1.5px solid ${active ? "rgba(182,90,47,0.55)" : PQ.line}`, borderRadius: 16, padding: "14px 16px",
      display: "flex", alignItems: "center", gap: 14,
    }}>
      <HIcon name={icon} size={24} stroke={active ? PQ.rust : PQ.inkSoft} sw={1.8} style={{ flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>{title}</div>
        <div style={{ fontFamily: HERO, marginTop: 4, fontSize: 11.5, lineHeight: 1.35, color: PQ.inkSoft }}>{desc}</div>
      </div>
      <span style={{
        width: 22, height: 22, borderRadius: "50%", flexShrink: 0, border: `2px solid ${active ? PQ.rust : PQ.line}`,
        background: active ? PQ.rust : "transparent", display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        {active && <span style={{ width: 8, height: 8, borderRadius: "50%", background: PQ.off }} />}
      </span>
    </button>
  );
}

function posToSecs(pos) {
  if (pos <= 50) return Math.round(60 - (pos / 50) * 30);
  return Math.round(30 - ((pos - 50) / 50) * 20);
}
function secsToTier(s) { return s >= 31 ? "Slow" : s >= 16 ? "Medium" : "Fast"; }

// ── Invite by Username modal ──
function InvitePlayersModal({ onClose }) {
  const [q, setQ] = React.useState("");
  const [state, setState] = React.useState({ p1: "invite", p2: "joined", p3: "invite", p4: "invited" });
  const favourites = [
    { id: "p1", name: "Mei L.", av: 2, tier: "Jade I", online: true },
    { id: "p2", name: "Arjun P.", av: 1, tier: "Jade III", online: true },
    { id: "p3", name: "Priya R.", av: 0, tier: "Bamboo I", online: false },
    { id: "p4", name: "Sam K.", av: 3, tier: "Bamboo II", online: true },
  ];
  const res = favourites.filter((p) => p.name.toLowerCase().includes(q.toLowerCase().trim()));
  const cycle = (id) => setState((s) => ({ ...s, [id]: s[id] === "invite" ? "invited" : s[id] === "invited" ? "invite" : s[id] }));
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 70, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-sheet-up" style={{ width: "100%", maxHeight: "82%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, display: "flex", flexDirection: "column" }}>
        <div style={{ flexShrink: 0, padding: "11px 0 2px", display: "flex", justifyContent: "center" }}><div style={{ width: 40, height: 4, borderRadius: 999, background: PQ.line }} /></div>
        <div style={{ flexShrink: 0, padding: "8px 22px 12px" }}>
          <div style={{ display: "flex", alignItems: "center", justifycontent: "space-between", marginBottom: 14 }}>
            <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Invite Players</h2>
            <button onClick={onClose} className="pq-press" style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18} stroke={PQ.ink} sw={1.9} /></button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 11, height: 46, padding: "0 15px", borderRadius: 13, border: `1.5px solid ${PQ.lineMid}` }}>
            <XIcon name="search" size={19} stroke={PQ.inkSoft} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by username" style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: HERO, fontSize: 15, color: PQ.ink, minWidth: 0 }} />
          </div>
          <div style={{ marginTop: 12, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkSoft }}>My Peeps</div>
        </div>
        <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "0 22px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
          {res.map((p) => {
            const st = state[p.id];
            return (
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", border: `1px solid rgba(20,51,34,0.08)`, borderRadius: 16 }}>
                <span style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
                  <span style={{ display: "block", width: 44, height: 44, borderRadius: "50%", overflow: "hidden", background: AVATARS[p.av].bg, border: `1.5px solid ${PQ.line}` }}>
                    <img src={avatarSrc(p.av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(p.av)})`, transformOrigin: "center 40%" }} />
                  </span>
                  {p.online && <span style={{ position: "absolute", top: -1, right: -1, width: 12, height: 12, borderRadius: "50%", background: "#1FA855", border: `2px solid ${PQ.off}` }} />}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.ink }}>{p.name}</div>
                  <div style={{ marginTop: 2, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkFaint }}>{p.tier}</div>
                </div>
                {st === "joined" ? (
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, height: 38, minWidth: 100, padding: "0 16px", borderRadius: 11, border: `1.5px solid ${PQ.line}`, background: "transparent", fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.green }}><Icon name="check" size={14} stroke={PQ.green} sw={2.4} />Joined</span>
                ) : (
                  <button onClick={() => { pock("select"); cycle(p.id); }} className="pq-press" style={{ height: 38, minWidth: 100, padding: "0 16px", borderRadius: 11, cursor: "pointer", border: `1.5px solid ${st === "invited" ? PQ.line : PQ.rust}`, background: "transparent", color: st === "invited" ? PQ.inkFaint : PQ.rust, fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase" }}>{st === "invited" ? "Invited" : "Invite"}</button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GameConfigScreen({ onBack, onCreate, onInvite, onShare, title = "Create A Game", subtitle = "Set the house rules — blame them later" }) {
  const [east, setEast] = React.useState(0);
  const [west, setWest] = React.useState(0);
  const [pos, setPos] = React.useState(30);
  const [timerOn, setTimerOn] = React.useState(true);
  const [access, setAccess] = React.useState(null);
  const [inviteOpen, setInviteOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const copyCode = () => { pock("select"); setCopied(true); clearTimeout(GameConfigScreen._t); GameConfigScreen._t = setTimeout(() => setCopied(false), 1800); };
  const secs = posToSecs(pos);
  const tier = secsToTier(secs);
  const canCreate = (east + west) > 0 && !!access;
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 6px" }}>
        <TopBar onBack={onBack} plain />
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "2px 0 0" }}>
          <HIcon name="users" size={24} stroke={PQ.rust} sw={1.8} />
          <h1 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{title}</h1>
        </div>
        <p style={{ margin: "9px 0 0", fontSize: 13.5, lineHeight: 1.5, color: PQ.inkSoft }}>{subtitle}</p>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "16px 22px 22px", display: "flex", flexDirection: "column", gap: 24 }}>
        <CfgSection label="Game Setup">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <VariantCounter letter="W" name="West" subtitle="Goulash" value={west} onChange={setWest} />
          </div>
        </CfgSection>

        <CfgSection label="Turn Timer" hint={timerOn ? `${secs}s · ${tier}` : "Off"}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
            <div style={{ fontFamily: HERO, fontWeight: 600, fontSize: 12.5, color: PQ.ink }}>Enable / Disable Turn Timer</div>
            <Toggle on={timerOn} onChange={() => setTimerOn((v) => !v)} />
          </div>
          {timerOn && (<>
            <input type="range" min={0} max={100} step={1} value={pos} onChange={(e) => setPos(+e.target.value)}
              style={{ width: "100%", marginTop: 16, accentColor: PQ.rust, height: 6, cursor: "pointer", outline: "none", border: "none", borderRadius: 3, background: `linear-gradient(to right, ${PQ.rust} 0%, ${PQ.rust} ${pos}%, #C8C0AE ${pos}%, #C8C0AE 100%)` }} />
            <div style={{ position: "relative", height: 32, marginTop: 8 }}>
              {[["Slow", "60s", 0], ["Medium", "30s", 50], ["Fast", "10s", 100]].map(([t, sLabel, fp]) => (
                <div key={t} style={{ position: "absolute", left: fp + "%", transform: `translateX(${fp === 0 ? "0" : fp === 100 ? "-100%" : "-50%"})`, textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: tier === t ? PQ.rust : PQ.inkFaint }}>{t}</div>
                  <div style={{ marginTop: 2, fontSize: 10, color: PQ.inkFaint }}>{sLabel}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 12, lineHeight: 1.45, color: PQ.inkSoft }}>If time runs out, a bot automatically plays your turn.</p>
          </>)}
        </CfgSection>

        <CfgSection label="Player Access">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <AccessOption icon="users" title="Public" desc="Visible to all players in the public lobby" active={access === "public"} onTap={() => setAccess("public")} />
            <AccessOption icon="lock" title="Private" desc="Accessible only via invitation link or room code" active={access === "private"} onTap={() => setAccess("private")} />
          </div>
        </CfgSection>

        {access === "private" && (
          <CfgSection label="Private Table">
            <div style={{ position: "relative", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div><div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: PQ.inkFaint }}>ROOM CODE</div><div style={{ marginTop: 3, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.18em", color: PQ.green }}>PFZ9</div></div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={copyCode} className="pq-press" style={{ width: 42, height: 42, border: `1.5px solid ${copied ? "#1FA855" : PQ.line}`, borderRadius: 12, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {copied
                      ? <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1FA855" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
                      : <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={PQ.inkSoft} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="8.5" y="8.5" width="11" height="11" rx="2.5" /><path d="M5.5 15.5H5A1.5 1.5 0 013.5 14V5A1.5 1.5 0 015 3.5h9A1.5 1.5 0 0115.5 5v.5" /></svg>}
                  </button>
                  <button onClick={() => { pock("select"); onShare && onShare(); }} className="pq-press" style={{ width: 42, height: 42, border: `1.5px solid ${PQ.line}`, borderRadius: 12, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1FA855" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1z" /></svg>
                  </button>
                </div>
              </div>
              {copied && <div className="pq-toast" style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", display: "inline-flex", alignItems: "center", gap: 7, height: 34, padding: "0 16px", borderRadius: 999, background: PQ.green, color: PQ.off, fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "0 8px 20px -8px rgba(20,51,34,0.6)", zIndex: 5 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={PQ.off} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>Code Copied</div>}
              <button onClick={() => { pock("select"); setInviteOpen(true); }} className="pq-press" style={{ marginTop: 12, width: "100%", height: 44, border: `1.5px dashed ${PQ.lineMid}`, borderRadius: 12, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.rust }}>
                <Icon name="plus" size={18} stroke={PQ.rust} />Invite by username
              </button>
            </div>
          </CfgSection>
        )}
      </div>
      <div style={{ padding: "14px 22px 26px", borderTop: `1px solid ${PQ.line}`, background: PQ.off }}>
        <Btn variant="primary" disabled={!canCreate} onClick={() => { pock("select"); onCreate && onCreate(); }}>Create Game</Btn>
      </div>
      {inviteOpen && <InvitePlayersModal onClose={() => setInviteOpen(false)} />}
    </div>
  );
}

Object.assign(window, {
  HIcon, pock, SuitGlyph, HeroPanel, ResumeCard, HubCard,
  BottomNav, NAV, Toast, TabStub, HomeScreen,
  CfgSection, VariantRow, VariantCounter, Stepper, Chip, AccessOption, GameConfigScreen,
});
