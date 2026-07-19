// pocket-dragon-ref.jsx — AUTO-CONCATENATED faithful reference bundle + extensions.

/* ===== ios-frame.jsx ===== */
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#000';
  return (
    <div style={{
      display: 'flex', gap: 154, alignItems: 'center', justifyContent: 'center',
      padding: '21px 24px 19px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%',
    }}>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1.5 }}>
        <span style={{
          fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 590,
          fontSize: 17, lineHeight: '22px', color: c,
        }}>{time}</span>
      </div>
      <div style={{ flex: 1, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, paddingTop: 1, paddingRight: 1 }}>
        <svg width="19" height="12" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill={c} />
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill={c} />
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill={c} />
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill={c} />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c} />
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c} />
          <circle cx="8.5" cy="10.5" r="1.5" fill={c} />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35" fill="none" />
          <rect x="2" y="2" width="20" height="9" rx="2" fill={c} />
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill={c} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({ children, dark = false, style = {} }) {
  return (
    <div style={{
      height: 44, minWidth: 44, borderRadius: 9999,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: dark
        ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)'
        : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style,
    }}>
      {/* blur + tint */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)',
      }} />
      {/* shine */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 9999,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', padding: '0 4px' }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({ title = 'Title', dark = false, trailingIcon = true }) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = (content) => (
    <IOSGlassPill dark={dark}>
      <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {content}
      </div>
    </IOSGlassPill>
  );
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10,
      paddingTop: 62, paddingBottom: 10, position: 'relative', zIndex: 5,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        {/* back chevron */}
        {pillIcon(
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ marginLeft: -1 }}>
            <path d="M10 2L2 10l8 8" stroke={muted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {/* trailing ellipsis */}
        {trailingIcon && pillIcon(
          <svg width="22" height="6" viewBox="0 0 22 6">
            <circle cx="3" cy="3" r="2.5" fill={muted} />
            <circle cx="11" cy="3" r="2.5" fill={muted} />
            <circle cx="19" cy="3" r="2.5" fill={muted} />
          </svg>
        )}
      </div>
      {/* large title */}
      <div style={{
        padding: '0 16px',
        fontFamily: '-apple-system, system-ui',
        fontSize: 34, fontWeight: 700, lineHeight: '41px',
        color: text, letterSpacing: 0.4,
      }}>{title}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({ title, detail, icon, chevron = true, isLast = false, dark = false }) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', minHeight: 52,
      padding: '0 16px', position: 'relative',
      fontFamily: '-apple-system, system-ui', fontSize: 17,
      letterSpacing: -0.43,
    }}>
      {icon && (
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: icon,
          marginRight: 12, flexShrink: 0,
        }} />
      )}
      <div style={{ flex: 1, color: text }}>{title}</div>
      {detail && <span style={{ color: sec, marginRight: 6 }}>{detail}</span>}
      {chevron && (
        <svg width="8" height="14" viewBox="0 0 8 14" style={{ flexShrink: 0 }}>
          <path d="M1 1l6 6-6 6" stroke={ter} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {!isLast && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          left: icon ? 58 : 16, height: 0.5, background: sep,
        }} />
      )}
    </div>
  );
}

function IOSList({ header, children, dark = false }) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return (
    <div>
      {header && (
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 13,
          color: hc, textTransform: 'uppercase',
          padding: '8px 36px 6px', letterSpacing: -0.08,
        }}>{header}</div>
      )}
      <div style={{
        background: bg, borderRadius: 26,
        margin: '0 16px', overflow: 'hidden',
      }}>{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children, width = 402, height = 874, dark = false,
  title, keyboard = false,
}) {
  return (
    <div style={{
      width, height, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
      }} />
      {/* status bar (absolute) */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <IOSStatusBar dark={dark} />
      </div>
      {/* nav + content */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {title !== undefined && <IOSNavBar title={title} dark={dark} />}
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {keyboard && <IOSKeyboard dark={dark} />}
      </div>
      {/* home indicator — always on top */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
        height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        paddingBottom: 8, pointerEvents: 'none',
      }}>
        <div style={{
          width: 139, height: 5, borderRadius: 100,
          background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)',
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({ dark = false }) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: <svg width="19" height="17" viewBox="0 0 19 17"><path d="M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z" fill={glyph} /></svg>,
    del: <svg width="23" height="17" viewBox="0 0 23 17"><path d="M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z" fill="none" stroke={glyph} strokeWidth="1.6" strokeLinejoin="round" /><path d="M10 5l7 7M17 5l-7 7" stroke={glyph} strokeWidth="1.6" strokeLinecap="round" /></svg>,
    ret: <svg width="20" height="14" viewBox="0 0 20 14"><path d="M18 1v6H4m0 0l4-4M4 7l4 4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  };

  const key = (content, { w, flex, ret, fs = 25, k } = {}) => (
    <div key={k} style={{
      height: 42, borderRadius: 8.5,
      flex: flex ? 1 : undefined, width: w, minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs, fontWeight: 458, color: ret ? '#fff' : glyph,
    }}>{content}</div>
  );

  const row = (keys, pad = 0) => (
    <div style={{ display: 'flex', gap: 6.5, justifyContent: 'center', padding: `0 ${pad}px` }}>
      {keys.map(l => key(l, { flex: true, k: l }))}
    </div>
  );

  return (
    <div style={{
      position: 'relative', zIndex: 15, borderRadius: 27, overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      boxShadow: dark
        ? '0 -2px 20px rgba(0,0,0,0.09)'
        : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)',
    }}>
      {/* liquid glass bg — same recipe as nav pills */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        backdropFilter: 'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 27,
        boxShadow: dark
          ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)'
          : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
        pointerEvents: 'none',
      }} />

      {/* autocorrect bar */}
      <div style={{
        display: 'flex', gap: 20, alignItems: 'center',
        padding: '8px 22px 13px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {['"The"', 'the', 'to'].map((w, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ width: 1, height: 25, background: '#ccc', opacity: 0.3 }} />}
            <div style={{
              flex: 1, textAlign: 'center',
              fontFamily: '-apple-system, system-ui', fontSize: 17,
              color: sugg, letterSpacing: -0.43, lineHeight: '22px',
            }}>{w}</div>
          </React.Fragment>
        ))}
      </div>

      {/* key layout */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 13,
        padding: '0 6.5px', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>
        {row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])}
        {row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20)}
        <div style={{ display: 'flex', gap: 14.25, alignItems: 'center' }}>
          {key(icons.shift, { w: 45, k: 'shift' })}
          <div style={{ display: 'flex', gap: 6.5, flex: 1 }}>
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, { flex: true, k: l }))}
          </div>
          {key(icons.del, { w: 45, k: 'del' })}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {key('ABC', { w: 92.25, fs: 18, k: 'abc' })}
          {key('', { flex: true, k: 'space' })}
          {key(icons.ret, { w: 92.25, ret: true, k: 'ret' })}
        </div>
      </div>

      {/* bottom spacer (emoji+mic area, icons omitted) */}
      <div style={{ height: 56, width: '100%', position: 'relative' }} />
    </div>
  );
}

Object.assign(window, {
  IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard,
});


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
};

const HERO = 'Hero';

// Table difficulty level colours — used consistently across all screens
const DIFF_COLORS = { Smurf: "#A9C4D6", Easy: "#6D7A62", Fair: "#A16A03", Hard: "#B65A2F", Fierce: "#630206" };
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
  // tone light = cream tile (for dark bg); tone dark = green tile (for light bg)
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
// Dark green backdrop (kept for the print cover / any green surface)
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

// Light cream backdrop with warm ambient light + faint green dot grid
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

// floating faint tiles — `tone` sets the outline color (light=cream, dark=green)
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

// ── Screen shell (fills the device, handles safe areas) ────────
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
  // primary = rust filled box with brand rust gradient
  if (variant === "primary") v = disabled
    ? { background: "rgba(20,51,34,0.10)", color: PQ.inkFaint, border: "1.5px solid transparent" }
    : { background: rustGrad, color: PQ.off, border: "1.5px solid transparent" };
  if (variant === "rust") v = disabled
    ? { background: "rgba(20,51,34,0.10)", color: PQ.inkFaint, border: "1.5px solid transparent" }
    : { background: rustGrad, color: PQ.off, border: "1.5px solid transparent" };
  // ghost with rust text (client: secondary "Login — text in rust")
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
  // state: idle | focus | valid | error
  // Transparent fill, outline-only. Error → rust border; valid → darker-cream border + green check.
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
            {right /* options passed via right for selects */}
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

// placeholder color for inputs
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

// ── Helper line (valid / error / hint) ─────────────────────────
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

// ── Toggle (remember me) — RUST when on ────────────────────────
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

