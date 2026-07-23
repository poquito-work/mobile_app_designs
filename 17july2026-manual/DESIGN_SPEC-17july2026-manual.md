# Pocket Dragon - Mobile App Design Specification
**Date: 17 July 2026 (Manual)**

---

## 1. Global Color Catalog
To maintain design consistency and speed up development, all colors are defined here with semantic names. **Do not use hex codes directly in page layouts; reference these global variables instead.**

### Brand Colors
- `PQ.green` (Primary Deep Green): `#143322`
- `PQ.greenDeep` (Backdrop Deep Green): `#0E2417`
- `PQ.green2` (Medium Green Accent): `#1F4A30`
- `PQ.greenText` (Valid Status / Emphasized Green): `#1B5A42`
- `PQ.rust` (Primary Accent / CTA Orange): `#B65A2F`
- `PQ.rustDeep` (Pressed CTA / Shadow Orange): `#9C4824`
- `PQ.rustSoft` (Gradient/Highlight Orange): `#CB7C55`
- `PQ.off` (Primary Background Canvas / Cream): `#F9F2E4`
- `PQ.offWarm` (Container Background Cream): `#F1E6D2`
- `PQ.offDim` (Slightly Darker Cream): `#E7D9C0`
- `PQ.mint` (Success Indicator Green): `#9ED8B0`
- `PQ.destructive` (Error / Deletion Red): `#7F1616`

### Text & Ink Colors
- `PQ.ink` (Headings & Input Text): `#37342B` (Warm Dark-Grey)
- `PQ.inkSoft` (Labels & Secondary Copy): `#6E6A5E` (Medium Grey)
- `PQ.inkFaint` (Placeholders / Hints / Inactive Icons): `#9A9385` (Faint Grey)

### UI Element Colors
- `PQ.field` (Field, Keypad & OTP Box Fills): `#F3EAD7` (Slightly darker shade of the cream canvas)
- `PQ.line` (Idle / Inactive Borders): `#E3D6BB`
- `PQ.lineMid` (Focused / Valid Borders): `#CBB78F`

### Rewards & Gold Accents
- `GOLD` (Primary Gold Accent): `#C9972F`
- `GOLD_SOFT` (Gold Highlight): `#EBCE81`
- `GOLD_DEEP` (Gold Shadow): `#A97C22`

### Game Difficulty Colors
- `Smurf` (Beginner): `#A9C4D6`
- `Easy` (Novice): `#6D7A62`
- `Fair` (Standard): `#A16A03`
- `Hard` (Experienced): `#B65A2F`
- `Fierce` (Expert): `#630206`

### Tier / Rank Colors
- `Firefly`: `#E8C84A`
- `Koi`: `#00658F`
- `Tiger`: `#F1A33D`
- `Phoenix`: `#7F1616`
- `Dragon`: `#34604F`

### Translucent overlays & selections
- `PQ.selection`: `rgba(182, 90, 47, 0.25)` (Rust overlay selection)
- `PQ.toggle-off`: `rgba(20, 51, 34, 0.18)` (Faint green overlay)
- `PQ.disabled-bg`: `rgba(20, 51, 34, 0.10)` (Green alpha for inactive buttons)
- `PQ.step-inactive`: `rgba(20, 51, 34, 0.16)` (Inactive step tracker)

---

## 2. Common Gradients & Backgrounds
These are the standard linear and radial gradients used for screens and interactive components.

- **Main App Canvas Radial Background**:
  `radial-gradient(120% 90% at 50% 0%, #EFE8DA 0%, #E4DCCB 60%, #DAD1BE 100%)`
  Used as the default backdrop for the outer staging environment.
- **Primary CTA / Enabled Orange Button**:
  `linear-gradient(160deg, PQ.rustSoft 0%, PQ.rust 52%, PQ.rustDeep 100%)`
- **Gold Reward Card Background**:
  `linear-gradient(150deg, rgba(230,190,99,0.16), rgba(201,151,47,0.08))`
- **Gold Emblem Glow**:
  `linear-gradient(160deg, GOLD_SOFT 0%, GOLD 55%, GOLD_DEEP 100%)`
- **Green Theme Backdrop Glow** (for onboarding splash and lobbies):
  - Primary Base: `PQ.green` (`#143322`)
  - Top Radial Glow: `radial-gradient(60% 100% at 50% 0%, rgba(203,124,85,0.30), rgba(31,74,48,0.0) 70%)`
  - Bottom Accent: `radial-gradient(closest-side, rgba(182,90,47,0.16), rgba(20,51,34,0))`
- **Light Theme Backdrop Glow**:
  - Primary Base: `PQ.off` (`#F9F2E4`)
  - Top Radial Glow: `radial-gradient(60% 100% at 50% 0%, rgba(203,124,85,0.16), rgba(249,242,228,0) 72%)`
  - Bottom Accent: `radial-gradient(closest-side, rgba(20,51,34,0.06), rgba(249,242,228,0))`

---

## 3. Typography & Brand Font System
- **Wordmark Font**: *Playfair Display* (Serif). Used strictly for the branding keyword `"Poquito"` or custom logo representations.
- **Product UI Font**: *Hero*. Used for all headings, labels, fields, and buttons.
  - **Light (300)**: Optional fine details.
  - **Regular (400)**: Body text, paragraphs, description labels.
  - **Medium (500)**: Field entries, secondary headings.
  - **Bold (700)**: Main titles, buttons, status indicators, tabs.

---

## 4. Brand & Asset Catalog
All static files listed below are placed in the `assets/` directory.

### Core Logos & Banners
- `assets/poquito-logo.png`: Main branded app lockup.
- `assets/poquito-dragon.png`: Branded red dragon emblem.
- `assets/poquito-logo-full.png`: Large format landscape branding logotype.
- `assets/poquito-dragon-green.png`: Deep green variation of the dragon emblem.
- `assets/pocketdragon-tm.png`: Branding welcome screen lockup.
- `assets/lobby-board.png`: Staging table top board illustration (150x150px).
- `assets/figma-gameboard.png`: Landscape full-screen gameboard mockup image.
- `assets/Report a bug-v3.svg`: Vector icon for bug reporting link.
- `assets/About Us.png`: Icon image for "About Us" settings row.
- `assets/Contact.png`: Icon image for "Contact Support" settings row.
- `assets/Wishlist.png`: Icon image for "Wishlist" settings row.

### User Avatar Presets
Each avatar corresponds to a specific preset background and scaling.
1. **Boy** (`assets/avatars/poquito-boy.png`): background `DCEAF2`
2. **Girl** (`assets/avatars/poquito-girl.png`): background `C2A18C`
3. **Bunny** (`assets/avatars/poquito-bunny.png`): background `F4EFE9`
4. **Llama** (`assets/avatars/poquito-llama.png`): background `2E3192`
5. **Owl** (`assets/avatars/poquito-owl.png`): background `E8A857`
6. **Hedgehog** (`assets/avatars/poquito-porc.png`): background `F6F3EC`

