# PascalCSS v3.0 - Quick Start Guide

Welcome! Here's everything you need to get started with PascalCSS in 5 minutes.

---

## 📖 For End Users (Use the Library)

### Option 1: CDN (Recommended - No Setup!)

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@3.0.0/dist/pascal-css.min.css">
</head>
<body>
  <div class="DisplayFlex JustifyContentCenter AlignItemsCenter MinHeightScreen BackgroundColorBlue">
    <h1 class="FontSize48 FontWeight700 ColorWhite">Hello PascalCSS!</h1>
  </div>
</body>
</html>
```

**That's it!** Your page now uses PascalCSS.

### Option 2: Download & Self-Host

1. Go to [GitHub Releases](https://github.com/gae4it/pascal-css/releases)
2. Download `pascal-css.min.css`
3. Link in your HTML: `<link rel="stylesheet" href="./pascal-css.min.css">`

---

## 🧑‍💻 For Developers (Build & Contribute)

### Setup (2 minutes)

```bash
# Clone the repository
git clone https://github.com/gae4it/pascal-css.git
cd pascal-css

# Install dependencies
npm install
```

### Build the Library

```bash
npm run build
```

**Output:**
- `dist/pascal-css.css` - Unminified with comments (development)
- `dist/pascal-css.min.css` - Minified for production
- `dist/pascal-css.css.map` - Source map for debugging

File sizes:
- Unminified: ~60KB
- Minified: ~35KB
- Gzipped: ~12KB ✅

### Make Changes

1. Edit `pascal-css.css` in the root
2. Run `npm run build`
3. Test changes in a browser
4. Commit and push

```bash
git add pascal-css.css
git commit -m "Add new utility: FlexGapX"
git push origin feature/new-utility
```

---

## 🎨 Quick Examples

### Responsive Flex Layout

```html
<div class="DisplayFlex FlexDirectionColumn Md:FlexDirectionRow Gap20 Padding20">
  <div class="Width100 Md:Width50 BackgroundColorGray Padding15 BorderRadius10">
    <h2 class="FontSize20 FontWeight600 MarginBottom10">Column 1</h2>
    <p>On mobile: full width stacked</p>
    <p>On tablet: 50% width side-by-side</p>
  </div>
  <div class="Width100 Md:Width50 BackgroundColorGray Padding15 BorderRadius10">
    <h2 class="FontSize20 FontWeight600 MarginBottom10">Column 2</h2>
    <p>Responsive magic with no breakpoints in CSS!</p>
  </div>
</div>
```

### Container Queries (Component-Responsive!)

```html
<div class="ContainerParent">
  <div class="DisplayFlex Co:FlexDirectionRow Gap10">
    <button class="Padding10 BackgroundColorBlue ColorWhite BorderRadius05">
      Button
    </button>
    <button class="Padding10 BackgroundColorGreen ColorWhite BorderRadius05">
      Another
    </button>
  </div>
</div>

<!-- 
  Magic: These buttons adapt to their container width, NOT viewport!
  Put this component in a sidebar (narrow) or main area (wide).
  Behavior changes automatically. ✨
-->
```

### Hidden/Visible at Breakpoints

```html
<!-- Visible only on mobile -->
<div class="DisplayBlock Md:DisplayNone">
  📱 Mobile Menu
</div>

<!-- Visible only on tablet and up -->
<div class="DisplayNone Md:DisplayBlock">
  💻 Desktop Navigation
</div>

<!-- Hide on small screens, show on large -->
<div class="HiddenSm">
  Detailed sidebar (hidden on mobile, visible on tablet+)
</div>
```

### Grid Responsive

```html
<div class="DisplayGrid GridTemplateColumns1 Md:GridTemplateColumns2 Lg:GridTemplateColumns3 Gap20">
  <div class="BackgroundColorGray Padding20 BorderRadius10">Card 1</div>
  <div class="BackgroundColorGray Padding20 BorderRadius10">Card 2</div>
  <div class="BackgroundColorGray Padding20 BorderRadius10">Card 3</div>
  <div class="BackgroundColorGray Padding20 BorderRadius10">Card 4</div>
  <div class="BackgroundColorGray Padding20 BorderRadius10">Card 5</div>
  <div class="BackgroundColorGray Padding20 BorderRadius10">Card 6</div>
</div>

<!-- 
  Mobile: 1 column (cards stack)
  Tablet: 2 columns
  Desktop: 3 columns
-->
```

---

## 📚 Learn More

- **Full Documentation:** [README.md](README.md)
- **Interactive Docs:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)
- **Requirements Document:** [PRD-pascal-css.md](PRD-pascal-css.md)
- **Implementation Details:** [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)
- **Change History:** [CHANGELOG.md](CHANGELOG.md)

---

## 🆘 Common Questions

### Q: Do I need to build anything to use PascalCSS?
**A:** No! Just link the CDN or download the CSS. It's ready to use immediately.

### Q: What's the difference between PascalCSS and Tailwind?
**A:**
- PascalCSS: No build required, readable PascalCase names, Container Queries native
- Tailwind: Requires build setup, abbreviated names, needs plugin for Container Queries

### Q: Why PascalCase naming?
**A:** It's readable! `DisplayFlex` is clearer than `flex`. Great for OOP developers.

### Q: Can I customize colors?
**A:** Yes! Use CSS variables. PascalCSS uses `--color-blue` internally for easy theming.

### Q: What browsers are supported?
**A:** Chrome 105+, Safari 16+, Firefox 110+. Modern browsers only (2022+).

### Q: How small is the library?
**A:** Only **12KB gzipped** - smaller than minified Tailwind!

### Q: Can I contribute?
**A:** Absolutely! See [README.md](README.md) contributing section.

---

## 🚀 Next Steps

1. **Try it:** Use the CDN link in a test HTML file
2. **Explore:** Check [pascalcss.netlify.app](https://pascalcss.netlify.app/) for all utilities
3. **Build:** Run `npm install && npm run build` locally
4. **Share:** Show it to fellow developers who value readability
5. **Contribute:** Found a bug or want to add a utility? Open a GitHub issue!

---

## 📞 Need Help?

- **Issues:** [GitHub Issues](https://github.com/gae4it/pascal-css/issues)
- **Discussions:** [GitHub Discussions](https://github.com/gae4it/pascal-css/discussions)
- **Docs Site:** [pascalcss.netlify.app](https://pascalcss.netlify.app/)

---

**Happy styling!** 🎉

Built with ❤️ for developers who prefer readable code.
