/* ===== BUNDLED GAMEPLAY REF ===== */

// Start of File: gameplay-app.jsx
const { useState } = React;

const PQ = {
  green: "#143322",
  rust: "#B65A2F",
  off: "#F9F2E4",
  line: "#E3D6BB",
  ink: "#37342B",
  inkSoft: "#6E6A5E",
  inkFaint: "#9A9385",
};
const HERO = "'Hero','Helvetica Neue',Helvetica,Arial,sans-serif";

function Icon({ name, size = 18, stroke = PQ.ink, sw = 1.8 }) {
  if (name === "chevD") {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>;
  }
  if (name === "close") {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>;
  }
  return null;
}

function Seg({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", background: "#EDE3CF", padding: 3, borderRadius: 8, border: `1px solid ${PQ.line}`, width: "fit-content" }}>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className="pq-press"
            style={{
              border: "none",
              background: active ? PQ.rust : "transparent",
              color: active ? PQ.off : PQ.ink,
              fontFamily: HERO,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function RulesTile({ suit, value, w = 24, h = 32, style }) {
  let folder = "";
  let filename = "";
  if (suit === "rings") {
    folder = "Original/Rings";
    filename = `${value}r.png`;
  } else if (suit === "craks" || suit === "characters") {
    folder = "Original/Craks";
    filename = `${value}c.png`;
  } else if (suit === "bamboos") {
    folder = "Original/Bamboos";
    filename = `${value}b.png`;
  } else if (suit === "dragons" || suit === "winds" || suit === "honours") {
    folder = "Original/Honours";
    filename = `${value}.png`;
  } else if (suit === "flowers") {
    folder = "Flowers";
    filename = `${value}.png`;
  }
  const src = `assets/rules-ranking/tile-design/${folder}/${filename}`;
  return (
    <img
      src={src}
      style={{
        width: w,
        height: h,
        objectFit: "contain",
        flexShrink: 0,
        ...style
      }}
      alt={`${suit} ${value}`}
    />
  );
}

function HandDisplay({ title, desc, tiles, note }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "8px 12px", background: PQ.off, border: `1.5px solid ${PQ.line}`, borderRadius: 8, fontFamily: HERO }}>
      <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 13, color: PQ.rust }}>{title}</div>
      <div style={{ fontSize: 12.5, color: PQ.inkSoft, lineHeight: 1.4, textAlign: "justify" }}>{desc}</div>
      <div style={{ display: "flex", gap: 2, flexWrap: "wrap", margin: "4px 0" }}>
        {tiles.map((t, idx) => (
          <RulesTile key={idx} suit={t.suit} value={t.value} w={20} h={28} />
        ))}
      </div>
      {note && <div style={{ fontSize: 11.5, color: PQ.rust, fontStyle: "italic", lineHeight: 1.35, textAlign: "justify" }}>{note}</div>}
    </div>
  );
}

function DoubleGroup({ title, items, note, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ marginTop: 8, fontFamily: HERO }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          fontFamily: HERO,
          fontWeight: 700,
          fontSize: 13,
          color: PQ.green,
          borderBottom: `1px solid ${PQ.line}`,
          paddingBottom: 5,
          marginBottom: open ? 6 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <span>{title}</span>
        <div style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}>
          <Icon name="chevD" size={16} stroke={PQ.green} sw={2} />
        </div>
      </div>
      {open && (
        <>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.55, color: PQ.inkSoft, textAlign: "justify" }}>
            {items.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 4 }}>
                {typeof item === "string" ? (
                  item
                ) : (
                  <span>
                    {item.text}
                    {item.note && <span style={{ color: PQ.rust, fontStyle: "italic" }}> {item.note}</span>}
                  </span>
                )}
              </li>
            ))}
          </ul>
          {note && <div style={{ fontSize: 11, color: PQ.inkSoft, fontStyle: "italic", marginTop: 4, lineHeight: 1.4, textAlign: "justify" }}>{note}</div>}
        </>
      )}
    </div>
  );
}