### Tier Badges
Located under `assets/rules-ranking/tiers/`:
- `Firefly.png`: Firefly tier badge (Firefly color: `#E8C84A`)
- `Koi.png`: Koi tier badge (Koi color: `#00658F`)
- `Tiger.png`: Tiger tier badge (Tiger color: `#F1A33D`)
- `Phoenix.png`: Phoenix tier badge (Phoenix color: `#7F1616`)
- `dragon.png`: Dragon leaderboard badge (Dragon color: `#34604F`)

### Mahjong Tile Face Graphics
Located under `assets/rules-ranking/tile-design/`:
- `tile back.png`: Default tile back graphic.
- **Original Suits** (`Original/`):
  - `Original/Rings/` (`1r.png` to `9r.png`)
  - `Original/Craks/` (`1c.png` to `9c.png`)
  - `Original/Bamboos/` (`1b.png` to `9b.png`)
  - `Original/Honours/` (Dragons: `red.png`, `green.png`, `white.png` | Winds: `E.png`, `S.png`, `W.png`, `N.png`)
- **Flowers & Seasons** (`Flowers/`):
  - Flowers: `blue-f1.png` to `blue-f4.png`
  - Seasons: `red-f1.png` to `red-f4.png`

---

## 5. Page-by-Page Design Specifications

### Screen 1: Splash Screen
- **Background**: Light Backdrop (`LightBackdrop` radial glow on `PQ.off`).
- **Asset Images**: `assets/poquito-logo.png` (centered, height: 84px).
- **Textual Content**:
  - Subtitle: *"Mahjong on your time, anywhere you are!"*
- **Color Mappings**:
  - Subtitle text: `PQ.rust`
- **Layout**: Centered flexbox vertical layout. Auto-redirects to Welcome after 1.6s.

### Screen 2: Welcome Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Asset Images**: `assets/pocketdragon-tm.png` (height: 84px, left-aligned).
- **Textual Content**:
  - Main Title: *"Every Dragon Starts Here"* (with the word "Dragon" highlighted).
  - Body Text: *"Pocket Dragon brings together the strategy, skill, and social spirit of Mahjong. No wagers or real-money stakes—just friendly play, friendly competition, and the joy of the game."*
  - CTAs: *"Get Started"* (Primary button), *"Login"* (Ghost button).
- **Color Mappings**:
  - Main Title text: `PQ.ink`
  - Highlighted word "Dragon": `PQ.rust`
  - Body Text: `PQ.inkSoft`
  - Primary button: Orange Gradient with `PQ.off` text.
  - Ghost button: Transparent background with `PQ.rust` border (opacity: 0.32) and `PQ.rust` text.

### Screen 3: Login Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Asset Images**: `assets/poquito-logo.png` (left-aligned, height: 64px).
- **Textual Content**:
  - Title: *"Good to see you again!"*
  - Fields:
    - *"Email or Username"* (placeholder: *"you@example.com"*)
    - *"Password"* (placeholder: *"Password"*)
  - Controls: *"Remember me"* (switch), *"Forgot password?"* (link).
  - Footer: *"New to Pocket Dragon? Get Started"* (with "Get Started" as link).
- **Color Mappings**:
  - Title text: `PQ.ink`
  - Text input field boundaries:
    - Idle: `PQ.line` border, Transparent fill.
    - Focused: `PQ.lineMid` border.
    - Placeholders: `PQ.inkFaint`
    - Input text: `PQ.ink`
  - Remember me text: `PQ.ink`
  - Remember me toggle switch:
    - Active background: `PQ.rust`, Knob: `PQ.off`.
    - Inactive background: `PQ.toggle-off`.
  - Links ("Forgot password?", "Get Started"): `PQ.rust`
  - Footer prefix text: `PQ.inkSoft`

### Screen 4: Register Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Asset Images**: Avatar Picker showing selected profile preset. Open overlay uses `AvatarModal` displaying Boy, Girl, Bunny, Llama, Owl, Hedgehog presets.
- **Textual Content**:
  - Title: *"Create Account"*
  - Subtitle: *"Email verification is required before your account goes live"*
  - Fields:
    - *"Email Address"* (placeholder: *"you@example.com"*)
    - *"Phone Number"* (placeholder: *"10-digit number"*, prefix: *"+91"*, optional)
    - *"City"* (placeholder: *"Select your city"*, required)
    - *"Username"* (placeholder: *"Up to 10 characters"*, description: *"Unique · up to 10 characters · letters & numbers"*)
    - *"Password"* (placeholder: *"Enter a password"*)
    - *"Confirm Password"* (placeholder: *"Re-enter password"*)
  - Disclaimer checkbox: *"I agree to the Terms & Conditions and Privacy Policy"*
  - CTA Button: *"Get Started"*
  - Footer: *"Been here before? Log in"*
- **Color Mappings**:
  - Title text: `PQ.ink`
  - Subtitle text: `PQ.inkSoft`
  - City dropdown: Glassmorphism panel (background `rgba(249,242,228,0.82)`, backdrop filter `blur(16px)`, border `rgba(20,51,34,0.18)`). Selected option uses `PQ.rust` background and `PQ.off` text. Hover options use `rgba(20,51,34,0.06)`.
  - Username descriptions:
    - Normal/Idle: `PQ.inkSoft`
    - Available (Valid): `PQ.green`
    - Reserved/Taken (Error): `PQ.rust`
  - Checkbox:
    - Selected: `PQ.green` fill, `PQ.off` tick.
    - Unselected: transparent, `PQ.lineMid` border.
    - Disclaimer text: `PQ.inkSoft`, Links: `PQ.rust`.
  - CTA Button:
    - Active: Orange gradient, `PQ.off` text.
    - Disabled: background `PQ.disabled-bg`, text `PQ.inkFaint`.

### Screen 5: Email Verification (OTP) Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Verify Email"*
  - Subtitle: *"Enter the 6-digit code we sent to [email]"*
  - Status Indicators:
    - Success: *"Code sent — check your inbox"* (with green tick)
    - Error: *"Invalid or expired code — please try again"*
  - Action row: *"Resend code in mm:ss"* or *"Resend code"* (when expired).
  - CTA Button: *"Verify Email"*
- **Inputs**:
  - 6-cell horizontal OTP container. Active cell displays a flashing caret.
  - Full numeric keyboard (transparent buttons, numbers `0-9` in `PQ.ink` font).
- **Color Mappings**:
  - Title text: `PQ.ink`
  - Subtitle text: `PQ.inkSoft`, email address is bold `PQ.ink`.
  - OTP Cells:
    - Idle: `PQ.line` border.
    - Active: `PQ.lineMid` border.
    - Verified (Valid): `PQ.greenText` border, `PQ.greenText` text.
    - Invalid (Error): `PQ.rust` border, `PQ.rust` text.
  - Caret cursor: `PQ.inkSoft`
  - Success message: `PQ.greenText` text.
  - Error message: `PQ.rust` text.
  - Timer text: `PQ.inkSoft` (seconds number in bold `PQ.ink`), Resend link: `PQ.rust`.
  - Keypad numbers: `PQ.ink`