// ── OTP input — NO fill; red (invalid) / green (verified) border states ──
function OTP({ value = "", length = 6, onChange, state = "idle", focusedIdx = -1 }) {
  const cells = Array.from({ length });
  return (
    <div style={{ display: "flex", gap: 9, justifyContent: "space-between" }}>
      {cells.map((_, i) => {
        const ch = value[i] || "";
        const active = i === value.length && focusedIdx !== -2;
        // no background fill; border turns green when verified, red when invalid
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
  // plain = bare back arrow with no surrounding box
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

// ── Rust ring with check (Email Verified / Password Updated) ───
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
  Screen, Btn, TextLink, Field, Helper, Check, Toggle, OTP, Steps, TopBar, Title, RustRing, LogoImg, LOGO_SRC,
});


/* ===== poquito-screens.jsx ===== */
// poquito-screens.jsx — Pocket Dragon auth screens. Each screen is self-contained &
// interactive; pass `seed` to pre-populate for static showcase frames.

const TAKEN = ["pocketdrag", "mahjong1", "player001", "winston88", "thetable"];
const emailOK = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Allahabad", "Ranchi", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", "Mysuru", "Thiruvananthapuram", "Kochi", "Noida", "Gurugram", "Other"];

// Username: only alphanumeric, no minimum, max 10, must be unique. Reserved brand names blocked.
function userCheck(u) {
  if (!u) return { state: "idle", msg: "" };
  if (!/^[A-Za-z0-9]+$/.test(u)) return { state: "error", msg: "Only A–Z, a–z and 0–9 allowed" };
  if (u.length > 10) return { state: "error", msg: "Maximum 10 characters" };
  if (/pock|poquito|dragon/i.test(u)) return { state: "error", msg: "This username isn't available" };
  if (TAKEN.includes(u.toLowerCase())) return { state: "error", msg: "Username already taken" };
  return { state: "valid", msg: "Username available" };
}

// avatar presets — real illustrated avatars (resolved for export via window.__resources)
const AV_RES = (path, id) => (typeof window !== "undefined" && window.__resources && window.__resources[id]) || path;
const AVATARS = [
  { id: "boy", label: "Boy", src: "assets/avatars/poquito-boy.png", bg: "#DCEAF2", scale: 1.0 },
  { id: "girl", label: "Girl", src: "assets/avatars/poquito-girl.png", bg: "#C2A18C", scale: 1.0 },
  { id: "bunny", label: "Bunny", src: "assets/avatars/poquito-bunny.png", bg: "#F4EFE9", scale: 1.0 },
  { id: "llama", label: "Llama", src: "assets/avatars/poquito-llama.png", bg: "#2E3192", scale: 1.0 },
  { id: "owl", label: "Owl", src: "assets/avatars/poquito-owl.png", bg: "#E8A857", scale: 1.0 },
  { id: "porc", label: "Hedgehog", src: "assets/avatars/poquito-porc.png", bg: "#F6F3EC", scale: 1.0 },
];
function avatarSrc(i) { const a = AVATARS[i] || AVATARS[0]; return AV_RES(a.src, a.id); }
function avatarScale(i) { const a = AVATARS[i] || AVATARS[0]; return a.scale || 1; }

// ── SPLASH ─────────────────────────────────────────────────────
function SplashScreen({ go, live }) {
  React.useEffect(() => {
    if (!live) return;
    const id = setTimeout(() => go("welcome"), 1600);
    return () => clearTimeout(id);
  }, [live]);
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <LightBackdrop />
      <div style={{
        position: "relative", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: 40
      }}>
        <LogoImg height={84} />
        <div style={{
          marginTop: 18, fontFamily: HERO, fontSize: 14.5, fontWeight: 400, letterSpacing: "0.03em",
          color: PQ.rust, textAlign: "center", maxWidth: 280
        }}>Mahjong on your time, anywhere you are!</div>
      </div>
    </div>
  );
}

// ── WELCOME ────────────────────────────────────────────────────
function WelcomeScreen({ go }) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div style={{ position: "absolute", inset: 0, background: PQ.off }} />
      <Screen bg="transparent" top={66} bottom={34} style={{ justifyContent: "space-between" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          <LogoImg height={84} style={{ alignSelf: "flex-start" }} />
          <div>
            <div style={{
              fontFamily: HERO, fontWeight: 700, fontSize: 40, lineHeight: 1.04,
              letterSpacing: "0.02em", textTransform: "uppercase", color: PQ.ink
            }}>
              Every<br /><span style={{ color: PQ.rust }}>Dragon</span><br />Starts Here
            </div>
            <p style={{
              marginTop: 22, fontSize: 15, lineHeight: 1.6, fontWeight: 400, maxWidth: "94%",
              textAlign: "justify", color: PQ.inkSoft
            }}>
              Pocket Dragon brings together the strategy, skill, and social spirit of Mahjong. No wagers or real-money stakes—just fair play, friendly competition, and the joy of the game.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
          <Btn variant="primary" onClick={() => go("register")}>Get Started</Btn>
          <Btn variant="ghost" onClick={() => go("login")}>Login</Btn>
        </div>
      </Screen>
    </div>
  );
}

// ── AVATAR PICKER ──────────────────────────────────────────────
function AvatarPicker({ value = 0, onPick }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 8 }}>
      {/* single tappable avatar with camera badge */}
      <button onClick={() => setOpen(true)} className="pq-press" style={{
        position: "relative", width: 88, height: 88, borderRadius: "50%", padding: 0, cursor: "pointer",
        background: AVATARS[value].bg, border: "none", overflow: "visible",
      }}>
        <span style={{ display: "block", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
          <img src={avatarSrc(value)} alt={AVATARS[value].label} draggable={false}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(value)})`, transformOrigin: "center 40%" }} />
        </span>
        <span style={{
          position: "absolute", right: 0, bottom: 0, width: 26, height: 26, borderRadius: "50%",
          background: PQ.rust, border: `2px solid ${PQ.off}`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}><Icon name="plus" size={14} stroke={PQ.off} sw={2.4} /></span>
      </button>
      <div style={{ fontSize: 12, color: PQ.inkSoft, letterSpacing: "0.02em" }}>Tap to choose your avatar</div>
      {open && <AvatarModal value={value} onClose={() => setOpen(false)}
        onConfirm={(i) => { onPick && onPick(i); setOpen(false); }} />}
    </div>
  );
}

// ── AVATAR LIBRARY MODAL ───────────────────────────────────────
function AvatarModal({ value = 0, onClose, onConfirm }) {
  const [sel, setSel] = React.useState(value);
  return (
    <div className="pq-modal-backdrop" onClick={onClose} style={{
      position: "absolute", inset: 0, zIndex: 60, background: "rgba(20,51,34,0.45)",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
    }}>
      <div className="pq-modal-sheet" onClick={(e) => e.stopPropagation()} style={{
        width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26,
        padding: "14px 22px 30px",
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Choose Avatar</h2>
          <button onClick={onClose} className="pq-press" style={{
            width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${PQ.line}`,
            background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="close" size={18} stroke={PQ.ink} sw={1.9} /></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24, padding: "4px 4px 0" }}>
          <button onClick={() => setSel("default")} className="pq-press" style={{
            aspectRatio: "1 / 1", borderRadius: "50%", overflow: "hidden", cursor: "pointer",
            background: "rgba(20,51,34,0.06)", border: "none", padding: 0, display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: sel === "default" ? `0 0 0 3px ${PQ.rust}` : `0 0 0 1.5px ${PQ.line}`,
          }}>
            <svg width="46%" height="46%" viewBox="0 0 24 24" fill={PQ.inkFaint} stroke="none"><circle cx="12" cy="8" r="4" /><path d="M4 20.5a8 8 0 0116 0z" /></svg>
          </button>
          {AVATARS.map((a, i) => (
            <button key={a.id} onClick={() => setSel(i)} className="pq-press" style={{
              aspectRatio: "1 / 1", borderRadius: "50%", overflow: "hidden", cursor: "pointer",
              background: a.bg, border: "none", padding: 0,
              boxShadow: i === sel ? `0 0 0 3px ${PQ.rust}` : `0 0 0 1.5px ${PQ.line}`,
            }}>
              <img src={avatarSrc(i)} alt={a.label} draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(i)})`, transformOrigin: "center 40%" }} />
            </button>
          ))}
        </div>
        <Btn variant="primary" onClick={() => onConfirm(sel)}>
          <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, lineHeight: 1 }}>
            <span>Feels Cute</span>
            <span style={{ fontSize: 9.5, fontWeight: 400, letterSpacing: "0.06em", textTransform: "none", opacity: 0.85 }}>Might change later</span>
          </span>
        </Btn>
      </div>
    </div>
  );
}

// ── CITY SELECT (custom, glassmorphism dropdown panel) ─────────
function CitySelect({ value, onChange, focused, onFocus, onBlur }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const border = open || value ? PQ.lineMid : PQ.line;
  const pick = (c) => { onChange && onChange({ target: { value: c } }); setOpen(false); onBlur && onBlur(); };
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
        color: PQ.inkSoft, marginBottom: 8
      }}>City<span style={{ color: "#d64542", fontWeight: 700 }}>*</span></div>
      <div onClick={() => { setOpen(o => !o); onFocus && onFocus(); }} style={{
        display: "flex", alignItems: "center", gap: 11, height: 48, padding: "0 15px", borderRadius: 13,
        background: "transparent", border: `1.5px solid ${border}`, cursor: "pointer",
        transition: "border-color .15s ease",
      }}>
        <Icon name="pin" size={19} stroke={open ? PQ.inkSoft : PQ.inkFaint} />
        <span style={{ flex: 1, fontFamily: HERO, fontSize: 16, color: value ? PQ.ink : PQ.inkFaint }}>{value || "Select your city"}</span>
        <span style={{ display: "flex", transform: open ? "rotate(180deg)" : "none", transition: "transform .18s ease" }}>
          <Icon name="chevD" size={18} stroke={PQ.inkFaint} />
        </span>
      </div>
      {open && (
        <div className="pq-glass-pop pq-scroll" style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 50,
          background: "rgba(249,242,228,0.82)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          border: "1.5px solid rgba(20,51,34,0.18)", borderRadius: 14, padding: 6,
          maxHeight: 232, overflowY: "auto",
          boxShadow: "0 16px 40px -16px rgba(20,51,34,0.35)",
        }}>
          {CITIES.map((c) => {
            const sel = c === value;
            return (
              <div key={c} onClick={() => pick(c)} className={sel ? "" : "pq-city-opt"} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "11px 12px", borderRadius: 10, cursor: "pointer",
                fontFamily: HERO, fontSize: 15, fontWeight: sel ? 700 : 400,
                color: sel ? PQ.off : PQ.ink, background: sel ? PQ.rust : "transparent",
              }}>
                <span>{c}</span>
                {sel && <Icon name="check" size={16} stroke={PQ.off} sw={2.4} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── REGISTRATION ───────────────────────────────────────────────
function RegisterScreen({ go, seed = {}, setEmail }) {
  const [avatar, setAvatar] = React.useState(seed.avatar ?? 0);
  const [email, setE] = React.useState(seed.email || "");
  const [phone, setPhone] = React.useState(seed.phone || "");
  const [city, setCity] = React.useState(seed.city || "");
  const [user, setUser] = React.useState(seed.username || "");
  const [pw, setPw] = React.useState(seed.password || "");
  const [cpw, setCpw] = React.useState(seed.confirm || "");
  const [showPw, setShowPw] = React.useState(false);
  const [showCpw, setShowCpw] = React.useState(false);
  const [agree, setAgree] = React.useState(seed.agree || seed.terms || false);
  const [focus, setFocus] = React.useState(seed.focus || "");

  const eState = email ? (emailOK(email) ? "valid" : "error") : "idle";
  const uc = userCheck(user);
  const pwState = pw ? "valid" : "idle";                 // no minimum length
  const cState = cpw ? (cpw === pw ? "valid" : "error") : "idle";

  const canSubmit = eState === "valid" && uc.state === "valid" && !!pw && cState === "valid" && !!city && agree;
  const ff = (n) => ({ focused: focus === n, onFocus: () => setFocus(n), onBlur: () => setFocus("") });

  return (
    <Screen bg={PQ.off} top={62} bottom={30} style={{ overflow: "hidden" }}>
      <TopBar onBack={() => go("welcome")} plain />
      <div style={{ flex: 1, overflowY: "auto", marginRight: -8, paddingRight: 8 }} className="pq-scroll">
        <Title size={20} sub="Email verification is required before your account goes live">Create Account</Title>
        <AvatarPicker value={avatar} onPick={setAvatar} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <Field icon="mail" label="Email Address" required value={email} onChange={(e) => setE(e.target.value)}
              placeholder="you@example.com" inputMode="email" state={eState} {...ff("email")}
              right={eState === "valid" && <Icon name="check" size={18} stroke={PQ.green} sw={2.2} />} />
            {eState === "error" && <Helper state="error">Enter a valid email address</Helper>}
          </div>
          <Field icon="phone" label="Phone Number" optional prefix="+91" value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="10-digit number" inputMode="tel" maxLength={10} {...ff("phone")} />
          <CitySelect value={city} onChange={(e) => setCity(e.target.value)} {...ff("city")} />
          <div>
            <Field label="Username" required value={user} onChange={(e) => setUser(e.target.value.replace(/\s/g, ""))}
              placeholder="Up to 10 characters" maxLength={10} state={uc.state} {...ff("user")}
              right={uc.state === "valid" && <Icon name="check" size={18} stroke={PQ.green} sw={2.2} />} />
            <Helper state={uc.state === "idle" ? "hint" : uc.state}>{uc.state === "idle" ? "Unique · up to 10 characters · letters & numbers" : uc.msg}</Helper>
          </div>
          <div>
            <Field icon="lock" label="Password" required type={showPw ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)}
              placeholder="Enter a password" state={pwState} {...ff("pw")}
              right={<span onClick={() => setShowPw(s => !s)} style={{ cursor: "pointer" }}><Icon name={showPw ? "eyeoff" : "eye"} size={19} stroke={PQ.inkFaint} /></span>} />
          </div>
          <div>
            <Field icon="lock" label="Confirm Password" type={showCpw ? "text" : "password"} value={cpw} onChange={(e) => setCpw(e.target.value)}
              placeholder="Re-enter password" state={cState} {...ff("cpw")}
              right={<span onClick={() => setShowCpw(s => !s)} style={{ cursor: "pointer" }}><Icon name={showCpw ? "eyeoff" : "eye"} size={19} stroke={PQ.inkFaint} /></span>} />
            {cState === "error" && <Helper state="error">Passwords do not match</Helper>}
            {cState === "valid" && <Helper state="valid">Passwords match</Helper>}
          </div>
          <div style={{ marginTop: 4 }}>
            <Check checked={agree} onChange={() => setAgree(a => !a)}>I agree to the <TextLink size={13.5}>Terms &amp; Conditions</TextLink> and <TextLink size={13.5}>Privacy Policy</TextLink></Check>
          </div>
        </div>
        <div style={{ height: 18 }} />
      </div>
      <div style={{ paddingTop: 14 }}>
        <Btn variant="primary" disabled={!canSubmit} onClick={() => { setEmail && setEmail(email); go("verify"); }}>Get Started</Btn>
        <div style={{ textAlign: "center", marginTop: 16, fontSize: 13.5, color: PQ.inkSoft }}>
          Been here before? <TextLink onClick={() => go("login")}>Log in</TextLink>
        </div>
      </div>
    </Screen>
  );
}

// ── EMAIL VERIFIED panel (shared terminal state) ───────────────
function VerifiedPanel({ go, cta, live }) {
  React.useEffect(() => {
    if (!live || cta) return;            // auto-proceed only in the live verify flow
    const t = setTimeout(() => go("welcome"), 5000);   // keep visible ≥ 5s
    return () => clearTimeout(t);
  }, [live]);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <RustRing size={96} />
      <h1 style={{ margin: "28px 0 8px", fontFamily: HERO, fontWeight: 700, fontSize: 26, letterSpacing: "0.05em", textTransform: "uppercase", color: PQ.ink }}>Email Verified</h1>
      <p style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: PQ.green, letterSpacing: "0.01em" }}>Start your free trial</p>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: PQ.inkSoft, maxWidth: 250 }}>Two weeks on us. Enjoy full access from day one.</p>
      {cta && (
        <div style={{ position: "absolute", left: 24, right: 24, bottom: 30 }}>
          <Btn variant="primary" onClick={() => go("welcome")}>{cta}</Btn>
        </div>
      )}
    </div>
  );
}

// ── EMAIL VERIFICATION ─────────────────────────────────────────
function VerifyScreen({ go, email = "you@example.com", live, seed = {} }) {
  const CODE = "402231";
  const [otp, setOtp] = React.useState(seed.otp || "");
  const [status, setStatus] = React.useState(seed.status || "idle"); // idle|error|verified
  const [secs, setSecs] = React.useState(seed.secs ?? 42);
  React.useEffect(() => {
    if (!live || status === "verified") return;
    if (secs <= 0) return;
    const id = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [live, secs, status]);

  const onKey = (d) => {
    if (status === "verified") return;
    if (d === "del") { setStatus("idle"); return setOtp(o => o.slice(0, -1)); }
    if (otp.length >= 6) return;
    const next = otp + d;
    setStatus("idle"); setOtp(next);
    if (next.length === 6) {
      setTimeout(() => {
        if (next === CODE || next === "000000") setStatus("verified");
        else setStatus("error");
      }, 220);
    }
  };
  const mm = Math.floor(secs / 60), ss = String(secs % 60).padStart(2, "0");

  return (
    <Screen bg={PQ.off} top={62} bottom={28}>
      <TopBar onBack={() => go("register")} plain />
      {status === "verified" ? (
        <VerifiedPanel go={go} live={live} />
      ) : (
        <>
          <Title size={22} sub={<>Enter the 6-digit code we sent to{" "}<strong style={{ fontWeight: 700, color: PQ.ink }}>{email}</strong></>}>Verify Email</Title>
          <OTP value={otp} state={status === "error" ? "error" : "idle"} />
          {status === "error"
            ? <Helper state="error">Invalid or expired code — please try again</Helper>
            : <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
              <Icon name="check" size={14} stroke={PQ.green} sw={2.2} />
              <span style={{ fontSize: 12.5, color: PQ.inkSoft, fontWeight: 600 }}>Code sent — check your inbox</span>
            </div>}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 26, fontSize: 13.5, color: PQ.inkSoft }}>
            {secs > 0 ? (<><Icon name="clock" size={16} stroke={PQ.inkFaint} /><span>Resend code in <strong style={{ color: PQ.ink, fontWeight: 700 }}>{mm}:{ss}</strong></span></>)
              : <TextLink onClick={() => { setSecs(42); setStatus("idle"); setOtp(""); }}>Resend code</TextLink>}
          </div>
          <div style={{ flex: 1 }} />
          <Btn variant="primary" disabled={otp.length < 6} onClick={() => { if (otp === CODE || otp === "000000") setStatus("verified"); else setStatus("error"); }}>Verify Email</Btn>
          <Keypad onKey={onKey} />
        </>
      )}
    </Screen>
  );
}

// numeric keypad — flat cream keys, darker-cream borders (no white fill)
function Keypad({ onKey }) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 16 }}>
      {keys.map((k, i) => k === "" ? <div key={i} /> : (
        <div key={i} onClick={() => onKey(k)} style={{
          height: 50, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", background: "transparent",
          fontFamily: HERO, fontSize: 24, fontWeight: 700, color: PQ.ink, userSelect: "none",
        }}>{k === "del" ? <Icon name="chevL" size={20} stroke={PQ.ink} /> : k}</div>
      ))}
    </div>
  );
}

// ── LOGIN ──────────────────────────────────────────────────────
function LoginScreen({ go, seed = {} }) {
  const [id, setId] = React.useState(seed.id || "");
  const [pw, setPw] = React.useState(seed.password || "");
  const [show, setShow] = React.useState(false);
  const [remember, setRemember] = React.useState(seed.remember ?? true);
  const [focus, setFocus] = React.useState(seed.focus || "");
  const ff = (n) => ({ focused: focus === n, onFocus: () => setFocus(n), onBlur: () => setFocus("") });
  const canSubmit = id.trim() && pw.length >= 1;
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Screen bg={PQ.off} top={70} bottom={32}>
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 30 }}><LogoImg height={64} style={{ alignSelf: "flex-start" }} /></div>
        <Title size={20}>Good to see you again!</Title>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 4 }}>
          <Field icon="user" label="Email or Username" value={id} onChange={(e) => setId(e.target.value)}
            placeholder="you@example.com" {...ff("id")} />
          <div>
            <Field icon="lock" label="Password" type={show ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)}
              placeholder="Password" {...ff("pw")}
              right={<span onClick={() => setShow(s => !s)} style={{ cursor: "pointer" }}><Icon name={show ? "eyeoff" : "eye"} size={19} stroke={PQ.inkFaint} /></span>} />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Toggle on={remember} onChange={() => setRemember(r => !r)} />
              <span style={{ fontSize: 13.5, color: PQ.ink }}>Remember me</span>
            </div>
            <TextLink onClick={() => go("forgot")}>Forgot password?</TextLink>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <Btn variant="primary" disabled={!canSubmit} onClick={() => go("welcome")}>Login</Btn>
        <div style={{ textAlign: "center", marginTop: 18, fontSize: 13.5, color: PQ.inkSoft }}>
          New to Pocket Dragon? <TextLink onClick={() => go("register")}>Get Started</TextLink>
        </div>
      </Screen>
    </div>
  );
}

// ── FORGOT PASSWORD (3 steps + success) ────────────────────────
function ForgotFlow({ go, live, seed = {} }) {
  const [step, setStep] = React.useState(seed.step ?? 0); // 0 email,1 otp,2 reset,3 success
  const [email, setEmail] = React.useState(seed.email || "");
  const [otp, setOtp] = React.useState(seed.otp || "");
  const [otpStatus, setOtpStatus] = React.useState(seed.otpStatus || "idle");
  const [pw, setPw] = React.useState(seed.password || "");
  const [cpw, setCpw] = React.useState(seed.confirm || "");
  const [show, setShow] = React.useState(false);
  const [showCpw, setShowCpw] = React.useState(false);
  const [secs, setSecs] = React.useState(seed.secs ?? 42);
  const [focus, setFocus] = React.useState("");
  const ff = (n) => ({ focused: focus === n, onFocus: () => setFocus(n), onBlur: () => setFocus("") });

  React.useEffect(() => {
    if (!live || step !== 1 || secs <= 0) return;
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [live, step, secs]);

  const pwState = pw ? "valid" : "idle";                 // no minimum length
  const cState = cpw ? (cpw === pw ? "valid" : "error") : "idle";
  const mm = Math.floor(secs / 60), ss = String(secs % 60).padStart(2, "0");
  const back = () => step === 0 ? go("login") : setStep(s => s - 1);

  const otpKey = (d) => {
    if (d === "del") { setOtpStatus("idle"); return setOtp(o => o.slice(0, -1)); }
    if (otp.length >= 6) return;
    const n = otp + d; setOtpStatus("idle"); setOtp(n);
    if (n.length === 6) setTimeout(() => { if (n === "402231" || n === "000000") setOtpStatus("valid"); else setOtpStatus("error"); }, 220);
  };

  return (
    <Screen bg={PQ.off} top={62} bottom={28}>
      {step < 3 && <TopBar onBack={back} plain right={<Steps n={3} i={step} />} />}

      {step === 0 && (<>
        <Title size={22} sub="Enter the email linked to your account and we'll send a reset code.">Reset Password</Title>
        <Field icon="mail" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com" inputMode="email"
          state={email ? (emailOK(email) ? "valid" : "error") : "idle"} {...ff("email")}
          right={emailOK(email) && <Icon name="check" size={18} stroke={PQ.green} sw={2.2} />} />
        {email && !emailOK(email) && <Helper state="error">Enter a valid email address</Helper>}
        <div style={{ flex: 1 }} />
        <Btn variant="primary" disabled={!emailOK(email)} onClick={() => { setStep(1); setSecs(42); }}>Send OTP</Btn>
      </>)}

      {step === 1 && (<>
        <Title size={22} sub={<>Enter the 6-digit code sent to{" "}<strong style={{ fontWeight: 700, color: PQ.ink }}>{email || "your email"}</strong></>}>Verify OTP</Title>
        <OTP value={otp} state={otpStatus} />
        {otpStatus === "error" && <Helper state="error">Invalid or expired code</Helper>}
        {otpStatus === "valid" && <Helper state="valid">Code verified</Helper>}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 26, fontSize: 13.5, color: PQ.inkSoft }}>
          {secs > 0 ? (<><Icon name="clock" size={16} stroke={PQ.inkFaint} /><span>Resend in <strong style={{ color: PQ.ink, fontWeight: 700 }}>{mm}:{ss}</strong></span></>)
            : <TextLink onClick={() => { setSecs(42); setOtp(""); setOtpStatus("idle"); }}>Resend code</TextLink>}
        </div>
        <div style={{ flex: 1 }} />
        <Btn variant="primary" disabled={otp.length < 6} onClick={() => { if (otp === "402231" || otp === "000000") { setOtpStatus("valid"); setStep(2); } else setOtpStatus("error"); }}>Verify OTP</Btn>
        <Keypad onKey={otpKey} />
      </>)}

      {step === 2 && (<>
        <Title size={22} sub="Choose a new password for your account.">New Password</Title>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <Field icon="lock" label="New Password" type={show ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)}
              placeholder="Enter a new password" state={pwState} {...ff("pw")}
              right={<span onClick={() => setShow(s => !s)} style={{ cursor: "pointer" }}><Icon name={show ? "eyeoff" : "eye"} size={19} stroke={PQ.inkFaint} /></span>} />
          </div>
          <div>
            <Field icon="lock" label="Confirm Password" type={showCpw ? "text" : "password"} value={cpw} onChange={(e) => setCpw(e.target.value)}
              placeholder="Re-enter password" state={cState} {...ff("cpw")}
              right={<span onClick={() => setShowCpw(s => !s)} style={{ cursor: "pointer" }}><Icon name={showCpw ? "eyeoff" : "eye"} size={19} stroke={PQ.inkFaint} /></span>} />
            {cState === "error" && <Helper state="error">Passwords do not match</Helper>}
            {cState === "valid" && <Helper state="valid">Passwords match</Helper>}
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <Btn variant="primary" disabled={!(pwState === "valid" && cState === "valid")} onClick={() => setStep(3)}>Update Password</Btn>
      </>)}

      {step === 3 && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative" }}>
          <RustRing size={96} />
          <h1 style={{ margin: "28px 0 0", fontFamily: HERO, fontWeight: 700, fontSize: 25, letterSpacing: "0.05em", textTransform: "uppercase", color: PQ.ink }}>Password Updated</h1>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 2 }}>
            <Btn variant="primary" onClick={() => go("login")}>Back to Login</Btn>
          </div>
        </div>
      )}
    </Screen>
  );
}

// ── Registration success terminal (Email Verified) ────────────
function SuccessScreen({ go }) {
  return (
    <Screen bg={PQ.off} top={70} bottom={30} style={{ position: "relative" }}>
      <VerifiedPanel go={go} />
    </Screen>
  );
}

// ── Live prototype controller ──────────────────────────────────
function PoquitoApp() {
  const [screen, setScreen] = React.useState("splash");
  const [email, setEmail] = React.useState("ava.chen@example.com");
  const [anim, setAnim] = React.useState("in");
  const go = (s) => { setAnim("out"); setTimeout(() => { setScreen(s); setAnim("in"); }, 160); };
  const common = { go, live: true };
  let view = null;
  if (screen === "splash") view = <SplashScreen {...common} />;
  else if (screen === "welcome") view = <WelcomeScreen {...common} />;
  else if (screen === "register") view = <RegisterScreen {...common} setEmail={setEmail} />;
  else if (screen === "verify") view = <VerifyScreen {...common} email={email} />;
  else if (screen === "success") view = <SuccessScreen {...common} />;
  else if (screen === "login") view = <LoginScreen {...common} />;
  else if (screen === "forgot") view = <ForgotFlow {...common} />;
  return <div key={screen} style={{ height: "100%", animation: `${anim === "in" ? "pqIn" : "pqOut"} .26s ease both` }}>{view}</div>;
}

Object.assign(window, {
  SplashScreen, WelcomeScreen, RegisterScreen, VerifyScreen, Keypad, AvatarPicker, AvatarModal, CitySelect, VerifiedPanel,
  LoginScreen, ForgotFlow, SuccessScreen, PoquitoApp, userCheck, emailOK, CITIES,
});


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

// ── Mahjong suit glyphs (kept for decorative use) ────────────────
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
function HeroPanel({ username = "avachen88", tier = "Firefly I", nextTier = "Firefly II", rp = 100, rpMax = 200, onOpen, onNotify }) {
  const pct = Math.max(0, Math.min(100, (rp / rpMax) * 100));
  return (
    <div style={{
      position: "relative", overflow: "hidden", borderRadius: 24, width: "100%", textAlign: "left",
      background: PQ.green, padding: "20px 20px 22px", color: PQ.off,
    }}>
      {/* notification bell — top-right, muted off-white (matches RP colour) */}
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
          <img src={HERO_AVATAR} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
        <span style={{ fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: PQ.off }}>{tier}</span>
        <span style={{ fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(249,242,228,0.5)" }}>{nextTier}</span>
      </div>
    </div>
  );
}

// ── Resume card (replaces the ongoing banner; lives in the Hub) ──
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

// ── Hub action card (icon top-left, arrow bottom-right, no boxes) ──
// Natural height: grows to fit content; arrow sits in a reserved right gutter
// so multi-line copy never collides with it or spills into adjacent cards.
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
      {/* icon to the left of the title */}
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

// ── Bottom navigation ────────────────────────────────────────────
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

// ── Toast (lightweight nav feedback) ─────────────────────────────
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

// ── Placeholder for non-Home tabs ────────────────────────────────
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

// ── Home screen ──────────────────────────────────────────────────
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

// ── Create Game · configuration screen ───────────────────────────
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

// long horizontal variant selection card (name + subtitle split)
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

// elegant [-] n [+] stepper — labelled, touch-friendly
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

// East/West variant row with an independent (-) n (+) counter
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

// Player Access option — standalone icon (no box), rust on select
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

// timer: slider position 0..100 (left=Slow/60s, right=Fast/10s)
function posToSecs(pos) { return Math.round(60 - (pos / 100) * 50); }
function secsToTier(s) { return s >= 31 ? "Slow" : s >= 16 ? "Medium" : "Fast"; }

// ── Invite by Username (popup/modal): favourites by default, avatar + green dot ──
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
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
  const [rounds, setRounds] = React.useState(null);
  const [pos, setPos] = React.useState(30);          // continuous slider position
  const [timerOn, setTimerOn] = React.useState(true); // ON by default
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
        {/* consolidated Game Setup: variant + rounds */}
        <CfgSection label="Game Setup">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <VariantCounter letter="W" name="West" subtitle="Goulash" value={west} onChange={setWest} />
          </div>
        </CfgSection>

        {/* turn timer — continuous slider, Slow→Fast */}
        <CfgSection label="Turn Timer" hint={timerOn ? `${secs}s · ${tier}` : "Off"}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
            <div style={{ fontFamily: HERO, fontWeight: 600, fontSize: 12.5, color: PQ.ink }}>Enable / Disable Turn Timer</div>
            <Toggle on={timerOn} onChange={() => setTimerOn((v) => !v)} />
          </div>
          {timerOn && (<>
            <input type="range" min={0} max={100} step={1} value={pos} onChange={(e) => setPos(+e.target.value)}
              style={{ width: "100%", marginTop: 16, accentColor: PQ.rust, height: 6, cursor: "pointer", outline: "none", border: "none", borderRadius: 3, background: `linear-gradient(to right, ${PQ.rust} 0%, ${PQ.rust} ${pos}%, #C8C0AE ${pos}%, #C8C0AE 100%)` }} />
            <div style={{ position: "relative", height: 32, marginTop: 8 }}>
              {[["Slow", "60s", 0], ["Medium", "30s", 60], ["Fast", "10s", 100]].map(([t, sLabel, fp]) => (
                <div key={t} style={{ position: "absolute", left: fp + "%", transform: `translateX(${fp === 0 ? "0" : fp === 100 ? "-100%" : "-50%"})`, textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: tier === t ? PQ.rust : PQ.inkFaint }}>{t}</div>
                  <div style={{ marginTop: 2, fontSize: 10, color: PQ.inkFaint }}>{sLabel}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 12, lineHeight: 1.45, color: PQ.inkSoft }}>If time runs out, a bot automatically plays your turn.</p>
          </>)}
        </CfgSection>

        {/* player access */}
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
                <div><div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: PQ.inkFaint }}>ROOM CODE</div><div style={{ marginTop: 3, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.18em", color: PQ.green }}>K7M9P2</div></div>
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
        <Btn variant="primary" disabled={!canCreate} onClick={() => { pock("select"); onCreate && onCreate(); }}>{title}</Btn>
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


/* ===== poquito-game.jsx ===== */
// poquito-game.jsx — Pocket Dragon · Screen 11 (core gameplay table).
// Extends the PQ system (PQ, HERO, Icon, SuitGlyph, pock from earlier files).
// Deep-green felt is the table surface; translucent panels for HUD; tiles built
// geometrically from our suit glyphs. Exports GameScreen to window.

// One gameplay-only brass/gold accent — reserved SOLELY for the Mahjong win button.
const GOLD = "#C9972F", GOLD_SOFT = "#E6BE63", GOLD_DEEP = "#9A7320";
const FELT_INK = "#0A1C12";
// representative exposed/claimed tiles row (read-only display, gameplay)
const EXPOSED_DEMO = [
  { suit: "char", value: 3 }, { suit: "char", value: 3 }, { suit: "char", value: 5 },
  { suit: "dot", value: 5 }, { suit: "dot", value: 5 }, { suit: "dot", value: 5 },
  { suit: "bamboo", value: 8 }, { suit: "bamboo", value: 8 },
  { suit: "dragon", value: "G" }, { suit: "dragon", value: "G" },
  { suit: "dot", value: 9 }, { suit: "dot", value: 9 }, { suit: "dot", value: 9 },
];
// Gameplay reskin palette (aubergine felt + bronze/gold frame + purple accent) — per primary-player reference
const GP = {
  feltOuter: "#150C1E", felt: "#2A1A38", feltCenter: "#3C2551",
  frame: "#B88A40", frameSoft: "#E3B968", frameDeep: "#6E4F22",
  purple: "#C77DD6", purpleSoft: "#E2B0EC",
  cream: "#F4ECDD", mute: "rgba(244,236,221,0.62)", faint: "rgba(244,236,221,0.38)",
  line: "rgba(244,236,221,0.15)", panel: "rgba(20,11,28,0.55)", panelSolid: "rgba(20,11,28,0.82)",
};

// ── Classic mahjong pip layouts (dots) ───────────────────────────
function DotFace({ n, w }) {
  const s = Math.round(w * 0.86);
  const P = { c: [7.5, 15, 22.5] };
  const pos = {
    1: [[15, 15]],
    2: [[15, 8], [15, 22]],
    3: [[7.5, 7.5], [15, 15], [22.5, 22.5]],
    4: [[8, 8], [22, 8], [8, 22], [22, 22]],
    5: [[8, 8], [22, 8], [15, 15], [8, 22], [22, 22]],
    6: [[8, 7], [8, 15], [8, 23], [22, 7], [22, 15], [22, 23]],
    7: [[8, 7], [8, 15], [8, 23], [22, 7], [22, 15], [22, 23], [15, 15]],
    8: [[7.5, 7], [15, 7], [22.5, 7], [7.5, 15], [22.5, 15], [7.5, 23], [15, 23], [22.5, 23]],
    9: [[7.5, 7.5], [15, 7.5], [22.5, 7.5], [7.5, 15], [15, 15], [22.5, 15], [7.5, 22.5], [15, 22.5], [22.5, 22.5]],
  }[n] || [[15, 15]];
  const pal = ["#2f5fa0", "#1f7a43", "#b02a1e"];
  const r = n === 1 ? 5 : 3.3;
  return (
    <svg width={s} height={s} viewBox="0 0 30 30">
      {pos.map(([cx, cy], i) => {
        const c = pal[i % pal.length];
        return <g key={i}><circle cx={cx} cy={cy} r={r} fill="#f7f1e4" stroke={c} strokeWidth={1.8} /><circle cx={cx} cy={cy} r={r * 0.4} fill={c} /></g>;
      })}
    </svg>
  );
}

// ── Classic mahjong bamboo sticks (sou) ──────────────────────────
function BambooFace({ n, w }) {
  const s = Math.round(w * 0.86);
  const stick = (x, y, key, col) => (
    <g key={key}>
      <rect x={x - 1.7} y={y} width={3.4} height={8} rx={1.7} fill="none" stroke={col} strokeWidth={1.5} />
      <line x1={x - 1.7} y1={y + 4} x2={x + 1.7} y2={y + 4} stroke={col} strokeWidth={1.2} />
    </g>
  );
  const cols = { c1: [15], c2: [10, 20], c3: [7, 15, 23] };
  // rows of columns per count (classic-ish)
  const rowsFor = {
    1: [[15]],
    2: [[10, 20]],
    3: [[7, 15, 23]],
    4: [[10, 20], [10, 20]],
    5: [[10, 20], [15], [10, 20]],
    6: [[7, 15, 23], [7, 15, 23]],
    7: [[15], [7, 15, 23], [7, 15, 23]],
    8: [[7, 15, 23], [7, 15, 23], [11, 19]],
    9: [[7, 15, 23], [7, 15, 23], [7, 15, 23]],
  }[n] || [[15]];
  const ys = { 1: [11], 2: [4, 18], 3: [2, 11, 20] }[rowsFor.length] || [2, 11, 20];
  const green = "#1f7a43", red = "#b02a1e";
  return (
    <svg width={s} height={s} viewBox="0 0 30 30">
      {rowsFor.map((row, ri) => row.map((x, ci) => stick(x, ys[ri], ri + "-" + ci, (n === 1 || (n % 2 === 1 && ri === Math.floor(rowsFor.length / 2) && row.length === 1)) ? red : green)))}
    </svg>
  );
}

// ── Tile face content (classic mahjong faces) ───────────────────
function TileFace({ suit, value, w }) {
  if (suit === "dragon") {
    const isR = value === "R";
    return <span style={{ fontFamily: "'Noto Serif SC','Playfair Display',serif", fontWeight: 700, fontSize: Math.max(13, w * 0.6), color: isR ? "#c0392b" : "#1f7a43", lineHeight: 1 }}>{isR ? "中" : "發"}</span>;
  }
  if (suit === "wind") {
    const map = { E: "東", S: "南", W: "西", N: "北" };
    return <span style={{ fontFamily: "'Noto Serif SC','Playfair Display',serif", fontWeight: 700, fontSize: Math.max(12, w * 0.55), color: "#2a3550", lineHeight: 1 }}>{map[value] || value}</span>;
  }
  if (suit === "char") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 0.9 }}>
        <span style={{ fontFamily: "'Oswald','Hero',sans-serif", fontWeight: 700, fontSize: Math.max(11, w * 0.46), color: "#2f5fa0" }}>{value}</span>
        <span style={{ fontFamily: "'Noto Serif SC','Playfair Display',serif", fontWeight: 700, fontSize: Math.max(11, w * 0.46), color: "#b02a1e" }}>萬</span>
      </div>
    );
  }
  const n = typeof value === "number" ? value : 1;
  return suit === "dot" ? <DotFace n={n} w={w} /> : <BambooFace n={n} w={w} />;
}

