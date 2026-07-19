/* ===== poquito-ui.jsx ===== */
// poquito-ui.jsx — Pocket Dragon brand primitives, theme, decorations, form controls.
// Exports to window. Palette: Deep Green, Rust Orange, Off White (+ warm dark grey for text).

const PQ = {
  green: "#143322",
  greenDeep: "#0E2417",
  green2: "#1F4A30",
  greenInk: "#143322",
  rust: "#B65A2F",
  rustDeep: "#9C4824",
  rustSoft: "#CB7C55",
  off: "#F9F2E4",
  offWarm: "#F1E6D2",
  offDim: "#E7D9C0",
  // warm dark-grey text ink (client request: "all text to be in dark grey")
  ink: "#37342B",   // headings + input text
  inkSoft: "#6E6A5E",   // labels + secondary copy
  inkFaint: "#9A9385",   // placeholders / hints
  // flat field system on cream
  field: "#F3EAD7",   // field / otp / keypad fill — a slightly darker shade of the bg
  line: "#E3D6BB",   // idle border (darker shade of background)
  lineMid: "#CBB78F",   // focus / valid border (a touch darker still)
  // translucent helpers
  onGreen: "rgba(249,242,228,",   // off-white alpha on green
  onOff: "rgba(20,51,34,",      // green alpha on off-white
  destructive: "#7f1616",
};

const HERO = 'Hero';

// Gold colors for Rewards and Scoring screens
const GOLD = "#C9972F";
const GOLD_SOFT = "#EBCE81";
const GOLD_DEEP = "#A97C22";

// Table difficulty level colours — used consistently across all screens
const DIFF_COLORS = { Smurf: "#a9c4d6", Easy: "#6d7a62", Fair: "#a16a03", Hard: "#b65a2f", Fierce: "#630206" };
const diffColorOf = (d) => DIFF_COLORS[d] || "#6E6A5E";