### Screen 6: Forgot Password Flow
Comprised of a 3-step sequence tracked via stepper dots.

#### Step 6A: Request Reset
- **Text**: Title: *"Reset Password"*, Subtitle: *"Enter the email linked to your account and we'll send a reset code."*, Field label: *"Email Address"*, CTA: *"Send OTP"*.
- **Visuals**: Back chevron button, Step indicator (3 steps, step 1 active: active dot `PQ.rust`, others `PQ.step-inactive`).

#### Step 6B: Verification
- **Text**: Title: *"Verify OTP"*, Subtitle: *"Enter the 6-digit code sent to [email]"*, CTA: *"Verify OTP"*.
- **Visuals**: OTP input grid, numeric keypad, resend code timer. Step indicator (step 2 active).

#### Step 6C: New Password Creation
- **Text**: Title: *"New Password"*, Subtitle: *"Choose a new password for your account."*, Fields: *"New Password"*, *"Confirm Password"*, CTA: *"Update Password"*.
- **Visuals**: Password visibility toggle buttons (eye icon). Step indicator (step 3 active).

#### Step 6D: Reset Success Panel
- **Background**: Solid Off-white (`PQ.off`).
- **Asset/Icon**: Rust Ring with check mark (`RustRing` - `PQ.rust` border ring containing check mark).
- **Text**: Title: *"Password Updated"*, CTA: *"Back to Login"*.
- **Color Mappings**:
  - Title: `PQ.ink`
  - Icon color: `PQ.rust`
  - CTA Button: Orange gradient.

### Screen 7: Home / Hub Screen
The core navigation center of the app. Represents tab 1 ("Hub") of the bottom nav.
- **Background**: Canvas Radial Background (Ivory Theme).

#### Component 7A: Hero Panel
- **Background**: Solid Deep Green (`PQ.green`).
- **Asset Images**: Circular profile avatar (`assets/avatars/poquito-girl.png` by default) with an off-white border (`rgba(249,242,228,0.35)`). Branded bell icon with rust notification dot indicator.
- **Text**: *"Hey"*, Username: *"[username]"*, RP score: *"100 / 200 RP"*, current level: *"FIREFLY I"*, next level: *"FIREFLY II"*.
- **Progress Bar**: Background `rgba(249,242,228,0.16)` containing active progress bar using horizontal gradient `linear-gradient(90deg, PQ.rustSoft, PQ.rust)`.
- **Colors**:
  - "Hey" text: `rgba(249,242,228,0.6)`
  - Username: `PQ.off`
  - RP score: `rgba(249,242,228,0.72)` (bold)
  - Current level label: `PQ.off`
  - Next level label: `rgba(249,242,228,0.5)`

#### Component 7B: Ongoing Game Banner
- **Background**: Solid Off-white (`PQ.off`), border `PQ.line`.
- **Texts**:
  - Status badge: Rust pulse dot, *"Your turn · Ongoing"* (rust text).
  - Paragraph: *"Life happens. A bot stepped in. Pick up where you left off."*
  - Details: clock icon, *"Game 3 of 5"*.
- **Buttons**:
  - *"Leave"*: border `PQ.lineMid`, text `PQ.ink`.
  - *"Resume"*: Orange Gradient, text `PQ.off`.
- **Color Mappings**:
  - Status: `PQ.rust`
  - Body: `PQ.inkSoft`
  - Details: `PQ.green`

#### Component 7C: Hub Action Cards
Three vertical cards displaying game options:
1. **Practice With Bots**: Icon: cap. Subtitle: *"Learn, experiment, and refine your game. Unranked and offline-ready."* (the word "offline" is colored in Rust).
2. **Join A Game**: Icon: grid. Subtitle: *"Where it gets real. Private tables. Public matches. Ranked play."*
3. **Create A Game**: Icon: users. Subtitle: *"Your table. Your way. Invite friends or go public. Ranked play."*
- **Color Mappings**:
  - Cards default: background `PQ.off`, border `PQ.line`, arrow icon `PQ.inkSoft`, primary icon `PQ.inkSoft`.
  - Active/Hover state card: border `rgba(182,90,47,0.55)`, active icon `PQ.rust`, arrow icon `PQ.rust`.
  - Titles: `PQ.ink`
  - Subtitles: `PQ.inkSoft`

#### Component 7D: Bottom Navigation Bar
Persistent menu bar at the bottom of the screens.
- **Background**: Solid Off-white (`PQ.off`), top border `PQ.line`.
- **Navigation Options**:
  - **Hub**: Icon: home, label: *"Hub"*
  - **Profile**: Icon: users, label: *"Profile"*
  - **Rules & Ranking**: Icon: book, label: *"Rules & Ranking"*
  - **Settings**: Icon: sliders, label: *"Settings"*
- **Color Mappings**:
  - Active Tab: Top border indicator bar `PQ.rust`, text & icon colored in `PQ.rust`.
  - Inactive Tabs: text & icon colored in `PQ.inkFaint`.

### Screen 8: Create A Game Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Header: *"Create A Game"* (icon: users)
  - Subtitle: *"Set the house rules — blame them later"*
  - Section 1: *"Game Setup"*
    - Stepper card: *"W West · Goulash"*
  - Section 2: *"Turn Timer"* (switch: *"Enable / Disable Turn Timer"*, helper text: *"If time runs out, a bot automatically plays your turn."*)
  - Section 3: *"Player Access"*
    - Card 1: *"Public"* (desc: *"Visible to all players in the public lobby"*)
    - Card 2: *"Private"* (desc: *"Accessible only via invitation link or room code"*)
  - Section 4: *"Private Table"* (visible only if Private is active):
    - Room Code box: *"ROOM CODE · PFZ9"*
    - Button links: Copy button, Whatsapp Share button, Dashed link *"Invite by username"*.
  - Bottom CTA: *"Create Game"*
- **Color Mappings**:
  - Titles & Headers: `PQ.ink`
  - Subtitle: `PQ.inkSoft`
  - Section labels: `PQ.inkSoft` (bold, uppercase).
  - Stepper controls (+ / - buttons): background `PQ.off`, border `PQ.lineMid`, text `PQ.ink`. Active counter values are bold `PQ.ink` (or `PQ.rust` if > 0).
  - Turn Timer Slider: range indicator background gradient `linear-gradient(to right, PQ.rust 0%, PQ.rust pos%, #C8C0AE pos%, #C8C0AE 100%)`. Endpoint labels ("Slow 60s", "Medium 30s", "Fast 10s") color: active tier uses `PQ.rust`, inactive uses `PQ.inkFaint`.
  - Access Card Selection:
    - Default/Inactive: background `PQ.off`, border `PQ.line`.
    - Active: background `PQ.off`, border `rgba(182,90,47,0.55)`, radio circle filled with `PQ.rust`.
  - Private Table Box: border `rgba(20,51,34,0.08)`. Room code value text: `PQ.green` (bold, large).
  - Copy Toast: Green block with `PQ.off` text.
  - Dashed invite button: border `PQ.lineMid` (dashed), text `PQ.rust`.
  - CTA Button: Primary CTA.

