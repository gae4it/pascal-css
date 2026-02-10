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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@3.0.0/dist/pascal-css.min.css">

<!-- Development (unminified with comments) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@3.0.0/dist/pascal-css.css">
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

## 🧩 Core Utilities

### Layout
- **Display:** `DisplayFlex`, `DisplayGrid`, `DisplayBlock`, `DisplayNone`
- **Position:** `PositionRelative`, `PositionAbsolute`, `PositionFixed`
- **Visibility:** `HiddenSm`, `HiddenMd`, `VisibleLg`, `VisibleXl`

### Flexbox
- **Direction:** `FlexDirectionRow`, `FlexDirectionColumn`
- **Justify:** `JustifyContentCenter`, `JustifyContentSpaceBetween`, `JustifyContentEnd`
- **Align:** `AlignItemsCenter`, `AlignItemsStart`, `AlignItemsStretch`
- **Wrap:** `FlexWrap`, `FlexNoWrap`
- **Grow/Shrink:** `FlexGrow1`, `FlexShrink0`

### Grid
- **Columns:** `GridTemplateColumns1`, `GridTemplateColumns2`, `GridTemplateColumns3`, `GridTemplateColumns4`
- **Gap:** `Gap10`, `Gap15`, `Gap20`, `Gap25`

### Spacing
**Scale:** 01=0.1rem, 05=0.5rem, 10=1rem, 15=1.5rem, 20=2rem, 25=2.5rem, 30=3rem, 40=4rem, 50=5rem

- **Padding:** `Padding10`, `PaddingX20`, `PaddingY15`, `PaddingTop10`
- **Margin:** `Margin20`, `MarginX10`, `MarginBottom15`, `MarginXAuto`

### Typography
- **Size:** `FontSize10`, `FontSize15`, `FontSize20`, `FontSize25`
- **Weight:** `FontWeight300`, `FontWeight400`, `FontWeight600`, `FontWeight700`
- **Align:** `TextAlignLeft`, `TextAlignCenter`, `TextAlignRight`
- **Transform:** `TextTransformUppercase`, `TextTransformCapitalize`

### Colors (Minimal Palette)
- **Text:** `ColorWhite`, `ColorBlack`, `ColorGray`, `ColorRed`, `ColorBlue`, `ColorGreen`
- **Background:** `BackgroundColorWhite`, `BackgroundColorGray`, `BackgroundColorBlue`
- **Border:** `BorderColorBlack`, `BorderColorGray`, `BorderColorBlue`

> **Tip:** Extend colors using CSS variables for your project's brand colors

### Sizing
- **Width:** `Width25`, `Width33`, `Width50`, `Width75`, `Width100`
- **Height:** `Height100`, `MinHeightScreen`
- **Max Width:** `MaxWidth100`

### Borders
- **Radius:** `BorderRadius05`, `BorderRadius10`, `BorderRadiusFull`
- **Width:** `BorderWidth01`, `BorderWidth02`
- **Style:** `BorderStyleSolid`, `BorderStyleDashed`, `BorderNone`

### Effects
- **Shadow:** `BoxShadowSmall`, `BoxShadowMedium`, `BoxShadowLarge`
- **Opacity:** `Opacity01`, `Opacity05`, `Opacity10`
- **Transform:** `TransformScale110`, `TransformRotate5`
- **Transition:** `TransitionFast`, `TransitionMedium`, `TransitionSlow`

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