// ── Icons (simple line glyphs) ─────────────────────────────────
function Icon({ name, size = 20, stroke = "currentColor", sw = 1.6, style }) {
  const p = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    mail: <g {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6 8.5-6" /></g>,
    phone: <g {...p}><rect x="6.5" y="3" width="11" height="18" rx="2.8" /><path d="M10.5 18.2h3" /></g>,
    user: <g {...p}><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0114 0" /></g>,
    lock: <g {...p}><rect x="4.5" y="10.5" width="15" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 018 0v2.5" /></g>,
    pin: <g {...p}><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.6" /></g>,
    check: <g {...p}><path d="M4 12.5l5 5 11-12" /></g>,
    alert: <g {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7.5v6" /><circle cx="12" cy="16.6" r="0.4" fill={stroke} stroke="none" /></g>,
    eye: <g {...p}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></g>,
    eyeoff: <g {...p}><path d="M4 4l16 16" /><path d="M9.5 5.9A9.8 9.8 0 0112 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 01-3 3.6M6.3 7.6A16 16 0 002.5 12s3.5 6.5 9.5 6.5a9.6 9.6 0 003.4-.6" /><path d="M9.9 9.9A3 3 0 0014 14" /></g>,
    chevL: <g {...p}><path d="M15 5l-7 7 7 7" /></g>,
    clock: <g {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g>,
    arrowR: <g {...p}><path d="M5 12h14M13 6l6 6-6 6" /></g>,
    chevD: <g {...p}><path d="M6 9l6 6 6-6" /></g>,
    camera: <g {...p}><path d="M3 8.5A2 2 0 015 6.5h2l1.4-2h7.2L18 6.5h1a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><circle cx="12" cy="13" r="3.4" /></g>,
    plus: <g {...p}><path d="M12 5.5v13M5.5 12h13" /></g>,
    close: <g {...p}><path d="M6 6l12 12M18 6L6 18" /></g>,
    sliders: <g {...p}><path d="M4 8h10M18 8h2M4 16h2M10 16h10" /><circle cx="16" cy="8" r="2.2" /><circle cx="8" cy="16" r="2.2" /></g>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", ...style }}>{paths[name]}</svg>;
}

// ── Social media brand glyphs ──────────────────────────────────
function SocialIcon({ name, size = 20 }) {
  const c = PQ.green;
  const g = {
    instagram: <g fill="none" stroke={c} strokeWidth="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="16.6" cy="7.4" r="1" fill={c} stroke="none" /></g>,
    x: <path fill={c} d="M17.2 3h2.9l-6.4 7.3L21.4 21h-6l-4.6-6-5.3 6H2.6l6.9-7.8L2.3 3h6.1l4.2 5.5zM16 19.3h1.6L7.9 4.6H6.2z" />,
    facebook: <path fill={c} d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.6a20 20 0 00-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8v2H8v2.8h2.6V21z" />,
    youtube: <g><path fill={c} d="M21.6 8.2a2.5 2.5 0 00-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 002.4 8.2 26 26 0 002 12a26 26 0 00.4 3.8 2.5 2.5 0 001.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-3.8z" /><path fill={PQ.off} d="M10 15l5-3-5-3z" /></g>,
    tiktok: <path fill={c} d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.6a6.2 6.2 0 01-3.5-1.1v5.6a5.3 5.3 0 11-5.3-5.3c.3 0 .5 0 .8.1v2.7a2.6 2.6 0 102.1 2.5V3z" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block" }}>{g[name]}</svg>;
}

// ── Tile monogram (a "one dot" mahjong tile) ───────────────────
function TileMark({ size = 56, tone = "light" }) {
  const face = tone === "light" ? PQ.off : PQ.green;
  const motif = tone === "light" ? PQ.green : PQ.off;
  const r = size * 0.26;
  return (
    <div style={{
      width: size, height: size * 1.32, borderRadius: r,
      background: face, position: "relative", flexShrink: 0,
      boxShadow: tone === "light"
        ? "inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -3px 6px rgba(20,51,34,0.10), 0 8px 22px rgba(0,0,0,0.28)"
        : "inset 0 2px 0 rgba(255,255,255,0.10), inset 0 -3px 8px rgba(0,0,0,0.30), 0 10px 24px rgba(20,51,34,0.22)",
    }}>
      <div style={{
        position: "absolute", inset: size * 0.12, borderRadius: r * 0.7,
        border: `${Math.max(1, size * 0.028)}px solid ${motif}`, opacity: 0.32,
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: size * 0.40, height: size * 0.40, borderRadius: "50%",
        border: `${Math.max(1.5, size * 0.05)}px solid ${motif}`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: size * 0.13, height: size * 0.13, borderRadius: "50%", background: motif }} />
      </div>
    </div>
  );
}

// ── Wordmark ───────────────────────────────────────────────────
function Wordmark({ color = PQ.green, size = 26, ls = 0.16, stackWords = false }) {
  const base = {
    fontFamily: HERO, fontWeight: 700, fontSize: size, color,
    letterSpacing: `${ls}em`, textTransform: "uppercase", lineHeight: stackWords ? 1.02 : 1,
    paddingLeft: `${ls}em`,
  };
  if (stackWords) return (
    <span style={{ ...base, display: "block", textAlign: "center" }}>Pocket<br />Dragon</span>
  );
  return <span style={base}>Pocket&nbsp;Dragon</span>;
}

function Lockup({ tone = "light", size = 52, stack = true, mark = true }) {
  const color = tone === "light" ? PQ.off : PQ.green;
  if (stack) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.30 }}>
      {mark && <TileMark size={size} tone={tone} />}
      <Wordmark color={color} size={size * 0.46} stackWords />
    </div>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.30 }}>
      {mark && <TileMark size={size} tone={tone} />}
      <Wordmark color={color} size={size * 0.40} />
    </div>
  );
}