// ── Tile (face-up, face-down, or side-on) ────────────────────────
function Tile({ suit, value, w = 32, faceDown, side, selected, raised, onTap, style }) {
  const r = Math.max(4, w * 0.16);
  const h = side ? Math.round(w * 0.72) : Math.round(w * 1.36);
  if (faceDown) {
    return (
      <div onClick={onTap} style={{
        width: side ? Math.round(w * 1.36) : w, height: side ? w : h, borderRadius: r, flexShrink: 0,
        background: `linear-gradient(150deg, ${PQ.green2}, ${PQ.green} 58%, ${PQ.greenDeep})`,
        border: "1px solid rgba(249,242,228,0.12)", position: "relative", overflow: "hidden",
        boxShadow: "0 1px 2px rgba(0,0,0,0.35)", ...style,
      }}>
        <div style={{
          position: "absolute", inset: 0, backgroundImage:
            "repeating-linear-gradient(45deg, rgba(249,242,228,0.09) 0 1.5px, transparent 1.5px 6px), repeating-linear-gradient(-45deg, rgba(249,242,228,0.07) 0 1.5px, transparent 1.5px 6px)"
        }} />
        <div style={{ position: "absolute", inset: "24% 28%", borderRadius: 3, border: "1px solid rgba(203,124,85,0.45)" }} />
      </div>
    );
  }
  return (
    <div onClick={onTap} className={onTap ? "pq-press" : ""} style={{
      width: w, height: h, borderRadius: r, flexShrink: 0,
      background: "linear-gradient(180deg,#FFFDF6,#F2E8D2)",
      border: `1px solid ${selected ? PQ.rust : "rgba(20,51,34,0.2)"}`,
      transform: selected || raised ? "translateY(-12px)" : "none",
      transition: "transform .16s cubic-bezier(.2,.8,.3,1), border-color .12s, box-shadow .16s",
      boxShadow: selected ? "0 10px 18px -6px rgba(182,90,47,0.55)" : "0 2px 3px rgba(0,0,0,0.28), inset 0 -2px 0 rgba(20,51,34,0.08)",
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
      cursor: onTap ? "pointer" : "default", ...style,
    }}>
      <TileFace suit={suit} value={value} w={w} />
    </div>
  );
}

// ── Face-down fan (opponent concealed hand) ──────────────────────
function Fan({ count, side, w = 19 }) {
  return (
    <div style={{ display: "flex", flexDirection: side ? "column" : "row", gap: side ? 2 : 2 }}>
      {Array.from({ length: count }).map((_, i) => <Tile key={i} faceDown side={side} w={w} />)}
    </div>
  );
}

// ── Exposed meld cluster (face-up, offset toward centre) ─────────
function Meld({ tiles, w = 18, side }) {
  return (
    <div style={{ display: "flex", flexDirection: side ? "column" : "row", gap: 1.5 }}>
      {tiles.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={w} />)}
    </div>
  );
}

// ── Turn-timer arc ───────────────────────────────────────────────
function TimerArc({ pct, secs, size = 36 }) {
  const r = (size - 5) / 2, c = 2 * Math.PI * r;
  const danger = pct < 0.26;
  const col = danger ? GP.purple : GP.frameSoft;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", display: "block" }}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(244,236,221,0.2)" strokeWidth={3.2} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke={col} strokeWidth={3.2} fill="none"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset .9s linear, stroke .3s" }} />
      </svg>
      <span className={danger ? "pq-timer-pulse" : ""} style={{
        position: "absolute", inset: 0, display: "flex",
        alignItems: "center", justifyContent: "center", fontFamily: HERO, fontWeight: 700,
        fontSize: 13, color: danger ? GP.purple : GP.cream
      }}>{secs}</span>
    </div>
  );
}

// ── Nameplate (translucent surface-bamboo panel) ─────────────────
function Nameplate({ name, wind, tiles, score, tier, flowers = 0, active, bot, disconnected, timer, align = "left" }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8, maxWidth: 200,
      background: active ? "rgba(60,37,81,0.78)" : GP.panel,
      backdropFilter: "blur(9px)", WebkitBackdropFilter: "blur(9px)",
      border: `1.5px solid ${active ? GP.frameSoft : GP.frame}`,
      borderRadius: 13, padding: "6px 9px",
      boxShadow: active ? "0 6px 18px -8px rgba(199,125,214,0.5)" : "0 4px 14px -8px rgba(0,0,0,0.55)",
    }}>
      <span style={{
        width: 26, height: 26, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center",
        justifyContent: "center", background: active ? GP.purple : "rgba(244,236,221,0.1)",
        border: `1px solid ${active ? GP.purpleSoft : "rgba(244,236,221,0.2)"}`,
        fontFamily: HERO, fontWeight: 700, fontSize: 13, color: active ? "#2A1A38" : GP.cream
      }}>{wind}</span>
      <div style={{ minWidth: 0, textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{
            fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.02em",
            color: GP.cream, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 96
          }}>{name}</span>
          {flowers > 0 && <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
            {Array.from({ length: flowers }).map((_, i) => <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: GP.frameSoft }} />)}
          </span>}
        </div>
        {bot ? (
          <div style={{ marginTop: 2, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: GP.purpleSoft }}>Bot playing for {name.split(" ")[0]}</div>
        ) : disconnected ? (
          <div style={{ marginTop: 2, display: "flex", alignItems: "center", gap: 4, fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: GP.purpleSoft }}>
            <span className="pq-pulse" style={{ width: 5, height: 5, borderRadius: "50%", background: GP.purple }} />Reconnecting…
          </div>
        ) : (
          <div style={{ marginTop: 2, display: "flex", alignItems: "center", gap: 7, fontFamily: HERO, fontSize: 10, color: GP.mute }}>
            {tier && <span style={{ color: GP.purpleSoft, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{tier}</span>}
            <span>{tiles}<span style={{ opacity: 0.55 }}>·tiles</span></span>
            <span style={{ color: GP.cream, fontWeight: 700 }}>{score} pts</span>
          </div>
        )}
      </div>
      {active && timer != null && <TimerArc pct={timer.pct} secs={timer.secs} />}
    </div>
  );
}

// ── Direction / seat compass chip ────────────────────────────────
function Compass({ prevailing = "E" }) {
  const winds = [["N", "50%", "8%"], ["E", "84%", "50%"], ["S", "50%", "84%"], ["W", "16%", "50%"]];
  return (
    <div style={{
      position: "relative", width: 46, height: 46, borderRadius: 12,
      background: "rgba(10,28,18,0.55)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      border: "1px solid rgba(249,242,228,0.16)"
    }}>
      <div style={{ position: "absolute", inset: 13, transform: "rotate(45deg)", border: "1px solid rgba(249,242,228,0.25)", borderRadius: 3 }} />
      {winds.map(([w, l, t]) => (
        <span key={w} style={{
          position: "absolute", left: l, top: t, transform: "translate(-50%,-50%)",
          fontFamily: HERO, fontWeight: 700, fontSize: 10,
          color: w === prevailing ? PQ.rustSoft : "rgba(249,242,228,0.5)"
        }}>{w}</span>
      ))}
    </div>
  );
}

// ── Round / wall info pill ───────────────────────────────────────
function InfoPill({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 12px", borderRadius: 999,
      background: "rgba(10,28,18,0.5)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      border: "1px solid rgba(249,242,228,0.16)", fontFamily: HERO, fontWeight: 700, fontSize: 11,
      letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(249,242,228,0.82)"
    }}>{children}</div>
  );
}

