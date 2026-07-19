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

const GREEN = "#1b5a42", DEEP = "#143322", RUST = "#B65A2F";
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
