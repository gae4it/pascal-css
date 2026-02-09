PascalCSS
The Utility-First CSS library for people who prefer PascalCase.

PascalCSS is a small, static, utility-first CSS library. It moves away from traditional kebab-case utility classes, offering a highly readable PascalCase syntax that feels right at home for modern component-based development.

🚀 Key Features
 * Readable Syntax: DisplayFlex instead of flex, JustifyContentCenter instead of justify-center.
 * Zero Build Step: No PostCSS, no Purge, no SASS. Just link the CSS and go.
 * Responsive Built-in: Mobile-first approach with intuitive prefixes like Md:Padding20.
 * Modern CSS: Leverages the latest CSS features including Flexbox, Grid, and Aspect Ratio.

📦 Installation

CDN
Add this to your <head>:
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/[your-username]/pascal-css@main/dist/pascal.min.css">

🛠 Usage Example
<div class="DisplayFlex FlexDirectionColumn Md:FlexDirectionRow AlignItemsCenter Padding20 Gap15">
  <h1 class="FontSize25 FontWeight700 ColorBlue">Hello PascalCSS</h1>
  <p class="MarginTop10">Readable, predictable, and fast.</p>
</div>

📱 Breakpoints
| Prefix | Screen Width |
|---|---|
| (None) | > 0px |
| Sm: | > 640px |
| Md: | > 768px |
| Lg: | > 1024px |
| Xl: | > 1280px |




