# Product Requirements Document: PascalCSS v3.0

**Document Version:** 1.0  
**Date:** February 10, 2026  
**Status:** Draft  
**Author:** PascalCSS Team

---

## Executive Summary

PascalCSS is a modern, lightweight, utility-first CSS library that leverages cutting-edge CSS features available in 2026. Unlike traditional utility frameworks that use kebab-case or cryptic abbreviations, PascalCSS embraces **PascalCase naming**—making classes instantly readable and familiar to developers with OOP backgrounds.

**Vision:** Provide the simplest path to modern, responsive web development without build tools, JavaScript, or complex configuration.

**Unique Value Proposition:**
- **Zero Build Required:** Pure CSS file, instantly usable via CDN
- **PascalCase Naming:** `DisplayFlex`, `JustifyContentCenter` instead of `flex`, `justify-center`
- **Modern CSS Native:** Container Queries, Custom Media Queries, OKLCH colors, CSS Nesting
- **Sub-15KB gzipped:** Smaller than Tailwind, more powerful than custom CSS
- **Future-Proof:** Built for 2026+ browsers with progressive enhancement

---

## Target Audience

### Primary Users
1. **Rapid Prototypers:** Developers building MVPs, landing pages, or demos who want speed without complexity
2. **OOP Developers:** Engineers from C#, Java, Swift backgrounds who find PascalCase natural and readable
3. **Framework-Agnostic Projects:** Teams using vanilla JS, Astro, Eleventy, or static site generators
4. **Modern Browser Projects:** Applications targeting Chrome 105+, Safari 16+, Firefox 110+

### Secondary Users
5. **Design System Builders:** Teams creating custom design systems who want a minimal foundation
6. **Educational Projects:** Coding bootcamps teaching utility-first CSS with readable syntax
7. **Documentation Sites:** Projects needing lightweight, CDN-deliverable styling (like pascalcss.netlify.app)

---

## Product Goals

### v3.0 Launch Goals
1. **Completeness:** Cover 95% of common styling needs with utility classes
2. **Modern CSS Adoption:** Be the first major utility library to ship with Container Queries and Custom Media
3. **Performance:** Maintain <15KB gzipped file size despite expanded features
4. **Developer Experience:** Provide instant autocomplete-friendly class names (PascalCase)
5. **Distribution Ready:** GitHub releases with versioned jsDelivr CDN links

### Success Metrics
- **Adoption:** 100+ GitHub stars in first 3 months
- **Performance:** <15KB minified+gzipped, <50KB unminified
- **Coverage:** Zero need for custom CSS in 80% of landing page projects
- **Browser Support:** Works in all browsers from 2024+ (graceful degradation for older)

---

## Technical Requirements

### Browser Support

**Target Browsers (Full Support):**
- Chrome/Edge 105+ (Sept 2022)
- Safari 16+ (Sept 2022)
- Firefox 110+ (Feb 2023)

**Modern Features with Fallbacks:**
- **Container Queries:** Require Chrome 105+, Safari 16+ (polyfill available for older browsers)
- **Custom Media Queries:** Future CSS spec (fallback to standard @media)
- **OKLCH Colors:** Chrome 111+, Safari 15.4+ (fallback to RGB/hex)
- **CSS Nesting:** Chrome 112+, Safari 16.5+ (PostCSS transpilation in build)

**Progressive Enhancement Strategy:**
- Core utilities work in all modern browsers
- Advanced features (container queries, OKLCH) enhance experience in latest browsers
- No JavaScript required for any functionality

### File Size Targets

| Version | Unminified | Minified | Gzipped |
|---------|-----------|----------|---------|
| v3.0 Full | ~60KB | ~35KB | ~12KB |
| v3.0 Core (no container queries) | ~45KB | ~25KB | ~8KB |

### Dependencies
- **User-Facing:** Zero dependencies (pure CSS)
- **Build System:** PostCSS, cssnano, autoprefixer (dev dependencies only)
- **Distribution:** jsDelivr CDN, GitHub Releases

---

## Feature Specification

### 1. Core Utility Categories

#### 1.1 Layout (Display & Position)
- **Display:** Block, Inline, InlineBlock, Flex, Grid, None
- **Position:** Relative, Absolute, Fixed, Sticky
- **Positioning:** Top/Right/Bottom/Left in spacing scale (0, 10, 20, etc.)
- **Responsive:** All display utilities have Sm:, Md:, Lg:, Xl: variants