// ── Official brand logo (dragon mark + POCKET DRAGON lockup) ───
const LOGO_SRC = (typeof window !== "undefined" && window.__resources && window.__resources.logo) || "assets/poquito-logo.png";
const DRAGON_SRC = (typeof window !== "undefined" && window.__resources && window.__resources.dragon) || "assets/poquito-dragon.png";
const FULLLOGO_SRC = (typeof window !== "undefined" && window.__resources && window.__resources.logoFull) || "assets/poquito-logo-full.png";
const DRAGON_GREEN_SRC = (typeof window !== "undefined" && window.__resources && window.__resources.dragonGreen) || "assets/poquito-dragon-green.png";
const LOBBY_BOARD_SRC = (typeof window !== "undefined" && window.__resources && window.__resources.lobbyBoard) || "assets/lobby-board.png";
function LogoImg({ height = 88, style }) {
  return <img src={LOGO_SRC} alt="Pocket Dragon" draggable={false}
    style={{ height, width: "auto", flexShrink: 0, objectFit: "contain", display: "block", userSelect: "none", ...style }} />;
}

// ── Decorative backdrops ───────────────────────────────────────
function GreenBackdrop({ children, glow = true }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: PQ.green, overflow: "hidden" }}>
      {glow && <div style={{
        position: "absolute", top: "-18%", left: "50%", transform: "translateX(-50%)",
        width: "150%", height: "55%",
        background: "radial-gradient(60% 100% at 50% 0%, rgba(203,124,85,0.30), rgba(31,74,48,0.0) 70%)",
      }} />}
      <div style={{
        position: "absolute", bottom: "-12%", right: "-10%", width: "70%", height: "45%",
        background: "radial-gradient(closest-side, rgba(182,90,47,0.16), rgba(20,51,34,0))",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.05,
        backgroundImage: `radial-gradient(${PQ.off} 1.4px, transparent 1.5px)`,
        backgroundSize: "26px 26px", backgroundPosition: "0 0",
      }} />
      {children}
    </div>
  );
}

function LightBackdrop({ children, glow = true }) {
  return (
    <div style={{ position: "absolute", inset: 0, background: PQ.off, overflow: "hidden" }}>
      {glow && <div style={{
        position: "absolute", top: "-16%", left: "50%", transform: "translateX(-50%)",
        width: "150%", height: "52%",
        background: "radial-gradient(60% 100% at 50% 0%, rgba(203,124,85,0.16), rgba(249,242,228,0) 72%)",
      }} />}
      <div style={{
        position: "absolute", bottom: "-14%", right: "-12%", width: "72%", height: "46%",
        background: "radial-gradient(closest-side, rgba(20,51,34,0.06), rgba(249,242,228,0))",
      }} />
      <div style={{
        position: "absolute", inset: 0, opacity: 0.045,
        backgroundImage: `radial-gradient(${PQ.green} 1.3px, transparent 1.4px)`,
        backgroundSize: "26px 26px", backgroundPosition: "0 0",
      }} />
      {children}
    </div>
  );
}

function FloatingTiles({ items, tone = "light" }) {
  const stroke = tone === "light" ? PQ.off : PQ.green;
  const fill = tone === "light" ? "rgba(249,242,228,0.03)" : "rgba(20,51,34,0.02)";
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {items.map((t, i) => (
        <div key={i} style={{
          position: "absolute", left: t.x, top: t.y,
          transform: `rotate(${t.r}deg)`, opacity: t.o ?? 0.10,
        }}>
          <div style={{
            width: t.s, height: t.s * 1.32, borderRadius: t.s * 0.24,
            border: `1.5px solid ${stroke}`, background: fill,
          }} />
        </div>
      ))}
    </div>
  );
}

// ── Screen shell ───────────────────────────────────────────────
function Screen({ children, bg = PQ.off, dark = false, pad = 24, top = 64, bottom = 30, style }) {
  return (
    <div style={{
      position: "relative", height: "100%", width: "100%",
      background: bg, color: dark ? PQ.off : PQ.ink,
      fontFamily: HERO, display: "flex", flexDirection: "column",
      padding: `${top}px ${pad}px ${bottom}px`, boxSizing: "border-box",
      overflow: "hidden", ...style,
    }}>{children}</div>
  );
}

