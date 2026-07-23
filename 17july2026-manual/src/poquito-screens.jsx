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
          <LogoImg height={84} src="assets/pocketdragon-tm.png" style={{ alignSelf: "flex-start" }} />
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
      <div style={{ fontSize: 12, color: PQ.inkSoft, letterSpacing: "0.02em" }}>Tap to choose your look</div>
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
          <h2 style={{ margin: 0, fontFamily: HERO, fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>Meet Your Alter Ego</h2>
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
function RegisterScreen({ go, seed = {}, setEmail, avatar, setAvatar }) {
  const [localAvatar, setLocalAvatar] = React.useState(seed.avatar ?? 0);
  const activeAvatar = avatar !== undefined ? avatar : localAvatar;
  const activeSetAvatar = setAvatar || setLocalAvatar;
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
  const pwState = pw ? "valid" : "idle";
  const cState = cpw ? (cpw === pw ? "valid" : "error") : "idle";

  const canSubmit = eState === "valid" && uc.state === "valid" && !!pw && cState === "valid" && !!city && agree;
  const ff = (n) => ({ focused: focus === n, onFocus: () => setFocus(n), onBlur: () => setFocus("") });

  return (
    <Screen bg={PQ.off} top={62} bottom={30} style={{ overflow: "hidden" }}>
      <TopBar onBack={() => go("welcome")} plain />
      <div style={{ flex: 1, overflowY: "auto", marginRight: -8, paddingRight: 8 }} className="pq-scroll">
        <Title size={20} sub="Email verification is required before your account goes live">Create Account</Title>
        <AvatarPicker value={activeAvatar} onPick={activeSetAvatar} />
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

// ── EMAIL VERIFIED panel ───────────────────────────────────────
function VerifiedPanel({ go, cta, live }) {
  React.useEffect(() => {
    if (!live || cta) return;
    const t = setTimeout(() => go("welcome"), 5000);
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
  const [status, setStatus] = React.useState(seed.status || "idle");
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

// numeric keypad
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

// ── FORGOT PASSWORD ────────────────────────────────────────────
function ForgotFlow({ go, live, seed = {} }) {
  const [step, setStep] = React.useState(seed.step ?? 0);
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

  const pwState = pw ? "valid" : "idle";
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

// ── Success terminal ───────────────────────────────────────────
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
  LoginScreen, ForgotFlow, SuccessScreen, PoquitoApp, userCheck, emailOK, CITIES, AVATARS, avatarSrc, avatarScale
});
