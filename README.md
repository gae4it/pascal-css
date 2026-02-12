# PascalCSS

**A modern, lightweight, utility-first CSS library with readable PascalCase naming.**

```html
<div class="DisplayFlex JustifyContentCenter AlignItemsCenter Padding20 BackgroundColorBlue ColorWhite">
  <h1 class="FontSize30 FontWeight700">Hello PascalCSS</h1>
</div>
```

---

## ✨ Features

- **🎯 PascalCase Naming** - `DisplayFlex`, `JustifyContentCenter` instead of cryptic abbreviations
- **📦 Zero Build Required** - Pure CSS, instantly usable via CDN
- **🎨 Modern CSS** - Container Queries, OKLCH colors, Custom Media
- **📱 Mobile-First Responsive** - Sm:, Md:, Lg:, Xl: breakpoints (640px / 768px / 1024px / 1280px)
- **⚡ Lightweight** - ~12KB gzipped (full library)
- **🌐 Browser Support** - Chrome 105+, Safari 16+, Firefox 110+

---

## 🚀 Quick Start

### CDN (Recommended)

```html
<!-- Production (minified) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@3.1.0/dist/pascal-css.min.css">

<!-- Development (unminified with comments) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@3.1.0/dist/pascal-css.css">
```

### Download

Download from [GitHub Releases](https://github.com/gae4it/pascal-css/releases) and include in your project:

```html
<link rel="stylesheet" href="./pascal-css.min.css">
```

---

## 📖 Documentation

**Full interactive documentation:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)

- Searchable class reference
- Copy-paste examples
- Responsive playground
- Color palette visualizer

---

## 🎨 Quick Examples

### Responsive Flex Layout

```html
<div class="DisplayFlex FlexDirectionColumn Md:FlexDirectionRow Gap20 Padding20">
  <div class="Width100 Md:Width50 BackgroundColorGray Padding15 BorderRadius10">
    <h2 class="FontSize20 FontWeight600 MarginBottom10">Card 1</h2>
    <p class="ColorGray">PascalCase makes classes readable.</p>
  </div>
  <div class="Width100 Md:Width50 BackgroundColorGray Padding15 BorderRadius10">
    <h2 class="FontSize20 FontWeight600 MarginBottom10">Card 2</h2>
    <p class="ColorGray">Mobile-first + responsive variants.</p>
  </div>
</div>
```

### Grid with Container Queries

```html
<div class="ContainerParent">
  <div class="DisplayGrid GridTemplateColumns1 Co:GridTemplateColumns2 Gap15">
    <div class="BackgroundColorBlue ColorWhite Padding10">Adapts to container</div>
    <div class="BackgroundColorGreen ColorWhite Padding10">Not viewport!</div>
  </div>
</div>
```

### Centered Hero Section