// ── Buttons ────────────────────────────────────────────────────
function Btn({ children, variant = "primary", dark = false, disabled, onClick, style }) {
  const base = {
    height: 56, borderRadius: 16, border: "none", cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: HERO, fontWeight: 700, fontSize: 15, letterSpacing: "0.14em",
    textTransform: "uppercase", width: "100%", transition: "border-color .18s ease, color .18s ease",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
  };
  let v = {};
  const rustGrad = `linear-gradient(160deg, ${PQ.rustSoft} 0%, ${PQ.rust} 52%, ${PQ.rustDeep} 100%)`;
  if (variant === "primary") v = disabled
    ? { background: "rgba(20,51,34,0.10)", color: PQ.inkFaint, border: "1.5px solid transparent" }
    : { background: rustGrad, color: PQ.off, border: "1.5px solid transparent" };
  if (variant === "rust") v = disabled
    ? { background: "rgba(20,51,34,0.10)", color: PQ.inkFaint, border: "1.5px solid transparent" }
    : { background: rustGrad, color: PQ.off, border: "1.5px solid transparent" };
  if (variant === "ghost") v = {
    background: "transparent", color: PQ.rust,
    border: `1.5px solid rgba(182,90,47,0.32)`
  };
  return <button onClick={disabled ? undefined : onClick} disabled={disabled} style={{ ...base, ...v, ...style }}>{children}</button>;
}

function TextLink({ children, color = PQ.rust, onClick, weight = 700, size = 13.5, ul = false }) {
  return <span onClick={onClick} style={{
    color, fontWeight: weight, fontSize: size, letterSpacing: "0.04em",
    cursor: "pointer", textDecoration: ul ? "underline" : "none", textUnderlineOffset: 3,
  }}>{children}</span>;
}

// ── Field ──────────────────────────────────────────────────────
function Field({ icon, label, value, onChange, placeholder, type = "text", dark = false,
  state = "idle", right, onFocus, onBlur, focused, optional, required, inputMode, maxLength, as, prefix }) {
  const border =
    state === "error" ? PQ.rust :
      state === "valid" ? PQ.lineMid :
        focused ? (dark ? PQ.off : PQ.lineMid) :
          dark ? "rgba(249,242,228,0.22)" : PQ.line;
  const labelCol = dark ? "rgba(249,242,228,0.7)" : PQ.inkSoft;
  const txt = dark ? PQ.off : PQ.ink;
  const iconCol = state === "error" ? PQ.rust
    : (focused || state === "valid") ? (dark ? PQ.off : PQ.inkSoft)
      : (dark ? "rgba(249,242,228,0.55)" : PQ.inkFaint);
  return (
    <div>
      {label && <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
        color: labelCol, marginBottom: 8, display: "flex", gap: 6, alignItems: "baseline",
      }}>{label}{required && <span style={{ color: "#d64542", fontWeight: 700 }}>*</span>}{optional && <span style={{ fontWeight: 400, letterSpacing: "0.06em", opacity: 0.7 }}>· Optional</span>}</div>}
      <div style={{
        display: "flex", alignItems: "center", gap: 11, height: 48,
        padding: "0 15px", borderRadius: 13,
        background: "transparent",
        border: `1.5px solid ${border}`,
        transition: "border-color .15s ease",
      }}>
        {icon && <Icon name={icon} size={19} stroke={iconCol} />}
        {prefix && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <span style={{ fontFamily: HERO, fontSize: 16, fontWeight: 400, color: txt, letterSpacing: "0.02em" }}>{prefix}</span>
            <span style={{ width: 1.5, height: 22, background: PQ.line, borderRadius: 1 }} />
          </div>
        )}
        {as === "select" ? (
          <select value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
            style={{
              flex: 1, border: "none", outline: "none", background: "transparent",
              fontFamily: HERO, fontSize: 16, color: value ? txt : PQ.inkFaint,
              appearance: "none", cursor: "pointer"
            }}>
            {right}
          </select>
        ) : (
          <input value={value} onChange={onChange} placeholder={placeholder} type={type}
            inputMode={inputMode} maxLength={maxLength}
            onFocus={onFocus} onBlur={onBlur}
            style={{
              flex: 1, border: "none", outline: "none", background: "transparent",
              fontFamily: HERO, fontSize: 16, color: txt, letterSpacing: "0",
              minWidth: 0
            }} />
        )}
        {as === "select" && <Icon name="chevD" size={18} stroke={PQ.inkFaint} />}
        {as !== "select" && right}
      </div>
    </div>
  );
}