### Screen 9: Waiting Lobby Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Asset Images**:
  - Table top board: `assets/lobby-board.png` (centered, 150x150px)
- **Textual Content**:
  - Title: *"Waiting Lobby"* (with back and exit/leave buttons).
  - Game info chips: *"West 4"*, *"Seats 2"*, Difficulty: *"Hard"*, Speed: *"Medium"* (clock icon).
  - Status text: *"Looking for players · [seated] of 4 seated"* (with rust pulsing dot) or *"Table is full · ready to begin"*.
  - User Action guide (if empty seat remains): *"Tap + to choose your seat"*.
  - Guest Action guide: *"Waiting for host to begin · The host will begin the game once everyone is ready."*
  - Bottom CTA (Host only): *"Let's Go!"*.
- **Lobby Seats Layout**:
  Arranges 4 circular seat slots around the table board (Bottom: You/Empty, Left: Opponent/Empty, Top: Opponent/Empty, Right: Opponent/Empty).
  - **Seat States**:
    - Empty: Dashed circle border `PQ.line`, plus sign inside, label *"Empty seat"* (color: `PQ.inkSoft`).
    - Bot Seated: Solid green background `PQ.green2`, bot icon (robot), label *"Bot · Lin"* (subtitle: *"Bot"* in `PQ.green`).
    - Host Seated: Solid orange background `PQ.rust`, host initials, label *"[Name]"* (subtitle: *"Host"* in `PQ.rust`).
    - Player Seated: Solid teal background (`#1F8A5B`), player initials, label *"[Name]"* (subtitle: *"Joined"* in `PQ.inkSoft`).
- **Color Mappings**:
  - Game info: difficulty tag uses corresponding difficulty color (`Hard`: `PQ.rust`), speed tag uses `PQ.inkSoft`.
  - Status text: `PQ.inkSoft`
  - Action guide: `PQ.rust` (with dashed plus circle indicator).

#### Step 9A: Fill Seat Overlay (Host Only)
- **Overlay**: Bottom sheet modal.
- **Texts**: Title: *"Fill empty seat"*, body: *"Start the game with a bot occupying this seat?"*, Buttons: *"Wait for player"* (ghost), *"Add bot"* (Primary).
- **Colors**: Ghost button has `PQ.lineMid` border and `PQ.ink` text. Primary button has Rust gradient background.

#### Step 9B: Seats Empty Confirmation Dialog
- **Overlay**: Centered modal.
- **Texts**: Title: *"Seats Still Empty"*, body: *"Would you like to fill the empty seats with bots and start the game?"*, Buttons: *"Start with bots"* (Primary CTA), *"Continue waiting"* (Ghost).
- **Colors**: Ghost button has `PQ.line` border and `PQ.inkSoft` text.

### Screen 10: Seat Assignment Screen (Roll for East)
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Roll for East"* (icon: dice)
  - Subtitle: *"Highest roll becomes East. May the tiles be in your favour."* (or *"It's a tie! Please roll again."* highlighted in Rust).
  - Rows for each of the 4 players (You, Diego, Mei, Sam) displaying:
    - User avatar preset.
    - Seating status: *"East seat · 12"*, *"Rolling..."*, *"Eliminated · Final: 6"*, *"Tap to roll"*, *"Waiting..."*.
    - Dice roller widget (contains 2 dice cubes side-by-side).
  - Bottom CTA: *"Tap your dice to roll"* or *"Roll Tie-Breaker"* or *"Watching Tie-Breaker..."*.
- **Dice Face Styling**:
  - Square cards with rounded corners (52x52px).
  - Background: Gradient `linear-gradient(180deg,#FFFDF6,#F2E8D2)`.
  - Boundary: `PQ.line` border.
  - Pips (dots): filled with `PQ.green`.
- **Color Mappings**:
  - Title: `PQ.ink`
  - Subtitle: `PQ.inkSoft` (rust when tied).
  - Player Rows:
    - East winner row: border `PQ.rust` (thick), status text uses `PQ.rust`.
    - Active players: border `PQ.line`, background `PQ.off`.
    - Tap to roll (You): border `PQ.lineMid`, status text uses `PQ.inkFaint`.
    - Eliminated players: opacity 0.45.
  - Dice trigger button: border `PQ.rust` (dashed), padding inside.
  - Bottom CTA: Primary button styles.

### Screen 11: Practice With Bots Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Practice"* (icon: cap)
  - Subtitle: *"No pressure. No rankings. Play, learn and improve."*
  - Sections:
    - *"Game Setup"* (stepper options for West round).
    - *"Turn Timer"* (stepper toggle & timer range slider).
    - *"Hints"* (toggle: *"Suggests moves while you play"*).
  - Bottom CTA: *"Let's Go!"*.
- **Color Mappings**:
  - Layout is styled identically to Screen 8 (Create Game), using `PQ.off` page canvas and `PQ.rust` accents.
  - Hints option row is plain without a bounding card box (text uses `PQ.ink` and `PQ.inkSoft`).

### Screen 12: Public Lobby Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Join Game"* (icon: grid)
  - Tab selector: *"Public Lobby"*, *"Private"* (Public lobby selected).
  - Filters: *"Speed: [Value]"*, *"Difficulty: [Value]"*, link *"Clear"*.
  - Lobby Tables List cards:
    - Card info: *"West [Value]"*, *"Seats available [Count]"*.
    - Tags: Speed (e.g., *"Medium 22 sec"*), Difficulty (e.g., *"Hard"*).
    - CTA: *"Join"* or *"Full"*.
- **Color Mappings**:
  - Filter Buttons:
    - Active (filtered): border `PQ.rust`, text `PQ.rust` with dropdown arrow.
    - Default (All): border `PQ.line`, text `PQ.inkSoft`.
    - Sub-filters: difficulty sub-filters color matching their semantic difficulty values (e.g., Fierce uses `#630206`).
  - Table Card: border `PQ.line`, background `PQ.off`. Inactive/Full tables have opacity 0.55.
  - Table Tag:
    - Speed tag: border `PQ.lineMid`, text `PQ.ink` (subtitle `PQ.inkSoft`).
    - Difficulty tag: border matching difficulty color (e.g., Fair uses `#A16A03`).
  - Join button: background `PQ.rust` (or `rgba(20,51,34,0.08)` for full tables), text `PQ.off` (or `PQ.inkFaint` when full).

#### Step 12A: Table Speed Detail Overlay
- **Overlay**: Bottom sheet modal.
- **Texts**: Title: *"Time Allowed Per Turn"*, values: *"Slow 31–60 sec"*, *"Medium 16–30 sec"*, *"Fast 10–15 sec"*.
- **Colors**: Active speed highlighted in `PQ.rust`, inactive in `PQ.green` / `PQ.inkSoft`.

