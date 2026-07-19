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

// ── Gameplay Mockup Image Screen (Figma import placeholder) ──────
function GameScreen({ onExit }) {
  const handleExit = () => {
    if (typeof pock === "function") pock("select");
    if (onExit) onExit("results"); // Proceed to final results screen when exiting gameplay
  };

  return (
    <div 
      onClick={handleExit}
      style={{
        position: "absolute",
        inset: 0,
        background: "#150C1E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
        overflow: "hidden",
        cursor: "pointer"
      }}
      title="Click anywhere to return"
    >
      <img 
        src="assets/gameplay-placeholder.png" 
        alt="Gameplay Board Figma Mockup" 
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          userSelect: "none"
        }} 
      />
      {/* Floating Indicator */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20,
        padding: "6px 12px",
        background: "rgba(20, 11, 28, 0.72)",
        borderRadius: 8,
        color: "#fff",
        fontSize: 11,
        fontFamily: HERO,
        pointerEvents: "none",
        border: "1.5px solid rgba(255, 255, 255, 0.22)"
      }}>
        ← Tap anywhere to exit game
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
          <GameScreen onExit={(what) => { if (what === "info") return flash("Rule Book"); if (what === "logout") return go("login"); if (what === "results") return setRoute("results"); home(); }} />
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
