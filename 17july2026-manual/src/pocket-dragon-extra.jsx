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
    : "You'll have to login again to access your account";
  const cta = isDelete ? "Yes, I'm sure" : "Log out";
  const cancel = isDelete ? "No, I change my mind" : "Cancel";
  const title = isDelete ? "Delete account" : "Log out";
  const activeColor = isDelete ? PQ.destructive : PQ.rust;
  return (
    <div onClick={onClose} className="pq-modal-backdrop" style={{ position: "absolute", inset: 0, zIndex: 70, background: "rgba(20,51,34,0.5)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} className="pq-pop-in" style={{ width: "100%", background: PQ.off, borderTopLeftRadius: 26, borderTopRightRadius: 26, padding: "14px 22px 30px" }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: PQ.line, margin: "0 auto 18px" }} />
        <span style={{ width: 54, height: 54, borderRadius: "50%", background: "transparent", border: `1.5px solid ${activeColor}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          {isDelete
            ? <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={activeColor} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14M9 7V5a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0115 5v2M7 7l1 12.5a1.5 1.5 0 001.5 1.4h5A1.5 1.5 0 0016 19.5L17 7" /></svg>
            : <HIcon name="leave" size={24} stroke={activeColor} sw={1.9} />}
        </span>
        <h2 style={{ margin: 0, textAlign: "center", fontFamily: HERO, fontWeight: 700, fontSize: 19, letterSpacing: "0.03em", textTransform: "uppercase", color: PQ.ink }}>{title}</h2>
        <p style={{ margin: "10px 0 22px", textAlign: isDelete ? "justify" : "center", fontSize: 14, lineHeight: 1.5, color: PQ.inkSoft, whiteSpace: "pre-line" }}>{body}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <button onClick={() => { pock("select"); onConfirm(); }} className="pq-press" style={{ height: 54, borderRadius: 15, border: "none", cursor: "pointer", background: activeColor, color: PQ.off, fontFamily: HERO, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{cta}</button>
          <button onClick={onClose} className="pq-press" style={{ height: 54, borderRadius: 15, border: `1.5px solid ${activeColor}`, background: "transparent", cursor: "pointer", color: activeColor, fontFamily: HERO, fontWeight: 700, fontSize: 13.5, letterSpacing: "0.08em", textTransform: "uppercase" }}>{cancel}</button>
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
  const displayStats = seg === "season"
    ? { games: "42", winRate: "61%", highest: "486", positions: [["1st", "25%"], ["2nd", "35%"], ["3rd", "25%"], ["4th", "15%"]] }
    : { games: "1,204", winRate: "58%", highest: "512", positions: [["1st", "38%"], ["2nd", "27%"], ["3rd", "21%"], ["4th", "14%"]] };
  const statsSeason = [["42", "Games played"], ["61%", "Win rate"], ["486", "Highest score"], ["2nd", "Avg finish"]];
  const favs = [["Mei L.", 2, true, "Jade I"], ["Arjun P.", 1, true, "Jade III"], ["Priya R.", 0, false, "Bamboo I"], ["Sam K.", 1, true, "Bamboo II"]];
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

        {seg === "season" ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {statsSeason.map(([v, l]) => (
              <div key={l} style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 16, padding: "16px 16px 14px", background: PQ.off }}>
                <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 26, color: PQ.green, lineHeight: 1 }}>{v}</div>
                <div style={{ marginTop: 8, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkFaint }}>{l}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {/* Left Column: Stack of three narrow boxes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {/* Box 1: Games Played */}
              <div style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14, padding: "10px 12px", background: PQ.off }}>
                <div style={{ fontFamily: HERO, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkSoft }}>GAMES PLAYED</div>
                <div style={{ marginTop: 4, fontFamily: HERO, fontWeight: 700, fontSize: 24, color: "#1FA855", lineHeight: 1 }}>{displayStats.games}</div>
              </div>
              {/* Box 2: Win Rate */}
              <div style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14, padding: "10px 12px", background: PQ.off }}>
                <div style={{ fontFamily: HERO, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkSoft }}>WIN RATE</div>
                <div style={{ marginTop: 4, fontFamily: HERO, fontWeight: 700, fontSize: 20, color: PQ.ink, lineHeight: 1 }}>{displayStats.winRate}</div>
              </div>
              {/* Box 3: Highest Score */}
              <div style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14, padding: "10px 12px", background: PQ.off }}>
                <div style={{ fontFamily: HERO, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkSoft }}>HIGHEST SCORE</div>
                <div style={{ marginTop: 4, fontFamily: HERO, fontWeight: 700, fontSize: 20, color: PQ.ink, lineHeight: 1 }}>{displayStats.highest}</div>
              </div>
            </div>

            {/* Right Column: Position Stats */}
            <div style={{ border: "1px solid rgba(20,51,34,0.08)", borderRadius: 14, padding: "12px 14px", background: PQ.off, display: "flex", flexDirection: "column" }}>
              <div style={{ fontFamily: HERO, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PQ.inkSoft, marginBottom: 8 }}>POSITION STATS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, justifyContent: "space-around" }}>
                {displayStats.positions.map(([pos, pct]) => (
                  <div key={pos} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 12.5, textTransform: "uppercase", color: PQ.ink }}>{pos}</span>
                    <span style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15.5, color: PQ.rust }}>{pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {seg === "season" && (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: PQ.inkSoft }}>My Peeps</div>
              <button onClick={onFind} className="pq-press" style={{ background: "none", border: "none", cursor: "pointer", fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: PQ.rust }}>Show all</button>
            </div>
            <div className="pq-scroll" style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 4 }}>
              {favs.map(([name, av, online, tier]) => (
                <div key={name} style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: 68, userSelect: "none" }}>
                  <span style={{ position: "relative", width: 54, height: 54, flexShrink: 0 }}>
                    <span style={{ display: "block", width: 54, height: 54, borderRadius: "50%", overflow: "hidden", background: AVATARS[av].bg, border: `1.5px solid ${PQ.line}` }}>
                      <img src={avatarSrc(av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(av)})`, transformOrigin: "center 40%" }} />
                    </span>
                    {online && <span style={{ position: "absolute", top: -1, right: -1, width: 13, height: 13, borderRadius: "50%", background: "#1FA855", border: `2px solid ${PQ.off}` }} />}
                  </span>
                  <span style={{ fontFamily: HERO, fontSize: 11, fontWeight: 600, color: PQ.inkSoft, whiteSpace: "nowrap" }}>{name}</span>
                  <span style={{ fontFamily: HERO, fontSize: 8.5, fontWeight: 700, color: PQ.rust, letterSpacing: "0.04em", textTransform: "uppercase", marginTop: 1 }}>{tier}</span>
                </div>
              ))}
            </div>
          </div>
        )}
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
              const col = openFilter === "speed"
                ? PQ.rust
                : (o === "All" ? PQ.rust : DIFF_COLORS[o]);
              const border = `1.5px solid ${on ? col : PQ.line}`;
              const bg = on ? `${col}14` : "transparent";
              const textColor = on ? col : PQ.inkSoft;
              return (
                <button
                  key={o}
                  onClick={() => { if (openFilter === "speed") setSpeedF(o); else setDiffF(o); setOpenFilter(null); }}
                  className="pq-press"
                  style={{
                    height: 32, padding: "0 13px", borderRadius: 999, cursor: "pointer",
                    border, background: bg, color: textColor,
                    fontFamily: HERO, fontWeight: 700, fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase"
                  }}
                >
                  {o}
                </button>
              );
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
  const CORRECT = "PFZ9";
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
              {[["Slow", "60s", 0], ["Medium", "30s", 50], ["Fast", "10s", 100]].map(([t, sLabel, fp]) => (
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
  const [active, setActive] = React.useState([true, true, true, true]);
  const [rolled, setRolled] = React.useState([false, false, false, false]);
  const [rolling, setRolling] = React.useState([false, false, false, false]);
  const [sums, setSums] = React.useState([0, 0, 0, 0]);
  const [order, setOrder] = React.useState(null); // player index → wind index

  // Auto-start game if bot becomes East
  React.useEffect(() => {
    if (phase === "done" && order && order[0] !== 0) {
      const timer = setTimeout(() => {
        if (typeof pock === "function") pock("select");
        onEnter();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, order]);

  const checkRoundEnd = (currentSums) => {
    // Find highest sum among active players
    const activeSums = currentSums.map((s, idx) => active[idx] ? s : -1);
    const top = Math.max(...activeSums);
    
    // Find tied active players
    const tiedIndices = [];
    active.forEach((act, idx) => {
      if (act && currentSums[idx] === top) {
        tiedIndices.push(idx);
      }
    });

    if (tiedIndices.length > 1) {
      // Tie breaker round
      setTimeout(() => {
        setPhase("tie");
        if (typeof pock === "function") pock("select");
        
        // Deactivate eliminated players
        setActive(act => act.map((a, idx) => a && tiedIndices.includes(idx)));
        // Reset rolled for active players
        setRolled(rd => rd.map((r, idx) => tiedIndices.includes(idx) ? false : r));
        
        // If user is not active, let first tied bot roll automatically
        if (!tiedIndices.includes(0)) {
          rollNext(tiedIndices[0], tiedIndices, currentSums);
        }
      }, 600);
    } else {
      // Unique winner
      const winnerIdx = tiedIndices[0];
      const seatOf = {};
      seatOf[winnerIdx] = 0; // East
      seatOf[(winnerIdx + 1) % 4] = 1; // South
      seatOf[(winnerIdx + 2) % 4] = 2; // West
      seatOf[(winnerIdx + 3) % 4] = 3; // North
      
      setOrder(seatOf);
      setPhase("done");
      if (typeof pock === "function") pock("select");
    }
  };

  const rollNext = (idx, activeList, currentSums) => {
    if (idx >= 4) {
      checkRoundEnd(currentSums);
      return;
    }
    
    const isActive = activeList ? activeList.includes(idx) : active[idx];
    if (!isActive) {
      rollNext(idx + 1, activeList, currentSums);
      return;
    }

    setTimeout(() => {
      setRolling(r => { const next = [...r]; next[idx] = true; return next; });
      
      let count = 0;
      const interval = setInterval(() => {
        setVals(v => {
          const next = [...v];
          next[idx] = [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
          return next;
        });
        count++;
      }, 80);

      setTimeout(() => {
        clearInterval(interval);
        const a = 1 + Math.floor(Math.random() * 6);
        const b = 1 + Math.floor(Math.random() * 6);
        
        const nextSums = [...currentSums];
        nextSums[idx] = a + b;
        
        setVals(v => { const next = [...v]; next[idx] = [a, b]; return next; });
        setSums(nextSums);
        setRolling(r => { const next = [...r]; next[idx] = false; return next; });
        setRolled(rd => { const next = [...rd]; next[idx] = true; return next; });
        
        rollNext(idx + 1, activeList, nextSums);
      }, 800);
    }, 400);
  };

  const userRoll = () => {
    if (phase !== "intro" && phase !== "tie") return;
    if (phase === "tie" && !active[0]) return;
    
    if (typeof pock === "function") pock("select");
    setPhase("rolling");
    setRolling(r => { const next = [...r]; next[0] = true; return next; });

    let count = 0;
    const interval = setInterval(() => {
      setVals(v => {
        const next = [...v];
        next[0] = [1 + Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 6)];
        return next;
      });
      count++;
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      const a = 1 + Math.floor(Math.random() * 6);
      const b = 1 + Math.floor(Math.random() * 6);
      
      const nextSums = [...sums];
      nextSums[0] = a + b;
      
      setVals(v => { const next = [...v]; next[0] = [a, b]; return next; });
      setSums(nextSums);
      setRolling(r => { const next = [...r]; next[0] = false; return next; });
      setRolled(rd => { const next = [...rd]; next[0] = true; return next; });
      
      // Let other active players roll sequentially
      rollNext(1, null, nextSums);
    }, 800);
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
          const isActive = active[i];
          const hasRolled = rolled[i];
          const isRolling = rolling[i];
          const canTap = you && isActive && (phase === "intro" || phase === "tie") && !hasRolled;
          
          return (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", borderRadius: 16, background: PQ.off, border: `1.5px solid ${isEast ? PQ.rust : you && canTap ? PQ.lineMid : PQ.line}`, opacity: isActive ? 1 : 0.45, transition: "border-color .3s, opacity .3s" }}>
              <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: AVATARS[p.av].bg, border: `1.5px solid ${PQ.line}` }}>
                <img src={avatarSrc(p.av)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: `scale(${avatarScale(p.av)})`, transformOrigin: "center 40%" }} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 15, color: PQ.ink }}>{p.name}</div>
                <div style={{ marginTop: 3, fontFamily: HERO, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: seated ? (isEast ? PQ.rust : PQ.green) : PQ.inkFaint }}>
                  {seated 
                    ? `${wind} seat · ${vals[i][0] + vals[i][1]}` 
                    : isRolling 
                      ? "Rolling…" 
                      : !isActive 
                        ? `Eliminated · Final: ${vals[i][0] + vals[i][1]}`
                        : hasRolled 
                          ? `Rolled: ${vals[i][0] + vals[i][1]}` 
                          : canTap 
                            ? "Tap to roll" 
                            : "Waiting..."}
                </div>
              </div>
              <button onClick={canTap ? userRoll : undefined} className={canTap ? "pq-press pq-pulse" : ""} style={{ display: "flex", gap: 6, padding: canTap ? 6 : 0, borderRadius: 12, border: canTap ? `1.5px solid ${PQ.rust}` : "none", background: "transparent", cursor: canTap ? "pointer" : "default", pointerEvents: canTap ? "auto" : "none" }}>
                <Dice value={vals[i][0]} rolling={isRolling} />
                <Dice value={vals[i][1]} rolling={isRolling} />
              </button>
            </div>
          );
        })}
      </div>

      <div style={{ padding: "14px 22px 26px", borderTop: `1px solid ${PQ.line}`, background: PQ.off, flexShrink: 0 }}>
        {phase === "done" ? (
          order[0] === 0 ? (
            <Btn variant="primary" trailingIcon="arrowR" onClick={onEnter}>Start Game</Btn>
          ) : (
            <div style={{ textAlign: "center", padding: "10px 0", fontFamily: HERO, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: PQ.rust }}>
              Waiting for East to start...
            </div>
          )
        ) : (
          <Btn variant="primary" disabled={phase === "rolling" || (phase === "tie" && !active[0])} onClick={userRoll}>
            {phase === "rolling" ? "Rolling…" : phase === "tie" ? (active[0] ? "Roll Tie-Breaker" : "Watching Tie-Breaker…") : "Tap your dice to roll"}
          </Btn>
        )}
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