#### Step 12B: Table Difficulty Detail Overlay
- **Overlay**: Bottom sheet modal.
- **Texts**: Title: *"Table Difficulty Level"*, bullet points:
  - *"Smurf & Easy"*: *"Playing against easier opponents has lower rewards and higher losses."* (bullet dot color: Smurf `#a9c4d6`).
  - *"Fair"*: *"Playing against opponents at your level gives standard rewards and losses."* (bullet dot color: Fair `#a16a03`).
  - *"Hard & Fierce"*: *"Challenging stronger opponents comes with bigger rewards and smaller losses."* (bullet dot color: Hard `#b65a2f`).
- **Colors**: Headers match difficulty dot colors, details use `PQ.inkSoft`.

### Screen 13: Private Lobby Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Enter Invite Code"*
  - Subtitle: *"Please enter the code provided by the host."*
  - OTP-style input: 4 boxes.
  - Error: *"That code didn't match any open table"*.
  - Bottom CTA: *"Join Table"* (or *"Joining..."*).
- **Color Mappings**:
  - Title: `PQ.ink`
  - Subtitle: `PQ.inkSoft`
  - Input Boxes:
    - Active: border `PQ.rust` (knob blinking).
    - Filled: border `PQ.lineMid`, text `PQ.ink`.
    - Error: border `PQ.rust`, text `PQ.rust`.
    - Empty: border `PQ.line`.
  - Error text: `PQ.rust`
  - CTA Button: Primary button.

### Screen 14: Invite Players Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Invite Players"*
  - Field: Search bar (placeholder: *"Search by username"*).
  - List of Friends containing:
    - Friend avatar.
    - Online green status dot.
    - Title: *"[Name]"*, Subtitle: *"[Rank Tier]"* (e.g. *"JADE I"*).
    - Status CTA: *"Invite"* (orange), *"Invited"* (gray), or *"Joined"* (green).
- **Color Mappings**:
  - Search bar: border `PQ.lineMid` containing search icon (`PQ.inkSoft`) and inputs (`PQ.ink`).
  - List items: border `rgba(20,51,34,0.08)`, background `PQ.off`.
  - Friend rank label: `PQ.inkFaint`
  - CTA Buttons:
    - *"Invite"*: border `PQ.rust`, background `rgba(182,90,47,0.08)` (translucent rust tint), text `PQ.rust`.
    - *"Invited"*: border `PQ.line`, background `rgba(20,51,34,0.05)`, text `PQ.inkFaint`.
    - *"Joined"*: borderless, background `rgba(20,51,34,0.06)`, text `PQ.green` (with check icon).

### Screen 15: Rejoin Game Screen
Shown when returning to an ongoing game.

#### Step 15A: Active Rejoin Screen
- **Text**: Title: *"You haven't lost your place"*, Subtitle: *"A bot has been playing your hand for [turns] turns. Rejoin to take back control."*, stats counters: *"Games 3 / 8"*, *"Your score 128"*, CTAs: *"Rejoin now"* (Primary), *"Return to Hub"* (Ghost).
- **Visuals**: Branded red status badge: *"Game in progress"* (rust pulsing dot).
- **Colors**:
  - Title: `PQ.ink`
  - Subtitle: `PQ.inkSoft` (number of turns in bold `PQ.rust`).
  - Stats box: border `rgba(20,51,34,0.08)`, values `PQ.green` (large, bold), labels `PQ.inkFaint` (uppercase).
  - CTAs: Primary orange gradient vs Ghost transparent border CTA.

#### Step 15B: Expired Rejoin Screen
- **Text**: Title: *"This game has ended"*, Subtitle: *"The table finished before you could rejoin. Your results are saved to your profile."*, CTA: *"Return to Hub"*.
- **Visuals**: Centered clock timer icon.
- **Colors**: Title: `PQ.ink`, Subtitle: `PQ.inkSoft`, CTA: Primary Orange Gradient.

### Screen 16: Profile Screen (Tab 2)
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Profile"* (with notification bell icon and menu list button).
  - Profile block:
    - User avatar picker.
    - Username: *"[username]"*, Rank: *"FIREFLY I"*, RP status: *"100 / 200 RP"*.
  - Tab switcher: *"Current Season"*, *"Career"*.
  - Stats grid:
    - *"GAMES PLAYED: 42"*
    - *"WIN RATE: 61%"*
    - *"HIGHEST SCORE: 486"*
    - *"POSITION STATS"* (list of 1st, 2nd, 3rd, 4th with percentages, e.g., *"1st: 25%"*).
  - Friends list row: *"My Peeps"*, link *"Show all"*.
  - Horizontal scroll of friend circle avatars displaying:
    - Circular avatar with green online badge.
    - Name label.
    - Rank tier label.
- **Color Mappings**:
  - Profile Block: username uses `PQ.ink`, Rank uses `PQ.ink` (with crown icon in `PQ.rust`), RP score uses `PQ.green`.
  - Stats card: border `rgba(20,51,34,0.08)`, background `PQ.off`. Values are bold `PQ.ink` (positions values are `PQ.rust`), labels are `PQ.inkSoft`.
  - Friends section: header uses `PQ.inkSoft` (link uses `PQ.rust`). Circular avatar uses preset background, online dot uses green `#1FA855` (with off-white border). Rank label uses `PQ.rust`.

#### Step 16A: Profile Settings Menu Overlay
- **Overlay**: Bottom sheet modal.
- **Text/Rows**: List of settings links:
  - *"Edit profile"*
  - *"Change password"*
  - *"Subscription"*
  - *"FAQ"*
  - *"Log out"* (danger style)
  - *"Delete account"* (danger style)
- **Colors**: General rows use `PQ.ink` text and `PQ.inkSoft` chevron. Danger rows use `PQ.rust` text and `PQ.rust` chevron.

#### Step 16B: Edit Profile Dialog
- **Overlay**: Bottom sheet modal.
- **Fields**:
  - Username: *"avachen88"* (read-only)
  - Email: *"ava.chen@email.com"* (read-only)
  - Phone number: input box (placeholder: *"98765 43210"*, prefix: *"+91"*)
  - City: CitySelect dropdown.
- **Colors**: Read-only rows have grey background `rgba(20,51,34,0.04)` with `PQ.inkFaint` text. Input fields use default style.

#### Step 16C: Change Password Dialog
- **Overlay**: Bottom sheet modal.
- **Fields**: *"Current password"*, *"New password"*, *"Confirm new password"*.
- **Validation Helpers**: *"Passwords match"*, *"Passwords don't match"*.
- **Colors**: Confirmed passwords match text uses green, mismatch uses `PQ.rust`. Visibility button uses `PQ.inkFaint`.