#### 1.2 Flexbox System
- **Direction:** Row, Column (+ responsive variants)
- **Wrap:** Wrap, NoWrap
- **Justify:** Start, Center, End, SpaceBetween, SpaceAround, SpaceEvenly
- **Align Items:** Start, Center, End, Stretch, Baseline
- **Align Self:** Auto, Start, Center, End, Stretch
- **Flex Properties:** Grow0, Grow1, Shrink0, Shrink1, BasisAuto, Basis0

#### 1.3 Grid System
- **Template Columns:** 1, 2, 3, 4, 6, 12 (responsive)
- **Template Rows:** 1, 2, 3, 4
- **Gap:** 01, 02, 05, 10, 15, 20, 25, 30, 40, 50
- **Auto-flow:** Row, Column, Dense

#### 1.4 Spacing System
**Scale:** 01=0.1rem, 02=0.2rem, 05=0.5rem, 10=1rem, 15=1.5rem, 20=2rem, 25=2.5rem, 30=3rem, 40=4rem, 50=5rem

**Padding:**
- All-sides: `Padding10`, `Padding20`
- Axis: `PaddingX10`, `PaddingY10`
- Individual: `PaddingTop10`, `PaddingRight10`, `PaddingBottom10`, `PaddingLeft10`
- Responsive: All spacing utilities have Sm:, Md:, Lg:, Xl: variants

**Margin:**
- Same structure as Padding
- Auto: `MarginXAuto`, `MarginYAuto`, `MarginLeftAuto`, `MarginRightAuto`
- Negative: `MarginTopNeg10`, `MarginBottomNeg20`

#### 1.5 Typography
- **Align:** Left, Center, Right, Justify
- **Weight:** 300, 400, 500, 600, 700, 800, 900
- **Size:** 10=1rem, 12=1.2rem, 14=1.4rem, 16=1.6rem, 18=1.8rem, 20=2rem, 24=2.4rem, 30=3rem, 36=3.6rem, 48=4.8rem
- **Line Height:** 10, 12, 14, 16, 20, 24, 30 (unitless values also: Loose, Normal, Tight)
- **Transform:** Uppercase, Lowercase, Capitalize
- **Decoration:** Underline, LineThrough, None
- **Wrap:** Balance (for headings), Nowrap, Normal

#### 1.6 Sizing
- **Width:** 25, 33, 50, 66, 75, 100 (percentages), Auto, Full
- **Height:** 100, Auto, Full, Screen (100vh)
- **Min/Max Width:** Same scale as Width + MaxWidth400, MaxWidth600, MaxWidth800, MaxWidth1200
- **Min/Max Height:** MinHeight100, MinHeightScreen

#### 1.7 Colors (Minimal Palette)
**Philosophy:** Keep minimal, let users extend with CSS variables

