// scoreboard-ref.jsx — Poquito Mahjong post-game scoreboard flow.
// Loaded via <x-import component-from-global-scope="Scoreboard" from="./scoreboard-ref.jsx"> (support.js runtime).
// Uses global React (provided by support.js). Exposes window.Scoreboard.

const { useState, useEffect } = React;

// avatar paths (relative to index.html)
const girlAv = "assets/avatars/girl.png";
const boyAv = "assets/avatars/boy.png";
const llamaAv = "assets/avatars/llama.png";
const bunnyAv = "assets/avatars/bunny.png";

const TILE = { green: "#143322", green2: "#1F4A30", greenDeep: "#0E2417", rust: "#B65A2F" };

function DotFace({ n, w }) {
  const s = Math.round(w * 0.86);
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
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill="#f7f1e4" stroke={c} strokeWidth={1.8} />
            <circle cx={cx} cy={cy} r={r * 0.4} fill={c} />
          </g>
        );
      })}
    </svg>
  );
}

function BambooFace({ n, w }) {
  const s = Math.round(w * 0.86);
  const stick = (x, y, key, col) => (
    <g key={key}>
      <rect x={x - 1.7} y={y} width={3.4} height={8} rx={1.7} fill="none" stroke={col} strokeWidth={1.5} />
      <line x1={x - 1.7} y1={y + 4} x2={x + 1.7} y2={y + 4} stroke={col} strokeWidth={1.2} />
    </g>
  );
  const rowsFor = {
    1: [[15]], 2: [[10, 20]], 3: [[7, 15, 23]],
    4: [[10, 20], [10, 20]], 5: [[10, 20], [15], [10, 20]],
    6: [[7, 15, 23], [7, 15, 23]], 7: [[15], [7, 15, 23], [7, 15, 23]],
    8: [[7, 15, 23], [7, 15, 23], [11, 19]], 9: [[7, 15, 23], [7, 15, 23], [7, 15, 23]],
  }[n] || [[15]];
  const ys = { 1: [11], 2: [4, 18], 3: [2, 11, 20] }[rowsFor.length] || [2, 11, 20];
  const green = "#1f7a43", red = "#b02a1e";
  return (
    <svg width={s} height={s} viewBox="0 0 30 30">
      {rowsFor.map((row, ri) =>
        row.map((x, ci) =>
          stick(x, ys[ri], ri + "-" + ci,
            (n === 1 || (n % 2 === 1 && ri === Math.floor(rowsFor.length / 2) && row.length === 1)) ? red : green)
        )
      )}
    </svg>
  );
}

function TileFace({ suit, value, w }) {
  if (suit === "dragon") {
    const isR = value === "R";
    return <span style={{ fontFamily: "'Noto Serif SC',serif", fontWeight: 700, fontSize: Math.max(13, w * 0.6), color: isR ? "#c0392b" : "#1f7a43", lineHeight: 1 }}>{isR ? "中" : "發"}</span>;
  }
  if (suit === "wind") {
    const map = { E: "東", S: "南", W: "西", N: "北" };
    return <span style={{ fontFamily: "'Noto Serif SC',serif", fontWeight: 700, fontSize: Math.max(12, w * 0.55), color: "#2a3550", lineHeight: 1 }}>{map[value] || value}</span>;
  }
  if (suit === "char") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 0.9 }}>
        <span style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 700, fontSize: Math.max(11, w * 0.46), color: "#2f5fa0" }}>{value}</span>
        <span style={{ fontFamily: "'Noto Serif SC',serif", fontWeight: 700, fontSize: Math.max(11, w * 0.46), color: "#b02a1e" }}>萬</span>
      </div>
    );
  }
  const n = typeof value === "number" ? value : 1;
  return suit === "dot" ? <DotFace n={n} w={w} /> : <BambooFace n={n} w={w} />;
}