#### Step 16D: FAQ Overlay
- **Overlay**: Bottom sheet modal containing accordion list of questions and answers.
- **Copy**: FAQ questions list:
  1. *Q: Do I need to create a new account on the website?* -> *A: No. Log in with the same username and password as the App.*
  2. *Q: Can I still play without subscribing?* -> *A: Yes! New accounts receive a free 2-week trial with full access to the app. After the trial ends, you can continue playing by subscribing to our monthly or annual plans.*
  3. *Q: What is Traditional Mahjong?* -> *A: Traditional Mahjong is a four-player tile-based game...*
  4. *Q: What happens if a table doesn't fill up?* -> *A: If a player has joined a table and there are one or more seats still open, the host may choose to begin the game with bots.*
  5. *Q: Will my subscription auto-renew?* -> *A: Yes. Subscriptions are set to auto-renew by default, but you can turn off auto-renew at any time through your account settings.*
  6. *Q: Can I switch between monthly and annual plans?* -> *A: Yes. You can switch...*
  7. *Q: Can I customize my gameplay experience?* -> *A: Yes. In Practice Mode and Create a Table Mode, you can customize game variants...*
  8. *Q: How do I report bugs or unfair behavior?* -> *A: You may contact us at [To Be Filled].*
  9. *Q: What happens to my progress if I switch devices?* -> *A: Simply log in with the same account credentials...*
- **Color Mappings**: Question titles use `PQ.ink`, active question chevrons rotate, answer body text uses `PQ.inkSoft`. Divider line uses `PQ.line`.

#### Step 16E: Confirm Action Sheet (Logout / Deletion)
- **Overlay**: Bottom sheet modal.
- **Texts**:
  - Logout style: Title: *"Log out"*, Body: *"You'll have to login again to access your account"*, CTA: *"Log out"*, Cancel: *"Cancel"*.
  - Delete style: Title: *"Delete account"*, Body: *"Deleting your account is permanent and cannot be undone. Your profile, game history, statistics, friends, achievements, and all associated data will be permanently deleted.\n\nAre you sure?"*, CTA: *"Yes, I'm sure"*, Cancel: *"No, I change my mind"*.
- **Color Mappings**:
  - Logout uses brand accent colors (`PQ.rust`).
  - Deletion uses destructive brand colors (`PQ.destructive` / `#7F1616`).

### Screen 17: Search / Find Friends Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Header: Search bar (placeholder: *"Search username"*).
  - Empty State: Icon: search. Title: *"No players found"*, Subtitle: *"Try a different username."*.
  - Result List Card: Friend avatar initials card, Name, Rank Tier (e.g. *"JADE I"*), Favorite star toggle button.
- **Color Mappings**:
  - Result List items: border `rgba(20,51,34,0.08)`, background `PQ.off`. Names are `PQ.ink`, rank tags are `PQ.inkFaint`.
  - Favorite Star Button: filled with `PQ.rust` if selected, otherwise empty `PQ.inkFaint` border outline.

### Screen 18: Other User Profile Screen
Read-only profile page of another player.
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Profile Avatar (double border outline).
  - Username: *"Mei Lin"*, Rank: *"JADE I"* (crown icon).
  - CTA Button: *"Favourited"* / *"Add favourite"* (star icon).
  - Statistics grid:
    - *"128 Games played"*
    - *"54% Win rate"*
    - *"472 Highest score"*
    - *"2nd Avg finish"*
- **Color Mappings**:
  - Avatar outer border ring: `PQ.rust`.
  - Username: `PQ.ink`. Rank label: `PQ.ink` (crown icon: `PQ.rust`).
  - CTA Button: border `PQ.rust`, background is light rust tint `rgba(182,90,47,0.08)`, text/icon is `PQ.rust`.
  - Stats box: border `rgba(20,51,34,0.08)`, value text uses `PQ.green` (large, bold), label text uses `PQ.inkFaint` (uppercase).

### Screen 19: Notifications Screen
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Notifications"* (with back chevron).
  - List of notification alerts:
    - Invitation alerts: *"[Name] invited you to their table · [time] ago"* (CTAs: *"Accept"*, *"Decline"*).
    - Join alerts: *"[Name] joined your table · [time] ago"*.
    - Decline alerts: *"[Name] invitation declined"*.
- **Color Mappings**:
  - Notification items: border `rgba(20,51,34,0.08)`, background `PQ.off`.
  - Unread Alert indicator: Solid Rust line (`PQ.rust`) on the left border edge.
  - Names: `PQ.ink` (bold). Alert details: `PQ.ink`.
  - Time stamp: `PQ.inkFaint`
  - Accept Button: background `PQ.rust`, text `PQ.off` (Primary CTA style).
  - Decline Button: border `PQ.line`, background transparent, text `PQ.inkSoft`.

### Screen 20: Rules & Ranking Screen (Tab 3)
A tab view containing a switch between "Rules" and "Ranking".
- **Background**: Solid Off-white (`PQ.off`).

#### Component 20A: Rules Section (Sub-tab 1)
Displays game rules, tile suits catalog, and hand structures.
- **Tile Catalog list**:
  - Rings (`1` to `9` tiles face assets).
  - Characters (`1` to `9` tiles face assets).
  - Bamboos (`1` to `9` tiles face assets, bird on `1b.png`).
  - Honours: Dragons (Red, Green, White) & Winds (E, S, W, N).
  - Flowers: Blue 1-4 & Seasons: Red 1-4.
- **Objective definitions**:
  - Objective: *"Build a complete hand of 14 tiles by combining them into certain sets as per the variations of the game."*
  - Sets cards: Pung (3 of a kind), Kong (4 of a kind), Pair (2 of a kind). Shows tile face asset examples.
  - Goulash Objective: *"To make 4 Pungs/Kongs + 1 Pair (as per the valid combinations in the Hands section below)."*
- **Hands List**:
  - Option 1: Clean Hand (3 Doubles) - All Pungs/Kongs in one suit only (all Rings, all Bamboos, all Craks, or all Honours). Shows 14 tiles list.
  - Honour Hand: Pungs/Kongs + Pair of Winds/Dragons - All Pungs/Kongs of Winds/Dragons (Honours) only. Shows 15 tiles list.
  - Option 2: Major Hand (1 Double) - All Pungs/Kongs in Honours + 1’s & 9s (same suit). Shows 14 tiles list. Description note.
  - Option 3: Mixed Hand (No Doubles) - All Pungs/Kongs in Honours + any 1 suit. Shows 14 tiles list. Description note.
  - Option 4: Terminal Hand (3 Doubles) - All Pungs/Kongs of 1’s + 9’s (different suits). Shows 14 tiles list. Description note.