**6 Base Colors:**
- White (#ffffff / oklch(100% 0 0))
- Black (#000000 / oklch(0% 0 0))
- Gray (#666666 / oklch(50% 0 0))
- Red (#e53935 / oklch(55% 0.22 25))
- Blue (#1e88e5 / oklch(60% 0.15 250))
- Green (#43a047 / oklch(60% 0.17 145))

**Utilities:**
- `Color{ColorName}` - text color
- `BackgroundColor{ColorName}` - background
- `BorderColor{ColorName}` - border color
- All color utilities responsive (Md:ColorBlue)

**Extensibility:** Documentation shows how to add custom colors via CSS variables

#### 1.8 Borders
- **Radius:** 05, 10, 20, Full (50%)
- **Width:** 01, 02, 05, 10
- **Style:** Solid, Dashed, Dotted, None
- **Color:** Same as base palette
- **Individual sides:** BorderTop, BorderRight, BorderBottom, BorderLeft

#### 1.9 Effects
- **Shadow:** Small, Medium, Large, None
- **Opacity:** 00 (0), 25 (.25), 50 (.5), 75 (.75), 100 (1)
- **Blur:** 05, 10, 20, 40
- **Transform:** Scale90, Scale100, Scale110, Rotate5, Rotate10, TranslateX10, TranslateY10

#### 1.10 Transitions & Animations
- **Duration:** Fast (.15s), Medium (.3s), Slow (.6s)
- **Timing:** Ease, EaseIn, EaseOut, Linear
- **Combined:** TransitionFast, TransitionMedium, TransitionSlow

#### 1.11 Responsive Visibility
- **Hidden:** HiddenSm, HiddenMd, HiddenLg, HiddenXl (display:none at breakpoint and up)
- **Visible:** VisibleSm, VisibleMd, VisibleLg, VisibleXl (display:block at breakpoint and up)

#### 1.12 Miscellaneous
- **Overflow:** Hidden, Auto, Scroll, VisibleX, VisibleY
- **Z-Index:** 0, 10, 20, 30, 40, 50, Auto
- **Cursor:** Pointer, Default, Move, NotAllowed
- **User Select:** None, Text, All
- **Pointer Events:** None, Auto
- **Object Fit:** Cover, Contain, Fill, None
- **Aspect Ratio:** Square (1/1), Video (16/9), Portrait (4/3)

---

### 2. Modern CSS Features (v3.0)

#### 2.1 Custom Media Queries
**Implementation:**
```css
@custom-media --sm (min-width: 640px);
@custom-media --md (min-width: 768px);
@custom-media --lg (min-width: 1024px);
@custom-media --xl (min-width: 1280px);

@media (--md) {
  .Md\:DisplayFlex { display: flex; }
}
```

**Benefits:**
- DRY breakpoints defined once
- Easy to customize for projects
- Better maintainability

#### 2.2 Container Queries
**New Prefix:** `Co:` (Container)

**Implementation:**
```css
/* Define container */
.ContainerParent {
  container-type: inline-size;
}

/* Container-responsive utilities */
@container (min-width: 400px) {
  .Co\:DisplayFlex { display: flex; }
  .Co\:FlexDirectionRow { flex-direction: row; }
  .Co\:GridTemplateColumns2 { grid-template-columns: repeat(2, 1fr); }
}
```

**Coverage:** All layout utilities (Display, Flex, Grid, Gap) have `Co:` variants

**Use Case:** Component adapts to its container width, not viewport width—perfect for sidebars, cards in grids, reusable components

#### 2.3 OKLCH Color System
**Migration Strategy:**
- Define base colors as CSS variables using OKLCH
- Fallback to RGB for older browsers via CSS @supports

```css
:root {
  --color-white: oklch(100% 0 0);
  --color-black: oklch(0% 0 0);
  --color-gray: oklch(50% 0 0);
  --color-red: oklch(55% 0.22 25);
  --color-blue: oklch(60% 0.15 250);
  --color-green: oklch(60% 0.17 145);
}

@supports not (color: oklch(0% 0 0)) {
  :root {
    --color-white: #ffffff;
    --color-black: #000000;
    /* ... fallbacks */
  }
}

.ColorBlue { color: var(--color-blue); }
```

**Benefits:**
- Perceptually uniform colors
- Better dark mode support
- Easier palette generation
- Future-proof

#### 2.4 CSS Nesting
**Implementation:** Use native CSS nesting (transpiled via PostCSS for older browsers)

```css
.Card {
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
  
  & .CardTitle {
    margin-bottom: 1rem;
  }
}
```

**Usage in PascalCSS:** Internal organization only (utilities remain flat)

#### 2.5 Modern CSS Reset
**Additions to minimal reset:**
```css
* {
  box-sizing: border-box;
}

html {
  scrollbar-gutter: stable; /* Prevent layout shift */
}

h1, h2, h3, h4, h5, h6 {
  text-wrap: balance; /* Better headline wrapping */
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
```

---

### 3. Responsive System

#### 3.1 Breakpoints
Mobile-first approach:

| Prefix | Min Width | Target Devices |
|--------|-----------|----------------|
| (none) | 0px | Mobile (base) |
| `Sm:` | 640px | Large phones, small tablets |
| `Md:` | 768px | Tablets |
| `Lg:` | 1024px | Laptops, desktops |
| `Xl:` | 1280px | Large desktops |

#### 3.2 Responsive Coverage
**Goal:** 100% of utilities have responsive variants by v3.0

**Priority Order:**
1. Layout (Display, Flex, Grid) - ✅ Essential
2. Spacing (Padding, Margin) - ✅ Essential
3. Typography (Size, Weight, Align) - ✅ Essential
4. Sizing (Width, Height) - ✅ Very Important
5. Colors - Optional (use sparingly)
6. Effects - Optional (use sparingly)

---

## Distribution Strategy

### 4.1 CDN (Primary)
**Provider:** jsDelivr (GitHub-based)

**URLs:**
```html
<!-- Latest v3 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/[username]/pascal-css@3/dist/pascal-css.min.css">

<!-- Specific version (recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/[username]/pascal-css@3.0.0/dist/pascal-css.min.css">

<!-- Unminified for development -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/[username]/pascal-css@3.0.0/dist/pascal-css.css">
```

**Benefits:**
- Zero setup for users
- Automatic caching and CDN distribution
- Version pinning for stability

### 4.2 Direct Download
**Structure:**
```
dist/
├── pascal-css.css           # Unminified with comments
├── pascal-css.min.css       # Minified for production
└── pascal-css.css.map       # Source map for debugging
```

Users can download and self-host from GitHub Releases

### 4.3 npm Package (Future - v3.1)
**Deferred to v3.1** - Focus on CDN and GitHub for v3.0 launch

When implemented:
```bash
npm install pascal-css
```

```js
import 'pascal-css/dist/pascal-css.min.css';
```

### 4.4 GitHub Releases
**Versioning:** Semantic Versioning (SemVer)
- Major: Breaking changes (class renames, removals)
- Minor: New utilities, backward-compatible features
- Patch: Bug fixes, documentation updates

**Release Automation:** GitHub Actions workflow triggers on version tags

---

## Build System

### 5.1 Build Pipeline
**Tools:**
- **PostCSS** - Process modern CSS features
- **Autoprefixer** - Browser compatibility
- **cssnano** - Minification
- **Source maps** - Debugging

**Build Script (build.js):**
1. Read pascal-css.css
2. Process with PostCSS:
   - Transpile CSS nesting → flat CSS
   - Add vendor prefixes (autoprefixer)
   - Convert custom media queries → standard @media (fallback)
3. Output unminified to dist/pascal-css.css
4. Minify with cssnano → dist/pascal-css.min.css
5. Generate source maps

**Command:**
```bash
node build.js
```

### 5.2 GitHub Actions Workflow
**Trigger:** Git tag matching `v*.*.*`

**Steps:**
1. Checkout code
2. Install Node.js dependencies
3. Run build script
4. Create GitHub Release
5. Upload dist files as release assets
6. Notify jsDelivr to purge cache (optional)

**File:** `.github/workflows/release.yml`

---

## Documentation Strategy

### 6.1 README.md (Simple)
**Content:**
- Hero: One-sentence pitch + HTML example
- Installation: CDN link (primary method)
- Quick reference: Link to pascalcss.netlify.app
- Breakpoints table
- 2-3 minimal examples (flex, grid, responsive)
- Contributing guide
- License (MIT)

**Philosophy:** Keep README lightweight, link to full docs site

### 6.2 Interactive Documentation Site
**URL:** https://pascalcss.netlify.app/

**Content (managed separately):**
- Searchable class reference
- Interactive playground
- Copy-paste examples
- Comparison to Tailwind/Bootstrap
- Migration guides
- Color palette visualizer
- Responsive breakpoint tester

**Not in scope for this PRD** - Separate project

### 6.3 API Reference
**Format:** Markdown table in README

Example:
| Class | CSS Property | Values | Responsive |
|-------|--------------|--------|------------|
| DisplayFlex | display | flex | ✅ |
| JustifyContentCenter | justify-content | center | ✅ |
| Padding10 | padding | 1rem | ✅ |

---

## Comparison to Competitors

### vs. Tailwind CSS
| Feature | PascalCSS | Tailwind |
|---------|-----------|----------|
| **Naming** | PascalCase | kebab-case abbreviations |
| **Size** | ~12KB gzipped | ~10-50KB (after purge) |
| **Build Required** | No | Yes (PostCSS + config) |
| **Container Queries** | ✅ Native | Via plugin |
| **OKLCH Colors** | ✅ Native | No |
| **Learning Curve** | Low (readable names) | Medium (abbreviations) |
| **Customization** | CSS variables | Tailwind.config.js |

### vs. Bootstrap
| Feature | PascalCSS | Bootstrap |
|---------|-----------|-----------|
| **Philosophy** | Utility-first | Component-first |
| **Size** | ~12KB | ~60KB (CSS + JS) |
| **JavaScript** | None | Required for components |
| **Modern CSS** | Container queries, OKLCH | Limited |
| **Responsive** | 4 breakpoints | 5 breakpoints |
| **Grid** | CSS Grid | Flexbox grid |

**Positioning:** PascalCSS is for developers who want Tailwind's utility-first approach with readable class names and zero build complexity.

---

## Roadmap

### v3.0 (Launch) - Q1 2026
- ✅ Complete utility coverage (95% of use cases)
- ✅ Container Queries with `Co:` prefix
- ✅ OKLCH color system with fallbacks
- ✅ Custom Media Queries
- ✅ Full responsive variants (Sm/Md/Lg/Xl)
- ✅ GitHub + jsDelivr distribution
- ✅ Build system with minification
- ✅ Simple README + link to docs site

### v3.1 (Expansion) - Q2 2026
- npm package publication
- Additional spacing scale values (35, 45, 60, 70, 80)
- Extended color palette (secondary colors)
- Animation utilities (keyframe-based)
- Print utilities (for printable pages)
- Accessibility utilities (ScreenReaderOnly, FocusVisible)

### v3.2 (Refinement) - Q3 2026
- Dark mode utilities (DarkModeOnly, LightModeOnly with prefers-color-scheme)
- RTL support utilities
- Container query sizes beyond 400px (small, medium, large containers)
- Performance optimizations (subset builds)

### v4.0 (Future) - Q4 2026
- Explore CSS Houdini for custom properties
- View Transitions API utilities
- Scroll-driven animations
- Subgrid utilities
- Component patterns library (optional add-on)

---

## Success Criteria

### Launch (v3.0)
- [ ] File size <15KB gzipped
- [ ] 100+ utilities with responsive variants
- [ ] Container queries working in Chrome 105+, Safari 16+
- [ ] OKLCH colors with RGB fallbacks
- [ ] jsDelivr CDN link active and cached
- [ ] README published with examples
- [ ] GitHub Releases automation working

### 3 Months Post-Launch
- [ ] 100+ GitHub stars
- [ ] 10+ production websites using PascalCSS
- [ ] Zero critical bugs reported
- [ ] Documentation site (pascalcss.netlify.app) live with search

### 6 Months Post-Launch
- [ ] 500+ GitHub stars
- [ ] Featured in CSS newsletter (CSS-Tricks, Smashing Magazine)
- [ ] Community contributions (5+ pull requests merged)
- [ ] npm package published with 100+ weekly downloads

---

## Risks & Mitigation

### Risk 1: Browser Support for Modern Features
**Impact:** Container queries, OKLCH not supported in older browsers

**Mitigation:**
- Progressive enhancement: Core utilities work everywhere
- Polyfills documented for teams needing wider support
- Fallback values (@supports checks)

### Risk 2: File Size Growth
**Impact:** Adding responsive variants could balloon file size

**Mitigation:**
- Target <15KB gzipped strictly enforced
- Offer "core" build without container queries (~8KB)
- Use cssnano aggressive minification

### Risk 3: Naming Conflicts
**Impact:** PascalCase classes might conflict with component libraries

**Mitigation:**
- Document recommended usage (use for layout, not component internals)
- Consider optional prefix (e.g., `P-DisplayFlex`) in v3.1

### Risk 4: Competition from Tailwind
**Impact:** Tailwind's ecosystem is massive and entrenched

**Mitigation:**
- Position as "Tailwind alternative for build-haters"
- Target niches: OOP developers, static sites, rapid prototypers
- Emphasize zero-config, readable naming

---

## Open Questions

1. **Prefix for Container Queries:** `Co:` vs `Cq:` vs `Container:`?
   - **Decision:** `Co:` (shortest, still clear)

2. **Include Dark Mode utilities in v3.0 or defer to v3.1?**
   - **Decision:** Defer to v3.1 (adds complexity, most users use CSS variables)

3. **Should we include reset styles or keep minimal?**
   - **Decision:** Keep minimal + modern enhancements (text-wrap, scrollbar-gutter)

4. **Offer subset builds (e.g.,Layout-only)?**
   - **Decision:** Not in v3.0, consider for v3.2 if requested

---

## Appendix

### A. Naming Convention Rules

1. **PascalCase:** All classes start with uppercase, each word capitalized
2. **No abbreviations:** Use full words (`Padding` not `P`, `Margin` not `M`)
3. **Values as suffixes:** `Padding10`, `FontSize20`
4. **Responsive prefix with colon:** `Md:DisplayFlex` (escaped in CSS: `Md\:DisplayFlex`)
5. **Container prefix:** `Co:FlexDirectionRow`
6. **Exceptions:** X/Y for axis (`PaddingX10`), numeric scales (`Gap01`, `Margin25`)

### B. Design Principles

1. **Readability over brevity:** `JustifyContentCenter` beats `justify-center` in clarity
2. **Zero magic:** Every class name describes exactly what it does
3. **Composability:** Classes work together predictably
4. **Performance:** Keep file size minimal, use modern CSS efficiently
5. **Accessibility:** Utilities should not harm, provide helpers where possible
6. **Future-proof:** Embrace new CSS specs, don't fight the platform

### C. Technology Stack

- **Language:** CSS3 (with modern 2026 features)
- **Build:** Node.js, PostCSS, cssnano, autoprefixer
- **CI/CD:** GitHub Actions
- **Distribution:** jsDelivr CDN, GitHub Releases
- **Documentation:** Separate site (pascalcss.netlify.app)
- **Version Control:** Git, Semantic Versioning

---

**Document End**