function Tile({ suit, value, w = 32, faceDown, style }) {
  const r = Math.max(4, w * 0.16);
  const h = Math.round(w * 1.36);
  if (faceDown) {
    return (
      <div style={{
        width: w, height: h, borderRadius: r, flexShrink: 0,
        background: `linear-gradient(150deg, ${TILE.green2}, ${TILE.green} 58%, ${TILE.greenDeep})`,
        border: "1px solid rgba(249,242,228,0.12)", position: "relative", overflow: "hidden",
        boxShadow: "0 1px 2px rgba(0,0,0,0.35)", ...style,
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage:
          "repeating-linear-gradient(45deg, rgba(249,242,228,0.09) 0 1.5px, transparent 1.5px 6px), repeating-linear-gradient(-45deg, rgba(249,242,228,0.07) 0 1.5px, transparent 1.5px 6px)" }} />
        <div style={{ position: "absolute", inset: "24% 28%", borderRadius: 3, border: "1px solid rgba(203,124,85,0.45)" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: w, height: h, borderRadius: r, flexShrink: 0,
      background: "linear-gradient(180deg,#FFFDF6,#F2E8D2)",
      border: "1px solid rgba(20,51,34,0.2)",
      boxShadow: "0 2px 3px rgba(0,0,0,0.28), inset 0 -2px 0 rgba(20,51,34,0.08)",
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative", ...style,
    }}>
      <TileFace suit={suit} value={value} w={w} />
    </div>
  );
}

const GREEN = "#2E7D4F", DEEP = "#143322", RUST = "#B65A2F";
const F = "'Hero','Helvetica Neue',Helvetica,Arial,sans-serif";
const sign = (n) => (n >= 0 ? "+" : "") + n;

// ── inject webfonts + resets once ────────────────────────────────
function useFonts() {
  useEffect(() => {
    if (document.getElementById("pq-scoreboard-fonts")) return;
    const l = document.createElement("link");
    l.id = "pq-scoreboard-fonts";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Noto+Serif+SC:wght@700&display=swap";
    document.head.appendChild(l);
    const s = document.createElement("style");
    s.textContent = ".pq-scroll{scrollbar-width:none}.pq-scroll::-webkit-scrollbar{width:0;height:0}" +
      ".pq-press{transition:transform .12s ease,filter .12s ease;-webkit-tap-highlight-color:transparent;cursor:pointer}" +
      ".pq-press:active{transform:scale(.97);filter:brightness(.98)}";
    document.head.appendChild(s);
  }, []);
}

const Avatar = ({ src, size }) => (
  <span style={{ width: size, height: size, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: "#DCEAF2", display: "block" }}>
    <img src={src} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
  </span>
);

function Scoreboard({
  winnerName = "Ava", wind = "East", gameNumber = 3, totalGames = 3,
  finalScore = 4000, rp = 50, frame = true, controls = true,
}) {
  useFonts();
  const [activePanel, setActivePanel] = useState(0); // 0 win/draw · 1 others · 2 summary
  const [outcome, setOutcome] = useState("win");       // "win" | "draw"
  const [isHost, setIsHost] = useState(true);
  const [invited] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [extendConfig, setExtendConfig] = useState(false);
  const [extendCount, setExtendCount] = useState(0);
  const [timerOn, setTimerOn] = useState(true);
  const [speed, setSpeed] = useState(0);
  const go = (i) => { setActivePanel(i); setExtendConfig(false); };

  // ── data ──
  const melds = [
    { tiles: [{ suit: "dot", value: 1 }, { down: true }, { down: true }, { suit: "dot", value: 1 }] },
    { tiles: [{ suit: "dot", value: 2 }, { suit: "dot", value: 2 }, { suit: "dot", value: 2 }, { suit: "dot", value: 2 }] },
    { tiles: [{ suit: "dot", value: 3 }, { down: true }, { suit: "dot", value: 3 }] },
    { tiles: [{ suit: "dot", value: 4 }, { suit: "dot", value: 4 }, { suit: "dot", value: 4 }] },
    { tiles: [{ suit: "wind", value: "W" }, { suit: "wind", value: "W" }] },
  ];
  const flowers = Array(4).fill({ suit: "dragon", value: "G" });
  const pointsItems = [
    { name: "Winning hand", val: "10" }, { name: "Concealed Kong", val: "8" },
    { name: "Exposed Kong", val: "4" }, { name: "Concealed Pung", val: "2" }, { name: "Bonus flowers ×4", val: "4" },
  ];
  const doublesItems = [
    { name: "Half flush", val: "×3" }, { name: "Self-drawn", val: "×2" }, { name: "Seat wind", val: "×1" },
  ];
  const opponents = [
    { name: "Lena", wind: "South", placeLabel: "2nd", avatar: boyAv, score: 1200, rp: 10, pts: "14", dbl: "1", foul: false,
      flowers: [{ suit: "dragon", value: "G" }, { suit: "dragon", value: "R" }],
      melds: [
        { tiles: [{ suit: "dot", value: 5 }, { down: true }, { suit: "dot", value: 5 }] },
        { tiles: [{ suit: "bamboo", value: 6 }, { suit: "bamboo", value: 7 }, { suit: "bamboo", value: 8 }] },
        { tiles: [{ suit: "char", value: 9 }, { suit: "char", value: 9 }] },
      ] },
    { name: "Marco", wind: "West", placeLabel: "3rd", avatar: llamaAv, score: 1400, rp: 5, pts: "8", dbl: "0", foul: false,
      flowers: [{ suit: "dragon", value: "G" }],
      melds: [
        { tiles: [{ suit: "char", value: 3 }, { suit: "char", value: 3 }, { suit: "char", value: 3 }] },
        { tiles: [{ suit: "dot", value: 1 }, { suit: "dot", value: 2 }, { suit: "dot", value: 3 }] },
        { tiles: [{ suit: "wind", value: "E" }, { suit: "wind", value: "E" }] },
      ] },
    { name: "Priya", wind: "North", placeLabel: "4th", avatar: bunnyAv, score: 1400, rp: 0, pts: "6", dbl: "1", foul: true,
      reason: "Declared Mahjong on an incomplete hand.",
      flowers: [{ suit: "dragon", value: "R" }],
      melds: [
        { tiles: [{ suit: "bamboo", value: 2 }, { suit: "bamboo", value: 3 }, { suit: "bamboo", value: 4 }] },
        { tiles: [{ suit: "dot", value: 7 }, { suit: "dot", value: 8 }, { suit: "dot", value: 9 }] },
        { tiles: [{ suit: "dragon", value: "R" }, { suit: "dragon", value: "R" }] },
      ] },
  ];
  const drawPlayers = [
    { name: winnerName, wind: "East", avatar: girlAv, d: 500 },
    { name: "Lena", wind: "South", avatar: boyAv, d: 500 },
    { name: "Marco", wind: "West", avatar: llamaAv, d: 500 },
    { name: "Priya", wind: "North", avatar: bunnyAv, d: 500 },
  ];
  const speeds = [{ name: "Slow", sec: 60, fill: "8%" }, { name: "Medium", sec: 30, fill: "50%" }, { name: "Fast", sec: 10, fill: "92%" }];
  const sp = speeds[speed] || speeds[0];

  const isGuest = !isHost;
  const sumAccept = isGuest && invited;

  // ── style helpers ──
  const L = { fontFamily: F, fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6E6A5E" };
  const cardBox = { border: "1.5px solid #E3D6BB", borderRadius: 16 };
  const primaryBtn = { border: "none", background: "linear-gradient(160deg,#CB7C55,#B65A2F 52%,#9C4824)", color: "#F9F2E4", fontFamily: F, fontWeight: 700, textTransform: "uppercase" };
  const greenBtn = { border: "none", background: "linear-gradient(160deg,#1F4A30,#143322 58%,#0E2417)", color: "#F9F2E4", fontFamily: F, fontWeight: 700, textTransform: "uppercase" };
  const outlineBtn = { background: "transparent", border: "1.5px solid rgba(20,51,34,0.32)", color: "#143322", fontFamily: F, fontWeight: 700, textTransform: "uppercase" };

  const panelWin = activePanel === 0 && outcome === "win" && !extendConfig;
  const panelDraw = activePanel === 0 && outcome === "draw" && !extendConfig;
  const panelOthers = activePanel === 1 && !extendConfig;
  const panelSummary = activePanel === 2 && !extendConfig;

  // ── panels ──
  const winnerPanel = (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", padding: "16px 26px 16px 66px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ ...L, fontSize: 11, letterSpacing: "0.26em", color: "#9A9385" }}>Score Board</div>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 30, lineHeight: 1, letterSpacing: "0.06em", color: GREEN, marginTop: 2 }}>MAHJONG!</div>
      </div>
      <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: "#C2A18C" }}>
          <img src={girlAv} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: "#6E6A5E", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{winnerName}</div>
          <div style={{ ...L, letterSpacing: "0.16em", marginTop: 3 }}>{wind}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, flexShrink: 0 }}>
          <span style={{ ...L, fontSize: 8.5, color: "#9A9385" }}>Flowers</span>
          <div style={{ display: "flex", gap: 2 }}>{flowers.map((f, i) => <Tile key={i} suit={f.suit} value={f.value} w={22} />)}</div>
        </div>
      </div>
      <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ ...L, fontSize: 11, letterSpacing: "0.18em" }}>Winner's Hand</span>
        <span style={{ fontFamily: F, fontSize: 10, color: "#9A9385" }}>swipe →</span>
      </div>
      <div className="pq-scroll" style={{ marginTop: 8, overflowX: "auto", paddingBottom: 4 }}>
        <div style={{ display: "flex", gap: 16, width: "max-content", padding: "2px 2px 0" }}>
          {melds.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 2, flexShrink: 0 }}>
              {m.tiles.map((t, j) => <Tile key={j} suit={t.suit} value={t.value} w={28} faceDown={t.down} />)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 14, flex: 1, minHeight: 0, display: "flex", gap: 14, alignItems: "stretch" }}>
        {[["Points", "28", pointsItems], ["Doubles", "6", doublesItems]].map(([title, total, items], k) => (
          <div key={k} style={{ flex: 1, ...cardBox, padding: "13px 16px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <span style={L}>{title}</span>
              <span style={{ fontFamily: F, fontWeight: 700, fontSize: 24, lineHeight: 1, color: GREEN, fontVariantNumeric: "tabular-nums" }}>{total}</span>
            </div>
            <div style={{ marginTop: 10, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {items.map((it, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <span style={{ fontFamily: F, fontSize: 12, color: "#6E6A5E" }}>{it.name}</span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: "#37342B", fontVariantNumeric: "tabular-nums" }}>{it.val}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ width: 150, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 22, paddingLeft: 4 }}>
          {[["Score", sign(finalScore)], ["Reward", sign(rp) + " RP"]].map(([t, v], i) => (
            <div key={i}>
              <div style={{ ...L, fontSize: 9.5, letterSpacing: "0.16em" }}>{t}</div>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 26, lineHeight: 1, color: GREEN, fontVariantNumeric: "tabular-nums", marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const drawPanel = (
    <div className="pq-scroll" style={{ position: "absolute", inset: 0, overflowY: "auto", padding: "22px 26px 34px 66px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ ...L, fontSize: 11, letterSpacing: "0.26em", color: "#9A9385" }}>Score Board</div>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 36, lineHeight: 1, letterSpacing: "0.05em", color: GREEN, marginTop: 8 }}>IT'S A DRAW</div>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: RUST, marginTop: 10 }}>East retains East position</div>
      </div>
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
        <div style={{ minWidth: 180, ...cardBox, padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 }}>
          <span style={{ ...L, letterSpacing: "0.16em" }}>Bank</span>
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 20, lineHeight: 1, color: GREEN, fontVariantNumeric: "tabular-nums" }}>{sign(2000)}</span>
        </div>
      </div>
      <div style={{ ...L, fontSize: 11, letterSpacing: "0.18em", marginTop: 20 }}>Table Adjustments</div>
      <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 22px" }}>
        {drawPlayers.map((dp, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 2px", borderBottom: "1px solid #E3D6BB" }}>
            <Avatar src={dp.avatar} size={38} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: "#37342B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{dp.name}</div>
              <div style={{ ...L, fontSize: 8.5 }}>{dp.wind}</div>
            </div>
            <span style={{ fontFamily: F, fontWeight: 700, fontSize: 17, fontVariantNumeric: "tabular-nums", color: dp.d >= 0 ? GREEN : RUST, flexShrink: 0 }}>{sign(dp.d)}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, display: "flex", gap: 12, maxWidth: 420 }}>
        <button onClick={() => go(2)} className="pq-press" style={{ flex: 1, height: 46, borderRadius: 14, fontSize: 12, letterSpacing: "0.12em", ...outlineBtn }}>Leave Table</button>
        <button onClick={() => go(2)} className="pq-press" style={{ flex: 1.2, height: 46, borderRadius: 14, fontSize: 12, letterSpacing: "0.12em", ...greenBtn }}>Continue Playing</button>
      </div>
    </div>
  );

  const othersPanel = (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
      <div className="pq-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "16px 26px 8px 66px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {opponents.map((op, i) => (
            <div key={i} style={{ ...cardBox, borderRadius: 18, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Avatar src={op.avatar} size={44} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: "#37342B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{op.name}</div>
                  <div style={{ ...L, fontSize: 9 }}>{op.wind} · {op.placeLabel}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
                  <span style={{ ...L, fontSize: 8, color: "#9A9385" }}>Flowers</span>
                  <div style={{ display: "flex", gap: 2, minHeight: 22 }}>{op.flowers.map((f, j) => <Tile key={j} suit={f.suit} value={f.value} w={15} />)}</div>
                </div>
              </div>
              <div className="pq-scroll" style={{ marginTop: 12, overflowX: "auto", paddingBottom: 2 }}>
                <div style={{ display: "flex", gap: 12, width: "max-content" }}>
                  {op.melds.map((m, j) => (
                    <div key={j} style={{ display: "flex", gap: 1.5 }}>
                      {m.tiles.map((t, k) => <Tile key={k} suit={t.suit} value={t.value} w={20} faceDown={t.down} />)}
                    </div>
                  ))}
                </div>
              </div>
              {op.foul && (
                <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 10, border: "1.5px solid rgba(182,90,47,0.4)", borderRadius: 12, padding: "10px 12px" }}>
                  <span style={{ width: 22, height: 22, flexShrink: 0, borderRadius: "50%", border: "1.5px solid #B65A2F", color: "#B65A2F", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F, fontWeight: 700, fontSize: 13 }}>!</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: F, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: RUST }}>False Mahjong</div>
                    <div style={{ fontFamily: F, fontSize: 11.5, color: "#6E6A5E", marginTop: 2 }}>{op.reason}</div>
                  </div>
                </div>
              )}
              <div style={{ marginTop: 12, height: 1, background: "#E3D6BB" }} />
              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {[["Points", op.pts], ["Doubles", op.dbl]].map(([t, v], j) => (
                    <div key={j} style={{ display: "flex", gap: 8, fontFamily: F, fontSize: 11, color: "#6E6A5E" }}>
                      <span style={{ fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t}</span>
                      <span style={{ fontWeight: 700, color: "#37342B", fontVariantNumeric: "tabular-nums" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <span style={{ ...L, fontSize: 9, color: "#9A9385" }}>Score </span>
                  <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: op.score >= 0 ? GREEN : RUST, fontVariantNumeric: "tabular-nums" }}>{sign(op.score)}</span>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ ...L, fontSize: 9, color: "#9A9385" }}>Reward</div>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 24, lineHeight: 1, color: GREEN, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>{(op.rp > 0 ? "+" : "") + op.rp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", gap: 12, borderTop: "1px solid #E3D6BB", padding: "10px 26px 16px 66px" }}>
        <button onClick={() => go(2)} className="pq-press" style={{ flex: 1, height: 46, borderRadius: 14, fontSize: 12, letterSpacing: "0.12em", ...outlineBtn }}>Leave Table</button>
        <button onClick={() => go(2)} className="pq-press" style={{ flex: 1.2, height: 46, borderRadius: 14, fontSize: 12, letterSpacing: "0.12em", ...greenBtn }}>Continue Playing</button>
      </div>
    </div>
  );

  const og = (a) => `rgba(249,242,228,${a})`;
  const summaryPanel = (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: "linear-gradient(165deg,#1F4A30 0%,#143322 55%,#0E2417 100%)" }}>
      <div className="pq-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "16px 40px 8px 80px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 22, letterSpacing: "0.05em", textTransform: "uppercase", color: RUST }}>Round Summary</div>
            <div style={{ ...L, fontSize: 10, letterSpacing: "0.22em", color: og(0.55), marginTop: 4 }}>All 3 Games</div>
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ width: 56, height: 56, flexShrink: 0, borderRadius: "50%", overflow: "hidden", background: "#C2A18C" }}>
              <img src={girlAv} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 20, color: "#F9F2E4" }}>You</div>
              <div style={{ ...L, fontSize: 10, letterSpacing: "0.16em", color: "#F9F2E4", opacity: 0.7, marginTop: 2 }}>Your Result</div>
            </div>
          </div>
          <div style={{ marginTop: 16, textAlign: "right", fontFamily: F, fontWeight: 700, fontSize: 13, color: "#CB7C55", fontVariantNumeric: "tabular-nums" }}>70 / 200 RP</div>
          <div style={{ marginTop: 6, position: "relative", height: 14, borderRadius: 999, background: og(0.14), overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: "0 auto 0 0", width: "35%", background: "linear-gradient(90deg,#CB7C55,#B65A2F)", borderRadius: 999 }} />
          </div>
          <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between", ...L, fontSize: 10, letterSpacing: "0.1em", color: og(0.6) }}>
            <span>Firefly I</span><span>Firefly II</span>
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 16, textAlign: "center" }}>
            {[["Final Score", sign(finalScore), "#F9F2E4"], ["Final Reward", "+40 RP", "#CB7C55"]].map(([t, v, c], i) => (
              <React.Fragment key={i}>
                {i === 1 && <div style={{ width: 1, background: og(0.18) }} />}
                <div style={{ flex: 1 }}>
                  <div style={{ ...L, fontSize: 10, letterSpacing: "0.16em", color: og(0.55) }}>{t}</div>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 28, lineHeight: 1, color: c, fontVariantNumeric: "tabular-nums", marginTop: 6 }}>{v}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
          {sumAccept && (
            <p style={{ margin: "16px 0 0", textAlign: "center", fontFamily: F, fontSize: 13, lineHeight: 1.5, color: og(0.85) }}>
              The Host, {winnerName}, has invited you to continue playing.
            </p>
          )}
        </div>
      </div>
      <div style={{ flexShrink: 0, borderTop: `1px solid ${og(0.14)}`, display: "flex", gap: 12, justifyContent: "center", padding: "10px 40px 16px 80px" }}>
        {isHost ? (
          <>
            <button onClick={() => go(0)} className="pq-press" style={{ flex: 1, maxWidth: 220, height: 46, borderRadius: 14, background: "transparent", border: "1.5px solid #B65A2F", color: "#CB7C55", fontFamily: F, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Return to Hub</button>
            <button onClick={() => setExtendConfig(true)} className="pq-press" style={{ flex: 1, maxWidth: 220, height: 46, borderRadius: 14, fontSize: 12, letterSpacing: "0.1em", ...primaryBtn }}>Extend Round</button>
          </>
        ) : (
          <>
            <button onClick={() => go(0)} className="pq-press" style={{ flex: 1, maxWidth: 220, height: 46, borderRadius: 14, background: "transparent", border: "1.5px solid #B65A2F", color: "#CB7C55", fontFamily: F, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Decline Invite</button>
            <button onClick={() => setAccepted(true)} className="pq-press" style={{ flex: 1, maxWidth: 220, height: 46, borderRadius: 14, fontSize: 12, letterSpacing: "0.1em", ...primaryBtn }}>{accepted ? "Accepted ✓" : "Accept Invite"}</button>
          </>
        )}
      </div>
    </div>
  );

  const speedBtn = (label, secs, idx, align) => (
    <button onClick={() => { setSpeed(idx); setTimerOn(true); }} className="pq-press" style={{ border: "none", background: "transparent", textAlign: align, padding: 0 }}>
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: speed === idx ? RUST : "#9A9385" }}>{label}</div>
      <div style={{ fontFamily: F, fontSize: 9, color: "#9A9385" }}>{secs}</div>
    </button>
  );
  const extendPanel = (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", background: "#F9F2E4" }}>
      <div className="pq-scroll" style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "16px 26px 8px 66px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setExtendConfig(false)} className="pq-press" style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "50%", border: "1.5px solid #E3D6BB", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#37342B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B65A2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M2.5 19a6.5 6.5 0 0113 0" /><circle cx="17.5" cy="9" r="2.4" /><path d="M15 19a5 5 0 016.5-4.8" /></svg>
        </div>
        <div style={{ marginTop: 12, maxWidth: 360, fontFamily: F, fontWeight: 700, fontSize: 26, letterSpacing: "0.02em", textTransform: "uppercase", color: "#37342B", lineHeight: 1.05 }}>Extend the Game</div>
        <div style={{ marginTop: 5, maxWidth: 360, fontFamily: F, fontSize: 13, color: "#9A9385" }}>Set the house rules – blame them later</div>
        <div style={{ ...L, letterSpacing: "0.18em", color: "#9A9385", marginTop: 20 }}>Game Setup</div>
        <div style={{ marginTop: 10, maxWidth: 360, ...cardBox, padding: "12px 14px", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 12, background: "#EDE3CF", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F, fontWeight: 700, fontSize: 20, color: "#37342B" }}>W</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: "#37342B" }}>West</div>
            <div style={{ fontFamily: F, fontSize: 12, color: "#9A9385", marginTop: 2 }}>Goulash</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <button onClick={() => setExtendCount((c) => Math.max(0, c - 1))} className="pq-press" style={{ width: 34, height: 34, borderRadius: 10, border: "1.5px solid #E3D6BB", background: "transparent", fontFamily: F, fontWeight: 700, fontSize: 20, color: "#37342B", lineHeight: 1 }}>–</button>
            <span style={{ minWidth: 20, textAlign: "center", fontFamily: F, fontWeight: 700, fontSize: 18, color: "#37342B", fontVariantNumeric: "tabular-nums" }}>{extendCount}</span>
            <button onClick={() => setExtendCount((c) => c + 1)} className="pq-press" style={{ width: 34, height: 34, borderRadius: 10, border: "1.5px solid #E3D6BB", background: "transparent", fontFamily: F, fontWeight: 700, fontSize: 20, color: "#37342B", lineHeight: 1 }}>+</button>
          </div>
        </div>
        <div style={{ marginTop: 20, maxWidth: 360, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <span style={{ ...L, letterSpacing: "0.18em", color: "#9A9385" }}>Turn Timer</span>
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: RUST }}>{timerOn ? sp.sec + "s · " + sp.name : "Off"}</span>
        </div>
        <div style={{ marginTop: 10, maxWidth: 360, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: "#37342B" }}>Enable / Disable Turn Timer</span>
          <button onClick={() => setTimerOn((t) => !t)} className="pq-press" style={{ width: 46, height: 26, flexShrink: 0, borderRadius: 999, position: "relative", border: "none", background: timerOn ? "#B65A2F" : "#D8CDB4" }}>
            <span style={{ position: "absolute", top: 3, left: timerOn ? 23 : 3, width: 20, height: 20, borderRadius: "50%", background: "#F9F2E4", transition: "left .18s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }} />
          </button>
        </div>
        <div style={{ marginTop: 16, maxWidth: 360, position: "relative", height: 6, borderRadius: 999, background: "#E3D6BB" }}>
          <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: timerOn ? sp.fill : "8%", background: RUST, borderRadius: 999 }} />
          <span style={{ position: "absolute", top: "50%", left: timerOn ? sp.fill : "8%", transform: "translate(-50%,-50%)", width: 16, height: 16, borderRadius: "50%", background: RUST, border: "2px solid #F9F2E4", boxShadow: "0 1px 3px rgba(0,0,0,0.25)" }} />
        </div>
        <div style={{ marginTop: 8, maxWidth: 360, display: "flex", justifyContent: "space-between" }}>
          {speedBtn("Slow", "60s", 0, "left")}{speedBtn("Medium", "30s", 1, "center")}{speedBtn("Fast", "10s", 2, "right")}
        </div>
        <div style={{ marginTop: 12, maxWidth: 360, fontFamily: F, fontSize: 11.5, lineHeight: 1.4, color: "#9A9385" }}>If time runs out, a bot automatically plays your turn.</div>
      </div>
      <div style={{ flexShrink: 0, borderTop: "1px solid #E3D6BB", padding: "10px 26px 16px 66px" }}>
        <button onClick={() => { setExtendConfig(false); setActivePanel(0); setOutcome("win"); }} className="pq-press" style={{ width: "100%", maxWidth: 360, height: 48, borderRadius: 14, fontSize: 13, letterSpacing: "0.14em", ...primaryBtn }}>Extend the Game</button>
      </div>
    </div>
  );

  const screen = (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: frame ? 37 : 0, overflow: "hidden", background: "#F9F2E4" }}>
      {frame && <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 35, height: 120, borderRadius: 22, background: "#000", zIndex: 50 }} />}
      <div style={{ position: "absolute", inset: 0 }}>
        {panelWin && winnerPanel}
        {panelDraw && drawPanel}
        {panelOthers && othersPanel}
        {panelSummary && summaryPanel}
        {extendConfig && extendPanel}
      </div>
    </div>
  );

  const pill = (label, active, onClick) => (
    <button onClick={onClick} className="pq-press" style={{ border: "none", borderRadius: 999, padding: "8px 14px", fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", background: active ? RUST : "transparent", color: active ? "#F9F2E4" : "#37342B" }}>{label}</button>
  );
  const pill2 = (label, active, onClick) => (
    <button onClick={onClick} className="pq-press" style={{ border: "none", borderRadius: 999, padding: "7px 12px", fontFamily: F, fontWeight: 700, fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", background: active ? DEEP : "transparent", color: active ? "#F9F2E4" : "#37342B" }}>{label}</button>
  );
  const bar = { display: "flex", gap: 6, alignItems: "center", background: "#F9F2E4", border: "1.5px solid #E3D6BB", borderRadius: 999, padding: 5 };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22, padding: "40px 20px", background: "radial-gradient(120% 90% at 50% 0%, #EFE8DA 0%, #E4DCCB 60%, #DAD1BE 100%)" }}>
      {frame ? (
        <div style={{ width: 880, height: 428, borderRadius: 46, background: "#080808", padding: 10, position: "relative", boxShadow: "0 2px 0 1px rgba(255,255,255,0.06) inset, 0 60px 110px -30px rgba(20,51,34,0.5), 0 0 0 2px #000" }}>{screen}</div>
      ) : (
        <div style={{ width: "100%", maxWidth: 880, height: 428, position: "relative" }}>{screen}</div>
      )}
      {controls && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "center" }}>
          <div style={bar}>
            {pill("Scoreboard", activePanel === 0 && !extendConfig, () => go(0))}
            {pill("Others", activePanel === 1 && !extendConfig, () => go(1))}
            {pill("Summary", activePanel === 2 && !extendConfig, () => go(2))}
          </div>
          <div style={bar}>
            <span style={{ ...L, fontSize: 9.5, letterSpacing: "0.1em", color: "#9A9385", padding: "0 6px" }}>Outcome</span>
            {pill2("Win", outcome === "win", () => setOutcome("win"))}
            {pill2("Draw", outcome === "draw", () => setOutcome("draw"))}
          </div>
          <div style={bar}>
            <span style={{ ...L, fontSize: 9.5, letterSpacing: "0.1em", color: "#9A9385", padding: "0 6px" }}>View as</span>
            {pill2("Host", isHost, () => setIsHost(true))}
            {pill2("Participant", !isHost, () => setIsHost(false))}
          </div>
        </div>
      )}
    </div>
  );
}

window.Scoreboard = Scoreboard;