// Single column long scroll layout for Hands & Doubles tab
function HandsDoublesView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, fontFamily: HERO }}>
      {/* Hands Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 6 }}>HANDS</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: PQ.inkSoft, marginBottom: 12, textAlign: "justify" }}>
            To get a count, your completed hand has to be valid. The validity of the hand depends on fulfilling at least three conditions or ‘doubles’.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <HandDisplay
              title="Option 1: Clean Hand (3 Doubles)"
              desc="All Pungs/Kongs in one suit only (all Rings, all Bamboos, all Craks, or all Honours)"
              tiles={[
                { suit: "rings", value: 1 }, { suit: "rings", value: 1 }, { suit: "rings", value: 1 },
                { suit: "rings", value: 2 }, { suit: "rings", value: 2 }, { suit: "rings", value: 2 },
                { suit: "rings", value: 5 }, { suit: "rings", value: 5 }, { suit: "rings", value: 5 },
                { suit: "rings", value: 8 }, { suit: "rings", value: 8 }, { suit: "rings", value: 8 },
                { suit: "rings", value: 9 }, { suit: "rings", value: 9 }
              ]}
            />

            <HandDisplay
              title="Option 2: Major Hand (1 Double)"
              desc="All Pungs/Kongs in Honours + 1’s & 9s (same suit)"
              tiles={[
                { suit: "dragons", value: "green" }, { suit: "dragons", value: "green" }, { suit: "dragons", value: "green" },
                { suit: "winds", value: "W" }, { suit: "winds", value: "W" }, { suit: "winds", value: "W" },
                { suit: "dragons", value: "white" }, { suit: "dragons", value: "white" }, { suit: "dragons", value: "white" },
                { suit: "rings", value: 1 }, { suit: "rings", value: 1 }, { suit: "rings", value: 1 },
                { suit: "rings", value: 9 }, { suit: "rings", value: 9 }
              ]}
              note="Note: Since a Major Hand gives only 1 double, to have a valid hand, a player must fulfill any 2 other doubles (please see Doubles section)"
            />

            <HandDisplay
              title="Option 3: Mixed Hand (No Doubles)"
              desc="All Pungs/Kongs in Honours + any 1 suit"
              tiles={[
                { suit: "dragons", value: "red" }, { suit: "dragons", value: "red" }, { suit: "dragons", value: "red" },
                { suit: "winds", value: "E" }, { suit: "winds", value: "E" }, { suit: "winds", value: "E" },
                { suit: "bamboos", value: 2 }, { suit: "bamboos", value: 2 }, { suit: "bamboos", value: 2 },
                { suit: "bamboos", value: 6 }, { suit: "bamboos", value: 6 }, { suit: "bamboos", value: 6 },
                { suit: "bamboos", value: 8 }, { suit: "bamboos", value: 8 }
              ]}
              note="Note: Since a Mixed Hand does not give any, to have a valid hand, a player must fulfill any 3 doubles (please see Doubles section)"
            />

            <HandDisplay
              title="Option 4: Terminal Hand (3 Doubles)"
              desc="All Pungs/Kongs of 1’s + 9’s (different suits)"
              tiles={[
                { suit: "rings", value: 1 }, { suit: "rings", value: 1 }, { suit: "rings", value: 1 },
                { suit: "bamboos", value: 9 }, { suit: "bamboos", value: 9 }, { suit: "bamboos", value: 9 },
                { suit: "craks", value: 1 }, { suit: "craks", value: 1 }, { suit: "craks", value: 1 },
                { suit: "rings", value: 9 }, { suit: "rings", value: 9 }, { suit: "rings", value: 9 },
                { suit: "bamboos", value: 1 }, { suit: "bamboos", value: 1 }
              ]}
              note="Note: Special scoring for this hand mentioned under ‘3 Doubles’"
            />
          </div>

          <div style={{ fontSize: 11.5, color: PQ.inkSoft, fontStyle: "italic", marginTop: 10, textAlign: "justify" }}>
            The above only states the possible hand combinations that may be made; for extra ‘doubles’ to be calculated, please refer to the ‘Doubles’ Section.
          </div>
        </div>
      </div>

      {/* Doubles Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 4 }}>DOUBLES</div>

        <DoubleGroup
          title="1 Double"
          defaultOpen={true}
          items={[
            "1 Own Flower",
            "1 Round Flower (if Own Flower = Round Flower, 2 doubles)",
            "Pung/Kong of Green/Red/White Dragon (each)",
            "Pung/Kong of Own Wind",
            "Pung/Kong of Round Wind (if Own Wind = Round Wind, 2 doubles)",
            "Pung/Kong of 1 + Pung/Kong of 9, both in same suit",
            "Three concealed Pungs",
            { text: "Major Hand (Pungs/Kongs of Honours & Terminals)", note: "Note¹: Honours=Winds & Dragons; Terminals=1’s & 9’s; Note²: You cannot end in a Terminal Pair unless you have a Pung of a Terminal in the same suit" },
            { text: "Presence of all 3 Dragons (Pungs/Kongs; could be a mix of Pungs/Kongs)", note: "Note: This double is in addition to the doubles you get for each Pung/Kong of Dragons" },
            { text: "Presence of any 3 Winds (Pungs/Kongs; could be a mix of Pungs/Kongs)", note: "Note: This double is in addition to the doubles you get for each Pung/Kong of Wind (Own/Round)" },
            "Mahjong on last tile of the game",
            "Kong Kong Mahjong (Mahjong on 2 consecutive tiles from Flower Wall)",
            "Clean Sweep (declaring Mahjong for an entire round, i.e. all 4 games)",
            { text: "Being East (even if East does not Mahjong)", note: "Note: This does not qualify as a double to fulfil conditions; this is only an extra double" }
          ]}
        />

        <DoubleGroup
          title="2 Doubles"
          defaultOpen={false}
          items={[
            "If Own Flower = Round Flower",
            "Pair of Own Flower*",
            "Pair of Round Flower*",
            "If Own Wind = Round Wind: Pung/Kong of that",
            "3 Kongs (exposed & concealed mix allowed)",
            "4 concealed Pungs"
          ]}
          note="*Note: Can claim 500 points for each mentioned Pair immediately (before the first discard, if applicable or as soon as you get the pair) or keep it for counting as doubles; once claimed, these Flowers cannot count as doubles; however, in case of getting a Bouquet later with these flowers, 1000 points can be claimed for the Bouquet"
        />

        <DoubleGroup
          title="3 Doubles"
          defaultOpen={false}
          items={[
            "All Honours hand (Winds & Dragons)",
            "Clean suit hand (All Pungs/Kongs in one suit only)",
            { text: "Terminal hand or Heads and Tails hand: Pungs/Kongs of 1’s and 9’s only (mixed suits; no other tile should be present)", note: "Note: If Mahjong declared, 5000 points from all (including East); if ‘calling’, 2500 points" },
            { text: "Bouquet of Flowers (Flowers 1,2,3,4 all red/all blue)", note: "Note: Can claim 1000 points for the Bouquet immediately (before the first discard if applicable or as soon as you get the pair) or keep it for counting as doubles; once claimed, the Flowers cannot count as doubles; if points claimed and a player gets own/round flower during the game, they can claim 500 points for the pair" },
            "3 concealed Kongs",
            "4 Kongs (exposed & concealed mix allowed)",
            "Concealed Mahjong (Pungs & Kongs mix)",
            "Concealed Mahjong with 4 concealed Pungs"
          ]}
        />

        <DoubleGroup
          title="4 Doubles"
          defaultOpen={false}
          items={["4 concealed Kongs"]}
        />

        <DoubleGroup
          title="5 Doubles"
          defaultOpen={false}
          items={[
            { text: "Standing hand (Dealt ‘calling’)", note: "Note: “Dealt” would mean after all exchanges, before first discard; if a player has a “Standing hand”, they should place all their tiles (except 2) face down on top of their rack & declare they have a Standing hand. No changes allowed" }
          ]}
        />

        <DoubleGroup
          title="6 Doubles"
          defaultOpen={false}
          items={[
            { text: "2 Bouquets", note: "Note: Can claim 5000 points for the Bouquets immediately (before the first discard if applicable or as soon as you get it) or keep it for counting as doubles; once claimed, the Flowers cannot count as doubles" }
          ]}
        />

        <DoubleGroup
          title="7 Doubles"
          defaultOpen={false}
          items={[
            { text: "4 Pungs/Kongs of Winds + Pair of Dragons", note: "Note: No extra doubles for individual Pungs/Kongs of Winds (these are included in the calculation of 7 doubles)" }
          ]}
        />

        <DoubleGroup
          title="8 Doubles"
          defaultOpen={false}
          items={["Earth’s Blessing (Mahjong with East’s first discard)"]}
        />

        <DoubleGroup
          title="9 Doubles"
          defaultOpen={false}
          items={["Heaven’s Blessing (East is dealt Mahjong)"]}
        />
      </div>
    </div>
  );
}

// Single column long scroll layout for Rules tab
function RulesTabContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, fontFamily: HERO }}>
      {/* Claiming Tiles */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 8 }}>Claiming Tiles</div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: PQ.inkSoft, textAlign: "justify" }}>
            <b style={{ color: PQ.green }}>Mahjong:</b> Tile for Mahjong can be picked from anywhere, for any set (even a Pair); if 2 players need the same tile to declare Mahjong, the player closest to the discarder gets preference (in order of E-S-W-N).
          </div>

          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: PQ.inkSoft, textAlign: "justify" }}>
            <b style={{ color: PQ.green }}>Pung:</b> Can pick up last discarded tile from anywhere for completing a Pung (ie if you already have a pair in your hand); the Pung (now exposed) will then be displayed on rack.
          </div>

          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: PQ.green, marginBottom: 4 }}>Kong:</div>
            <ol style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.5, color: PQ.inkSoft, textAlign: "justify" }}>
              <li style={{ marginBottom: 4 }}>
                <b>Picking from discard:</b> Can pick up last discarded tile from anywhere for completing a Kong (ie if you already have a Pung in your hand); the Kong (now exposed) will then be displayed on rack.
              </li>
              <li style={{ marginBottom: 4 }}>
                <b>Concealed Pung:</b> If you already have a concealed Pung in your hand and you pick up the 4th tile from the wall, you can upgrade the Pung to a Kong; the Kong (still concealed) will then be displayed face down on the rack.
              </li>
              <li style={{ marginBottom: 4 }}>
                <b>Exposed Pung:</b>
                <div style={{ marginTop: 2, paddingLeft: 6 }}>
                  a) If you have an Exposed Pung on the rack and you self pick the 4th tile, you can upgrade the Pung to a Kong; the Kong (exposed) will then be displayed on the rack.<br />
                  b) If you have an Exposed Pung on the rack and someone throws the 4th tile, you cannot pick up that tile to make it a Kong.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* General */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 8 }}>General</div>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.5, color: PQ.inkSoft, textAlign: "justify" }}>
          <li style={{ marginBottom: 6 }}>
            <b>East Multiplier:</b> East always gives and gets double (points) to/from all players.
          </li>
          <li style={{ marginBottom: 6 }}>
            <b>False Mahjong:</b> If it’s a wrong declaration of Mahjong, the game can still continue with the other 3 players, with the defaulter being declared a ‘dead hand’; the defaulter is liable to pay a penalty of 1000/2000E points to the other players and plays till the end of the game.<br />
            <span style={{ color: PQ.rust, fontStyle: "italic", fontSize: 11 }}>Note: for a dead hand, the player will not be allowed to claim any sets/Mahjong. They have to settle points and will not get a count for their hand.</span>
          </li>
          <li style={{ marginBottom: 4 }}>
            <b>Draw:</b> If there are no more tiles left on the wall, the game has gone into a draw; each player places 500 points in the bank (to be claimed by the winner of the next game). <span style={{ color: PQ.rust, fontStyle: "italic", fontSize: 11 }}>Note: East player retains East position.</span>
          </li>
        </ul>
      </div>

      {/* Penalty */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PQ.rust, marginBottom: 8 }}>Penalty</div>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.55, color: PQ.inkSoft, textAlign: "justify" }}>
          <li style={{ marginBottom: 8 }}>
            When a player has at least 3 Pungs/Kongs on their rack, they are <b>“on penalty”</b>. Anyone giving them a tile which helps them declare Mahjong, has to <b>pay for the entire table</b> (unless they themselves were ‘calling’: need only 1 more tile to Mahjong).
          </li>
          <li style={{ marginBottom: 8 }}>
            If 3 players are “on penalty”, the <b>4th player is not liable</b> to pay penalty even if they give a tile for Mahjong, even if they are not ‘calling’.
          </li>
          <li style={{ marginBottom: 8 }}>
            If all 4 players are “on penalty”, <b>penalty applies to all</b>, unless ‘calling’, i.e. whoever gives the tile for Mahjong, they’ll have to pay for the table.
          </li>
          <li style={{ marginBottom: 8 }}>
            If a player pays penalty to the declaring player, <b>no other player gets a count</b>.
          </li>
        </ul>
      </div>
    </div>
  );
}