// ── Vertical gold edge strip (East / West seat label + exposed tiles per reference) ──
function EdgeStrip({ side, name, tier, pts, disconnected, exposed = [] }) {
  const isLeft = side === "left";
  const rot = isLeft ? "rotate(180deg)" : "none";
  const lbl = { writingMode: "vertical-rl", transform: rot, fontFamily: HERO, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", whiteSpace: "nowrap" };
  return (
    <div style={{
      position: "absolute", [isLeft ? "left" : "right"]: 10, top: 56, bottom: 150, width: 54, zIndex: 6,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
      background: GP.panel, border: `1.5px solid ${GP.frame}`, borderRadius: 12,
      boxShadow: "inset 0 0 20px rgba(0,0,0,0.35)", padding: "10px 0"
    }}>
      <span style={{ ...lbl, fontSize: 11.5, color: GP.cream }}>{name}</span>
      {disconnected
        ? <span style={{ ...lbl, fontSize: 10, color: GP.purpleSoft }}>Reconnecting</span>
        : <span style={{ ...lbl, fontSize: 10.5, color: GP.purpleSoft }}>{tier}</span>}
      <span style={{ ...lbl, fontSize: 10.5, color: GP.mute }}>{pts} pts</span>
      {/* dedicated exposed-tile section for this player */}
      {exposed.length > 0 && (
        <div style={{ marginTop: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {exposed.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={13} />)}
        </div>
      )}
    </div>
  );
}

// ── Small circular glass icon button ─────────────────────────────
function GlassIconBtn({ children, onClick, label }) {
  return (
    <button onClick={onClick} aria-label={label} className="pq-press" style={{
      width: 38, height: 38, borderRadius: "50%", cursor: "pointer",
      background: GP.panel, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      border: `1.5px solid ${GP.frame}`, display: "flex", alignItems: "center", justifyContent: "center",
    }}>{children}</button>
  );
}

// ── Action tray (Chow / Pong / Kong — authentic terms) ───────────
function ActionTray({ actions, onAct }) {
  const order = ["chow", "pong", "kong"];
  const avail = order.filter((a) => actions.includes(a));
  if (!avail.length) return null;
  return (
    <div className="pq-tray-in" style={{ display: "flex", gap: 8, justifyContent: "center" }}>
      {avail.map((a) => (
        <button key={a} onClick={() => { pock("select"); onAct(a); }} className="pq-press" style={{
          height: 38, padding: "0 18px", borderRadius: 11, cursor: "pointer",
          background: "rgba(244,236,221,0.95)", border: `1.5px solid ${GP.purple}`,
          color: "#7B2C8C", fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
        }}>{a}</button>
      ))}
    </div>
  );
}

// ── Mahjong win button (brass/gold glow when legally available) ──
function MahjongButton({ ready, onWin }) {
  return (
    <button onClick={() => { if (!ready) return; pock("select"); onWin(); }} disabled={!ready}
      className={ready ? "pq-press pq-mahjong-glow" : ""} style={{
        height: 52, flex: 1.3, borderRadius: 14, cursor: ready ? "pointer" : "not-allowed",
        background: ready ? `linear-gradient(160deg, ${GOLD_SOFT}, ${GOLD} 55%, ${GOLD_DEEP})` : "rgba(249,242,228,0.08)",
        border: `1.5px solid ${ready ? "#EBCE81" : "rgba(249,242,228,0.16)"}`,
        color: ready ? "#3A2A06" : "rgba(249,242,228,0.35)",
        fontFamily: HERO, fontWeight: 700, fontSize: 17, letterSpacing: "0.14em", textTransform: "uppercase",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      }}>Mahjong</button>
  );
}

// ── Animated score number (subtle incremental tick) ──────────────
function TickScore({ value, style }) {
  const [shown, setShown] = React.useState(value);
  const [bump, setBump] = React.useState(false);
  React.useEffect(() => {
    if (value === shown) return;
    setBump(true);
    const step = value > shown ? 1 : -1;
    const id = setInterval(() => {
      setShown((s) => {
        if (s === value) { clearInterval(id); return s; }
        return s + step * Math.max(1, Math.round(Math.abs(value - s) / 6));
      });
    }, 45);
    const t = setTimeout(() => setBump(false), 320);
    return () => { clearInterval(id); clearTimeout(t); };
  }, [value]);
  return <span style={{ display: "inline-block", transition: "transform .15s", transform: bump ? "scale(1.18)" : "none", ...style }}>{shown}</span>;
}

// ── Seats / initial hand data ────────────────────────────────────
const YOU_HAND = [
  { suit: "bamboo", value: 2 }, { suit: "bamboo", value: 3 }, { suit: "bamboo", value: 4 },
  { suit: "dot", value: 5 }, { suit: "dot", value: 6 }, { suit: "dot", value: 7 },
  { suit: "char", value: 8 }, { suit: "char", value: 9 },
  { suit: "dot", value: 9 }, { suit: "dot", value: 9 },
  { suit: "wind", value: "E" }, { suit: "wind", value: "E" }, { suit: "wind", value: "E" },
];
const DISCARDS = [
  { suit: "char", value: 1 }, { suit: "bamboo", value: 9 }, { suit: "dot", value: 1 },
  { suit: "wind", value: "W" }, { suit: "char", value: 5 }, { suit: "dragon", value: "G" },
  { suit: "bamboo", value: 7 }, { suit: "dot", value: 3 }, { suit: "char", value: 2 },
];

// ── Game screen ──────────────────────────────────────────────────
function GameScreen({ onExit, demo = {} }) {
  const [hand, setHand] = React.useState(YOU_HAND);
  const [drawn, setDrawn] = React.useState({ suit: "dot", value: 9 }); // latest draw, separated
  const [sel, setSel] = React.useState(null);                          // selected index (hand) or -1 for drawn
  const [pool, setPool] = React.useState(DISCARDS);
  const [myMelds, setMyMelds] = React.useState([]);
  const [score, setScore] = React.useState(48);
  const [pct, setPct] = React.useState(1);
  const [secs, setSecs] = React.useState(20);
  const [won, setWon] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [exchange, setExchange] = React.useState(false);
  const [dibDab, setDibDab] = React.useState(0);
  const [walling, setWalling] = React.useState(0);
  const tilesLeft = Math.max(0, 84 - pool.length);
  // discard pile auto-scales down as it grows so the whole pile stays visible
  const discardW = pool.length > 40 ? 12 : pool.length > 28 ? 14 : pool.length > 18 ? 16 : 19;
  const SUIT_ORDER = { bamboo: 0, dot: 1, char: 2, wind: 3, dragon: 4 };
  const sortHand = () => { pock("select"); setHand((h) => [...h].sort((a, b) => (SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit]) || ((typeof a.value === "number" ? a.value : 99) - (typeof b.value === "number" ? b.value : 99)) || String(a.value).localeCompare(String(b.value)))); };
  const drawTile = () => { if (drawn) return; pock("select"); setDrawn({ suit: ["bamboo", "dot", "char"][Math.floor(Math.random() * 3)], value: Math.ceil(Math.random() * 9) }); resetTimer(); };

  const full = drawn ? [...hand, drawn] : hand;
  const selTile = sel == null ? null : (sel === -1 ? drawn : hand[sel]);

  // available calls from the selected tile (authentic: pong=2 held, kong=3 held, chow=run)
  const actions = React.useMemo(() => {
    if (!selTile) return [];
    const same = hand.filter((t) => t.suit === selTile.suit && t.value === selTile.value).length + (drawn && drawn.suit === selTile.suit && drawn.value === selTile.value ? 1 : 0);
    const out = [];
    if (same >= 3) out.push("pong"), out.push("kong");
    else if (same >= 2) out.push("pong");
    if (typeof selTile.value === "number") {
      const has = (v) => full.some((t) => t.suit === selTile.suit && t.value === v);
      if ((has(selTile.value - 1) && has(selTile.value - 2)) || (has(selTile.value - 1) && has(selTile.value + 1)) || (has(selTile.value + 1) && has(selTile.value + 2))) out.push("chow");
    }
    return out;
  }, [sel]);

  const mahjongReady = !!demo.win || won;

  // turn timer (your seat active)
  React.useEffect(() => {
    if (won) return;
    if (secs <= 0) {           // missed turn → bot covers your discard (guarded so idle review won't empty the hand)
      const t = setTimeout(() => { if (hand.length > 5) doDiscard(0, true); else resetTimer(); }, 600);
      return () => clearTimeout(t);
    }
    const id = setTimeout(() => { setSecs((s) => s - 1); setPct((p) => Math.max(0, p - 1 / 20)); }, 950);
    return () => clearTimeout(id);
  }, [secs, won]);

  const resetTimer = () => { setSecs(20); setPct(1); };

  function doDiscard(idx, auto) {
    const tile = idx === -1 ? drawn : hand[idx];
    if (!tile) return;
    pock("select");
    setPool((p) => [...p, tile]);
    if (idx === -1) setDrawn(null);
    else { setHand((h) => h.filter((_, i) => i !== idx)); }
    setSel(null);
    setScore((s) => s + (auto ? 1 : 3));
    resetTimer();
    // brief opponent beat → you draw again
    setTimeout(() => { if (!drawn) setDrawn({ suit: ["bamboo", "dot", "char"][Math.floor(Math.random() * 3)], value: Math.ceil(Math.random() * 9) }); }, 900);
  }

  function doMeld(kind) {
    if (!selTile) return;
    pock("select");
    const n = kind === "kong" ? 4 : kind === "chow" ? 3 : 3;
    let take = [];
    if (kind === "chow" && typeof selTile.value === "number") {
      const v = selTile.value, s = selTile.suit;
      const pick = (val) => full.find((t) => t.suit === s && t.value === val);
      take = [pick(v - 1), pick(v), pick(v + 1)].filter(Boolean);
      if (take.length < 3) take = [pick(v), pick(v + 1), pick(v + 2)].filter(Boolean);
    } else {
      take = full.filter((t) => t.suit === selTile.suit && t.value === selTile.value).slice(0, n);
    }
    let removedDrawn = false;
    // consume: remove first matching tiles from hand / drawn
    let need = take.map((t) => t.suit + "" + t.value);
    const newHand = [];
    hand.forEach((t) => { const k = t.suit + "" + t.value; const i = need.indexOf(k); if (i > -1) { need.splice(i, 1); } else newHand.push(t); });
    if (drawn) { const k = drawn.suit + "" + drawn.value; const i = need.indexOf(k); if (i > -1) { need.splice(i, 1); removedDrawn = true; } }
    setMyMelds((m) => [...m, take]);
    setHand(newHand);
    if (removedDrawn) setDrawn(null);
    setSel(null);
    setScore((s) => s + 6);
    resetTimer();
  }

  const claim = () => { if (!actions.length) return; doMeld(actions[0]); };
  const menuRow = { width: "100%", textAlign: "left", padding: "15px 18px", background: PQ.off, border: "none", borderBottom: `1px solid ${PQ.line}`, cursor: "pointer", fontFamily: HERO, fontWeight: 600, fontSize: 14.5, color: PQ.ink };
  const ctrl = (label, onClick, icon, disabled, glow) => (
    <button onClick={disabled ? undefined : onClick} disabled={disabled} className={glow ? "pq-mahjong-glow" : (disabled ? "" : "pq-press")} style={{
      minWidth: 0, height: 34, padding: "0 10px", borderRadius: 9,
      cursor: disabled ? "not-allowed" : "pointer",
      background: glow ? `linear-gradient(160deg, ${GP.frameSoft}, ${GP.frame} 55%, ${GP.frameDeep})` : GP.panel,
      border: `1.5px solid ${glow ? GP.frameSoft : disabled ? "rgba(244,236,221,0.14)" : GP.frame}`,
      color: glow ? "#2A1A38" : disabled ? GP.faint : GP.cream,
      fontFamily: HERO, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.04em", textTransform: "uppercase",
      display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap",
    }}>{label}</button>
  );

  // ── reference gameplay palette (dark casino table on beige) ──
  const OSW = "'Oswald', 'Hero', sans-serif";
  const PF = "'Playfair Display', serif";
  const RG = {
    bg: "#ded6c4", table: "#242424", panel: "linear-gradient(#34373b,#26282b)", panelBorder: "#565b5f",
    cream: "#f3ecdc", label: "#b7bdb5", labelDim: "#8a9a8c", teal: "#6fa0ae", scoreBox: "#0a1a10",
    gold: "#d8a53a", tierGold: "#9a7c44", youBlue: "#3a5f86", youGold: "#c9a24a", rust: "#c47a34", orange: "#c76334", ptGrey: "#888e92", gameGrey: "#757b80",
    btn: "linear-gradient(#3a3d40,#2a2c2e)", btnText: "#dfe6da", menuText: "#cfd8cc"
  };
  // static opponent exposed melds (mapped to this app's tile renderer)
  const oppMelds = [
    [{ suit: "char", value: 3 }, { suit: "char", value: 4 }, { suit: "char", value: 5 }],
    [{ suit: "dot", value: 2 }, { suit: "dot", value: 3 }, { suit: "dot", value: 4 }],
    [{ suit: "bamboo", value: 6 }, { suit: "bamboo", value: 6 }, { suit: "bamboo", value: 6 }],
    [{ suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }],
  ];
  const westMelds = [
    [{ suit: "char", value: 5 }, { suit: "dot", value: 5 }, { suit: "char", value: 5 }],
    [{ suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }],
    [{ suit: "bamboo", value: 7 }, { suit: "bamboo", value: 8 }, { suit: "bamboo", value: 9 }],
  ];
  const yourExposed = myMelds.flat().length ? myMelds.flat() : EXPOSED_DEMO;
  // flowers (represented per reference): red-dragon row + green-dragon row
  const oppFlowers = [
    [{ suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }],
    [{ suit: "dragon", value: "G" }, { suit: "dragon", value: "G" }, { suit: "dragon", value: "G" }],
  ];
  const yourFlowers = [
    [{ suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }],
    [{ suit: "dragon", value: "G" }, { suit: "dragon", value: "G" }, { suit: "dragon", value: "G" }],
  ];
  const expBorder = pct > 0 ? RG.rust : RG.panelBorder;
  const expShadow = pct > 0 ? "0 0 16px rgba(196,122,52,.5), inset 0 0 14px rgba(196,122,52,.12)" : "none";
  const AV = ["boy", "llama", "owl"];
  const seatAv = (i) => AV_RES(`assets/avatars/poquito-${AV[i % AV.length]}.png`, AV[i % AV.length]);

  // vertical side panel (North / South opponents) — narrowed; left panel clears the phone notch
  const SidePanel = ({ side, wind, name, av }) => (
    <div style={{
      position: "absolute", [side]: side === "left" ? 20 : 8, top: 32, width: 92, bottom: 60, zIndex: 4,
      background: RG.panel, border: `2px solid ${RG.panelBorder}`, borderRadius: 12, padding: 7,
      boxShadow: "inset 0 0 18px rgba(0,0,0,0.5)", overflow: "hidden"
    }}>
      <div style={{ display: "flex", gap: 6 }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <span style={{ width: 38, height: 38, borderRadius: "50%", overflow: "hidden", border: "2px solid #c9b48a", display: "block" }}>
            <img src={av} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </span>
          <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 12, color: "#eef0ea" }}>{name}</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
          <span style={{ fontFamily: OSW, fontSize: 9, letterSpacing: "0.12em", color: RG.label }}>{wind}</span>
          <div style={{ width: "100%", background: RG.scoreBox, borderRadius: 4, padding: "1px 5px", textAlign: "right" }}><span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 14, color: RG.ptGrey }}>1,240</span></div>
          <span style={{ fontFamily: OSW, fontSize: 8.5, letterSpacing: "0.1em", color: RG.ptGrey }}>JADE II</span>
        </div>
      </div>
      <span style={{ display: "block", fontFamily: OSW, fontSize: 8.5, letterSpacing: "0.12em", color: RG.gameGrey, margin: "6px 0 4px 2px" }}>EXPOSED</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
        {oppMelds.map((m, r) => (
          <div key={r} style={{ display: "flex", gap: 2, justifyContent: "center" }}>
            {m.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={20} />)}
          </div>
        ))}
      </div>
      {/* centred rust divider between exposed tiles and flowers */}
      <div style={{ height: 1.5, width: "58%", margin: "8px auto 6px", background: PQ.rust, borderRadius: 2 }} />
      {/* flowers (smaller tiles) */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
        {oppFlowers.map((m, r) => (
          <div key={r} style={{ display: "flex", gap: 2, justifyContent: "center" }}>
            {m.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={17} />)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: RG.bg, fontFamily: OSW }}>
      {/* dark casino table */}
      <div style={{
        position: "absolute", inset: 4, background: RG.table, borderRadius: 22,
        boxShadow: "inset 0 0 0 2px #3a3a3a, inset 0 0 40px rgba(0,0,0,0.6)", pointerEvents: "none"
      }} />

      {/* TOP BAR */}
      <div style={{ position: "absolute", left: 12, top: 8, right: 12, height: 26, zIndex: 12, display: "flex", alignItems: "stretch" }}>
        <div style={{ display: "flex", alignItems: "center", paddingLeft: 6, paddingRight: 14, borderRight: "1px solid rgba(255,255,255,.13)" }}>
          <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, color: RG.orange, letterSpacing: "0.06em" }}>EAST ROUND</span>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, borderRight: "1px solid rgba(255,255,255,.13)" }}>
          <span style={{ fontFamily: OSW, fontSize: 10, letterSpacing: "0.12em", color: RG.gameGrey }}>GAME</span>
          <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 13, color: RG.gameGrey }}>2/4</span>
        </div>
        <div style={{ flex: 1.1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, borderRight: "1px solid rgba(255,255,255,.13)" }}>
          <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 15, color: RG.rust }}>{tilesLeft}</span>
          <span style={{ fontFamily: OSW, fontSize: 10, letterSpacing: "0.12em", color: RG.gameGrey }}>TILES LEFT</span>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, borderRight: "1px solid rgba(255,255,255,.13)" }}>
          <span style={{ fontFamily: OSW, fontSize: 10, letterSpacing: "0.12em", color: RG.gameGrey }}>BANK</span>
          <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 13, color: RG.gameGrey }}><TickScore value={score} /></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, paddingLeft: 14 }}>
          <button onClick={() => setMenuOpen(true)} className="pq-press" style={{ height: 22, display: "flex", alignItems: "center", gap: 5, padding: "0 10px", border: `1.5px solid ${RG.panelBorder}`, borderRadius: 7, background: RG.btn, cursor: "pointer" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#cbd3cb"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
            <span style={{ fontFamily: OSW, fontSize: 10, letterSpacing: "0.12em", color: RG.gameGrey, fontWeight: 600 }}>PAUSE</span>
          </button>
          <button onClick={() => onExit && onExit("home")} className="pq-press" style={{ height: 22, display: "flex", alignItems: "center", gap: 5, padding: "0 10px", border: `1.5px solid ${RG.panelBorder}`, borderRadius: 7, background: RG.btn, cursor: "pointer" }}>
            <span style={{ fontFamily: OSW, fontSize: 10, letterSpacing: "0.12em", color: RG.gameGrey, fontWeight: 600 }}>EXIT</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#cbd3cb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></svg>
          </button>
        </div>
      </div>

      {/* LEFT / RIGHT side panels (North / South opponents) */}
      <SidePanel side="left" wind="NORTH" name="Mei" av={seatAv(1)} />
      <SidePanel side="right" wind="SOUTH" name="Sam" av={seatAv(2)} />

      {/* TOP HAND (West player, exposed melds) */}
      <div style={{
        position: "absolute", left: 112, top: 32, width: 588, height: 44, zIndex: 4,
        background: RG.panel, border: `2px solid ${RG.panelBorder}`, borderRadius: 10, display: "flex", alignItems: "center", padding: "0 8px", gap: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <span style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", border: `2px solid ${RG.youBlue}`, display: "block" }}>
            <img src={seatAv(0)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </span>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontFamily: OSW, fontSize: 8.5, letterSpacing: "0.12em", color: RG.label }}>WEST</span>
            <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 12, color: RG.teal }}>1,240</span>
          </div>
        </div>
        <div className="pq-scroll" style={{ display: "flex", alignItems: "center", gap: 6, overflowX: "auto" }}>
          {westMelds.map((m, g) => (
            <div key={g} style={{ display: "flex", gap: 2 }}>{m.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={20} />)}</div>
          ))}
        </div>
      </div>

      {/* CENTER FELT — discard pile + dragon watermark + scroll chevron */}
      <div style={{
        position: "absolute", left: 112, top: 80, width: 588, height: 150, zIndex: 3,
        background: "radial-gradient(ellipse 62% 90% at 50% 46%, #3d3d3d 0%, #2c2c2c 46%, #202020 74%, #191919 100%)",
        border: "2px solid #a05a24", borderRadius: 12, boxShadow: "inset 0 0 34px rgba(0,0,0,0.75)", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 8
      }}>
        <img src={DRAGON_GREEN_SRC} alt="Poquito" draggable={false} style={{ position: "absolute", left: "50%", top: "47%", transform: "translate(-50%,-50%)", height: 118, width: "auto", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", alignContent: "center", maxHeight: "100%", overflow: "hidden" }}>
          {pool.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={discardW} raised={i === pool.length - 1} />)}
        </div>
        <div style={{ position: "absolute", right: 12, bottom: 4, color: "#6a6a6a", fontSize: 18, lineHeight: 1 }}>⌄</div>
        {/* EXCHANGE toggle (top-right of felt) */}
        <button onClick={() => { pock("select"); setExchange((v) => !v); }} className="pq-press" style={{ position: "absolute", top: 10, right: 12, zIndex: 5, display: "flex", alignItems: "center", gap: 8, height: 28, padding: "0 6px 0 12px", borderRadius: 999, background: "rgba(10,10,10,0.55)", border: `1.5px solid ${RG.panelBorder}`, cursor: "pointer" }}>
          <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.12em", color: RG.cream }}>EXCHANGE</span>
          <span style={{ width: 34, height: 18, borderRadius: 999, background: exchange ? PQ.rust : "#4a4d50", position: "relative", transition: "background .2s" }}>
            <span style={{ position: "absolute", top: 2, left: exchange ? 18 : 2, width: 14, height: 14, borderRadius: "50%", background: "#f3ecdc", transition: "left .2s" }} />
          </span>
        </button>
      </div>

      {/* YOUR EXPOSED AREA (rust border + glow on your turn) — extends to end of buttons */}
      <div style={{
        position: "absolute", left: 108, top: 234, width: 592, height: 66, zIndex: 4,
        border: `2px solid ${expBorder}`, borderRadius: 12, boxShadow: expShadow
      }} />
      {/* exposed tiles inside the area: flowers group + centred rust vertical divider + exposed melds */}
      <div className="pq-scroll" style={{ position: "absolute", left: 118, top: 240, width: 412, height: 54, zIndex: 5, display: "flex", alignItems: "center", gap: 6, overflowX: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 2 }}>{yourFlowers[0].map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={17} />)}</div>
          <div style={{ display: "flex", gap: 2 }}>{yourFlowers[1].map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={17} />)}</div>
        </div>
        <span style={{ width: 1.5, height: 40, background: PQ.rust, borderRadius: 2, flexShrink: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          {yourExposed.map((t, i) => <Tile key={i} suit={t.suit} value={t.value} w={22} />)}
        </div>
      </div>

      {/* MAHJONG / LET'S GO + CLAIM / DIB DAB + DRAW / WALLING */}
      <button onClick={() => { if (exchange) { setExchange(false); resetTimer(); } else if (mahjongReady) setWon(true); }} className={(!exchange && mahjongReady) ? "pq-mahjong-glow" : "pq-press"} style={{
        position: "absolute", left: 546, top: 234, width: 90, height: 66, zIndex: 6,
        background: PQ.rust, border: `2px solid ${PQ.rust}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 3px 8px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.25)", cursor: "pointer"
      }}>
        <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: exchange ? 18 : 20, color: "#fbf3e4", textAlign: "center", lineHeight: 1.05, letterSpacing: "0.02em" }}>{exchange ? "Let's Go" : "Mahjong"}</span>
      </button>
      {exchange ? (
        <>
          <button onClick={() => { pock("select"); setDibDab((n) => Math.min(3, n + 1)); }} className="pq-press" style={{
            position: "absolute", left: 642, top: 234, width: 58, height: 31, zIndex: 6,
            background: RG.btn, border: `1.5px solid ${RG.rust}`, borderRadius: 9, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, cursor: "pointer"
          }}>
            <span style={{ fontFamily: OSW, fontSize: 10.5, letterSpacing: "0.06em", color: RG.rust, fontWeight: 700 }}>DIB DAB</span>
            <span style={{ display: "flex", gap: 3 }}>{[0, 1, 2].map((i) => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i < dibDab ? PQ.rust : "rgba(196,122,52,0.3)" }} />)}</span>
          </button>
          <button onClick={() => { pock("select"); setWalling((n) => Math.min(3, n + 1)); }} className="pq-press" style={{
            position: "absolute", left: 642, top: 269, width: 58, height: 31, zIndex: 6,
            background: RG.btn, border: `1.5px solid ${RG.rust}`, borderRadius: 9, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, cursor: "pointer"
          }}>
            <span style={{ fontFamily: OSW, fontSize: 10.5, letterSpacing: "0.06em", color: RG.rust, fontWeight: 700 }}>WALLING</span>
            <span style={{ display: "flex", gap: 3 }}>{[0, 1, 2].map((i) => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i < walling ? PQ.rust : "rgba(196,122,52,0.3)" }} />)}</span>
          </button>
        </>
      ) : (
        <>
          <button onClick={claim} disabled={!actions.length} className={actions.length ? "pq-press" : ""} style={{
            position: "absolute", left: 642, top: 234, width: 58, height: 31, zIndex: 6,
            background: RG.btn, border: `1.5px solid ${actions.length ? RG.rust : "rgba(86,91,95,0.5)"}`, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: actions.length ? "pointer" : "not-allowed"
          }}>
            <span style={{ fontFamily: OSW, fontSize: 13, letterSpacing: "0.1em", color: RG.rust, fontWeight: 700 }}>CLAIM</span>
          </button>
          <button onClick={drawTile} disabled={!!drawn} className={drawn ? "" : "pq-press"} style={{
            position: "absolute", left: 642, top: 269, width: 58, height: 31, zIndex: 6,
            background: RG.btn, border: `1.5px solid ${drawn ? "rgba(86,91,95,0.5)" : RG.rust}`, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: drawn ? "not-allowed" : "pointer"
          }}>
            <span style={{ fontFamily: OSW, fontSize: 13, letterSpacing: "0.1em", color: RG.rust, fontWeight: 700 }}>DRAW</span>
          </button>
        </>
      )}

      {/* MENU + RULES (bottom-left) — small icons per reference: hamburger + question mark */}
      <div style={{ position: "absolute", left: 16, bottom: 8, display: "flex", gap: 14, zIndex: 6 }}>
        <button onClick={() => setMenuOpen(true)} className="pq-press" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2.5, width: 13 }}><span style={{ height: 2, background: RG.menuText, borderRadius: 2 }} /><span style={{ height: 2, background: RG.menuText, borderRadius: 2 }} /><span style={{ height: 2, background: RG.menuText, borderRadius: 2 }} /></div>
          <span style={{ fontFamily: OSW, fontSize: 8, letterSpacing: "0.1em", color: RG.menuText }}>MENU</span>
        </button>
        <button onClick={() => onExit && onExit("info")} className="pq-press" style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={RG.menuText} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.2 9a2.8 2.8 0 015.6.3c0 1.9-2.8 2.5-2.8 4.2" /><circle cx="12" cy="17.6" r="0.5" fill={RG.menuText} stroke="none" /></svg>
          <span style={{ fontFamily: OSW, fontSize: 8, letterSpacing: "0.1em", color: RG.menuText }}>RULES</span>
        </button>
      </div>

      {/* BOTTOM HAND (You — East, active): avatar + tag + 13 tiles + DRAWN */}
      <div style={{ position: "absolute", left: 110, bottom: 6, display: "flex", alignItems: "center", gap: 6, zIndex: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, flexShrink: 0, marginRight: 4 }}>
          <span style={{ width: 42, height: 42, borderRadius: "50%", overflow: "hidden", border: `2px solid ${RG.youBlue}`, boxShadow: "0 0 0 3px rgba(58,95,134,.25)", display: "block" }}>
            <img src={PE_AV} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </span>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: OSW, fontSize: 9, letterSpacing: "0.12em", color: RG.label }}>EAST</span>
            <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 13, color: RG.youGold }}>50,000</span>
            <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 11, color: "#eef0ea", whiteSpace: "nowrap" }}>You <span style={{ color: "#c88a3a", fontSize: 9 }}>FIREFLY III</span></span>
          </div>
        </div>
        <div className="pq-scroll" style={{ display: "flex", alignItems: "flex-end", gap: 3, overflowX: "auto", maxWidth: 430 }}>
          {hand.map((t, i) => (
            <Tile key={i} suit={t.suit} value={t.value} w={30} selected={sel === i} raised={sel === i}
              onTap={() => { if (sel === i) doDiscard(i); else setSel(i); }} />
          ))}
        </div>
        {drawn && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginLeft: 6, flexShrink: 0 }}>
            <div style={{ border: `2px solid #6b87aa`, borderRadius: 7, padding: 1 }}>
              <Tile suit={drawn.suit} value={drawn.value} w={28} selected={sel === -1} raised={false}
                onTap={() => { if (sel === -1) doDiscard(-1); else setSel(-1); }} />
            </div>
            <span style={{ fontFamily: OSW, fontSize: 7.5, letterSpacing: "0.1em", color: RG.labelDim }}>DRAWN</span>
          </div>
        )}
      </div>

      {/* TIMER + SORT (bottom-right) */}
      <div style={{ position: "absolute", right: 12, bottom: 8, width: 96, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, zIndex: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={RG.orange} strokeWidth="2"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2" /><path d="M9 2h6" /></svg>
          <span style={{ fontFamily: OSW, fontWeight: 700, fontSize: 15, color: RG.orange }}>0:{String(secs).padStart(2, "0")}</span>
        </div>
        <button onClick={sortHand} className="pq-press" style={{ width: 96, height: 44, background: RG.btn, border: `1.5px solid ${RG.panelBorder}`, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", gap: 7, cursor: "pointer" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={RG.btnText} strokeWidth="2" strokeLinecap="round"><path d="M4 6h13M4 12h9M4 18h5" /><path d="M18 15l3 3 3-3M21 18V9" /></svg>
          <span style={{ fontFamily: OSW, fontSize: 14, letterSpacing: "0.1em", color: RG.btnText, fontWeight: 600 }}>SORT</span>
        </button>
      </div>

      {/* call tray (chow/pong/kong) — floats above the hand when a tile is selected */}
      {actions.length > 0 && (
        <div style={{ position: "absolute", left: "50%", bottom: 60, transform: "translateX(-50%)", zIndex: 14 }}>
          <ActionTray actions={actions} onAct={doMeld} />
        </div>
      )}

      {/* MENU (Game Settings submenu + Rules) */}
      {menuOpen && (
        <div className="pq-modal-backdrop" onClick={() => setMenuOpen(false)} style={{ position: "absolute", inset: 0, zIndex: 25, background: "rgba(10,28,18,0.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: 28 }}>
          <div onClick={(e) => e.stopPropagation()} className="pq-pop-in" style={{ width: 320, maxHeight: "86%", overflowY: "auto", background: PQ.off, borderRadius: 20, boxShadow: "0 24px 60px -20px rgba(0,0,0,0.6)" }}>
            <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${PQ.line}` }}>
              <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.ink }}>Menu</span>
              <button onClick={() => setMenuOpen(false)} className="pq-press" style={{ width: 32, height: 32, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={16} stroke={PQ.ink} sw={1.9} /></button>
            </div>
            <div style={{ padding: "6px 18px 4px", fontFamily: HERO, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkFaint, marginTop: 8 }}>Game Settings</div>
            {["Tile Configuration", "Turn Timer", "Sound", "Haptic", "Volume", "Layout"].map((s) => (
              <button key={s} onClick={() => pock("select")} className="pq-press" style={{ ...menuRow, display: "flex", alignItems: "center", justifyContent: "space-between" }}>{s}<Icon name="chevR" size={16} stroke={PQ.inkFaint} /></button>
            ))}
            <div style={{ padding: "12px 18px 4px", fontFamily: HERO, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkFaint }}>More</div>
            <button onClick={() => { setMenuOpen(false); onExit && onExit("info"); }} className="pq-press" style={menuRow}>Rules</button>
            <button onClick={() => { setMenuOpen(false); onExit && onExit(); }} className="pq-press" style={menuRow}>Leave table</button>
            <button onClick={() => { setMenuOpen(false); onExit && onExit("logout"); }} className="pq-press" style={{ ...menuRow, color: PQ.rust, borderBottom: "none" }}>Log out</button>
          </div>
        </div>
      )}

      {/* win celebration (light, in-flow — not a separate end screen) */}
      {won && (
        <div className="pq-modal-backdrop" onClick={() => setWon(false)} style={{
          position: "absolute", inset: 0, zIndex: 30,
          background: "rgba(10,28,18,0.72)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 28
        }}>
          <div className="pq-pop-in" style={{ textAlign: "center" }}>
            <div className="pq-mahjong-glow" style={{
              width: 96, height: 96, margin: "0 auto", borderRadius: "50%",
              background: `linear-gradient(160deg, ${GOLD_SOFT}, ${GOLD} 55%, ${GOLD_DEEP})`, display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid #EBCE81"
            }}>
              <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 30, color: "#3A2A06" }}>萬</span>
            </div>
            <div style={{ marginTop: 18, fontFamily: HERO, fontWeight: 700, fontSize: 30, letterSpacing: "0.08em", textTransform: "uppercase", color: PQ.off }}>Mahjong!</div>
            <div style={{ marginTop: 8, fontSize: 13.5, color: "rgba(249,242,228,0.7)" }}>Self-drawn · East Round · +120 points</div>
            <button onClick={() => { setWon(false); onExit && onExit("results"); }} className="pq-press" style={{
              marginTop: 20, height: 46, padding: "0 26px", borderRadius: 13,
              background: PQ.rust, border: "none", color: PQ.off, fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer"
            }}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Tile, Fan, Meld, TimerArc, Nameplate, Compass, ActionTray, MahjongButton, TickScore, GameScreen });


/* ===== pocket-dragon-extra.jsx (new screens) ===== */
// pocket-dragon-extra.jsx — NEW screens extending the Pocket Dragon journey.
// Built strictly with the existing PQ system (PQ, HERO, Icon, HIcon, Btn, Field,
// Toggle, Steps, TopBar, RustRing, pock) defined earlier in the bundle. Onboarding
// and Home are untouched. Exports all screens to window.

const PE_AV = (typeof window !== "undefined" && window.__resources && window.__resources.girl) || "assets/avatars/poquito-girl.png";

// ── extra line icons (same 24px stroke style as Icon) ────────────
function XIcon({ name, size = 20, stroke = "currentColor", sw = 1.7, style }) {
  const p = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    search: <g {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /></g>,
    bell: <g {...p}><path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 20a2 2 0 004 0" /></g>,
    chevR: <g {...p}><path d="M9 5l7 7-7 7" /></g>,
    copy: <g {...p}><rect x="8.5" y="8.5" width="11" height="11" rx="2.5" /><path d="M5.5 15.5H5a1.5 1.5 0 01-1.5-1.5V5A1.5 1.5 0 015 3.5h9A1.5 1.5 0 0115.5 5v.5" /></g>,
    share: <g {...p}><circle cx="6" cy="12" r="2.4" /><circle cx="17.5" cy="6" r="2.4" /><circle cx="17.5" cy="18" r="2.4" /><path d="M8.1 10.9l7.3-3.7M8.1 13.1l7.3 3.7" /></g>,
    trophy: <g {...p}><path d="M7 4.5h10v4a5 5 0 01-10 0z" /><path d="M7 6.5H4.5a2.5 2.5 0 002.5 2.5M17 6.5h2.5a2.5 2.5 0 01-2.5 2.5" /><path d="M12 13.5v3M9 20h6M9.5 20a2.5 2.5 0 015 0" /></g>,
    spark: <g {...p}><path d="M12 4l1.8 4.7L18.5 10l-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.3z" /></g>,
    card: <g {...p}><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18" /></g>,
    doc: <g {...p}><path d="M7 3.5h7l4 4V20a.5.5 0 01-.5.5h-10A.5.5 0 016 20V4a.5.5 0 01.5-.5z" /><path d="M14 3.5V8h4" /></g>,
    arrowUp: <g {...p}><path d="M12 19.5V5M6 11l6-6 6 6" /></g>,
    shield: <g {...p}><path d="M12 3.5l7 2.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9.2 12l2 2 3.6-4" /></g>,
    help: <g {...p}><circle cx="12" cy="12" r="8.5" /><path d="M9.6 9.5a2.4 2.4 0 114 1.8c-.9.7-1.6 1.2-1.6 2.2" /><circle cx="12" cy="16.6" r="0.3" fill={stroke} stroke="none" /></g>,
    globe: <g {...p}><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.4 2.3 2.4 14.7 0 17M12 3.5c-2.4 2.3-2.4 14.7 0 17" /></g>,
    timer: <g {...p}><circle cx="12" cy="13" r="7.5" /><path d="M12 13V9M9.5 3.5h5" /></g>,
    wa: <g {...p}><path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.6.8-1.1l-1.4-1-1 .8a4 4 0 01-2.4-2.4l.8-1-1-1.4C9.6 8.5 9 8.9 9 9.5z" fill={stroke} stroke="none" /></g>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", ...style }}>{paths[name]}</svg>;
}

function Star({ on, size = 22 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={on ? PQ.rust : "none"} stroke={on ? PQ.rust : PQ.inkFaint} strokeWidth="1.7" strokeLinejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 17l-5.2 2.7 1-5.9L3.5 9.7l5.9-.9z" /></svg>;
}

// ── shared overlay shell (back header + scroll + optional footer) ─
function Shell({ title, sub, icon, onBack, right, footer, children, pad = true }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 6px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 40 }}>
          {onBack ? <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div> : <div />}
          {right || <div />}
        </div>
        {title && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "2px 0 0" }}>
            {icon && <HIcon name={icon} size={24} stroke={PQ.rust} sw={1.8} />}
            <h1 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{title}</h1>
          </div>
        )}
        {sub && <p style={{ margin: "9px 0 0", fontSize: 13.5, lineHeight: 1.5, color: PQ.inkSoft }}>{sub}</p>}
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: pad ? "16px 22px 24px" : 0, display: "flex", flexDirection: "column", gap: 20 }}>{children}</div>
      {footer && <div style={{ padding: "14px 22px 26px", borderTop: `1px solid ${PQ.line}`, background: PQ.off, flexShrink: 0 }}>{footer}</div>}
    </div>
  );
}

function SectionLabel({ children, hint }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.inkSoft }}>{children}</div>
      {hint && <div style={{ fontFamily: HERO, fontSize: 13, fontWeight: 700, color: PQ.rust }}>{hint}</div>}
    </div>
  );
}

function Seg({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 4, padding: 4, borderRadius: 13, border: `1.5px solid ${PQ.line}` }}>
      {options.map((o) => {
        const on = o.value === value;
        return <button key={o.value} onClick={() => { pock("select"); onChange(o.value); }} className="pq-press" style={{
          flex: 1, height: 38, borderRadius: 9, border: "none", cursor: "pointer",
          background: on ? PQ.rust : "transparent", color: on ? PQ.off : PQ.inkSoft,
          fontFamily: HERO, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.06em", textTransform: "uppercase"
        }}>{o.label}</button>;
      })}
    </div>
  );
}

function Group({ children }) {
  return <div style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, overflow: "hidden" }}>{children}</div>;
}
function Row({ icon, label, value, onClick, danger, last, plain }) {
  return (
    <button onClick={onClick} className="pq-press" style={{
      width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "15px 16px", background: PQ.off,
      border: "none", borderBottom: (last || plain) ? "none" : "1px solid rgba(20,51,34,0.07)", cursor: "pointer", textAlign: "left"
    }}>
      {icon && <XIcon name={icon} size={19} stroke={danger ? PQ.rust : PQ.inkSoft} />}
      <span style={{ flex: 1, fontFamily: HERO, fontWeight: 600, fontSize: 14.5, color: danger ? PQ.rust : PQ.ink }}>{label}</span>
      {value && <span style={{ fontSize: 13, color: PQ.inkFaint }}>{value}</span>}
      <XIcon name="chevR" size={18} stroke={danger ? PQ.rust : PQ.inkFaint} />
    </button>
  );
}

function Avi({ ini, size = 54, ring }) {
  return <span style={{
    width: size, height: size, flexShrink: 0, borderRadius: "50%", background: "rgba(20,51,34,0.08)",
    border: `${ring ? 2 : 1.5}px solid ${ring ? PQ.rust : PQ.line}`, display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: HERO, fontWeight: 700, fontSize: size * 0.3, color: PQ.green
  }}>{ini}</span>;
}

// ═══════════════ EDIT PROFILE (bottom sheet) — only phone editable ═══════════════
function EditProfileSheet({ onClose }) {
  const [phone, setPhone] = React.useState("98765 43210");
  const [city, setCity] = React.useState("Mumbai");
  const ReadRow = ({ label, value }) => (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkFaint, marginBottom: 7 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px", borderRadius: 13, background: "rgba(20,51,34,0.04)", border: `1.5px solid ${PQ.line}`, fontFamily: HERO, fontSize: 15, color: PQ.inkFaint }}>{value}</div>
    </div>
  );
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 65, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-modal-sheet" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: "14px 22px 30px" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Edit Profile</h2>
          <button onClick={onClose} className="pq-press" style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18} stroke={PQ.ink} sw={1.9} /></button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <ReadRow label="Username" value="avachen88" />
          <ReadRow label="Email" value="ava.chen@email.com" />
          <Field icon="phone" label="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="numeric" prefix="+91" />
          <CitySelect value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div style={{ marginTop: 14, fontSize: 12, color: PQ.inkFaint, lineHeight: 1.45 }}>You can update your phone number and city here.</div>
        <div style={{ marginTop: 18 }}><Btn variant="primary" onClick={onClose}>Save changes</Btn></div>
      </div>
    </div>
  );
}

// ═══════════════ CHANGE PASSWORD (bottom sheet) ═══════════════
function ChangePasswordSheet({ onClose }) {
  const [cur, setCur] = React.useState("");
  const [next, setNext] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [sc, setSc] = React.useState(false);
  const [sn, setSn] = React.useState(false);
  const [scf, setScf] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const match = confirm.length > 0 && next === confirm;
  const mismatch = confirm.length > 0 && next !== confirm;
  const valid = cur.length > 0 && next.length > 0 && next === confirm;
  const save = () => { if (!valid) return; pock("select"); setDone(true); setTimeout(onClose, 1100); };
  const eye = (on, fn) => <span onClick={fn} style={{ cursor: "pointer" }}><Icon name={on ? "eyeoff" : "eye"} size={19} stroke={PQ.inkFaint} /></span>;
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 66, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-modal-sheet" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: "14px 22px 30px" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
        {done ? (
          <div style={{ padding: "16px 0 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center" }}>
            <span style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(31,168,85,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1FA855" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span>
            <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>Password updated</div>
          </div>
        ) : (<>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Change Password</h2>
            <button onClick={onClose} className="pq-press" style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18} stroke={PQ.ink} sw={1.9} /></button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field icon="lock" label="Current password" type={sc ? "text" : "password"} value={cur} onChange={(e) => setCur(e.target.value)} placeholder="Enter current password" right={eye(sc, () => setSc(v => !v))} />
            <Field icon="lock" label="New password" type={sn ? "text" : "password"} value={next} onChange={(e) => setNext(e.target.value)} placeholder="Enter new password" right={eye(sn, () => setSn(v => !v))} />
            <div>
              <Field icon="lock" label="Confirm new password" type={scf ? "text" : "password"} value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Re-enter new password" state={mismatch ? "error" : match ? "valid" : "idle"} right={eye(scf, () => setScf(v => !v))} />
              {match && <Helper state="valid">Passwords match</Helper>}
              {mismatch && <Helper state="error">Passwords don't match</Helper>}
            </div>
          </div>
          <div style={{ marginTop: 22 }}><Btn variant="primary" disabled={!valid} onClick={save}>Update password</Btn></div>
        </>)}
      </div>
    </div>
  );
}

// ═══════════════ FAQ (bottom sheet) ═══════════════
function FaqSheet({ onClose }) {
  const [open, setOpen] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const faqs = [
    ["Do I need to create a new account on the website?", "No. Log in with the same username and password as the App."],
    ["Can I still play without subscribing?", "Yes! New accounts receive a free 2-week trial with full access to the app. After the trial ends, you can continue playing by subscribing to our monthly or annual plans."],
    ["What is Traditional Mahjong?", "Traditional Mahjong is a four-player tile-based game where players build a complete winning hand (of 14 tiles) by forming specific tile combinations. The traditional format includes variations such as Passport (East Wind Round), Goulash (West Wind Round), and more."],
    ["What happens if a table doesn't fill up?", "If a player has joined a table and there are one or more seats still open, the host may choose to begin the game with bots."],
    ["Will my subscription auto-renew?", "Yes. Subscriptions are set to auto-renew by default, but you can turn off auto-renew at any time through your account settings."],
    ["Can I switch between monthly and annual plans?", "Yes. You can switch from a monthly plan to an annual plan at any time. Your annual subscription will begin once your current monthly billing period ends."],
    ["Can I customize my gameplay experience?", "Yes. In Practice Mode and Create a Table Mode, you can customize game variants, number of games, and turn timer settings to match your preferred style of play."],
    ["How do I report bugs or unfair behavior?", "You may contact us at [To Be Filled]."],
    ["What happens to my progress if I switch devices?", "Simply log in with the same account credentials on your new device to continue with your current rank, stats, and progress."],
  ];
  const shown = expanded ? faqs : faqs.slice(0, 3);
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 66, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-modal-sheet" style={{ width: "100%", maxHeight: "80%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, display: "flex", flexDirection: "column" }}>
        <div style={{ flexShrink: 0, padding: "14px 22px 4px" }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>FAQ</h2>
            <button onClick={onClose} className="pq-press" style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18} stroke={PQ.ink} sw={1.9} /></button>
          </div>
        </div>
        <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "6px 22px 28px" }}>
          {shown.map(([q, a], i) => (
            <div key={i} style={{ borderBottom: `1px solid ${PQ.line}` }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="pq-press" style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "16px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                <span style={{ flex: 1, fontFamily: HERO, fontWeight: 700, fontSize: 14, color: PQ.ink }}>{q}</span>
                <span style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }}><Icon name="chevD" size={18} stroke={PQ.inkFaint} /></span>
              </button>
              {open === i && <div style={{ padding: "0 0 16px", fontSize: 13.5, lineHeight: 1.55, color: PQ.inkSoft }}>{a}</div>}
            </div>
          ))}
          {!expanded && faqs.length > 3 && (
            <button onClick={() => setExpanded(true)} className="pq-press" style={{ width: "100%", padding: "16px 0 4px", background: "none", border: "none", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", color: PQ.rust }}>View more</button>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════ CONFIRM (logout / delete account) ═══════════════
function ConfirmSheet({ kind, onClose, onConfirm }) {
  const isDelete = kind === "delete";
  const body = isDelete
    ? "Deleting your account is permanent and cannot be undone. Your profile, game history, statistics, friends, achievements, and all associated data will be permanently deleted.\n\nAre you sure?"
    : "You'll need to sign in again to get back to your tables";
  const cta = isDelete ? "Yes, I'm sure" : "Log out";
  const cancel = isDelete ? "No, I changed my mind" : "Cancel";
  const title = isDelete ? "Delete account" : "Log out";
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 70, background: "rgba(20,51,34,0.5)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-pop-in" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: "14px 22px 30px" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
        <span style={{ width: 54, height: 54, borderRadius: "50%", background: isDelete ? "rgba(99,2,6,0.1)" : "rgba(182,90,47,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          {isDelete
            ? <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#630206" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14M9 7V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5v2M7 7l1 12.5a1.5 1.5 0 001.5 1.4h5A1.5 1.5 0 0016 19.5L17 7" /></svg>
            : <HIcon name="leave" size={24} stroke={PQ.rust} sw={1.9} />}
        </span>
        <h2 style={{ margin: 0, textAlign: "center", fontFamily: HERO, fontWeight: 700, fontSize: 19, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>{title}</h2>
        <p style={{ margin: "10px 0 22px", textAlign: "center", fontSize: 14, lineHeight: 1.5, color: PQ.inkSoft, whiteSpace: "pre-line" }}>{body}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <button onClick={() => { pock("select"); onConfirm(); }} className="pq-press" style={{ height: 54, borderRadius: 15, border: "none", cursor: "pointer", background: isDelete ? "#630206" : `linear-gradient(160deg, ${PQ.rustSoft}, ${PQ.rust} 52%, ${PQ.rustDeep})`, color: PQ.off, fontFamily: HERO, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{cta}</button>
          <button onClick={onClose} className="pq-press" style={{ height: 54, borderRadius: 15, border: `1.5px solid ${PQ.lineMid}`, background: "transparent", cursor: "pointer", color: PQ.ink, fontFamily: HERO, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{cancel}</button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════ PROFILE (tab content) ═══════════════
function ProfileScreen({ onFind, onOther, onLogout, onNotifications, onSubscriptions }) {
  const [seg, setSeg] = React.useState("season");
  const [menu, setMenu] = React.useState(false);
  const [picker, setPicker] = React.useState(false);
  const [avatar, setAvatar] = React.useState(1);
  const [edit, setEdit] = React.useState(false);
  const [pwOpen, setPwOpen] = React.useState(false);
  const [faqOpen, setFaqOpen] = React.useState(false);
  const [subOpen, setSubOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(null); // "logout" | "delete" | null
  const stats = seg === "season"
    ? [["42", "Games played"], ["61%", "Win rate"], ["486", "Highest score"], ["2nd", "Avg finish"]]
    : [["1,204", "Games played"], ["58%", "Win rate"], ["512", "Highest score"]];
  const positions = [["1st", "38%"], ["2nd", "27%"], ["3rd", "21%"], ["4th", "14%"]];
  const favs = [["Mei L.", 2, true], ["Arjun P.", 1, true], ["Priya R.", 0, false], ["Sam K.", 1, true]];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 24, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Profile</div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button onClick={onNotifications} className="pq-press" style={{ position: "relative", width: 42, height: 42, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill={PQ.ink} stroke="none"><path d="M12 2.6a6 6 0 00-6 6c0 4.5-1.8 5.7-1.8 5.7-.4.3-.2 1 .3 1h15c.5 0 .7-.7.3-1 0 0-1.8-1.2-1.8-5.7a6 6 0 00-6-6z" /><path d="M10 19.5a2 2 0 004 0z" /></svg>
            <span style={{ position: "absolute", top: 8, right: 9, width: 8, height: 8, borderRadius: "50%", background: PQ.rust, border: `1.5px solid ${PQ.off}` }} />
          </button>
          <button onClick={() => setMenu(true)} className="pq-press" style={{ width: 42, height: 42, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke={PQ.ink} strokeWidth="2.6" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 22, margin: "0 -4px", padding: "2px 4px 8px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <button onClick={() => { pock("select"); setPicker(true); }} className="pq-press" style={{ position: "relative", width: 96, height: 96, padding: 0, border: "none", background: "none", cursor: "pointer" }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", overflow: "hidden", background: avatar === "default" ? "rgba(20,51,34,0.06)" : AVATARS[avatar].bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {avatar === "default"
                ? <svg width="46%" height="46%" viewBox="0 0 24 24" fill={PQ.inkFaint} stroke="none"><circle cx="12" cy="8" r="4" /><path d="M4 20.5a8 8 0 0116 0z" /></svg>
                : <img src={avatarSrc(avatar)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(avatar)})`, transformOrigin: "center 40%" }} />}
            </span>
            <span style={{ position: "absolute", right: -1, bottom: -1, width: 30, height: 30, borderRadius: "50%", background: PQ.rust, border: `2.5px solid ${PQ.off}`, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={16} stroke={PQ.off} sw={2.2} /></span>
          </button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 21, letterSpacing: "0.02em", textTransform: "uppercase", color: PQ.ink }}>avachen88</div>
            <div style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <HIcon name="crown" size={14} stroke={PQ.rust} sw={1.8} /><span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", color: PQ.ink, whiteSpace: "nowrap" }}>FIREFLY I</span>
              </span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: PQ.inkFaint, flexShrink: 0 }} />
              <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.04em", color: PQ.green, whiteSpace: "nowrap" }}>100 / 200 RP</span>
            </div>
          </div>
        </div>

        <Seg options={[{ label: "Current Season", value: "season" }, { label: "Career", value: "career" }]} value={seg} onChange={setSeg} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {stats.map(([v, l]) => (
            <div key={l} style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, padding: "16px 16px 14px", background: PQ.off }}>
              <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 26, color: PQ.green, lineHeight: 1 }}>{v}</div>
              <div style={{ marginTop: 8, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkFaint }}>{l}</div>
            </div>
          ))}
        </div>

        {seg === "career" && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 12 }}>Position Stats</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {positions.map(([pos, pct]) => (
                <div key={pos} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14, padding: "12px 16px", background: PQ.off }}>
                  <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.ink }}>{pos}</span>
                  <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 18, color: PQ.rust }}>{pct}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.inkSoft }}>My Peeps</div>
            <button onClick={onFind} className="pq-press" style={{ background: "none", border: "none", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: PQ.rust }}>Show all</button>
          </div>
          <div className="pq-scroll" style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 4 }}>
            {favs.map(([name, av, online]) => (
              <button key={name} onClick={onOther} className="pq-press" style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 7, width: 60, background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ position: "relative", width: 54, height: 54, flexShrink: 0 }}>
                  <span style={{ display: "block", width: 54, height: 54, borderRadius: "50%", overflow: "hidden", background: AVATARS[av].bg, border: `1.5px solid ${PQ.line}` }}>
                    <img src={avatarSrc(av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(av)})`, transformOrigin: "center 40%" }} />
                  </span>
                  {online && <span style={{ position: "absolute", top: -1, right: -1, width: 13, height: 13, borderRadius: "50%", background: "#1FA855", border: `2px solid ${PQ.off}` }} />}
                </span>
                <span style={{ fontFamily: HERO, fontSize: 11, fontWeight: 600, color: PQ.inkSoft, whiteSpace: "nowrap" }}>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {menu && (
        <div onClick={() => setMenu(false)} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 60, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div onClick={(e) => e.stopPropagation()} className="pq-modal-sheet" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: "14px 22px 30px" }}>
            <div style={{ width: 40, height: 4, borderRadius: 999, background: PQ.line, margin: "0 auto 16px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Row label="Edit profile" plain onClick={() => { setMenu(false); setEdit(true); }} />
              <Row label="Change password" plain onClick={() => { setMenu(false); setPwOpen(true); }} />
              <Row label="Subscription" plain onClick={() => { setMenu(false); setSubOpen(true); }} />
              <Row label="FAQ" plain onClick={() => { setMenu(false); setFaqOpen(true); }} />
              <Row label="Log out" plain onClick={() => { setMenu(false); setConfirm("logout"); }} />
              <Row label="Delete account" plain last onClick={() => { setMenu(false); setConfirm("delete"); }} />
            </div>
          </div>
        </div>
      )}

      {picker && <AvatarModal value={avatar} onClose={() => setPicker(false)} onConfirm={(i) => { setAvatar(i); setPicker(false); }} />}

      {edit && <EditProfileSheet onClose={() => setEdit(false)} />}
      {pwOpen && <ChangePasswordSheet onClose={() => setPwOpen(false)} />}
      {subOpen && <SubscriptionSheet onClose={() => setSubOpen(false)} />}
      {faqOpen && <FaqSheet onClose={() => setFaqOpen(false)} />}
      {confirm && <ConfirmSheet kind={confirm} onClose={() => setConfirm(null)} onConfirm={() => { const k = confirm; setConfirm(null); if (k === "logout") onLogout && onLogout(); else onLogout && onLogout(); }} />}
    </div>
  );
}

// ═══════════════ SEARCH PLAYERS (overlay) ═══════════════
function SearchScreen({ onBack, onOther }) {
  const [q, setQ] = React.useState("mei");
  const [fav, setFav] = React.useState({ s1: false, s2: false, s3: false });
  const all = [["s1", "Mei Lin", "JADE I", "ML"], ["s2", "Meilani K.", "BAMBOO II", "MK"], ["s3", "Mei-Anne", "JADE III", "MA"], ["s4", "Arjun P.", "JADE III", "AP"]];
  const res = all.filter((r) => r[1].toLowerCase().includes(q.toLowerCase().trim()));
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "58px 20px 10px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 11, height: 48, padding: "0 15px", borderRadius: 13, border: `1.5px solid ${PQ.lineMid}` }}>
          <XIcon name="search" size={19} stroke={PQ.inkSoft} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search username" style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: HERO, fontSize: 16, color: PQ.ink, minWidth: 0 }} />
        </div>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "8px 20px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
        {res.length === 0 ? (
          <div style={{ marginTop: 60, display: "flex", flexDirection: "column", alignItems: "center", gap: 14, textAlign: "center" }}>
            <span style={{ width: 64, height: 64, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}><XIcon name="search" size={26} stroke={PQ.inkFaint} /></span>
            <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>No players found</div>
            <div style={{ fontSize: 13, color: PQ.inkSoft, maxWidth: 220 }}>Try a different username.</div>
          </div>
        ) : (<>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PQ.inkFaint, padding: "4px 2px" }}>{res.length} player{res.length > 1 ? "s" : ""}</div>
          {res.map(([id, name, tier, ini]) => (
            <div key={id} style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, background: PQ.off }}>
              <button onClick={onOther} className="pq-press" style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
                <Avi ini={ini} size={44} />
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.ink }}>{name}</span>
                  <span style={{ display: "block", marginTop: 2, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: PQ.inkFaint }}>{tier}</span>
                </span>
              </button>
              <button onClick={() => { pock("select"); setFav((f) => ({ ...f, [id]: !f[id] })); }} className="pq-press" style={{ width: 40, height: 40, border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Star on={!!fav[id]} /></button>
            </div>
          ))}
        </>)}
      </div>
    </div>
  );
}

// ═══════════════ OTHER PLAYER PROFILE (overlay, read-only) ═══════
function OtherProfileScreen({ onBack }) {
  const [fav, setFav] = React.useState(true);
  return (
    <Shell onBack={onBack}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 26, gap: 16 }}>
        <span style={{ position: "relative", width: 96, height: 96 }}>
          <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `2.5px solid ${PQ.rust}` }} />
          <span style={{ position: "absolute", inset: 5, borderRadius: "50%", overflow: "hidden", background: AVATARS[2].bg }}>
            <img src={avatarSrc(2)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(2)})`, transformOrigin: "center 40%" }} />
          </span>
        </span>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.02em", textTransform: "uppercase", color: PQ.ink }}>Mei Lin</div>
          <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <HIcon name="crown" size={14} stroke={PQ.rust} sw={1.8} /><span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", color: PQ.ink }}>JADE I</span>
          </div>
        </div>
        <button onClick={() => { pock("select"); setFav((v) => !v); }} className="pq-press" style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 9, height: 50, padding: "0 24px", borderRadius: 14, border: `1.5px solid ${PQ.rust}`, background: fav ? "rgba(182,90,47,0.08)" : "transparent", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.rust }}>
          <Star on={fav} size={20} />{fav ? "Favourited" : "Add favourite"}
        </button>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
          {[["128", "Games played"], ["54%", "Win rate"], ["472", "Highest score"], ["2nd", "Avg finish"]].map(([v, l]) => (
            <div key={l} style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, padding: "16px 16px 14px" }}>
              <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 26, color: PQ.green, lineHeight: 1 }}>{v}</div>
              <div style={{ marginTop: 8, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkFaint }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

// ═══════════════ SETTINGS DETAIL PANELS (About / Support forms) ═══════════════
function SettingsDetail({ panel, onBack }) {
  const [cat, setCat] = React.useState("Gameplay");
  const [catOpen, setCatOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const meta = {
    about: { title: "About Pocket Dragon" },
    aboutus: { title: "About Us" },
    bug: { title: "Report a Bug" },
    feature: { title: "Feature Request" },
    contact: { title: "Contact Support" },
  }[panel];
  const field = { width: "100%", minHeight: 120, padding: "12px 14px", borderRadius: 13, border: `1.5px solid ${PQ.line}`, background: "transparent", fontFamily: HERO, fontSize: 14, color: PQ.ink, resize: "none", outline: "none", boxSizing: "border-box" };
  const label = { fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 8, display: "block" };
  const isForm = panel === "bug" || panel === "feature" || panel === "contact";
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
        <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 21, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{meta.title}</div>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "4px 4px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
        {panel === "about" && (
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: PQ.inkSoft }}>Pocket Dragon is a mobile-first, character-driven Mahjong experience built for players of every level. Enjoy fair, social multiplayer play across public and private tables — no wagers, no real-money stakes, just the joy of the game.</p>
        )}
        {panel === "aboutus" && (
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: PQ.inkSoft }}>Pocket Dragon brings together the strategy, skill, and social spirit of Mahjong. Whether you're discovering the game for the first time or refining years of experience, every match is an opportunity to learn, compete, and connect with players who share your passion. Our platform provides fair offline and online social and multiplayer Mahjong games.</p>
        )}
        {isForm && sent && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "30px 0", textAlign: "center" }}>
            <span style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(31,168,85,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1FA855" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg></span>
            <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 17, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>Thanks — we got it</div>
            <div style={{ fontFamily: HERO, fontSize: 13, color: PQ.inkSoft }}>Our team will review your submission.</div>
          </div>
        )}
        {isForm && !sent && (<>
          {panel === "bug" && (
            <div>
              <span style={label}>Issue Category</span>
              <div style={{ position: "relative" }}>
                <button onClick={() => setCatOpen((v) => !v)} className="pq-press" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", height: 48, padding: "0 15px", borderRadius: 13, border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", fontFamily: HERO, fontSize: 15, color: PQ.ink }}>{cat}<Icon name="chevD" size={18} stroke={PQ.inkFaint} /></button>
                {catOpen && (
                  <div style={{ marginTop: 6, border: `1.5px solid ${PQ.line}`, borderRadius: 13, overflow: "hidden", background: PQ.off }}>
                    {["Gameplay", "Technical Issue", "Profile", "Subscription & Payments", "Other"].map((o) => (
                      <button key={o} onClick={() => { setCat(o); setCatOpen(false); }} className="pq-press" style={{ width: "100%", textAlign: "left", padding: "12px 15px", background: "none", border: "none", borderBottom: `1px solid ${PQ.line}`, cursor: "pointer", fontFamily: HERO, fontSize: 14, color: cat === o ? PQ.rust : PQ.ink }}>{o}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          <div>
            <span style={label}>Description{panel === "bug" && <span style={{ color: "#d64542" }}>*</span>}</span>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={panel === "feature" ? "Describe the feature you'd like to see" : panel === "contact" ? "How can we help?" : "Describe what went wrong"} style={field} />
          </div>
          {panel === "bug" && (
            <button className="pq-press" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 52, borderRadius: 13, border: `1.5px dashed ${PQ.lineMid}`, background: "transparent", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.inkSoft }}><Icon name="plus" size={16} stroke={PQ.inkSoft} sw={2} />Attach screenshot / recording <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>· optional</span></button>
          )}
          <Btn variant="primary" disabled={panel === "bug" && !desc.trim()} onClick={() => { pock("select"); setSent(true); }}>Submit</Btn>
        </>)}
      </div>
    </div>
  );
}

// ═══════════════ SETTINGS (tab content) ═══════════════
function SettingsScreen() {
  const [haptic, setHaptic] = React.useState(true);
  const [sound, setSound] = React.useState(true);
  const [vol, setVol] = React.useState(70);
  const [panel, setPanel] = React.useState(null);
  if (panel) return <SettingsDetail panel={panel} onBack={() => setPanel(null)} />;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <HIcon name="sliders" size={24} stroke={PQ.rust} sw={1.8} />
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 24, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Settings</div>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 26, margin: "0 -4px", padding: "4px 4px 10px" }}>
        <div>
          <SectionLabel>Game settings</SectionLabel>
          <div style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 16px", borderBottom: "1px solid rgba(20,51,34,0.07)" }}>
              <span style={{ fontFamily: HERO, fontWeight: 600, fontSize: 14.5, color: PQ.ink }}>Haptics</span><Toggle on={haptic} onChange={() => setHaptic((v) => !v)} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 16px", borderBottom: "1px solid rgba(20,51,34,0.07)" }}>
              <span style={{ fontFamily: HERO, fontWeight: 600, fontSize: 14.5, color: PQ.ink }}>Sound</span><Toggle on={sound} onChange={() => setSound((v) => !v)} />
            </div>
            <div style={{ padding: "15px 16px", opacity: sound ? 1 : 0.4, pointerEvents: sound ? "auto" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontFamily: HERO, fontWeight: 600, fontSize: 14.5, color: PQ.ink }}>Volume</span>
                <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, color: PQ.rust }}>{vol}</span>
              </div>
              <input type="range" min={0} max={100} value={vol} onChange={(e) => setVol(+e.target.value)} style={{ width: "100%", accentColor: PQ.rust, height: 6, cursor: "pointer", outline: "none", border: "none", borderRadius: 3, background: `linear-gradient(to right, ${PQ.rust} 0%, ${PQ.rust} ${vol}%, #C8C0AE ${vol}%, #C8C0AE 100%)` }} />
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>About Pocket Dragon</SectionLabel>
          <Group>
            <Row icon="spark" label="About Us" onClick={() => setPanel("aboutus")} />
            <Row icon="doc" label="Terms & Conditions" onClick={() => window.open("https://pocketdragon.in/terms", "_blank")} />
            <Row icon="shield" label="Privacy Policy" onClick={() => window.open("https://pocketdragon.in/privacy", "_blank")} />
            <Row icon="spark" label="App Version" value="1.0.0" last onClick={() => { }} />
          </Group>
          <div style={{ marginTop: 8, fontFamily: HERO, fontSize: 12, color: PQ.inkFaint, paddingLeft: 4 }}>You're on the latest version.</div>
        </div>
        <div>
          <SectionLabel>Support</SectionLabel>
          <Group>
            <Row icon="help" label="Report a Bug" onClick={() => setPanel("bug")} />
            <Row icon="spark" label="Feature Request" onClick={() => setPanel("feature")} />
            <Row icon="help" label="Contact Support" onClick={() => setPanel("contact")} />
            <Row icon="doc" label="FAQs" value="↗" last onClick={() => window.open("https://pocketdragon.in/faqs", "_blank")} />
          </Group>
        </div>
      </div>
    </div>
  );
}

