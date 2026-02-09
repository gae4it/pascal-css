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




License
MIT License
Copyright (c) 2026 PascalCSS
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