// placeholder style injection
const __pqStyle = document.createElement("style");
__pqStyle.textContent = `
input::placeholder{color:${PQ.inkFaint};opacity:1;}
input::-ms-reveal,input::-ms-clear{display:none !important;}
input::-webkit-contacts-auto-fill-button,input::-webkit-credentials-auto-fill-button{visibility:hidden;display:none !important;pointer-events:none;height:0;width:0;margin:0;}
@keyframes pqModalIn{from{opacity:0}to{opacity:1}}
@keyframes pqSheetIn{from{transform:translateY(100%)}to{transform:translateY(0)}}
.pq-modal-backdrop{animation:pqModalIn .22s ease both}
.pq-modal-sheet{animation:pqSheetIn .32s cubic-bezier(.2,.8,.25,1) both}
@keyframes pqPopIn{from{opacity:0;transform:translateY(-6px) scale(.99)}to{opacity:1;transform:none}}
.pq-glass-pop{animation:pqPopIn .16s ease both}
.pq-city-opt:hover{background:rgba(20,51,34,0.06)!important;}
`;
document.head.appendChild(__pqStyle);

// ── Helper line ────────────────────────────────────────────────
function Helper({ state, children, dark = false }) {
  if (!children) return null;
  const col = state === "valid" ? (dark ? "#9ED8B0" : PQ.green) : state === "error" ? PQ.rust :
    dark ? "rgba(249,242,228,0.6)" : PQ.inkSoft;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, paddingLeft: 2 }}>
      {state === "valid" && <Icon name="check" size={14} stroke={col} sw={2.2} />}
      {state === "error" && <Icon name="alert" size={14} stroke={col} sw={2} />}
      <span style={{ fontSize: 12.5, fontWeight: state === "hint" ? 400 : 600, color: col, letterSpacing: "0.01em" }}>{children}</span>
    </div>
  );
}

// ── Checkbox ───────────────────────────────────────────────────
function Check({ checked, onChange, children, dark = false }) {
  return (
    <div onClick={onChange} style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
      <div style={{
        width: 22, height: 22, borderRadius: 7, flexShrink: 0, marginTop: 1,
        background: checked ? PQ.green : "transparent",
        border: `1.5px solid ${checked ? PQ.green : dark ? "rgba(249,242,228,0.4)" : PQ.lineMid}`,
        display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s",
      }}>{checked && <Icon name="check" size={14} stroke={PQ.off} sw={2.4} />}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.45, color: dark ? "rgba(249,242,228,0.85)" : PQ.inkSoft, fontWeight: 400 }}>{children}</div>
    </div>
  );
}

// ── Toggle ─────────────────────────────────────────────────────
function Toggle({ on, onChange }) {
  return (
    <div onClick={onChange} style={{
      width: 42, height: 25, borderRadius: 999, padding: 2, cursor: "pointer",
      background: on ? PQ.rust : "rgba(20,51,34,0.18)", transition: "all .18s", flexShrink: 0,
    }}>
      <div style={{
        width: 21, height: 21, borderRadius: "50%", background: PQ.off,
        transform: on ? "translateX(17px)" : "translateX(0)", transition: "all .18s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.25)"
      }} />
    </div>
  );
}