// ═══════════════ PUBLIC LOBBY (overlay) ═══════════════
function PublicLobbyScreen({ onBack, onJoin, onPrivate }) {
  const [seg, setSeg] = React.useState("public");
  const [speedF, setSpeedF] = React.useState("All");
  const [diffF, setDiffF] = React.useState("All");
  const [openFilter, setOpenFilter] = React.useState(null); // "speed" | "diff" | null
  const [overlay, setOverlay] = React.useState(null); // { kind:"speed"|"diff", current }
  const tables = [
    { id: "t1", east: 4, west: 3, avail: 2, speed: "Medium", secs: 22, diff: "Smurf", full: false },
    { id: "t2", east: 2, west: 2, avail: 1, speed: "Fast", secs: 12, diff: "Fierce", full: false },
    { id: "t3", east: 4, west: 0, avail: 3, speed: "Slow", secs: 48, diff: "Fair", full: false },
    { id: "t4", east: 4, west: 4, avail: 0, speed: "Medium", secs: 22, diff: "Hard", full: true },
  ];
  const diffColor = (d) => diffColorOf(d);
  const shown = tables.filter((t) => (speedF === "All" || t.speed === speedF) && (diffF === "All" || t.diff === diffF));
  const FilterBtn = ({ id, label, value }) => (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpenFilter(openFilter === id ? null : id)} className="pq-press" style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 14px", borderRadius: 999, cursor: "pointer", border: `1.5px solid ${value !== "All" ? PQ.rust : PQ.line}`, background: "transparent", color: value !== "All" ? PQ.rust : PQ.inkSoft, fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.04em", textTransform: "uppercase" }}>
        {label}: {value}<Icon name="chevD" size={14} stroke={value !== "All" ? PQ.rust : PQ.inkFaint} />
      </button>
    </div>
  );
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 10px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", minHeight: 40 }}>
          <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "2px 0 12px" }}>
          <HIcon name="grid" size={24} stroke={PQ.rust} sw={1.8} />
          <h1 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Join Game</h1>
        </div>
        <Seg options={[{ label: "Public Lobby", value: "public" }, { label: "Private", value: "private" }]} value={seg} onChange={(v) => { if (v === "private") { setSeg("public"); onPrivate(); } }} />
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
          <FilterBtn id="speed" label="Speed" value={speedF} />
          <FilterBtn id="diff" label="Difficulty" value={diffF} />
          <span style={{ fontFamily: HERO, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.inkFaint }}>Optional</span>
          {(speedF !== "All" || diffF !== "All") && (
            <button onClick={() => { setSpeedF("All"); setDiffF("All"); setOpenFilter(null); }} className="pq-press" style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.rust }}>Clear</button>
          )}
        </div>
        {openFilter && (
          <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {(openFilter === "speed" ? ["All", "Slow", "Medium", "Fast"] : ["All", "Smurf", "Easy", "Fair", "Hard", "Fierce"]).map((o) => {
              const cur = openFilter === "speed" ? speedF : diffF;
              const on = cur === o;
              return <button key={o} onClick={() => { if (openFilter === "speed") setSpeedF(o); else setDiffF(o); setOpenFilter(null); }} className="pq-press" style={{ height: 32, padding: "0 13px", borderRadius: 999, cursor: "pointer", border: `1.5px solid ${on ? PQ.rust : PQ.line}`, background: on ? "rgba(182,90,47,0.08)" : "transparent", color: on ? PQ.rust : PQ.inkSoft, fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase" }}>{o}</button>;
            })}
          </div>
        )}
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "14px 22px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
        {shown.map((t) => (
          <div key={t.id} style={{ border: `1.5px solid ${PQ.line}`, borderRadius: 18, padding: "16px 16px 14px", background: PQ.off, opacity: t.full ? 0.55 : 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: HERO, fontSize: 13, color: PQ.inkSoft }}><span style={{ fontWeight: 700, color: PQ.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>West</span> <span style={{ fontWeight: 700, color: PQ.green, fontSize: 18 }}>{t.west}</span></span>
            </div>
            <div style={{ marginTop: 8, fontFamily: HERO, fontSize: 12.5, fontWeight: 600, color: PQ.inkSoft, textTransform: "uppercase", letterSpacing: "0.03em" }}>Seats available <span style={{ color: t.avail > 0 ? PQ.rust : PQ.inkFaint, fontWeight: 700, fontSize: 15 }}>{t.avail}</span></div>
            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
              {/* speed tag — equal-sized box, tappable → time-per-turn overlay */}
              <button onClick={() => { pock("select"); setOverlay({ kind: "speed", current: t.speed }); }} className="pq-press" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0, width: 92, height: 44, padding: "0 8px", borderRadius: 11, cursor: "pointer", background: "transparent", border: `1.5px solid ${PQ.lineMid}`, color: PQ.ink, fontFamily: HERO, fontWeight: 700, lineHeight: 1.05 }}>
                <span style={{ fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.speed}</span>
                <span style={{ fontSize: 9, fontWeight: 600, color: PQ.inkSoft, letterSpacing: "0.04em" }}>{t.secs} sec</span>
              </button>
              {/* difficulty tag — equal-sized box, tappable → difficulty overlay */}
              <button onClick={() => { pock("select"); setOverlay({ kind: "diff", current: t.diff }); }} className="pq-press" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 92, height: 44, padding: "0 8px", borderRadius: 11, cursor: "pointer", background: "transparent", border: `1.5px solid ${diffColor(t.diff)}`, color: diffColor(t.diff), fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.diff}</button>
              <div style={{ flex: 1 }} />
              <button onClick={() => { if (!t.full) { pock("select"); onJoin(); } }} className={t.full ? "" : "pq-press"} style={{ flexShrink: 0, height: 44, padding: "0 20px", border: "none", borderRadius: 11, cursor: t.full ? "not-allowed" : "pointer", background: t.full ? "rgba(20,51,34,0.08)" : PQ.rust, color: t.full ? PQ.inkFaint : PQ.off, fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.full ? "Full" : "Join"}</button>
            </div>
          </div>
        ))}
      </div>
      {overlay && <LobbyInfoOverlay overlay={overlay} onClose={() => setOverlay(null)} />}
    </div>
  );
}

// Bottom-sheet overlays for the lobby cards: time-per-turn & table difficulty
function LobbyInfoOverlay({ overlay, onClose }) {
  const speeds = [["Slow", "31–60 sec"], ["Medium", "16–30 sec"], ["Fast", "10–15 sec"]];
  const diffs = [
    ["Smurf & Easy", "Playing against easier opponents has lower rewards and higher losses.", DIFF_COLORS.Smurf],
    ["Fair", "Playing against opponents at your level gives standard rewards and losses.", DIFF_COLORS.Fair],
    ["Hard & Fierce", "Challenging stronger opponents comes with bigger rewards and smaller losses.", DIFF_COLORS.Hard],
  ];
  const curSpeed = overlay.current;
  const curDiff = overlay.current;
  return (
    <div className="pq-modal-backdrop" onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 60, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div className="pq-modal-sheet" onClick={(e) => e.stopPropagation()} style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: "14px 22px 30px" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
        {overlay.kind === "speed" ? (
          <>
            <h2 style={{ margin: "0 0 16px", fontFamily: HERO, fontWeight: 700, fontSize: 17, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.green }}>Time Allowed Per Turn</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {speeds.map(([name, range]) => {
                const on = name === curSpeed;
                return <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 4px" }}>
                  <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, letterSpacing: "0.06em", textTransform: "uppercase", color: on ? PQ.rust : PQ.green }}>{name}</span>
                  <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, color: on ? PQ.rust : PQ.inkSoft }}>{range}</span>
                </div>;
              })}
            </div>
          </>
        ) : (
          <>
            <h2 style={{ margin: "0 0 16px", fontFamily: HERO, fontWeight: 700, fontSize: 17, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.green }}>Table Difficulty Level</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {diffs.map(([name, desc, col]) => (
                <div key={name} style={{ display: "flex", gap: 11 }}>
                  <span style={{ marginTop: 7, width: 7, height: 7, flexShrink: 0, borderRadius: "50%", background: col }} />
                  <div>
                    <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, letterSpacing: "0.03em", textTransform: "uppercase", color: col }}>{name}</div>
                    <div style={{ marginTop: 4, fontSize: 13, lineHeight: 1.5, color: PQ.inkSoft }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ═══════════════ PRIVATE LOBBY (overlay) ═══════════════
function PrivateLobbyScreen({ onBack, onJoin }) {
  const CORRECT = "K7M9P2";
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const cells = Array.from({ length: 4 });
  const complete = code.length === 4;
  const go = () => {
    if (!complete || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (code === CORRECT || code === "0000") onJoin();
      else setError(true);
    }, 900);
  };
  return (
    <Shell onBack={onBack} title="Enter Invite Code" sub="Please enter the code provided by the host.">
      <div style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 9 }}>
        {cells.map((_, i) => {
          const ch = code[i] || "";
          const active = i === code.length && !error;
          const bc = error ? PQ.rust : ch ? PQ.lineMid : active ? PQ.rust : PQ.line;
          return <div key={i} style={{ width: 44, height: 58, borderRadius: 13, border: `1.5px solid ${bc}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: HERO, fontWeight: 700, fontSize: 24, color: error ? PQ.rust : PQ.ink }}>{ch}</div>;
        })}
      </div>
      <input value={code} onChange={(e) => { setError(false); setCode(e.target.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(0, 4)); }} maxLength={4}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0 }} autoFocus />
      <div style={{ minHeight: 20, display: "flex", justifyContent: "center" }}>
        {error && <Helper state="error">That code didn't match any open table</Helper>}
      </div>
      <Btn variant="primary" disabled={!complete || loading} onClick={go}>{loading ? "Joining…" : "Join Table"}</Btn>
    </Shell>
  );
}

// ═══════════════ INVITE PLAYERS (overlay, 6.1) ═══════════════
function InviteScreen({ onBack }) {
  const [q, setQ] = React.useState("");
  const [inv, setInv] = React.useState({ i1: false, i2: false, i3: false, i4: false });
  const people = [
    ["i1", "Mei L.", "JADE I", 2, true, false],
    ["i2", "Arjun P.", "JADE III", 1, true, true],
    ["i3", "Priya R.", "BAMBOO I", 0, false, false],
    ["i4", "Sam K.", "BAMBOO II", 1, true, false],
  ];
  const res = people.filter((p) => p[1].toLowerCase().includes(q.toLowerCase().trim()));
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 10px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
          <h1 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 21, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Invite Players</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 11, height: 48, padding: "0 15px", borderRadius: 13, border: `1.5px solid ${PQ.lineMid}` }}>
          <XIcon name="search" size={19} stroke={PQ.inkSoft} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by username" style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: HERO, fontSize: 16, color: PQ.ink, minWidth: 0 }} />
        </div>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "12px 22px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
        {res.map(([id, name, tier, av, online, joined]) => (
          <div key={id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 13px", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, background: PQ.off }}>
            <span style={{ position: "relative", width: 44, height: 44, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: AVATARS[av].bg, border: `1.5px solid ${PQ.line}` }}>
              <img src={avatarSrc(av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(av)})`, transformOrigin: "center 40%" }} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.ink }}>{name}</span>
                {online && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#1FA855", flexShrink: 0 }} />}
              </div>
              <div style={{ marginTop: 2, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: PQ.inkFaint }}>{tier}</div>
            </div>
            {joined ? (
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, height: 38, minWidth: 96, padding: "0 18px", borderRadius: 11, background: "rgba(20,51,34,0.06)", fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.green }}><Icon name="check" size={14} stroke={PQ.green} sw={2.4} />Joined</span>
            ) : (
              <button onClick={() => { pock("select"); setInv((s) => ({ ...s, [id]: !s[id] })); }} className="pq-press" style={{ height: 38, minWidth: 96, padding: "0 18px", borderRadius: 11, cursor: "pointer", border: `1.5px solid ${inv[id] ? PQ.line : PQ.rust}`, background: inv[id] ? "rgba(20,51,34,0.05)" : "rgba(182,90,47,0.08)", color: inv[id] ? PQ.inkFaint : PQ.rust, fontFamily: HERO, fontWeight: 700, fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase" }}>{inv[id] ? "Invited" : "Invite"}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════ PRACTICE MODE (overlay, 7) ═══════════════
function PracticeScreen({ onBack, onStart }) {
  const [hints, setHints] = React.useState(true);
  const [east, setEast] = React.useState(1);
  const [west, setWest] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(true);
  const [pos, setPos] = React.useState(30);
  const secs = posToSecs(pos);
  const tier = secsToTier(secs);
  const canStart = (east + west) > 0;
  return (
    <Shell onBack={onBack} icon="cap" title="Practice" sub="No pressure. No rankings. Play, learn and improve."
      footer={<Btn variant="primary" trailingIcon="arrowR" disabled={!canStart} onClick={onStart}>Let's Go!</Btn>}>
      {/* Game Setup — same as Create A Game */}
      <CfgSection label="Game Setup">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <VariantCounter letter="W" name="West" subtitle="Goulash" value={west} onChange={setWest} />
        </div>
      </CfgSection>

      {/* Turn Timer — toggle on/off; slider appears when on */}
      <CfgSection label="Turn Timer" hint={timerOn ? `${secs}s · ${tier}` : "Off"}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: HERO, fontWeight: 600, fontSize: 12.5, color: PQ.ink }}>Enable / Disable Turn Timer</div>
          </div>
          <Toggle on={timerOn} onChange={() => setTimerOn((v) => !v)} />
        </div>
        {timerOn && (
          <div style={{ marginTop: 16 }}>
            <input type="range" min={0} max={100} step={1} value={pos} onChange={(e) => setPos(+e.target.value)}
              style={{ width: "100%", accentColor: PQ.rust, height: 6, cursor: "pointer", outline: "none", border: "none", borderRadius: 3, background: `linear-gradient(to right, ${PQ.rust} 0%, ${PQ.rust} ${pos}%, #C8C0AE ${pos}%, #C8C0AE 100%)` }} />
            <div style={{ position: "relative", height: 32, marginTop: 8 }}>
              {[["Slow", "60s", 0], ["Medium", "30s", 60], ["Fast", "10s", 100]].map(([t, sLabel, fp]) => (
                <div key={t} style={{ position: "absolute", left: fp + "%", transform: `translateX(${fp === 0 ? "0" : fp === 100 ? "-100%" : "-50%"})`, textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: tier === t ? PQ.rust : PQ.inkFaint }}>{t}</div>
                  <div style={{ marginTop: 2, fontSize: 10, color: PQ.inkFaint }}>{sLabel}</div>
                </div>
              ))}
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 12, lineHeight: 1.45, color: PQ.inkSoft }}>If time runs out, a bot automatically plays your turn</p>
          </div>
        )}
      </CfgSection>

      {/* Hints — plain row, no box/border */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14.5, color: PQ.ink }}>Hints</div>
          <div style={{ marginTop: 4, fontSize: 12, color: PQ.inkSoft }}>Suggests moves while you play</div>
        </div>
        <Toggle on={hints} onChange={() => setHints((v) => !v)} />
      </div>
    </Shell>
  );
}

// ═══════════════ REJOIN (overlay, 8) ═══════════════
function RejoinScreen({ onBack, onRejoin, onHome, expired, botTurns = 2 }) {
  if (expired) {
    return (
      <Shell onBack={onBack}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 30 }}>
          <span style={{ width: 64, height: 64, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}><XIcon name="timer" size={28} stroke={PQ.inkFaint} /></span>
          <h1 style={{ margin: "20px 0 0", fontFamily: HERO, fontWeight: 700, fontSize: 24, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink, lineHeight: 1.1 }}>This game<br />has ended</h1>
          <p style={{ margin: "14px 0 0", fontSize: 14.5, lineHeight: 1.5, color: PQ.inkSoft }}>The table finished before you could rejoin. Your results are saved to your profile.</p>
          <div style={{ flex: 1 }} />
          <Btn variant="primary" onClick={onHome}>Return to Hub</Btn>
        </div>
      </Shell>
    );
  }
  return (
    <Shell onBack={onBack}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 30 }}>
        <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 8, height: 26, padding: "0 12px", borderRadius: 999, background: "rgba(182,90,47,0.1)" }}><span className="pq-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: PQ.rust }} /><span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: PQ.rust }}>Game in progress</span></div>
        <h1 style={{ margin: "18px 0 0", fontFamily: HERO, fontWeight: 700, fontSize: 25, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink, lineHeight: 1.1 }}>You haven't<br />lost your place</h1>
        <p style={{ margin: "14px 0 0", fontFamily: HERO, fontSize: 14.5, lineHeight: 1.5, color: PQ.inkSoft }}>A bot has been playing your hand for <span style={{ color: PQ.rust, fontWeight: 700 }}>{botTurns} turns</span>. Rejoin to take back control.</p>
        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <div style={{ flex: 1, border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, padding: 16 }}><div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 22, color: PQ.green }}>3 / 8</div><div style={{ marginTop: 6, fontFamily: HERO, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkFaint }}>Games</div></div>
          <div style={{ flex: 1, border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, padding: 16 }}><div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 22, color: PQ.green }}>128</div><div style={{ marginTop: 6, fontFamily: HERO, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkFaint }}>Your score</div></div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 11 }}>
          <Btn variant="primary" trailingIcon="arrowR" onClick={onRejoin}>Rejoin now</Btn>
          <Btn variant="ghost" onClick={onHome}>Return to Hub</Btn>
        </div>
      </div>
    </Shell>
  );
}