```html
<section class="DisplayFlex JustifyContentCenter AlignItemsCenter MinHeightScreen BackgroundColorBlue">
  <div class="TextAlignCenter ColorWhite">
    <h1 class="FontSize48 FontWeight700 MarginBottom20">Welcome</h1>
    <p class="FontSize20 Opacity75">Built with PascalCSS</p>
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
- **Display:** `DisplayBlock`, `DisplayInline`, `DisplayInlineBlock`, `DisplayFlex`, `DisplayGrid`, `DisplayNone`
- **Position:** `PositionRelative`, `PositionAbsolute`, `PositionFixed`
- **Positioning:** `Top0`, `Left0`, `Right0`, `Bottom0`
- **Overflow:** `OverflowHidden`, `OverflowAuto`, `OverflowScroll`
- **Visibility:** `VisibilityHidden`, `VisibilityVisible`
- **Responsive Visibility:** `HiddenSm`, `HiddenMd`, `HiddenLg`, `HiddenXl`, `VisibleSm`, `VisibleMd`, `VisibleLg`, `VisibleXl`

### Flexbox System

#### Direction & Wrapping
- **Direction:** `FlexDirectionRow`, `FlexDirectionColumn`
- **Wrap:** `FlexWrap`, `FlexNoWrap`

#### Justify Content
- `JustifyContentStart`, `JustifyContentCenter`, `JustifyContentEnd`
- `JustifyContentSpaceBetween`, `JustifyContentSpaceAround`, `JustifyContentSpaceEvenly`

#### Align Items
- `AlignItemsStart`, `AlignItemsCenter`, `AlignItemsEnd`, `AlignItemsStretch`, `AlignItemsBaseline`

#### Align Self
- `AlignSelfAuto`, `AlignSelfStart`, `AlignSelfCenter`, `AlignSelfEnd`, `AlignSelfStretch`, `AlignSelfBaseline`

#### Flex Properties
- **Grow:** `FlexGrow0`, `FlexGrow1`
- **Shrink:** `FlexShrink0`, `FlexShrink1`
- **Basis:** `FlexBasisAuto`, `FlexBasis0`

### Grid System

#### Grid Template Columns
- `GridTemplateColumns1`, `GridTemplateColumns2`, `GridTemplateColumns3`, `GridTemplateColumns4`, `GridTemplateColumns6`

#### Grid Flow & Areas
- **Auto Flow:** `GridAutoFlowRow`, `GridAutoFlowColumn`, `GridAutoFlowDense`, `GridAutoFlowRowDense`, `GridAutoFlowColumnDense`
- **Column/Row:** `GridColumnAuto`, `GridRowAuto`
- **Areas:** `GridAreaHeader`, `GridAreaMain`, `GridAreaSidebar`, `GridAreaFooter`
- **Template Areas:** `GridTemplateAreaHeader`, `GridTemplateAreaMain`, `GridTemplateAreaSidebar`, `GridTemplateAreaFooter`

#### Grid Alignment
- **Place Items:** `GridPlaceItemsStart`, `GridPlaceItemsEnd`, `GridPlaceItemsCenter`, `GridPlaceItemsStretch`
- **Place Content:** `GridPlaceContentStart`, `GridPlaceContentEnd`, `GridPlaceContentCenter`, `GridPlaceContentStretch`
- **Justify Self:** `JustifySelfAuto`, `JustifySelfStart`, `JustifySelfEnd`, `JustifySelfCenter`, `JustifySelfStretch`

#### Gap (Flexbox & Grid)
- `Gap05`, `Gap10`, `Gap15`, `Gap20`, `Gap25`, `Gap30`, `Gap40`, `Gap50` (0.5rem to 5rem)

### Spacing System

**Scale:** 5=0.5rem, 10=1rem, 15=1.5rem, 20=2rem, 25=2.5rem, 30=3rem, 35=3.5rem, 40=4rem, ..., 100=10rem

#### Padding
- **All Sides:** `Padding0` to `Padding100` (step 5)
- **Vertical (Y-axis):** `PaddingY0` to `PaddingY100`
- **Horizontal (X-axis):** `PaddingX0` to `PaddingX100`
- **Individual Sides:** `PaddingT5` to `PaddingT100`, `PaddingB0` to `PaddingB100`, `PaddingL5` to `PaddingL100`, `PaddingR0` to `PaddingR100`

#### Margin
- **All Sides:** `Margin0` to `Margin100` (step 5)
- **Vertical (Y-axis):** `MarginY0` to `MarginY100`
- **Horizontal (X-axis):** `MarginX0` to `MarginX100`
- **Individual Sides:** `MarginT0` to `MarginT100`, `MarginB0` to `MarginB100`, `MarginL0` to `MarginL100`, `MarginR0` to `MarginR100`
- **Auto Margin:** `MarginLeftAuto`, `MarginRightAuto`, `MarginTopAuto`, `MarginBottomAuto`

### Typography

#### Font Size (Fs Prefix)
- **Responsive Scaling:** Mobile, Tablet, Desktop automatically adjusted
- **Classes:** `Fs07` to `Fs70` (0.7rem to 7rem)
- **Common Sizes:** `Fs10`, `Fs12`, `Fs14`, `Fs16`, `Fs18`, `Fs20`, `Fs24`, `Fs30`, `Fs40`, `Fs50`, `Fs60`, `Fs70`
- **Headers:** `h1` to `h5` with responsive sizing built-in

#### Font Weight
- `FontWeight300` (Light), `FontWeight400` (Normal), `FontWeight500` (Medium), `FontWeight600` (Semi-bold), `FontWeight700` (Bold)

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

### Container Queries

Use `ContainerParent` to enable container queries on child elements, then use `Co:` prefix:

**Available Container Utilities:**
- Display: `Co:DisplayBlock`, `Co:DisplayFlex`, `Co:DisplayGrid`
- Flex: `Co:FlexDirectionRow`, `Co:FlexDirectionColumn`
- Grid: `Co:GridTemplateColumns1`, `Co:GridTemplateColumns2`, `Co:GridTemplateColumns3`
- Spacing: `Co:Gap10`, `Co:Gap15`, `Co:Gap20`, `Co:Padding10`, `Co:Padding15`, `Co:Padding20`

---

## 🔥 Modern CSS Features (v3.0)

### Container Queries
Use the `Co:` prefix for container-responsive utilities:

```html
<div class="ContainerParent"> <!-- Enable container queries -->
  <div class="DisplayFlex Co:FlexDirectionRow"> <!-- Responds to container width -->
    <!-- Content adapts based on container, not viewport -->
  </div>
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
| Unminified | ~60KB |
| Minified | ~35KB |
| Gzipped | ~12KB |

---

## 🆚 Why PascalCSS?

### vs. Tailwind CSS
- ✅ **No build required** (Tailwind needs PostCSS + config)
- ✅ **Readable names** (`DisplayFlex` vs `flex`)
- ✅ **Container Queries native** (Tailwind needs plugin)
- ✅ **Smaller** (12KB vs 10-50KB after purge)

### vs. Bootstrap
- ✅ **Utility-first** (not component-focused)
- ✅ **No JavaScript** (Bootstrap needs JS for components)
- ✅ **Modern CSS** (Container Queries, OKLCH)
- ✅ **Lighter** (12KB vs 60KB)

### Who is PascalCSS for?
- Rapid prototyping & MVPs
- Developers familiar with OOP languages (Java, C#, Swift)
- Projects targeting modern browsers
- Teams who want utility-first CSS without build complexity

---

## 🛠️ Development

### Build from Source

```bash
# Clone repository
git clone https://github.com/gae4it/pascal-css.git
cd pascal-css

# Install dependencies
npm install

# Build minified version
npm run build
```

Output files in `dist/`:
- `pascal-css.css` - Unminified with comments
- `pascal-css.min.css` - Minified for production
- `pascal-css.css.map` - Source map

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