function RulesRankingModal({ onClose, defaultSeg = "hands_doubles" }) {
  const [seg, setSeg] = useState(defaultSeg);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 100,
        background: "rgba(14, 36, 23, 0.65)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 36px"
      }}
    >
      <div
        className="pq-rise"
        style={{
          width: "60%",
          height: "100%",
          maxHeight: 380,
          background: PQ.off,
          borderRadius: 10,
          border: `1.5px solid ${PQ.line}`,
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `1.5px solid ${PQ.line}`,
            flexShrink: 0,
            background: PQ.off
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ fontFamily: HERO, fontWeight: 700, fontSize: 16, letterSpacing: "0.04em", textTransform: "uppercase", color: PQ.ink }}>
              Rules &amp; Ranking
            </div>
            <Seg options={[{ label: "Hands & Doubles", value: "hands_doubles" }, { label: "Rules", value: "rules" }]} value={seg} onChange={setSeg} />
          </div>
          <button
            onClick={onClose}
            className="pq-press"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: `1.5px solid ${PQ.line}`,
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon name="close" size={16} stroke={PQ.ink} sw={2} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="pq-scroll" style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
          {seg === "hands_doubles" ? <HandsDoublesView /> : <RulesTabContent />}
        </div>
      </div>
    </div>
  );
}