// ═══════════════ RULES & SCORING (tab content, TBD) ═══════════════
// Small building blocks for the Rules & Ranking content
function RuleBlock({ label, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.6, color: PQ.inkSoft }}>{children}</div>
    </div>
  );
}
function SetChip({ title, sub }) {
  return (
    <div style={{ flex: 1, border: `1.5px solid ${PQ.line}`, borderRadius: 14, padding: "12px 10px", textAlign: "center", background: PQ.off }}>
      <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.green }}>{title}</div>
      <div style={{ marginTop: 4, fontSize: 11.5, color: PQ.inkSoft }}>{sub}</div>
    </div>
  );
}
function ClimbItem({ title, children }) {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <span style={{ flexShrink: 0, marginTop: 3 }}><XIcon name="arrowUp" size={20} stroke={PQ.rust} /></span>
      <div>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, color: PQ.rust }}>{title}</div>
        <div style={{ marginTop: 3, fontSize: 13, lineHeight: 1.55, color: PQ.inkSoft }}>{children}</div>
      </div>
    </div>
  );
}
function EarnItem({ title, children }) {
  return (
    <div>
      <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13.5, color: PQ.rust }}>{title}</div>
      <div style={{ marginTop: 3, fontSize: 13, lineHeight: 1.55, color: PQ.inkSoft }}>{children}</div>
    </div>
  );
}

function RulesScreen() {
  const [seg, setSeg] = React.useState("rules");
  const TIERS = [
    { name: "Firefly", c: "#E8C84A" },
    { name: "Koi", c: "#00658F" },
    { name: "Tiger", c: "#F1A33D" },
    { name: "Phoenix", c: "#7F1616" },
    { name: "Dragon", c: "#34604F" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 14 }}>
      <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 24, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink, flexShrink: 0 }}>Rules &amp; Ranking</div>
      {/* current subscription status */}
      <div style={{ flexShrink: 0, border: `1.5px solid ${PQ.line}`, borderRadius: 16, padding: "14px 16px", background: "rgba(182,90,47,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <HIcon name="crown" size={16} stroke={PQ.rust} sw={1.8} />
          <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: PQ.rust }}>Free Trial</span>
        </div>
        <div style={{ fontFamily: HERO, fontSize: 13.5, lineHeight: 1.5, color: PQ.inkSoft }}>You are currently enjoying the free trial period. It ends on <span style={{ color: PQ.ink, fontWeight: 700 }}>23 Jul 2026</span>.</div>
        <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: PQ.inkSoft }}>Subscriptions are available exclusively through our website <a href="https://pocketdragon.in" target="_blank" style={{ color: PQ.rust, fontWeight: 700, textDecoration: "none" }}>www.pocketdragon.in</a></div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <Seg options={[{ label: "Rules", value: "rules" }, { label: "Tiers & Ranks", value: "ranks" }]} value={seg} onChange={setSeg} />
      </div>

      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", margin: "0 -4px", padding: "2px 4px 12px" }}>
        {seg === "rules" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <RuleBlock label="Objective">Build a complete hand of 14 tiles by combining them into sets, as per the variation of the game you're playing.</RuleBlock>
            <RuleBlock label="Gameplay">The game is played with 144 tiles. Three suits — Rings, Characters and Bamboos — run 1 through 9, with four of each number (108 tiles), plus Winds, Dragons and Flowers.</RuleBlock>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 10 }}>Sets</div>
              <div style={{ display: "flex", gap: 10 }}>
                <SetChip title="Pung" sub="3 of a kind" />
                <SetChip title="Kong" sub="4 of a kind" />
                <SetChip title="Pair" sub="2 of a kind" />
              </div>
              <div style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.55, color: PQ.inkSoft, fontStyle: "italic" }}>Kongs count as 3 tiles once placed on the rack (exposed or concealed) and earn 1 extra tile from the Flower Wall.</div>
            </div>
            <RuleBlock label="Goulash Objective">Make 4 Pungs/Kongs + 1 Pair, per the valid combinations in the Hands section.</RuleBlock>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 8 }}>Claiming Tiles</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div><span style={{ fontFamily: HERO, fontWeight: 700, color: PQ.green }}>Pung — </span><span style={{ fontSize: 13.5, lineHeight: 1.6, color: PQ.inkSoft }}>Pick up the last discarded tile from anyone to complete a Pung (if you already hold a pair). The Pung is then exposed on your rack.</span></div>
                <div>
                  <span style={{ fontFamily: HERO, fontWeight: 700, color: PQ.green }}>Kong</span>
                  <ol style={{ margin: "6px 0 0", paddingLeft: 18, fontSize: 13.5, lineHeight: 1.6, color: PQ.inkSoft }}>
                    <li><b>From discard:</b> Pick up the last discarded tile to complete a Kong (if you already hold a Pung). The Kong is then exposed on your rack.</li>
                    <li><b>Concealed Pung:</b> If you hold a concealed Pung and draw the 4th tile from the wall, upgrade to a Kong — displayed face down (still concealed).</li>
                    <li><b>Exposed Pung:</b> If you have an exposed Pung and self-draw the 4th tile, upgrade to a Kong — displayed exposed on the rack.</li>
                  </ol>
                </div>
              </div>
            </div>
            <RuleBlock label="General Rules">
              The tile for Mahjong can be picked from anywhere, for any set (even a pair). If two players need the same tile to declare, the one closest to the discarder wins (order E–S–W–N).
              <div style={{ height: 8 }} />
              East always gives and gets double points to and from all players.
              <div style={{ height: 8 }} />
              A wrong Mahjong declaration makes the defaulter a "dead hand": they pay a 1000/2000E penalty, keep playing to the end, and can't claim any sets or Mahjong.
            </RuleBlock>
            <RuleBlock label="Nobody Wins">If no tiles remain on the wall, the game is a draw — each player puts 500 points in the bank for the next game's winner. The East player keeps the East position.</RuleBlock>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <div style={{ display: "flex", height: 12, borderRadius: 999, overflow: "hidden", border: `1px solid ${PQ.line}` }}>
                {TIERS.map((t) => <span key={t.name} style={{ flex: 1, background: t.c }} />)}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                {TIERS.map((t) => <span key={t.name} style={{ fontFamily: HERO, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{t.name}</span>)}
              </div>
              <div style={{ marginTop: 12, fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.green, textAlign: "center", letterSpacing: "0.02em" }}>4 tiers. 12 ranks. 1 Dragon leaderboard.</div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 14 }}>How You Climb</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <ClimbItem title="Earn RP every game">Chase Ranked Points, win hands, stack RP, and crash the next tier's party.</ClimbItem>
                <ClimbItem title="Protected when you first arrive">New tier unlocked? Your first drop is protected. One bad game doesn't send you back.</ClimbItem>
                <ClimbItem title="Earn your promotion">At each tier's final rank (e.g. Firefly III), win 2 of 3 promotion games to move on — no lucky shortcuts.</ClimbItem>
                <ClimbItem title="Season Reset">Each new season brings a soft tier reset — keeping competition fresh while preserving part of your progress. Top Dragon players remain in Dragon.</ClimbItem>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 6 }}>How You Earn Points</div>
              <div style={{ fontSize: 13, color: PQ.inkSoft, marginBottom: 14 }}>Every game counts. Every hand tells a story.</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <EarnItem title="Finish Higher, Earn More">1st place earns the most points; 4th loses a few. Simple — finish well, climb fast.</EarnItem>
                <EarnItem title="Risk vs Reward">Beat stronger opponents to earn more points. Lower-risk games give you fewer.</EarnItem>
                <EarnItem title="Bonus RP Awaits">From concealed hands and fast/last-tile wins to high doubles and table limit — special hands earn extra RP.</EarnItem>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════ SUBSCRIPTION (bottom sheet popup) ═══════════════