- **Doubles Rules Accordions**:
  Accordion details of doubles counts:
  - **1 Double**: *1 Own Flower; 1 Round Flower (if Own Flower = Round Flower, 2 doubles); Pung/Kong of Green/Red/White Dragon (each); Pung/Kong of Own Wind; Pung/Kong of Round Wind (if Own Wind = Round Wind, 2 doubles); Pung/Kong of 1 + Pung/Kong of 9, both in same suit; Three concealed Pungs; Major Hand (Pungs/Kongs of Honours & Terminals); Presence of all 3 Dragons; Presence of any 3 Winds; Mahjong on last tile of the game; Kong Kong Mahjong (Mahjong on 2 consecutive tiles from Flower Wall); Clean Sweep (declaring Mahjong for an entire round); Being East (even if East does not Mahjong).*
  - **2 Doubles**: *If Own Flower = Round Flower; Pair of Own Flower; Pair of Round Flower; If Own Wind = Round Wind: Pung/Kong of that; 3 Kongs; 4 concealed Pungs.*
  - **3 Doubles**: *All Honours hand (Winds & Dragons); Clean suit hand; Terminal hand or Heads and Tails hand (Pungs/Kongs of 1’s and 9’s only); Bouquet of Flowers (Flowers 1,2,3,4 all red/all blue); 3 concealed Kongs; 4 Kongs; Concealed Mahjong; Concealed Mahjong with 4 concealed Pungs.*
  - **4 Doubles**: *4 concealed Kongs.*
  - **5 Doubles**: *Standing hand (Dealt ‘calling’).*
  - **6 Doubles**: *2 Bouquets.*
  - **7 Doubles**: *4 Pungs/Kongs of Winds + Pair of Dragons.*
  - **8 Doubles**: *Earth’s Blessing (Mahjong with East’s first discard).*
  - **9 Doubles**: *Heaven’s Blessing (East is dealt Mahjong).*
- **Scoring Grid table**:
  - Pung of Minor tiles (numbers 2-8) -> Exposed: 2, Concealed: 4
  - Pung of Honour/Terminal tiles -> Exposed: 4, Concealed: 8
  - Kong of Minor tiles -> Exposed: 8, Concealed: 16
  - Kong of Honour/Terminal tiles -> Exposed: 16, Concealed: 32
  - Each Flower -> Concealed/Exposed: 4
  - Pair of Honour/Terminal tiles -> Concealed/Exposed: 2
  - Player declaring Mahjong -> 20 points
- **Claiming Tiles Rules**:
  - *Mahjong: Tile for Mahjong can be picked from anywhere, preference order E-S-W-N.*
  - *Pung: Can pick up last discarded tile from anywhere.*
  - *Kong: Picking from discard; Concealed Pung upgrade; Exposed Pung upgrade (self-pick only).*
- **General Rules**:
  - *East Wind Multiplier: East always gives and gets double (points) to/from all players.*
  - *False Mahjong: wrong declaration causes 'dead hand'; defaulter pays 1000/2000E penalty to all.*
  - *Draw: draw places 500 points in bank; East retains position.*
- **Penalty rules**:
  - *Defaulter pays for the entire table if they discard a tile that lets a player with 3 exposed sets declare Mahjong (unless discarder is 'calling').*
  - *4th player is exempt if 3 players are on penalty.*
  - *All pay if all 4 are on penalty (unless calling).*
  - *If penalty is paid, no other players get a count.*
- **Color Mappings**:
  - Rule titles: `PQ.rust` (uppercase). Rule texts: `PQ.inkSoft`.
  - Sets blocks: border `PQ.line`, background `PQ.off`. Header text uses `PQ.green` (body uses `PQ.inkSoft`).
  - Double accordions: title is `PQ.green` with `PQ.line` divider, body text is `PQ.inkSoft` (italic notes are `PQ.rust`).
  - Table: border lines use `PQ.line`, header uses `PQ.ink` (uppercase), row title text uses `PQ.ink` (values use bold `PQ.ink`, details use `PQ.inkSoft`).

#### Component 20B: Ranking Section (Sub-tab 2)
Displays user rank progression guides and badge lists.
- **Textual Content**:
  - Title: *"Your Rank Journey"* (desc: *"Everything is fair, transparent, and in your hands."*)
  - Ladder display of 5 badges side-by-side: Firefly, Koi, Tiger, Phoenix, Dragon.
  - Stepper descriptions:
    - *"How You Climb"*:
      - *Earn RP every game* (icon: spark) -> *"Chase Ranked Points, win hands, stack RP, and crash the next tier's party."*
      - *Protected when you first arrive* (icon: shield) -> *"New tier unlocked? Your first drop is protected. One bad game doesn't send you back."*
      - *Earn your promotion* (icon: trophy) -> *"At each tier’s final rank (ex Firefly III), you have to win 2 out of 3 promotion games to move on to the next tier - no lucky shortcuts."*
      - *Season Reset* (icon: timer) -> *"Each new season brings a soft reset..."*
    - *"How You Earn Points"*:
      - *Finish Higher, Earn More* (icon: arrowUp) -> *"1st place earns the most points. 4th place loses a few."*
      - *Risk vs Reward* (icon: globe) -> *"Beat stronger opponents to earn more points..."*
      - *Bonus RP Awaits* (icon: spark) -> *"From Concealed Hands... special hands earn extra RP."*
- **Color Mappings**:
  - Stepper item title: `PQ.rust`, icon uses `PQ.rust`, description uses `PQ.inkSoft`.

### Screen 21: Subscription Screen
- **Overlay**: Bottom sheet modal.
- **Textual Content**:
  - Title: *"Subscription"* (with close button).
  - Body: *"To subscribe, modify or cancel subscription, please visit our website www.pocketdragon.in"*
  - Path guide: *"Login > ‘My Account’ > ‘Subscription’"*
  - Button CTA: *"Visit Website"*.
- **Color Mappings**:
  - Title: `PQ.ink`
  - Body: `PQ.ink`, Website URL link is bold `PQ.rust` (with `PQ.rust` border-bottom).
  - Path guide: bold `PQ.inkSoft`
  - Button CTA: Primary CTA styles.

### Screen 22: Payment Screen
Secure payment portal.
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Header: *"Pocket Dragon Premium"*, subtitle: *"[Annual/Monthly] Plan · [Price]"*.
  - Indicator: *"Secure hosted payment"* (shield icon).
  - Form Fields:
    - *"Card number"* (icon: card, placeholder: *"4242 4242 4242 4242"*)
    - *"Expiry"* (placeholder: *"08 / 28"*)
    - *"CVC"* (placeholder: *"•••"*)
  - Bottom CTA: *"Pay [Price]"* (or *"Processing..."*).
- **Payment Success Screen View**:
  - Icon: Rust Ring with check mark (`RustRing`).
  - Title: *"You're subscribed"*
  - Subtitle: *"Premium is active. Every table, border and tag is yours."*
  - Bottom CTA: *"Continue"*.
- **Color Mappings**:
  - Header: `PQ.ink` (subtitle: `PQ.inkSoft`).
  - Payment fields are styled using default field tokens.
  - Secure label text & icon: `PQ.inkFaint`
  - Success elements match Screen 6D.

### Screen 23: Settings Screen (Tab 4)
- **Background**: Solid Off-white (`PQ.off`).
- **Textual Content**:
  - Title: *"Settings"* (icon: sliders)
  - Section 1: *"Game settings"*
    - Rows: *"Haptics"* (switch), *"Sound"* (switch), *"Volume"* (slider, values: 0-100).
  - Section 2: *"About Pocket Dragon"*
    - Rows: *"About Us"* (uses `assets/About Us.png` icon image), *"Terms & Conditions"*, *"Privacy Policy"*, *"App Version"*.
  - Section 3: *"Support"*
    - Rows: *"Report a Bug"* (uses `assets/Report a bug-v3.svg` icon image), *"Wishlist"* (uses `assets/Wishlist.png` icon image), *"Contact Support"* (uses `assets/Contact.png` icon image), *"FAQs"* (uses standard `"help"` icon).
