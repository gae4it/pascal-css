# PascalCSS

**A modern, lightweight, utility-first CSS library with readable PascalCase naming.**

```html
<div class="DisplayFlex JustifyContentCenter AlignItemsCenter Padding20 BgBlue500 FcWhite">
  <h1 class="Fs30 Fw700">Hello PascalCSS</h1>
</div>
```

---

## ✨ Features

- **🎯 PascalCase Naming** - `DisplayFlex`, `JustifyContentCenter` instead of cryptic abbreviations
- **📦 Zero Build Required** - Pure CSS, instantly usable via CDN
- **🎨 Modern CSS** - OKLCH colors, Custom Media, responsive typography
- **📱 Mobile-First Responsive** - Sm:, Md:, Lg:, Xl:, Xxl: breakpoints (640px / 768px / 1024px / 1280px / 1536px)
- **⚡ Single-file Distribution** - 264.13KB minified / ~46.28KB gzipped
- **🌐 Browser Support** - Chrome 105+, Safari 16+, Firefox 110+

---

## 🚀 Quick Start

### CDN (Recommended)

```html
<!-- Production (minified, ~46KB gzipped) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.1.0/dist/pascal-css.min.css">
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

## 🆕 New In 4.0.0

- Full Responsive Layout Engine with `Sm:`, `Md:`, `Lg:`, `Xl:`, `Xxl:` prefixes across 5700+ responsive classes
- Font size scale `Fs07` to `Fs100` with automatic mobile, tablet and desktop adjustments
- Added `@custom-media --xxl` for `1536px`
- Removed Container Queries and the `Co:` prefix
- Naming policy confirmed: full-word for utilities, with compact directional abbreviations allowed only for `Margin*` and `Padding*` classes

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
- `Fw300` (Light), `Fw400` (Normal), `Fw500` (Medium), `Fw600` (Semi-bold), `Fw700` (Bold)

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
- **Individual Corners:** 
  - Top-Left: `BorderRadiusTL05` to `BorderRadiusTL100`
  - Top-Right: `BorderRadiusTR05` to `BorderRadiusTR100`
  - Bottom-Left: `BorderRadiusBL05` to `BorderRadiusBL100`
  - Bottom-Right: `BorderRadiusBR05` to `BorderRadiusBR100`

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

## 📦 File Sizes

| Version | Size |
|---------|------|
| Source (`pascalcss-draft-4.0.0.css`) | 350.06 KB |
| Minified (`pascal-css.css`) | 264.13 KB |
| Gzipped | ~46.28 KB |

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

# Legacy dist build
npm run build
```

`build.js` keeps the PostCSS-based `dist/` pipeline for local development.

Release packaging for v4.0.0 is distributed from the repository root:
- `pascal-css.css` - minified production bundle (264.13 KB / ~46.28 KB gzipped)

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-utility`)
3. Make your changes to `pascal-css.css`
4. Build and test (`npm run build`)
5. Commit with descriptive message
6. Open a Pull Request

**Guidelines:**
- Follow PascalCase naming convention
- Add responsive variants (Sm:, Md:, Lg:, Xl:) for layout utilities
- Update CHANGELOG.md with your changes
- Keep file size minimal

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Gae4it

---

## 🔗 Links

- **Documentation:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)
- **GitHub:** [github.com/gae4it/pascal-css](https://github.com/gae4it/pascal-css)
- **Issues:** [Report bugs or request features](https://github.com/gae4it/pascal-css/issues)
- **Changelog:** [CHANGELOG.md](CHANGELOG.md)

---

**Built with ❤️ for developers who value readability.**