function GameplayApp() {
  // Screen state:
  // 1 = Main Game Screen (exchange-gameboard.png)
  // 2 = Menu Click (game board-menu.png)
  // 3 = Rules Click (exchange-gameboard.png with horizontal RulesRankingModal overlay)
  const [currentScreen, setCurrentScreen] = useState(1);

  const pill = (label, active, onClick) => (
    <button
      onClick={onClick}
      className="pq-press"
      style={{
        border: "none",
        borderRadius: 10,
        padding: "8px 18px",
        fontFamily: HERO,
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        background: active ? PQ.rust : PQ.off,
        color: active ? PQ.off : PQ.ink,
        boxShadow: active ? "0 2px 8px rgba(182, 90, 47, 0.4)" : "none",
        border: `1.5px solid ${active ? PQ.rust : PQ.line}`,
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, padding: "40px 20px", background: "radial-gradient(120% 90% at 50% 0%, #EFE8DA 0%, #E4DCCB 60%, #DAD1BE 100%)" }}>
      {/* Mobile Device Frame (No notch) */}
      <div style={{ width: 880, height: 428, borderRadius: 36, background: "#000000", padding: 8, position: "relative", boxShadow: "0 2px 0 1px rgba(255,255,255,0.06) inset, 0 60px 110px -30px rgba(20,51,34,0.5), 0 0 0 2px #000" }}>
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 28, overflow: "hidden", background: "#000000" }}>

          {/* Screen 1: Main Game Screen (exchange-gameboard.png) */}
          {currentScreen === 1 && (
            <div style={{ position: "absolute", inset: 0, padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
              <img
                src="assets/game board-exchange.png"
                alt="Main Game Screen"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", userSelect: "none" }}
              />
            </div>
          )}

          {/* Screen 2: Menu Click (game board-menu.png) */}
          {currentScreen === 2 && (
            <div style={{ position: "absolute", inset: 0, padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
              <img
                src="assets/game board-menu.png"
                alt="Menu Click Screen"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", userSelect: "none" }}
              />
            </div>
          )}

          {/* Screen 3: Rules Click (exchange-gameboard.png with horizontal RulesRankingModal overlay) */}
          {currentScreen === 3 && (
            <div style={{ position: "absolute", inset: 0, padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", background: "#000000" }}>
              <img
                src="assets/game board-exchange.png"
                alt="Exchange Board"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", userSelect: "none" }}
              />
              <RulesRankingModal onClose={() => setCurrentScreen(1)} />
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons Below Mobile Screen */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center" }}>
        {pill("1. Main Game Screen", currentScreen === 1, () => setCurrentScreen(1))}
        {pill("2. Menu Click", currentScreen === 2, () => setCurrentScreen(2))}
        {pill("3. Rules Click", currentScreen === 3, () => setCurrentScreen(3))}
      </div>
    </div>
  );
}

window.GameplayApp = GameplayApp;

// End of File: gameplay-app.jsx