// ── OTP input ──────────────────────────────────────────────────
function OTP({ value = "", length = 6, onChange, state = "idle", focusedIdx = -1 }) {
  const cells = Array.from({ length });
  return (
    <div style={{ display: "flex", gap: 9, justifyContent: "space-between" }}>
      {cells.map((_, i) => {
        const ch = value[i] || "";
        const active = i === value.length && focusedIdx !== -2;
        const border =
          state === "valid" ? PQ.green :
            state === "error" ? PQ.rust :
              active ? PQ.lineMid : PQ.line;
        return (
          <div key={i} style={{
            flex: 1, height: 58, borderRadius: 13, background: "transparent",
            border: `1.5px solid ${border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: HERO, fontSize: 26, fontWeight: 700,
            color: state === "error" ? PQ.rust : state === "valid" ? PQ.green : PQ.ink, transition: "all .15s",
          }}>{ch}{active && !ch && <span className="pq-caret" style={{ width: 2, height: 26, background: PQ.inkSoft }} />}</div>
        );
      })}
    </div>
  );
}

// ── Stepper dots ───────────────────────────────────────────────
function Steps({ n, i }) {
  return (
    <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
      {Array.from({ length: n }).map((_, k) => (
        <div key={k} style={{
          height: 4, borderRadius: 2, transition: "all .25s",
          width: k === i ? 26 : 14,
          background: k <= i ? PQ.rust : "rgba(20,51,34,0.16)",
        }} />
      ))}
    </div>
  );
}

// ── Top bar with back ──────────────────────────────────────────
function TopBar({ onBack, right, dark = false, plain = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
      {plain ? (
        <div onClick={onBack} style={{
          width: 40, height: 40, cursor: "pointer", marginLeft: -8,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}><Icon name="chevL" size={24} stroke={dark ? PQ.off : PQ.ink} sw={1.8} /></div>
      ) : (
        <div onClick={onBack} style={{
          width: 44, height: 44, borderRadius: 13, cursor: "pointer", marginLeft: -6,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: `1.5px solid ${dark ? "rgba(249,242,228,0.18)" : PQ.line}`,
        }}><Icon name="chevL" size={20} stroke={dark ? PQ.off : PQ.ink} /></div>
      )}
      {right}
    </div>
  );
}

function Title({ children, dark = false, sub, size = 24 }) {
  return (
    <div style={{ marginBottom: sub ? 0 : 22 }}>
      <h1 style={{
        margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: size, lineHeight: 1.08,
        letterSpacing: "0.04em", textTransform: "uppercase", color: dark ? PQ.off : PQ.ink,
      }}>{children}</h1>
      {sub && <p style={{
        margin: "11px 0 24px", fontSize: 14, lineHeight: 1.5, fontWeight: 400,
        color: dark ? "rgba(249,242,228,0.7)" : PQ.inkSoft, maxWidth: "92%",
      }}>{sub}</p>}
    </div>
  );
}

// ── Rust ring with check ───────────────────────────────────────
function RustRing({ size = 96, sw = 2.5 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      border: `${sw}px solid ${PQ.rust}`, background: "transparent",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <Icon name="check" size={size * 0.46} stroke={PQ.rust} sw={2.4} />
    </div>
  );
}

Object.assign(window, {
  PQ, HERO, Icon, TileMark, Wordmark, Lockup, GreenBackdrop, LightBackdrop, FloatingTiles,
  Screen, Btn, TextLink, Field, Helper, Check, Toggle, OTP, Steps, TopBar, Title, RustRing, LogoImg, LOGO_SRC, DRAGON_SRC, FULLLOGO_SRC, DRAGON_GREEN_SRC, LOBBY_BOARD_SRC, diffColorOf, SocialIcon,
  GOLD, GOLD_SOFT, GOLD_DEEP
});