- **Color Mappings**:
  - Settings Card: border `rgba(20,51,34,0.08)`, background `PQ.off`. Inner divider line uses `rgba(20,51,34,0.07)`. Row label uses `PQ.ink`.
  - Toggles: Active uses `PQ.rust`, Inactive uses `PQ.toggle-off`. Knob is `PQ.off`.
  - Volume slider: range background gradient `linear-gradient(to right, PQ.rust 0%, PQ.rust vol%, #C8C0AE vol%, #C8C0AE 100%)`. Inactive sound state has opacity 0.4.
  - Support rows: chevron is `PQ.inkFaint` (bug row uses bug SVG graphic).
  - Version row: if update is available, value reads *"Update Available"* highlighted in destructive `PQ.rust`.

#### Step 23A: About Us / About Pocket Dragon view
- **Texts**:
  - About Us: *"Pocket Dragon brings together the strategy, skill, and social spirit of Mahjong. Whether you're discovering the game for the first time or refining years of experience, every match is an opportunity to learn, compete, and connect... Our platform provides fair offline and online social and multiplayer Mahjong games."*
  - About App: *"Pocket Dragon is a mobile-first, character-driven Mahjong experience... no wagers, no stakes, just the joy of the game."*
- **Colors**: Paragraph text uses `PQ.inkSoft`.

#### Step 23B: Support Submit Forms (Bug / Wishlist / Contact)
- **Texts**: Fields for Issue Category dropdown ("Gameplay", "Technical Issue", "Profile", "Other"), Description textarea (placeholder for Wishlist is *"Tell us what you'd like us to add, improve, or change"*), Dashed upload link *"Attach screenshot / recording"*, submit button.
- **Submit Success view**: Icon: check mark badge. Title: *"Thanks — we got it"*, sub: *"Our team will review your submission."*.
- **Colors**: Fields use default tokens. Dashed attachment link uses `PQ.lineMid` border and `PQ.inkSoft` text. Success title: `PQ.ink`, sub: `PQ.inkSoft`.

### Screen 24: Pre-Game Screen (orientation)
Orientation overlay shown before sitting at public tables.

#### Step 24A: How to Play Orientation
- **Background Overlay**: Branded deep green table backdrop (using `PQ.greenDeep`, `PQ.green`, `PQ.green2` gradients). Title card is placed over the table wash backdrop.
- **Textual Content**:
  - Header: *"How to Play"* (icon: TileMark). Step indicator (step 1 active).
  - Rules list:
    - *Hand Structure* -> *A winning hand — a Mahjong — is 14 tiles...*
    - *Scoring Rules* -> *Your Bank score grows from the sets...*
    - *Special Hands* -> *A fully Concealed hand...*
    - *Variant · East Passport* -> *A Chow may be claimed only...*
  - Action CTAs: *"Continue"* (Primary), *"Skip"* (Ghost).
- **Color Mappings**:
  - Base wash backdrop: deep green.
  - Grab handle bar: `PQ.line`.
  - Sheet Title: `PQ.ink` (kicker is `PQ.rust`).
  - Rule headings: bold `PQ.ink`, details use `PQ.inkSoft`.
  - Stepper indicators: Active dot `PQ.rust`, inactive `PQ.line`.

#### Step 24B: Scoring Orientation
- **Textual Content**:
  - Header: *"Tiles & Bonuses"* (Step indicator: step 2 active).
  - Special tiles:
    - *Marking Tile* (uses face tile 5) -> *Sets the round's bonus suit. Match it for extra points.*
    - *Joker Tile* (uses Joker face tile) -> *Stands in for any tile to complete a set.*
  - Multipliers list:
    - *+2 Concealed hand* (active)
    - *×2 Flower drawn* (active)
    - *+4 Dragon Pung* (inactive)
    - *+8 Kong declared* (inactive)
  - Action CTAs: *"Continue to Lobby"*, *"Skip"*.
- **Color Mappings**:
  - Special tile cards: border `rgba(20,51,34,0.08)`. Face tile uses `MiniTile` gradient (warm ivory).
  - Multiplier items: border `rgba(20,51,34,0.08)`, background `PQ.off`.
  - Multiplier tag badge: active uses `PQ.rust` background and `PQ.off` text; inactive uses transparent background with `PQ.line` border and `PQ.inkFaint` text. Inactive rows have opacity 0.42.

### Screen 25: Game Board Screen (Gameplay)
- **Background**: Solid Dark Purple (`#150C1E`).
- **Asset Images**: `assets/figma-gameboard.png` (occupies 100% of the screen area, cover fit).
- **Textual Content**:
  - Floating Exit Button: *"← Tap anywhere to exit game"*.
- **Color Mappings**:
  - Exit Button: background `rgba(20,11,28,0.72)` (semi-transparent dark purple), border `rgba(255,255,255,0.22)`, text `#fff`.
- **Layout**: Landscape orientation. Clicking anywhere returns to the Results screen.

### Screen 26: End of Game / Results Screen
Post-game summary panel.
- **Background**: Solid Off-white (`PQ.off`).
- **Asset Images**: Player circle avatars for all ranked participants.
- **Textual Content**:
  - Header: Crown trophy icon. Title: *"Game Over"* (uppercase, bold).
  - Subtitle: *"East Round complete · You finished 1st"*.
  - Scoreboard list (1st, 2nd, 3rd, 4th):
    - *1. You (avatar) -> score: 120* (with a *"You"* orange badge).
    - *2. Diego R. (avatar) -> score: 95*.
    - *3. Mei Lin (avatar) -> score: 60*.
    - *4. Hana K. (avatar) -> score: 40*.
  - Actions CTAs: *"Extend the game"*, *"Return to home"*.
- **Color Mappings**:
  - Header trophy icon block: gold gradient (`GOLD`, `GOLD_SOFT`, `GOLD_DEEP`), border `#EBCE81`. Title: `PQ.ink`, Subtitle: `PQ.inkSoft`.
  - Rank placement numbers:
    - 1st: `GOLD` (`#C9972F`)
    - 2nd: `#B9B2A0`
    - 3rd: `#C08552`
    - 4th: `PQ.inkFaint`
  - Scoreboard list items:
    - Winner row (You): background `rgba(182,90,47,0.08)` (translucent orange tint), border `PQ.rust`, score value is bold `PQ.rust`.
    - Other player rows: background `PQ.off`, border `PQ.line`, score value is bold `PQ.green`.
  - Player Name: bold `PQ.ink`.
  - *"You"* badge: border `PQ.rust`, text `PQ.rust`.
  - CTAs: *"Return to home"* uses Primary Orange Gradient, *"Extend the game"* uses Ghost border CTA.
