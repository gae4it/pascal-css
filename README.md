# PascalCSS

[![Release](https://img.shields.io/github/v/release/gae4it/pascal-css)](https://github.com/gae4it/pascal-css/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CDN jsDelivr](https://img.shields.io/jsdelivr/gh/hm/gae4it/pascal-css)](https://www.jsdelivr.com/package/gh/gae4it/pascal-css)

**A modern, lightweight, utility-first CSS library with readable PascalCase naming.**

```html
<div class="DisplayFlex JustifyContentCenter AlignItemsCenter Padding20 BgBlue500 FcWhite">
  <h1 class="Fs30 Fw700">Hello PascalCSS</h1>
</div>
```

**Documentation:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)

---

## ✨ Features

- **🎯 PascalCase Naming** - `DisplayFlex`, `JustifyContentCenter` instead of cryptic abbreviations
- **📦 Zero Build Required** - Pure CSS, instantly usable via CDN
- **🎨 Modern CSS** - OKLCH colors, Custom Media, responsive typography
- **📱 Mobile-First Responsive** - Sm:, Md:, Lg:, Xl:, Xxl: breakpoints (640px / 768px / 1024px / 1280px / 1536px)
- **❗ Important Modifier** - Optional `DisplayFlex!` / `Md:Padding20!` via `pascal-css.important.min.css`
- **⚡ Single-file Distribution** — 268 KB minified / ~80 KB gzipped (default build)
- **🌐 Browser Support** - Chrome 105+, Safari 16+, Firefox 110+

---

## 🚀 Quick Start

### CDN (Recommended)

```html
<!-- Production (minified, ~80 KB gzipped) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.2.0/dist/pascal-css.min.css">
```

### Download

Download from [GitHub Releases](https://github.com/gae4it/pascal-css/releases) and include in your project:

```html
<link rel="stylesheet" href="./pascal-css.css">
```

---

## 📖 Documentation

**Full interactive documentation:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)

- Searchable class reference
- Copy-paste examples
- Responsive playground
- Color palette visualizer

---

## 🆕 New In 4.2.0

- **Important modifier (`!`)** — `DisplayFlex!`, `Md:Padding20!` via optional `pascal-css.important.min.css`
- **Health check** — `npm run health` for pre-release diagnostics
- **CI** — automated health check on push/PR
- See [CHANGELOG.md](CHANGELOG.md) for v4.1.0 utility additions (LineHeight scale, FlexOrder 4–5, border-radius renames, etc.)

---

## 🎨 Quick Examples

### Responsive Flex Layout

```html
<div class="DisplayFlex FlexDirectionColumn Md:FlexDirectionRow Gap20 Padding20">
  <div class="Width100 Md:Width50 BgGray100 Padding15 BorderRadius10">
    <h2 class="Fs20 Fw600 MarginB10">Card 1</h2>
    <p class="FcGray700">PascalCase makes classes readable.</p>
  </div>
  <div class="Width100 Md:Width50 BgGray100 Padding15 BorderRadius10">
    <h2 class="Fs20 Fw600 MarginB10">Card 2</h2>
    <p class="FcGray700">Mobile-first + responsive variants.</p>
  </div>
</div>
```

### Responsive Grid Layout

```html
<div class="DisplayGrid GridTemplateColumns1 Md:GridTemplateColumns2 Xl:GridTemplateColumns3 Gap15">
  <div class="BgBlue500 FcWhite Padding10">Single column on mobile</div>
  <div class="BgGreen500 FcWhite Padding10">Two columns on tablet</div>
  <div class="BgGray700 FcWhite Padding10">Three columns on desktop</div>
  <div class="BgGray100 Padding10">Responsive without container queries</div>
  <div class="BgBlue100 Padding10">Viewport-based layout engine</div>
  <div class="BgGreen100 Padding10">Consistent breakpoints</div>
 </div>
```

### Centered Hero Section

```html
<section class="DisplayFlex JustifyContentCenter AlignItemsCenter MinHeight100vh BgBlue500">
  <div class="TextAlignCenter FcWhite">
    <h1 class="Fs50 Fw700 MarginB20">Welcome</h1>
    <p class="Fs20 Opacity75">Built with PascalCSS</p>
  </div>
</section>
```

---

## 🎯 Responsive Breakpoints

| Prefix | Min Width | Target Devices |
|--------|-----------|----------------|
| *(none)* | 0px | Mobile (base styles) |
| `Sm:` | 640px | Large phones, small tablets |
| `Md:` | 768px | Tablets, small laptops |
| `Lg:` | 1024px | Laptops, desktops |
| `Xl:` | 1280px | Large desktops, 4K displays |
| `Xxl:` | 1536px | Ultra-wide / large desktop displays |

**Usage:**
```html
<!-- Hidden on mobile, visible on tablet+ -->
<div class="DisplayNone Md:DisplayBlock">Tablet & Desktop Only</div>

<!-- Stacked on mobile, side-by-side on desktop -->
<div class="FlexDirectionColumn Lg:FlexDirectionRow">...</div>
```

---

## ❗ Important Modifier (`!`)

Append `!` to any utility to force `!important` — same idea as Tailwind’s `!flex`, with a PascalCSS suffix:

```html
<!-- Wins over inline styles / higher-specificity rules -->
<div class="DisplayFlex!" style="display: block">Forced flex</div>

<!-- Responsive + important -->
<div class="DisplayNone Md:DisplayFlex!">Flex from tablet up, forced</div>

<!-- Mix normal and important utilities -->
<div class="Padding20! Margin10 BgBlue500">Padding wins conflicts</div>
```

| HTML class | CSS selector |
|------------|--------------|
| `DisplayFlex!` | `.DisplayFlex\!` |
| `Md:Padding20!` | `.Md\:Padding20\!` |

**Optional stylesheet** — the default CDN file stays lean. Load the important build only when you need `!` variants:

```html
<!-- Default (no ! variants) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.2.0/dist/pascal-css.min.css">

<!-- OR: base + all !important variants (~630 KB min / ~189 KB gzipped est.) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.2.0/dist/pascal-css.important.min.css">
```

Build flags (maintainers):

```bash
npm run build                          # full important artifact (default)
npm run build:important:subset         # high-impact categories only
npm run build:important:opt-in         # only rules marked /* @important */
```

**Notes:** In CSS the `!` must be escaped (`\!`). HTML does not need escaping. Some older parsers/tools may struggle with `!` in class names; prefer the default build when you do not need this feature.

---

## 🧩 Complete Utility Reference

### Layout & Display

#### Display Types
- **Display:** `DisplayBlock`, `DisplayInline`, `DisplayInlineBlock`, `DisplayFlex`, `DisplayInlineFlex`, `DisplayGrid`, `DisplayInlineGrid`, `DisplayNone`
- **Position:** `PositionRelative`, `PositionAbsolute`, `PositionFixed`
- **Positioning:** `Top0`, `Left0`, `Right0`, `Bottom0`
- **Overflow:** `OverflowHidden`, `OverflowAuto`, `OverflowScroll`
- **Visibility:** `VisibilityHidden`, `VisibilityVisible`
- **Responsive Visibility:** `HiddenSm`, `HiddenMd`, `HiddenLg`, `HiddenXl`, `HiddenXxl`, `VisibleSm`, `VisibleMd`, `VisibleLg`, `VisibleXl`, `VisibleXxl`
- **Legacy Visibility Aliases:** `HiddenMobile`, `HiddenMobileTablet`, `HiddenDesktop`

### Content Wrappers

- `ContentWrapper640`, `ContentWrapper768`, `ContentWrapper960`, `ContentWrapper1000`, `ContentWrapper1024`
- `ContentWrapper1140`, `ContentWrapper1260`, `ContentWrapper1366`, `ContentWrapper1450`, `ContentWrapper1600`, `ContentWrapper1920`
- `ContentWrapperPDS` alias of `ContentWrapper1450`
- Shared behavior: `margin: 0 auto`, `padding: 0 10px`, then `padding: 0 30px` from `480px` and up

### Flexbox System

#### Direction & Wrapping
- **Direction:** `FlexDirectionRow`, `FlexDirectionColumn`
- **Wrap:** `FlexWrap`, `FlexNoWrap`

#### Justify Content
- `JustifyContentFlexStart`, `JustifyContentCenter`, `JustifyContentFlexEnd`
- `JustifyContentSpaceBetween`, `JustifyContentSpaceAround`, `JustifyContentSpaceEvenly`

#### Align Items
- `AlignItemsFlexStart`, `AlignItemsCenter`, `AlignItemsFlexEnd`, `AlignItemsStretch`, `AlignItemsBaseline`

#### Align Self
- `AlignSelfAuto`, `AlignSelfFlexStart`, `AlignSelfCenter`, `AlignSelfFlexEnd`, `AlignSelfStretch`, `AlignSelfBaseline`

#### Flex Properties
- **Grow:** `FlexGrow0`, `FlexGrow1`
- **Shrink:** `FlexShrink0`, `FlexShrink1`
- **Basis:** `FlexBasisAuto`, `FlexBasis0`
- **Shorthand:** `FlexAuto`, `Flex1`

### Grid System

#### Grid Template Columns
- `GridTemplateColumns1`, `GridTemplateColumns2`, `GridTemplateColumns3`, `GridTemplateColumns4`, `GridTemplateColumns6`

#### Grid Flow & Areas
- **Auto Flow:** `GridAutoFlowRow`, `GridAutoFlowColumn`, `GridAutoFlowDense`, `GridAutoFlowRowDense`, `GridAutoFlowColumnDense`
- **Auto Columns/Rows:** `GridAutoColumnsMin`, `GridAutoColumnsMax`, `GridAutoColumnsFr`, `GridAutoRowsMin`, `GridAutoRowsMax`, `GridAutoRowsFr`
- **Column/Row Start-End:** `GridColumnStart1`...`GridColumnStart12`, `GridColumnEnd1`...`GridColumnEnd12`, `GridRowStart1`...`GridRowStart6`, `GridRowEnd1`...`GridRowEnd6`

#### Grid Alignment
- **Place Items:** `PlaceItemsStart`, `PlaceItemsEnd`, `PlaceItemsCenter`, `PlaceItemsStretch`
- **Place Content:** `PlaceContentStart`, `PlaceContentEnd`, `PlaceContentCenter`, `PlaceContentStretch`, `PlaceContentBetween`, `PlaceContentAround`, `PlaceContentEvenly`
- **Justify Self:** `JustifySelfAuto`, `JustifySelfFlexStart`, `JustifySelfFlexEnd`, `JustifySelfCenter`, `JustifySelfStretch`

#### Gap (Flexbox & Grid)
- `Gap03`, `Gap04`, `Gap05`, `Gap10`, `Gap15`, `Gap20`, `Gap25`, `Gap30`, `Gap40`, `Gap50`

### Spacing System

**Scale:** 5=0.5rem, 10=1rem, 15=1.5rem, 20=2rem, 25=2.5rem, 30=3rem, 35=3.5rem, 40=4rem, ..., 100=10rem

#### Padding
- **All Sides:** `Padding0` to `Padding100` (step 5)
- **Vertical (Y-axis):** `PaddingY0` to `PaddingY100`
- **Horizontal (X-axis):** `PaddingX0` to `PaddingX100`
- **Individual Sides:** `PaddingT5` to `PaddingT100`, `PaddingB0` to `PaddingB100`, `PaddingL5` to `PaddingL100`, `PaddingR0` to `PaddingR100`

Directional abbreviations are intentional for spacing utilities only: `T`, `B`, `L`, `R`, `X`, `Y`.

#### Margin
- **All Sides:** `Margin0` to `Margin100` (step 5)
- **Vertical (Y-axis):** `MarginY0` to `MarginY100`
- **Horizontal (X-axis):** `MarginX0` to `MarginX100`
- **Individual Sides:** `MarginT0` to `MarginT100`, `MarginB0` to `MarginB100`, `MarginL0` to `MarginL100`, `MarginR0` to `MarginR100`
- **Auto Margin:** `MarginLeftAuto`, `MarginRightAuto`, `MarginTopAuto`, `MarginBottomAuto`

Directional abbreviations are intentional for spacing utilities only: `T`, `B`, `L`, `R`, `X`, `Y`.

### Typography

#### Font Size (Fs Prefix)
- **Responsive Scaling:** Mobile, Tablet, Desktop automatically adjusted
- **Classes:** `Fs07` to `Fs100` (0.7rem to 10rem on desktop scale)
- **Common Sizes:** `Fs10`, `Fs12`, `Fs14`, `Fs16`, `Fs18`, `Fs20`, `Fs24`, `Fs30`, `Fs40`, `Fs50`, `Fs60`, `Fs70`, `Fs80`, `Fs90`, `Fs100`
- **Headers:** `h1` to `h5` with responsive sizing built-in

#### Font Weight
- `Fw300` (Light), `Fw400` (Normal), `Fw500` (Medium), `Fw600` (Semi-bold), `Fw700` (Bold), `Fw800` (Extra-bold)

#### Line Height
- **Ratio (unitless):** `LineHeight01`–`LineHeight30` (number ÷ 10 = ratio, e.g. `LineHeight15` = 1.5)
- **Fixed rem:** `LineHeight05Rem`–`LineHeight50Rem`
- **Semantic:** `LineHeightNone`, `LineHeightTight`, `LineHeightSnug`, `LineHeightNormal`, `LineHeightRelaxed`, `LineHeightLoose`

#### Text Alignment
- `TextAlignLeft`, `TextAlignCenter`, `TextAlignRight`

#### Text Transform
- `TextTransformUppercase`, `TextTransformLowercase`, `TextTransformCapitalize`

#### Text Utilities
- **White Space:** `WhiteSpaceNormal`, `WhiteSpaceNoWrap`, `WhiteSpacePre`
- **Text Overflow:** `TextOverflowEllipsis` (includes overflow hidden + nowrap)

### Color System (OKLCH)

> PascalCSS uses the modern OKLCH color system with automatic fallbacks for older browsers

#### Text Colors (Fc prefix)
- **Base:** `FcWhite`, `FcBlack`
- **Grays:** `FcGray50`, `FcGray100`, `FcGray300`, `FcGray500`, `FcGray700`, `FcGray900`
- **Colors (50/100/300/500/700/900):** 
  - Red: `FcRed50` to `FcRed900`
  - Orange: `FcOrange50` to `FcOrange900`
  - Yellow: `FcYellow50` to `FcYellow900`
  - Green: `FcGreen50` to `FcGreen900`
  - Teal: `FcTeal50` to `FcTeal900`
  - Cyan: `FcCyan50` to `FcCyan900`
  - Blue: `FcBlue50` to `FcBlue900`
  - Purple: `FcPurple50` to `FcPurple900`
  - Pink: `FcPink50` to `FcPink900`
- **Semantic:** `FcPrimary`, `FcSuccess`, `FcWarning`, `FcError`, `FcInfo`

#### Background Colors (Bg prefix)
Same scale as text colors:
- **Base:** `BgWhite`, `BgBlack`
- **Grays:** `BgGray50` to `BgGray900`
- **All Colors:** Same pattern as text colors (`BgRed50`, `BgBlue500`, etc.)
- **Semantic:** `BgPrimary`, `BgSuccess`, `BgWarning`, `BgError`, `BgInfo`

#### Border Colors (Bc prefix)
Same scale as text and background colors:
- **Base:** `BcWhite`, `BcBlack`
- **Grays:** `BcGray50` to `BcGray900`
- **All Colors:** Same pattern (`BcRed50`, `BcBlue500`, etc.)
- **Semantic:** `BcPrimary`, `BcSuccess`, `BcWarning`, `BcError`, `BcInfo`

### Sizing

#### Width
- **Percentages:** `Width25`, `Width33`, `Width50`, `Width66`, `Width75`, `Width100`
- **Auto:** `WidthAuto`

#### Height
- **Percentages:** `Height25`, `Height33`, `Height50`, `Height66`, `Height75`, `Height100`
- **Auto:** `HeightAuto`

#### Min Width
- `MinWidth5` to `MinWidth100` (5% increments: 5%, 10%, 15%... 100%)

#### Max Width
- `MaxWidth5` to `MaxWidth100` (5% increments)

#### Min Height
- **Percentages:** `MinHeight5` to `MinHeight100` (5% increments)
- **Viewport:** `MinHeight50vh`, `MinHeight60vh`, `MinHeight70vh`, `MinHeight80vh`, `MinHeight90vh`, `MinHeight100vh`

#### Max Height
- `MaxHeight5` to `MaxHeight100` (5% increments)

### Borders

#### Border Radius
- **All Corners:** `BorderRadius05` to `BorderRadius100` (0.5rem to 10rem, step 5)
- **Full (Circle):** `BorderRadiusFull` (9999px)
- **Individual corners:** `BorderTopLeftRadius`, `BorderTopRightRadius`, `BorderBottomLeftRadius`, `BorderBottomRightRadius` (with scale `05`–`30`, `Full`)

#### Border Style
- `BorderStyleSolid`, `BorderStyleDashed`, `BorderStyleDotted`
- `BorderNone`

### Effects & Interactions

#### Box Shadow
- `BoxShadowSmall`, `BoxShadowMedium`, `BoxShadowLarge`

#### Transitions
- `TransitionFast` (0.15s), `TransitionMedium` (0.3s), `TransitionSlow` (0.6s)

#### Cursor
- `CursorPointer`, `CursorDefault`, `CursorMove`

#### User Interaction
- **User Select:** `UserSelectNone`, `UserSelectText`
- **Pointer Events:** `PointerEventsNone`, `PointerEventsAuto`

### Background Utilities

#### Background Size
- `BackgroundSizeCover`, `BackgroundSizeContain`

#### Background Position
- `BackgroundPositionCenter`, `BackgroundPositionTop`, `BackgroundPositionBottom`

#### Background Repeat
- `BackgroundRepeatNoRepeat`, `BackgroundRepeatRepeat`

### Image & Object

#### Object Fit
- `ObjectFitCover`, `ObjectFitContain`, `ObjectFitFill`

#### Responsive Images
- `ImageResponsive` (max-width: 100%, height: auto, display: block)

### Lists

#### List Style
- `ListStyleNone`, `ListStyleDisc`, `ListStyleDecimal`

### Outline

- `OutlineNone`
- `OutlineStyleSolid`
- `OutlineColorBlue`

### Full Responsive Layout Engine

Use viewport breakpoints directly in class names with `Sm:`, `Md:`, `Lg:`, `Xl:` and `Xxl:` prefixes.

**Responsive Utility Coverage:**
- Display: `Md:DisplayBlock`, `Lg:DisplayFlex`, `Xl:DisplayGrid`
- Flex: `Sm:FlexDirectionRow`, `Lg:FlexDirectionColumn`
- Grid: `Md:GridTemplateColumns2`, `Lg:GridTemplateColumns3`, `Xxl:GridTemplateColumns4`
- Spacing: `Md:Gap10`, `Lg:Gap20`, `Xl:Padding20`, `Xxl:Padding30`

---

## 🔥 Modern CSS Features (v4.0.0)

### Full Responsive Layout Engine
Use breakpoint prefixes for viewport-responsive utilities:

```html
<div class="DisplayFlex FlexDirectionColumn Md:FlexDirectionRow Xxl:Gap30">
  <!-- Content adapts across mobile, tablet, desktop and ultra-wide screens -->
</div>
```

### OKLCH Colors
Perceptually uniform colors for better dark mode and accessibility:

```css
:root {
  --color-blue: oklch(60% 0.15 250);
  --color-red: oklch(55% 0.22 25);
}
```

Fallbacks to RGB for older browsers included automatically.

---

## 📦 File Sizes (v4.2.0)

| Artifact | Size |
|----------|------|
| Source (`.future-features/pascalcss-draft-4.1.0.css`) | ~355 KB |
| `dist/pascal-css.min.css` (default CDN) | ~268 KB |
| Gzipped (default) | ~80 KB |
| `dist/pascal-css.important.min.css` (optional `!` variants) | ~630 KB |
| Gzipped (important build) | ~189 KB |

---

## 🆚 Why PascalCSS?

### vs. Tailwind CSS
- ✅ **No build required** (Tailwind needs PostCSS + config)
- ✅ **Readable names** (`DisplayFlex` vs `flex`)
- ✅ **Large responsive surface** (5700+ responsive classes out of the box)
- ✅ **Single-file delivery** with no purge or config step

### vs. Bootstrap
- ✅ **Utility-first** (not component-focused)
- ✅ **No JavaScript** (Bootstrap needs JS for components)
- ✅ **Modern CSS** (OKLCH, Custom Media, responsive typography)
- ✅ **Release artifact ready to ship** as a single CSS file

### Who is PascalCSS for?
- Rapid prototyping & MVPs
- Developers familiar with OOP languages (Java, C#, Swift)
- Projects targeting modern browsers
- Teams who want utility-first CSS without build complexity

---

## 🛠️ Development

### Build Pipeline

```bash
# Clone repository
git clone https://github.com/gae4it/pascal-css.git
cd pascal-css

# Install dependencies
npm install

# Build dist/ from source
npm run build

# Watch source and rebuild on change
npm run watch
```

`build.js` reads the version from `package.json` and runs the PostCSS pipeline (`autoprefixer` + `cssnano`) to generate:

- `dist/pascal-css.css` — unminified (with comments)
- `dist/pascal-css.min.css` — production minified
- `pascal-css.css` — root copy of the minified bundle

Source file: `.future-features/pascalcss-draft-4.1.0.css`

Maintainer docs: [README-EXTENDED.md](README-EXTENDED.md)

### Health Check

Before a release (or after dependency changes), run:

```bash
npm run health
```

Strict mode — warnings also fail the check:

```bash
npm run health:strict
```

The script (`health-check.js`) is **read-only**: it diagnoses the repo and runs a build smoke test. It does **not** modify files or update packages.

| Area | What it checks |
|------|----------------|
| **Version** | `package.json`, source header, and `dist/` all match the same version |
| **Files** | Source, dist, root min bundle, README, CHANGELOG, release workflow exist |
| **CSS integrity** | No corrupt rules (`order: ;`), `LineHeight01`–`LineHeight30` present, stale class names (`LineHeightRatio*`, `BorderTL*`) |
| **Build sync** | `dist/pascal-css.css` is up to date; root `pascal-css.css` matches `dist/pascal-css.min.css` |
| **Docs** | README CDN link and CHANGELOG section for the current version |
| **Git** | Clean tree, version tag exists, branch synced with remote |
| **Dependencies** | Reports outdated packages via `npm outdated` (report only) |
| **Smoke test** | Runs `npm run build` and verifies it succeeds |

**Exit codes:** `0` = passed (warnings allowed), `1` = errors (or warnings in strict mode).

### Dependencies & Updates

`npm run health` runs `npm outdated` to **report** outdated devDependencies. It does **not** run `npm update` or change `node_modules`.

| Command | What it does |
|---------|----------------|
| `npm outdated` | Shows Current / Wanted / Latest (report only) |
| `npm update` | Updates within semver ranges in `package.json` (e.g. `^6.0.3` → latest 6.x) |
| `npm install pkg@latest` | Manual major upgrade — test with `npm run build` + `npm run health` |

**Recommended maintenance cadence:**

1. `npm run health` before each release
2. `npm update` once or twice a year if warnings appear
3. `npx update-browserslist-db@latest` if the build warns about stale browser data
4. Major bumps (e.g. `cssnano` 6 → 8) only in a dedicated maintenance session — not required for normal releases

**Note:** Staying on `cssnano` 6.x is fine. `npm outdated` may show `8.x` as Latest, but that is a major jump outside the `^6` range and is optional.

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, naming rules, and the pull request checklist.

Security reports: [SECURITY.md](SECURITY.md)

Quick flow:

1. Fork → feature branch
2. Edit `.future-features/pascalcss-draft-4.1.0.css`
3. `npm run build` → `npm run health`
4. Update `CHANGELOG.md` → open a PR

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Gae4it

---

## 🔗 Links

- **Documentation:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)
- **GitHub:** [github.com/gae4it/pascal-css](https://github.com/gae4it/pascal-css)
- **Issues:** [Report bugs or request features](https://github.com/gae4it/pascal-css/issues)
- **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md)
- **Security:** [SECURITY.md](SECURITY.md)
- **Changelog:** [CHANGELOG.md](CHANGELOG.md)

---

**Built with ❤️ for developers who value readability.**