function SubscriptionSheet({ onClose }) {
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 66, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-modal-sheet" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: "14px 22px 30px" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Subscription</h2>
          <button onClick={onClose} className="pq-press" style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18} stroke={PQ.ink} sw={1.9} /></button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{
            fontFamily: HERO,
            fontSize: 14.5,
            lineHeight: 1.6,
            color: PQ.ink,
            fontWeight: 500,
          }}>
            To subscribe, modify or cancel subscription, please go to 'My Account' and select 'Subscription' on our website{" "}
            <a href="https://pocketdragon.in" target="_blank" rel="noopener noreferrer" style={{
              color: PQ.rust,
              fontWeight: 700,
              textDecoration: "none",
              borderBottom: `1.5px solid ${PQ.rust}`,
              paddingBottom: 1,
              transition: "opacity 0.2s ease"
            }}>
              www.pocketdragon.in
            </a>
          </div>

          <Btn variant="primary" onClick={() => { pock("select"); window.open("https://pocketdragon.in", "_blank"); }}>
            Visit Website
          </Btn>
        </div>
      </div>
    </div>
  );
}

function SubscriptionScreen({ onBack }) {
  return <SubscriptionSheet onClose={onBack} />;
}

// ═══════════════ PAYMENT (overlay, 9.1) ═══════════════
function PaymentScreen({ plan, onClose, onSuccess }) {
  const [state, setState] = React.useState("form"); // form | loading | success | failure
  const price = plan === "annual" ? "₹1,299" : "₹149";
  const pay = () => { setState("loading"); setTimeout(() => setState("success"), 1400); };
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderBottom: `1px solid ${PQ.line}` }}>
        <div><div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14, letterSpacing: "0.02em", textTransform: "uppercase", color: PQ.ink }}>Pocket Dragon Premium</div><div style={{ marginTop: 2, fontFamily: HERO, fontSize: 12.5, color: PQ.inkSoft }}>{plan === "annual" ? "Annual" : "Monthly"} · {price}</div></div>
        <button onClick={onClose} className="pq-press" style={{ width: 40, height: 40, border: `1px solid ${PQ.line}`, borderRadius: "50%", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18} stroke={PQ.ink} /></button>
      </div>
      {state === "success" ? (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 28px", textAlign: "center" }}>
          <RustRing size={96} />
          <h1 style={{ margin: "24px 0 0", fontFamily: HERO, fontWeight: 700, fontSize: 24, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>You're subscribed</h1>
          <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.5, color: PQ.inkSoft, maxWidth: 240 }}>Premium is active. Every table, border and tag is yours.</p>
          <div style={{ position: "absolute", left: 28, right: 28, bottom: 28 }}><Btn variant="primary" onClick={onSuccess}>Continue</Btn></div>
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PQ.inkFaint, marginBottom: 16 }}><XIcon name="shield" size={15} stroke={PQ.inkFaint} />Secure hosted payment</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 7 }}>Card number</div><div style={{ height: 50, border: `1.5px solid ${PQ.line}`, borderRadius: 13, display: "flex", alignItems: "center", gap: 11, padding: "0 15px" }}><XIcon name="card" size={19} stroke={PQ.inkFaint} /><span style={{ fontFamily: HERO, fontSize: 15, color: PQ.ink, letterSpacing: "0.05em" }}>4242 4242 4242 4242</span></div></div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 7 }}>Expiry</div><div style={{ height: 50, border: `1.5px solid ${PQ.line}`, borderRadius: 13, display: "flex", alignItems: "center", padding: "0 15px", fontFamily: HERO, fontSize: 15, color: PQ.ink }}>08 / 28</div></div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 7 }}>CVC</div><div style={{ height: 50, border: `1.5px solid ${PQ.line}`, borderRadius: 13, display: "flex", alignItems: "center", padding: "0 15px", fontFamily: HERO, fontSize: 15, color: PQ.ink }}>•••</div></div>
            </div>
          </div>
          <div style={{ flex: 1 }} />
          <Btn variant="primary" disabled={state === "loading"} onClick={pay}>{state === "loading" ? "Processing…" : `Pay ${price}`}</Btn>
        </div>
      )}
    </div>
  );
}

// ═══════════════ NOTIFICATIONS (overlay, 10) ═══════════════
function NotificationsScreen({ onBack, onAccept }) {
  const [items, setItems] = React.useState([
    { id: "n1", type: "invite", name: "Arjun P.", text: "invited you to their table", time: "2m", unread: true },
    { id: "n2", type: "join", name: "Mei L.", text: "joined your table", time: "14m", unread: true },
    { id: "n3", type: "join", name: "Priya R.", text: "joined your table", time: "1h", unread: false },
    { id: "n4", type: "invite", name: "Sam K.", text: "invited you to their table", time: "3h", unread: false, declined: true },
  ]);
  const decline = (id) => setItems((xs) => xs.map((n) => n.id === id ? { ...n, declined: true, type: "join", text: "invitation declined" } : n));
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 6px", display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
        <h1 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 20, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Notifications</h1>
      </div>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "12px 22px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((n) => (
          <div key={n.id} style={{ position: "relative", overflow: "hidden", display: "flex", gap: 12, padding: "14px 14px 14px 16px", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, background: PQ.off }}>
            {n.unread && <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: PQ.rust }} />}
            <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: AVATARS[(n.name.charCodeAt(0)) % AVATARS.length].bg, border: `1.5px solid ${PQ.line}` }}><img src={avatarSrc((n.name.charCodeAt(0)) % AVATARS.length)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale((n.name.charCodeAt(0)) % AVATARS.length)})`, transformOrigin: "center 40%" }} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: HERO, fontSize: 13.5, lineHeight: 1.45, color: PQ.ink }}><span style={{ fontWeight: 700 }}>{n.name}</span> {n.text}</div>
              <div style={{ marginTop: 4, fontFamily: HERO, fontSize: 11, fontWeight: 600, color: PQ.inkFaint }}>{n.time} ago</div>
              {n.type === "invite" && !n.declined && (
                <div style={{ marginTop: 11, display: "flex", gap: 9 }}>
                  <button onClick={() => { pock("select"); onAccept(); }} className="pq-press" style={{ height: 38, padding: "0 18px", border: "none", borderRadius: 11, background: PQ.rust, cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.off }}>Accept</button>
                  <button onClick={() => decline(n.id)} className="pq-press" style={{ height: 38, padding: "0 18px", border: `1.5px solid ${PQ.line}`, borderRadius: 11, background: "transparent", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkSoft }}>Decline</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════ WAITING LOBBY (pre-game staging) ═══════════════
// pos order: 0 bottom (you), 1 left, 2 top, 3 right
function LobbySeat({ seat, pos, onTap, tappable: canTap }) {
  const wrap = {
    bottom: { left: 112, top: 263 },
    top: { left: 131, top: 19 },
    left: { left: 1, top: 141 },
    right: { left: 245, top: 141 },
  }[pos];
  const colW = (pos === "left" || pos === "right") ? 74 : 96;
  const empty = seat.state === "empty";
  const tappable = empty && canTap;
  const isTop = pos === "top";
  return (
    <div style={{
      position: "absolute", ...wrap,
      display: "flex", flexDirection: isTop ? "row" : "column",
      alignItems: "center", gap: isTop ? 10 : 6, width: isTop ? "auto" : colW,
      zIndex: 10
    }}>
      <button onClick={tappable ? onTap : undefined} className={tappable ? "pq-press" : ""} style={{
        width: 58, height: 58, borderRadius: "50%", padding: 0, cursor: tappable ? "pointer" : "default",
        background: empty ? "transparent" : seat.state === "bot" ? "#1F4A30" : seat.state === "host" ? "#B65A2F" : "#1F8A5B",
        border: empty ? `2px dashed ${PQ.line}` : seat.state === "player" ? `2px solid ${PQ.line}` : "none",
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        transition: "border-color .2s, background .2s",
        flexShrink: 0
      }}>
        {empty ? <Icon name="plus" size={14} stroke={PQ.inkFaint} sw={1.8} />
          : seat.state === "bot" ? <HIcon name="bot" size={26} stroke={PQ.off} sw={1.8} />
            : <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 17, color: PQ.off }}>{seat.ini}</span>}
      </button>
      <div style={{ textAlign: isTop ? "left" : "center", lineHeight: 1.25 }}>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.02em", color: empty ? PQ.inkSoft : PQ.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: isTop ? 120 : colW }}>
          {empty ? "Empty seat" : seat.name}
        </div>
        {!empty && (
          <div style={{ marginTop: 4, fontFamily: HERO, fontWeight: 700, fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: seat.state === "host" ? PQ.rust : seat.state === "bot" ? PQ.green : PQ.inkSoft }}>
            {seat.state === "host" ? "Host" : seat.state === "bot" ? "Bot" : "Joined"}
          </div>
        )}
      </div>
    </div>
  );
}

function WaitingLobbyScreen({ isHost = true, lobbyType = "Private Lobby", tableName = "The Jade Parlour", onBack, onStart }) {
  const initial = isHost
    ? [{ state: "empty" }, { state: "player", name: "Mei L.", ini: "ML" }, { state: "empty" }, { state: "empty" }]
    : [{ state: "empty" }, { state: "host", name: "Diego R.", ini: "DR" }, { state: "player", name: "Mei L.", ini: "ML" }, { state: "empty" }];
  const [seats, setSeats] = React.useState(initial);
  const [botSeat, setBotSeat] = React.useState(null);   // index pending bot confirm
  const [startConfirm, setStartConfirm] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const posOf = ["bottom", "left", "top", "right"];
  const filled = seats.filter((s) => s.state !== "empty").length;
  const anyEmpty = seats.some((s) => s.state === "empty");
  const mySeated = seats.some((s) => s.name === "You");
  const handleSeatTap = (i) => {
    if (!mySeated) { setSeats((xs) => xs.map((s, k) => k === i ? { state: isHost ? "host" : "player", name: "You", ini: "AC" } : s)); pock("select"); }
    else if (isHost) { setBotSeat(i); }
  };

  const flashStatus = (m) => { setStatus(m); clearTimeout(WaitingLobbyScreen._t); WaitingLobbyScreen._t = setTimeout(() => setStatus(""), 1800); };
  const addBot = (i) => { setSeats((xs) => xs.map((s, k) => k === i ? { state: "bot", name: "Bot · Lin", ini: "" } : s)); setBotSeat(null); pock("select"); flashStatus("A bot joined the table"); };
  const startWithBots = () => { setSeats((xs) => xs.map((s) => s.state === "empty" ? { state: "bot", name: "Bot · Lin", ini: "" } : s)); setStartConfirm(false); pock("select"); setTimeout(onStart, 350); };
  const onStartPress = () => { if (!mySeated) { flashStatus("Pick your seat first"); return; } if (anyEmpty) setStartConfirm(true); else { pock("select"); onStart(); } };

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      {/* header */}
      <div style={{ padding: "60px 22px 8px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Waiting Lobby</div>
        </div>
        <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><HIcon name="leave" size={22} stroke={PQ.rust} sw={1.9} /></div>
      </div>

      {/* game info chips — line 1: counts · line 2: difficulty + speed */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "8px 22px 4px", flexShrink: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
          {[{ t: "West 4" }, { t: "Seats 2" }].map((c, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 5, height: 26, fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.inkSoft }}>{c.t}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
          <span style={{ display: "inline-flex", alignItems: "center", height: 26, fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: diffColorOf("Hard") }}>Hard</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, height: 26, fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.inkSoft }}><XIcon name="timer" size={13} stroke={PQ.inkSoft} />Medium</span>
        </div>
      </div>

      {/* the table */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 22px 0" }}>
        <div style={{ position: "relative", width: 320, height: 340 }}>
          {/* board table */}
          <img src={LOBBY_BOARD_SRC} alt="Table Board" draggable={false} style={{
            position: "absolute", top: 95, left: 85, width: 150, height: 150,
            borderRadius: 26, boxShadow: "0 16px 32px rgba(0,0,0,0.48)", pointerEvents: "none"
          }} />
          {seats.map((s, i) => <LobbySeat key={i} seat={s} pos={posOf[i]} tappable={!mySeated || isHost} onTap={() => handleSeatTap(i)} />)}
        </div>

        {/* status bar */}
        <div style={{ marginTop: 14, minHeight: 22, display: "flex", alignItems: "center", gap: 8 }}>
          {anyEmpty && <span className="pq-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: PQ.rust }} />}
          <span className={status ? "pq-toast2" : ""} style={{ fontFamily: HERO, fontWeight: 600, fontSize: 13, letterSpacing: "0.02em", color: PQ.inkSoft }}>
            {status || (anyEmpty ? `Looking for players · ${filled} of 4 seated` : "Table is full · ready to begin")}
          </span>
        </div>
      </div>

      {/* footer CTA */}
      <div style={{ padding: "14px 22px 26px", background: PQ.off, flexShrink: 0 }}>
        {isHost ? (
          !mySeated ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.rust }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", border: `1.5px dashed ${PQ.rust}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="plus" size={10} stroke={PQ.rust} sw={2} />
                </span>Tap to choose your seat
              </div>
            </div>
          ) : (
            <Btn variant="primary" trailingIcon="arrowR" onClick={onStartPress}>Let's Go!</Btn>
          )
        ) : !mySeated ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.rust }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", border: `1.5px dashed ${PQ.rust}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="plus" size={10} stroke={PQ.rust} sw={2} />
              </span>Tap to choose your seat
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkSoft }}>
              Waiting for host to begin
            </div>
            <div style={{ marginTop: 10, fontFamily: HERO, fontSize: 12.5, color: PQ.inkFaint }}>The host will begin the game once everyone is ready.</div>
          </div>
        )}
      </div>

      {/* add-bot bottom sheet */}
      {botSeat != null && (
        <div onClick={() => setBotSeat(null)} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 40, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div onClick={(e) => e.stopPropagation()} className="pq-pop-in" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: "14px 22px 28px" }}>
            <div style={{ width: 40, height: 4, borderRadius: 999, background: PQ.line, margin: "0 auto 18px" }} />
            <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Fill empty seat</h2>
            <p style={{ margin: "10px 0 18px", fontFamily: HERO, fontSize: 14, lineHeight: 1.5, color: PQ.inkSoft }}>Start the game with a bot occupying this seat?</p>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setBotSeat(null)} className="pq-press" style={{ flex: 1, height: 52, borderRadius: 14, border: `1.5px solid ${PQ.lineMid}`, background: "transparent", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.ink }}>Wait for player</button>
              <button onClick={() => addBot(botSeat)} className="pq-press" style={{ flex: 1, height: 52, borderRadius: 14, border: "none", background: `linear-gradient(160deg, ${PQ.rustSoft}, ${PQ.rust} 52%, ${PQ.rustDeep})`, cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.off }}>Add bot</button>
            </div>
          </div>
        </div>
      )}

      {/* start-with-bots confirm */}
      {startConfirm && (
        <div onClick={() => setStartConfirm(false)} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 40, background: "rgba(20,51,34,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 28 }}>
          <div onClick={(e) => e.stopPropagation()} className="pq-pop-in" style={{ width: "100%", background: PQ.off, borderRadius: 22, padding: 24 }}>
            <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Seats Still Empty</h2>
            <p style={{ margin: "10px 0 20px", fontFamily: HERO, fontSize: 14, lineHeight: 1.5, color: PQ.inkSoft }}>Would you like to fill the empty seats with bots and start the game?</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Btn variant="primary" onClick={startWithBots}>Start with bots</Btn>
              <button onClick={() => setStartConfirm(false)} className="pq-press" style={{ height: 50, borderRadius: 14, border: `1.5px solid ${PQ.line}`, background: "transparent", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkSoft }}>Continue waiting</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════ SEAT ASSIGNMENT (dice roll → auto-seat) ═══════════════
function Dice({ value, rolling }) {
  // pip layouts for 1–6
  const layouts = {
    1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8],
  };
  const on = new Set(layouts[value] || []);
  return (
    <div style={{ width: 52, height: 52, borderRadius: 13, background: "linear-gradient(180deg,#FFFDF6,#F2E8D2)", border: `1.5px solid ${PQ.line}`, boxShadow: "inset 0 -2px 0 rgba(20,51,34,0.07), 0 6px 14px -8px rgba(20,51,34,0.5)", padding: 8, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)", gap: 2, transition: "transform .12s", transform: rolling ? "rotate(-8deg) scale(1.04)" : "none" }}>
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: on.has(i) ? PQ.green : "transparent" }} />
        </span>
      ))}
    </div>
  );
}

function SeatAssignmentScreen({ onBack, onEnter }) {
  const players = [
    { name: "You", av: 0 },
    { name: "Diego R.", av: 1 },
    { name: "Mei L.", av: 4 },
    { name: "Sam K.", av: 3 },
  ];
  const WINDS = ["East", "South", "West", "North"];
  const [phase, setPhase] = React.useState("intro"); // intro | rolling | tie | done
  const [vals, setVals] = React.useState([[1, 1], [1, 1], [1, 1], [1, 1]]);
  const [order, setOrder] = React.useState(null); // player index → wind index

  const roll = () => {
    if (phase !== "intro" && phase !== "tie") return;
    pock("select");
    setPhase("rolling");
    const id = setInterval(() => setVals(players.map(() => [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)])), 90);
    setTimeout(() => {
      clearInterval(id);
      const finals = players.map((_, i) => {
        const a = 1 + Math.floor(Math.random() * 6), b = 1 + Math.floor(Math.random() * 6);
        return { i, pair: [a, b], sum: a + b };
      });
      setVals(finals.map((f) => f.pair));
      const top = Math.max(...finals.map((f) => f.sum));
      const tied = finals.filter((f) => f.sum === top);
      if (tied.length > 1) { setPhase("tie"); pock("select"); return; }
      const ranked = [...finals].sort((a, b) => b.sum - a.sum);
      const seatOf = {};
      ranked.forEach((r, rank) => { seatOf[r.i] = rank; });
      setOrder(seatOf);
      setPhase("done");
      pock("select");
    }, 1700);
  };

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div style={{ padding: "60px 22px 6px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", minHeight: 40 }}>
          <div onClick={onBack} className="pq-press" style={{ width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><Icon name="chevL" size={24} stroke={PQ.ink} sw={1.8} /></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "2px 0 0" }}>
          <HIcon name="dice" size={24} stroke={PQ.rust} sw={1.8} />
          <h1 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Roll for East</h1>
        </div>
        <p style={{ margin: "9px 0 0", fontSize: 13.5, lineHeight: 1.5, color: phase === "tie" ? PQ.rust : PQ.inkSoft, fontWeight: phase === "tie" ? 700 : 400 }}>{phase === "tie" ? "It's a tie! Please roll again." : "Highest roll becomes East. May the tiles be in your favour."}</p>
      </div>

      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "16px 22px 12px", display: "flex", flexDirection: "column", gap: 12 }}>
        {players.map((p, i) => {
          const seated = phase === "done" && order;
          const wind = seated ? WINDS[order[i]] : null;
          const isEast = wind === "East";
          const you = i === 0;
          const canTap = you && (phase === "intro" || phase === "tie");
          return (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", borderRadius: 16, background: PQ.off, border: `1.5px solid ${isEast ? PQ.rust : you && canTap ? PQ.lineMid : PQ.line}`, transition: "border-color .3s" }}>
              <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: AVATARS[p.av].bg, border: `1.5px solid ${PQ.line}` }}>
                <img src={avatarSrc(p.av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(p.av)})`, transformOrigin: "center 40%" }} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.ink }}>{p.name}</div>
                <div style={{ marginTop: 3, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: seated ? (isEast ? PQ.rust : PQ.green) : PQ.inkFaint }}>
                  {seated ? `${wind} seat · ${vals[i][0] + vals[i][1]}` : canTap ? "Tap to roll" : phase === "rolling" ? "Rolling…" : "Ready"}                </div>
              </div>
              <button onClick={canTap ? roll : undefined} className={canTap ? "pq-press pq-pulse" : ""} style={{ display: "flex", gap: 6, padding: canTap ? 6 : 0, borderRadius: 12, border: canTap ? `1.5px solid ${PQ.rust}` : "none", background: "transparent", cursor: canTap ? "pointer" : "default" }}>
                <Dice value={vals[i][0]} rolling={phase === "rolling"} />
                <Dice value={vals[i][1]} rolling={phase === "rolling"} />
              </button>
            </div>
          );
        })}
      </div>

      <div style={{ padding: "14px 22px 26px", borderTop: `1px solid ${PQ.line}`, background: PQ.off, flexShrink: 0 }}>
        {phase === "done"
          ? <Btn variant="primary" trailingIcon="arrowR" onClick={onEnter}>Start Game</Btn>
          : <Btn variant="primary" disabled={phase === "rolling"} onClick={roll}>{phase === "rolling" ? "Rolling…" : phase === "tie" ? "Roll again" : "Tap your dice to roll"}</Btn>}
      </div>
    </div>
  );
}

// ═══════════════ PRE-GAME ORIENTATION (Rule Book + Scoring) ═══════
// Two lightweight sheets inserted into the Join journey, between
// selecting a table and the Waiting Lobby. Returning players Skip.

// tile suit accents (match gameplay tile faces)
const TC = { bamboo: "#1F8A5B", character: "#B65A2F", wind: "#3E6B8C" };

// small cream tile face with a glyph (mirrors the gameplay tile look)
function MiniTile({ glyph, color = PQ.ink, w = 46, h = 60, dashed }) {
  if (dashed) {
    return <span style={{
      width: w, height: h, borderRadius: 8, background: "transparent",
      border: `1.5px dashed ${PQ.lineMid}`, display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: HERO, fontSize: 22, color: PQ.inkFaint
    }}>?</span>;
  }
  return <span style={{
    width: w, height: h, borderRadius: 8, background: "linear-gradient(180deg,#FFFDF6,#F2E8D2)",
    border: `1px solid ${PQ.line}`, boxShadow: "inset 0 -2px 0 rgba(20,51,34,0.07), 0 4px 10px -6px rgba(20,51,34,0.4)",
    display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: h * 0.42, color
  }}>{glyph}</span>;
}

function PreGameSheet({ kicker, title, children, onSkip, primaryLabel, onPrimary, stepNo }) {
  return (
    <div onClick={onSkip} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 50, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-sheet-up" style={{
        width: "100%", maxHeight: "86%", background: PQ.off,
        borderTopLeftRadius: 26, borderTopRightRadius: 26, display: "flex", flexDirection: "column", boxShadow: "0 -20px 50px -20px rgba(14,36,23,0.5)"
      }}>
        {/* grab handle */}
        <div style={{ flexShrink: 0, padding: "11px 0 2px", display: "flex", justifyContent: "center" }}>
          <div style={{ width: 40, height: 4, borderRadius: 999, background: PQ.line }} />
        </div>
        {/* header */}
        <div style={{ flexShrink: 0, padding: "8px 22px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <TileMark size={30} tone="dark" />
            <div>
              <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.rust }}>{kicker}</div>
              <h2 style={{ margin: "3px 0 0", fontFamily: HERO, fontWeight: 700, fontSize: 19, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>{title}</h2>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: stepNo === 0 ? PQ.rust : PQ.line }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: stepNo === 1 ? PQ.rust : PQ.line }} />
          </div>
        </div>
        {/* scroll body */}
        <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "2px 22px 18px" }}>{children}</div>
        {/* footer */}
        <div style={{ flexShrink: 0, padding: "13px 22px 26px", borderTop: `1px solid ${PQ.line}`, display: "flex", flexDirection: "column", gap: 9 }}>
          <Btn variant="primary" trailingIcon="arrowR" onClick={onPrimary}>{primaryLabel}</Btn>
          <button onClick={onSkip} className="pq-press" style={{
            height: 44, borderRadius: 13, border: "none", background: "transparent", cursor: "pointer",
            fontFamily: HERO, fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: PQ.inkFaint
          }}>Skip</button>
        </div>
      </div>
    </div>
  );
}

function PreGameScreen({ lobbyType = "Public Lobby", tableName = "East Wind Table", onSkip, onEnter }) {
  const [step, setStep] = React.useState(0);

  const rules = [
    { h: "Hand Structure", b: "A winning hand — a Mahjong — is 14 tiles: four sets and a pair. A set is a Pung (three identical tiles), a Chow (three in a run of one suit) or a Kong (four identical). The dealer sits East and plays first." },
    { h: "Scoring Rules", b: "Your Bank score grows from the sets you build, the flowers you draw and your active multipliers. Multipliers such as +2, +4, +8 and ×2 stack on top of the base hand score." },
    { h: "Special Hands", b: "A fully Concealed hand — one where you've claimed no tiles from other players — earns a ×2 multiplier. Crochet is the same number across all three suits; Knit is the same number across two." },
    { h: "Variant · East Passport", b: "A Chow may be claimed only from the player to your left, while a Pung or Kong may be claimed from anyone. Claim with care — every call exposes part of your hand." },
  ];

  const multipliers = [
    { val: "+2", label: "Flower drawn", sub: "One flower tile in your hand", glyph: "❀", gc: TC.bamboo, active: true },
    { val: "×2", label: "Concealed hand", sub: "No tiles claimed from others", glyph: "門", gc: TC.character, active: true },
    { val: "+4", label: "Dragon Pung", sub: "Three matching dragon tiles", glyph: "中", gc: TC.character, active: false },
    { val: "+8", label: "Kong declared", sub: "Four identical tiles exposed", glyph: "東", gc: TC.wind, active: false },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* branded backdrop — the table you're about to enter, subtly visible */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(130% 100% at 50% 0%, ${PQ.green2} 0%, ${PQ.green} 52%, ${PQ.greenDeep} 100%)` }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: "radial-gradient(rgba(249,242,228,0.5) 1px, transparent 1.4px)", backgroundSize: "22px 22px"
        }} />
        <div style={{ position: "absolute", top: 70, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div onClick={onSkip} className="pq-press" style={{ position: "absolute", top: -4, left: 22, width: 40, height: 40, marginLeft: -8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Icon name="chevL" size={24} stroke="rgba(249,242,228,0.85)" sw={1.8} />
          </div>
          <div style={{ marginTop: 26, opacity: 0.9 }}><TileMark size={52} tone="light" /></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: PQ.rustSoft }}>{lobbyType}</div>
            <div style={{ marginTop: 5, fontFamily: HERO, fontWeight: 700, fontSize: 22, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.off }}>{tableName}</div>
            <div style={{ marginTop: 9, fontFamily: HERO, fontSize: 12.5, color: "rgba(249,242,228,0.6)" }}>A quick orientation before you sit down.</div>
          </div>
        </div>
        {/* dim wash so the sheet reads above the table */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,36,23,0.32)" }} />
      </div>

      {step === 0 ? (
        <PreGameSheet key="rules" stepNo={0} kicker="Rule Book" title="How to Play" onSkip={onSkip}
          primaryLabel="Continue" onPrimary={() => { pock("select"); setStep(1); }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {rules.map((r) => (
              <div key={r.h}>
                <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink, marginBottom: 5 }}>{r.h}</div>
                <p style={{ margin: 0, fontFamily: HERO, fontSize: 13.5, lineHeight: 1.55, color: PQ.inkSoft }}>{r.b}</p>
              </div>
            ))}
          </div>
        </PreGameSheet>
      ) : (
        <PreGameSheet key="scoring" stepNo={1} kicker="Scoring &amp; Reward" title="Tiles &amp; Bonuses" onSkip={onSkip}
          primaryLabel="Continue to Lobby" onPrimary={() => { pock("select"); onEnter(); }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* special tiles */}
            <div>
              <div style={{ fontFamily: HERO, fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 12 }}>Special tiles</div>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1, display: "flex", gap: 11, alignItems: "center", padding: "12px 13px", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14 }}>
                  <MiniTile glyph="5" color={TC.bamboo} w={40} h={52} />
                  <div>
                    <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Marking Tile</div>
                    <div style={{ marginTop: 3, fontFamily: HERO, fontSize: 11.5, lineHeight: 1.4, color: PQ.inkSoft }}>Sets the round's bonus suit. Match it for extra points.</div>
                  </div>
                </div>
                <div style={{ flex: 1, display: "flex", gap: 11, alignItems: "center", padding: "12px 13px", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14 }}>
                  <MiniTile glyph="🃏" color={PQ.rust} w={40} h={52} />
                  <div>
                    <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Joker Tile</div>
                    <div style={{ marginTop: 3, fontFamily: HERO, fontSize: 11.5, lineHeight: 1.4, color: PQ.inkSoft }}>Stands in for any tile to complete a set.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* multipliers */}
            <div>
              <div style={{ fontFamily: HERO, fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 10 }}>Multipliers &amp; bonuses</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {multipliers.map((m) => (
                  <div key={m.val} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 12px", border: "1px solid rgba(20,51,34,0.08)", borderRadius: 13, opacity: m.active ? 1 : 0.42 }}>
                    <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 9, background: "linear-gradient(180deg,#FFFDF6,#F2E8D2)", border: `1px solid ${PQ.line}`, boxShadow: "inset 0 -2px 0 rgba(20,51,34,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 18, color: m.gc }}>{m.glyph}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>{m.label}</div>
                      <div style={{ marginTop: 2, fontFamily: HERO, fontSize: 11.5, color: PQ.inkSoft }}>{m.sub}</div>
                    </div>
                    <span style={{
                      flexShrink: 0, minWidth: 40, textAlign: "center", height: 28, lineHeight: "28px", padding: "0 11px", borderRadius: 999,
                      background: m.active ? PQ.rust : "transparent", border: `1.5px solid ${m.active ? PQ.rust : PQ.line}`,
                      fontFamily: HERO, fontWeight: 700, fontSize: 13, color: m.active ? PQ.off : PQ.inkFaint
                    }}>{m.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 9, fontFamily: HERO, fontSize: 11.5, lineHeight: 1.45, color: PQ.inkFaint }}>Dimmed bonuses aren't active yet — they switch on the moment you meet their condition during play.</div>
            </div>
          </div>
        </PreGameSheet>
      )}
    </div>
  );
}

Object.assign(window, {
  XIcon, Star, Shell, Seg, Group, Row, Avi, SectionLabel,
  ProfileScreen, SearchScreen, OtherProfileScreen, SettingsScreen,
  PublicLobbyScreen, PrivateLobbyScreen, InviteScreen, PracticeScreen,
  RejoinScreen, SubscriptionScreen, SubscriptionSheet, PaymentScreen, NotificationsScreen,
  LobbySeat, WaitingLobbyScreen, MiniTile, PreGameSheet, PreGameScreen,
});


/* ===== pocket-dragon-app.jsx (composition) ===== */
// pocket-dragon-app.jsx — faithful composition + extended journey. Reproduces the
// reference HomeApp controller (portrait Phone for onboarding/home/config, landscape
// PhoneLandscape for gameplay) and wires the NEW screens (Profile, Search, Settings,
// Lobby, Private, Invite, Practice, Rejoin, Subscription, Payment, Notifications) into
// tabs + sub-flows. Onboarding and Home visuals are untouched.

const DW = 384, DH = 832;

function Phone({ children, dark = false }) {
  return (
    <div className="device" style={{
      width: DW, height: DH, borderRadius: 56, background: "#080808",
      padding: 10, position: "relative",
      boxShadow: "0 2px 0 1px rgba(255,255,255,0.06) inset, 0 60px 110px -30px rgba(20,51,34,0.5), 0 0 0 2px #000"
    }}>
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 47, overflow: "hidden", background: PQ.off }}>
        {children}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 30 }}><IOSStatusBar dark={dark} /></div>
        <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 120, height: 35, borderRadius: 22, background: "#000", zIndex: 40 }} />
      </div>
    </div>
  );
}

function PhoneLandscape({ children }) {
  return (
    <div className="device" style={{
      width: DH, height: DW, borderRadius: 56, background: "#080808",
      padding: 10, position: "relative",
      boxShadow: "0 2px 0 1px rgba(255,255,255,0.06) inset, 0 60px 110px -30px rgba(20,51,34,0.5), 0 0 0 2px #000"
    }}>
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 47, overflow: "hidden", background: PQ.green }}>
        {children}
        <div style={{ position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)", width: 134, height: 5, borderRadius: 100, background: "rgba(249,242,228,0.35)", zIndex: 50 }} />
      </div>
    </div>
  );
}

function Sw({ label, on, set }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
      <span className="lbl">{label}</span>
      <div onClick={set} style={{
        width: 42, height: 25, borderRadius: 999, padding: 2, cursor: "pointer",
        background: on ? PQ.rust : "rgba(20,51,34,0.18)", transition: "background .18s", flexShrink: 0
      }}>
        <div style={{
          width: 21, height: 21, borderRadius: "50%", background: PQ.off,
          transform: on ? "translateX(17px)" : "translateX(0)", transition: "transform .18s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.25)"
        }} />
      </div>
    </div>
  );
}

// ═══════════════ 11.2 — END OF GAME / RESULTS ═══════════════
// Post-gameplay summary: ranked final scores (user emphasized) + gamification
// rewards that reveal one at a time (settle-and-glow). Calmer, celebratory beat.
function RewardCard({ reward, index }) {
  const emblem = {
    points: <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 20, color: "#3A2A06" }}>P</span>,
    border: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A2A06" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3" /><rect x="8.5" y="8.5" width="7" height="7" rx="1.5" /></svg>,
    tier: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A2A06" strokeWidth="1.9" strokeLinejoin="round"><path d="M4 8l3.2 3L12 5.5 16.8 11 20 8l-1.4 10.5H5.4z" /></svg>,
    tag: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A2A06" strokeWidth="1.9" strokeLinejoin="round"><path d="M4 12.5V5.5A1.5 1.5 0 015.5 4h7L20 11.5 12.5 19 4 12.5z" /><circle cx="8.4" cy="8.4" r="1.2" fill="#3A2A06" stroke="none" /></svg>,
  }[reward.kind] || null;
  return (
    <div className="pq-reveal" style={{
      animationDelay: `${0.35 + index * 0.5}s`,
      display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 18,
      background: "linear-gradient(150deg, rgba(230,190,99,0.16), rgba(201,151,47,0.08))",
      border: `1.5px solid ${GOLD}`,
    }}>
      <span className="pq-mahjong-glow" style={{
        width: 48, height: 48, flexShrink: 0, borderRadius: 14,
        background: `linear-gradient(160deg, ${GOLD_SOFT}, ${GOLD} 55%, ${GOLD_DEEP})`, border: "1.5px solid #EBCE81",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>{emblem}</span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 14.5, letterSpacing: "0.02em", color: PQ.ink }}>{reward.title}</div>
        <div style={{ marginTop: 3, fontSize: 12, lineHeight: 1.4, color: PQ.inkSoft }}>{reward.sub}</div>
      </div>
    </div>
  );
}

function ResultsScreen({ canExtend = true, onExtend, onHome, rewards = null }) {
  const ranked = [
    { rank: 1, name: "You", av: 1, score: 120, you: true },
    { rank: 2, name: "Diego R.", av: 0, score: 95 },
    { rank: 3, name: "Mei Lin", av: 3, score: 60 },
    { rank: 4, name: "Hana K.", av: 4, score: 40 },
  ];
  const rankColor = (r) => r === 1 ? GOLD : r === 2 ? "#B9B2A0" : r === 3 ? "#C08552" : PQ.inkFaint;

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: PQ.off }}>
      <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "58px 22px 12px" }}>
        {/* header — calm celebratory beat */}
        <div style={{ textAlign: "center" }}>
          <div className="pq-mahjong-glow" style={{
            width: 64, height: 64, margin: "0 auto", borderRadius: "50%",
            background: `linear-gradient(160deg, ${GOLD_SOFT}, ${GOLD} 55%, ${GOLD_DEEP})`, border: "2px solid #EBCE81",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3A2A06" strokeWidth="1.8" strokeLinejoin="round"><path d="M4 8l3.2 3L12 5.5 16.8 11 20 8l-1.4 10.5H5.4z" /></svg>
          </div>
          <div style={{ marginTop: 14, fontFamily: HERO, fontWeight: 700, fontSize: 24, letterSpacing: "0.05em", textTransform: "uppercase", color: PQ.ink }}>Game Over</div>
          <div style={{ marginTop: 6, fontSize: 13, color: PQ.inkSoft }}>East Round complete · You finished 1st</div>
        </div>

        {/* ranked scoreboard */}
        <div style={{ marginTop: 24, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 10 }}>Final Scores</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ranked.map((p) => (
            <div key={p.name} style={{
              display: "flex", alignItems: "center", gap: 13, padding: "11px 14px", borderRadius: 16,
              background: p.you ? "rgba(182,90,47,0.08)" : PQ.off,
              border: `1.5px solid ${p.you ? PQ.rust : PQ.line}`
            }}>
              <span style={{ width: 24, fontFamily: HERO, fontWeight: 700, fontSize: 16, textAlign: "center", color: rankColor(p.rank), flexShrink: 0 }}>{p.rank}</span>
              <span style={{ width: 42, height: 42, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: AVATARS[p.av].bg, border: `1.5px solid ${PQ.line}` }}>
                <img src={avatarSrc(p.av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(p.av)})`, transformOrigin: "center 40%" }} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.ink }}>{p.name}</span>
                  {p.you && <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.rust, border: `1px solid ${PQ.rust}`, borderRadius: 999, padding: "1px 7px" }}>You</span>}
                </div>
              </div>
              <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 18, color: p.you ? PQ.rust : PQ.green, flexShrink: 0 }}>{p.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* actions */}
      <div style={{ padding: "12px 22px 26px", borderTop: `1px solid ${PQ.line}`, background: PQ.off, flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {canExtend && <Btn variant="ghost" onClick={onExtend}>Extend the game</Btn>}
        <Btn variant="primary" onClick={onHome}>Return to home</Btn>
      </div>
    </div>
  );
}

function PocketDragonApp() {
  const [screen, setScreen] = React.useState("splash");   // onboarding screen, or "app"
  const [email, setEmail] = React.useState("ava.chen@example.com");
  const [anim, setAnim] = React.useState("in");
  const [tab, setTab] = React.useState("home");
  const [ongoing, setOngoing] = React.useState(true);
  const [selected, setSelected] = React.useState(null);
  const [route, setRoute] = React.useState("home");       // home | config | game | <sub-flow>
  const [plan, setPlan] = React.useState("annual");
  const [otherFrom, setOtherFrom] = React.useState("home");
  const [lobbyHost, setLobbyHost] = React.useState(true);
  const [extendMode, setExtendMode] = React.useState(false);
  const [game, setGame] = React.useState({ bot: true, disc: false, win: false });
  const [toast, setToast] = React.useState("");
  const toastT = React.useRef(null);

  const flash = (msg) => { setToast(msg); clearTimeout(toastT.current); toastT.current = setTimeout(() => setToast(""), 1700); };
  const go = (s) => { setAnim("out"); setTimeout(() => { setScreen(s); setAnim("in"); }, 160); };
  const enterApp = () => { setRoute("home"); setTab("home"); go("app"); };
  const goApp = (s) => { if (s === "welcome") enterApp(); else go(s); };
  const home = () => { setRoute("home"); setTab("home"); };

  // hub cards — extended journey (Join→lobby, Practice→practice, Create→config, Resume→rejoin)
  const onCard = (id) => {
    if (id === "resume") { setRoute("rejoin"); return; }
    setSelected(id);
    if (id === "create") { setExtendMode(false); setTimeout(() => setRoute("config"), 200); return; }
    if (id === "join") { setTimeout(() => setRoute("lobby"), 200); return; }
    if (id === "practice") { setTimeout(() => setRoute("practice"), 200); return; }
  };
  const goTab = (t) => { setRoute("home"); setTab(t); };
  const openOther = (from) => { setOtherFrom(from); setRoute("otherprofile"); };

  // ── ONBOARDING (untouched) ─────────────────────────────────
  if (screen !== "app") {
    let view = null;
    if (screen === "splash") view = <SplashScreen go={go} live />;
    else if (screen === "welcome") view = <WelcomeScreen go={go} />;
    else if (screen === "register") view = <RegisterScreen go={go} live setEmail={setEmail} />;
    else if (screen === "verify") view = <VerifyScreen go={goApp} live email={email} />;
    else if (screen === "login") view = <LoginScreen go={goApp} />;
    else if (screen === "forgot") view = <ForgotFlow go={go} live />;
    return (
      <div className="stage">
        <Phone>
          <div key={screen} style={{ height: "100%", animation: (anim === "in" ? "pqIn" : "pqOut") + " .26s ease both" }}>{view}</div>
        </Phone>
      </div>
    );
  }

  // ── IN-APP ─────────────────────────────────────────────────
  let phoneBody;
  if (route === "config") {
    phoneBody = <GameConfigScreen title={extendMode ? "Extend Game" : "Create A Game"} subtitle={extendMode ? "Adjust the setup and keep playing" : "Set the house rules — blame them later"} onBack={home} onCreate={() => { setLobbyHost(true); setRoute("waiting"); }} onShare={() => { setLobbyHost(true); setRoute("waiting"); }} onInvite={() => setRoute("invite")} />;
  } else if (route === "waiting") {
    phoneBody = <WaitingLobbyScreen isHost={lobbyHost} lobbyType={lobbyHost ? "Private Lobby" : "Public Lobby"} tableName={lobbyHost ? "The Jade Parlour" : "East Wind Table"} onBack={home} onStart={() => setRoute("seating")} />;
  } else if (route === "seating") {
    phoneBody = <SeatAssignmentScreen onBack={() => setRoute("waiting")} onEnter={() => setRoute("game")} />;
  } else if (route === "results") {
    phoneBody = <ResultsScreen canExtend={true} onExtend={() => { setExtendMode(true); setRoute("config"); }} onHome={() => { setOngoing(false); home(); }} />;
  } else if (route === "practice") {
    phoneBody = <PracticeScreen onBack={home} onStart={() => setRoute("seating")} />;
  } else if (route === "lobby") {
    phoneBody = <PublicLobbyScreen onBack={home} onJoin={() => { setLobbyHost(false); setRoute("waiting"); }} onPrivate={() => setRoute("private")} />;
  } else if (route === "private") {
    phoneBody = <PrivateLobbyScreen onBack={() => setRoute("lobby")} onJoin={() => { setLobbyHost(false); setRoute("waiting"); }} />;
  } else if (route === "pregame") {
    phoneBody = <PreGameScreen onSkip={() => setRoute("waiting")} onEnter={() => setRoute("waiting")} />;
  } else if (route === "invite") {
    phoneBody = <InviteScreen onBack={() => setRoute("config")} />;
  } else if (route === "rejoin") {
    phoneBody = <RejoinScreen onBack={home} onRejoin={() => setRoute("game")} onHome={home} />;
  } else if (route === "search") {
    phoneBody = <SearchScreen onBack={home} onOther={() => openOther("search")} />;
  } else if (route === "otherprofile") {
    phoneBody = <OtherProfileScreen onBack={() => setRoute(otherFrom)} />;
  } else if (route === "notifications") {
    phoneBody = <NotificationsScreen onBack={() => goTab("profile")} onAccept={() => { setLobbyHost(false); setRoute("waiting"); }} />;
  } else if (route === "subscription") {
    phoneBody = <SubscriptionScreen onBack={() => goTab("profile")} onSubscribe={(p) => { setPlan(p); setRoute("payment"); }} />;
  } else if (route === "payment") {
    phoneBody = <PaymentScreen plan={plan} onClose={() => setRoute("subscription")} onSuccess={() => { home(); flash("Welcome to Premium"); }} />;
  } else {
    phoneBody = (
      <>
        <div style={{ position: "absolute", inset: 0, paddingBottom: 86, display: "flex", flexDirection: "column" }}>
          <div key={tab + (tab === "home" ? (ongoing ? "-1" : "-0") : "")} className="pq-tabview"
            style={{ flex: 1, padding: "62px 22px 18px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {tab === "home"
              ? <HomeScreen showOngoing={ongoing} onCard={onCard} onAvatar={() => goTab("profile")} onLeave={() => { setOngoing(false); flash("You left the table"); }} selected={selected} onNotify={() => setRoute("notifications")} />
              : tab === "profile"
                ? <ProfileScreen onFind={() => setRoute("search")} onOther={() => openOther("home")} onLogout={() => { home(); go("splash"); }} onNotifications={() => setRoute("notifications")} onSubscriptions={() => setRoute("subscription")} />
                : tab === "settings"
                  ? <SettingsScreen />
                  : tab === "subscription"
                    ? <RulesScreen />
                    : <TabStub icon="users" label="Profile" />}
          </div>
        </div>
        <BottomNav active={tab} onChange={goTab} />
      </>
    );
  }

  return (
    <div className="stage">
      {route === "game" ? (
        <PhoneLandscape>
          <GameScreen demo={game} onExit={(what) => { if (what === "info") return flash("Rule Book"); if (what === "logout") return go("login"); if (what === "results") return setRoute("results"); home(); }} />
          <Toast msg={toast} />
        </PhoneLandscape>
      ) : (
        <Phone>
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            {phoneBody}
            <Toast msg={toast} />
          </div>
        </Phone>
      )}

      {/* design-review control (not part of the product UI) */}
      {route === "game" ? (
        <div className="ctrl" style={{ gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
          <Sw label="Bot playing" on={game.bot} set={() => setGame((g) => ({ ...g, bot: !g.bot }))} />
          <Sw label="Reconnecting" on={game.disc} set={() => setGame((g) => ({ ...g, disc: !g.disc }))} />
          <Sw label="Mahjong ready" on={game.win} set={() => setGame((g) => ({ ...g, win: !g.win }))} />
        </div>
      ) : (
        <div className="ctrl">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="lbl">Ongoing game</span>
            <span className="hint">{ongoing ? "Banner visible" : "No active game"}</span>
          </div>
          <div onClick={() => { home(); setOngoing((v) => !v); }} style={{ width: 46, height: 27, borderRadius: 999, padding: 2, cursor: "pointer", background: ongoing ? PQ.rust : "rgba(20,51,34,0.18)", transition: "background .18s" }}>
            <div style={{ width: 23, height: 23, borderRadius: "50%", background: PQ.off, transform: ongoing ? "translateX(19px)" : "translateX(0)", transition: "transform .18s", boxShadow: "0 1px 3px rgba(0,0,0,0.25)" }} />
          </div>
        </div>
      )}
    </div>
  );
}

if (typeof module !== "undefined") { module.exports = { PocketDragonApp }; }
window.PocketDragonApp = PocketDragonApp;


