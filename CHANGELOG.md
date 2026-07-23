# Changelog

All notable changes to PascalCSS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [4.2.0] - 2026-07-24

**CDN:** `https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.2.0/dist/pascal-css.min.css`

### Added
- **Important modifier (`!`)** — append `!` to any utility (`DisplayFlex!`, `Md:Padding20!`) to emit `!important`
- Optional distribution artifacts: `dist/pascal-css.important.css` and `dist/pascal-css.important.min.css` (base CSS + all `!` variants)
- Build-time generator [`scripts/generate-important.js`](scripts/generate-important.js) with modes `full` (default), `subset`, and `opt-in`
- npm scripts: `build:important:subset`, `build:important:opt-in`
- `health-check.js` with `npm run health` and `npm run health:strict`
- GitHub Actions CI workflow (health check on push/PR)
- [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md)

### Notes
- Default `pascal-css.css` / CDN min file size unchanged in role — load the `.important` artifact only when needed
- In CSS selectors the bang is escaped: `.DisplayFlex\!`, `.Md\:DisplayFlex\!`

---

## [4.1.0] - 2026-07-23

**CDN:** `https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.1.0/dist/pascal-css.min.css`

### Added
- `Fw800`, `HyphensSafe`, `WidthMaxContent`, `HeightMaxContent`
- `TextWrapWrap`, `TextWrapStable`
- `ObjectFitScaleDown` base class (in addition to responsive variants)
- `LineHeight01`–`LineHeight30` (unitless ratio; number = ratio × 10)
- `LineHeight05Rem`–`LineHeight50Rem` (fixed rem variants)
- `FlexOrder4`, `FlexOrder5` with legacy aliases `Order0`–`Order5`, `OrderFirst`, `OrderLast`
- `BorderRadius35`, `BorderRadius40`
- `MaxWidth65`, `MaxHeight65`
- `ZIndex-1`, `ZIndex-2`, `ZIndex999`, `ZIndex9999`, `ZIndexAuto` in base layer

### Changed
- `LineHeightXX` now uses unitless ratio by default; fixed rem values moved to `LineHeightXXRem`
- Corner border-radius classes renamed for clarity: `BorderTL` → `BorderTopLeftRadius`, `BorderTR` → `BorderTopRightRadius`, `BorderBL` → `BorderBottomLeftRadius`, `BorderBR` → `BorderBottomRightRadius`

---

## [4.0.0] - 2026-03-13

**CDN:** `https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.0.0/dist/pascal-css.min.css`

### Added
- Full Responsive Layout Engine (Sm/Md/Lg/Xl/Xxl: prefix, 5700+ responsive classes)
- Font size scale Fs07-Fs100 with 3 breakpoints (mobile/tablet/desktop)
- @custom-media --xxl (1536px)

### Removed
- Container Queries (Co: prefix)

### Packaging
- Source file: 350.06 KB | Minified: 264.13 KB | Gzipped: ~46.28 KB

## [3.3.0] - 2026-03-13 _(no git tag — changes absorbed into v4.0.0)_

### Added
- Numeric `ContentWrapper` utilities in origin-style format: `ContentWrapper640`, `ContentWrapper768`, `ContentWrapper960`, `ContentWrapper1000`, `ContentWrapper1024`, `ContentWrapper1140`, `ContentWrapper1260`, `ContentWrapper1366`, `ContentWrapper1450`, `ContentWrapper1600`, `ContentWrapper1920`
- Legacy alias `ContentWrapperPDS` mapped to `1450px`
- Missing utility classes `FlexAuto`, `Flex1`, `Gap03`, `Gap04`
- Visibility migration aliases `HiddenMobile`, `HiddenMobileTablet`, `HiddenDesktop`

### Changed
- Version bumped to 3.3.0 across package metadata, source banner, build output and CDN references
- Naming policy clarified: full-word naming remains the default, while `Margin*` and `Padding*` keep compact directional abbreviations (`T`, `B`, `L`, `R`, `X`, `Y`)

### Documentation
- Added 3.3.0 release notes and documented the new `ContentWrapper` utilities, visibility aliases and shorthand additions in README

## [3.2.0] - 2026-02-12

### 📦 Release Packaging

### Changed
- Version bumped to 3.2.0 across package metadata and CDN references
- Rebuilt distribution artifacts (unminified, minified, source map)

### Documentation
- Updated README CDN links to v3.2.0

## [3.1.0] - 2026-02-12

### 📚 Documentation & Enhancement Release

### Added
- **Comprehensive Documentation** - Complete utility reference in README covering all available classes
- **Extended Color Documentation** - Full OKLCH color palette documentation (9 color families × 6 shades each)
- **Typography Reference** - Complete font size scale (Fs07-Fs70) with responsive behavior
- **Spacing Documentation** - All padding/margin variants clearly documented (0-100 scale)
- **Border Radius Utilities** - Individual corner controls (TL, TR, BL, BR) fully documented
- **Grid System Reference** - Complete grid utilities including areas, auto-flow, place-items
- **Container Query Guide** - Clear examples of Co: prefix utilities
- **Background & Image Utilities** - Complete reference for background-size, position, repeat, object-fit

### Improved
- **README Structure** - Better organized with clear categorical sections
- **Category Organization** - Utilities grouped logically (Layout, Flexbox, Grid, Spacing, Typography, Colors, etc.)
- **Code Examples** - More practical examples throughout documentation
- **Searchability** - Easier to find specific utility classes

### Documentation Highlights
- 150+ utility classes documented
- Full OKLCH color system explained (Fc, Bg, Bc prefixes)
- Responsive breakpoint system clarified (Sm/Md/Lg/Xl)
- Container queries usage patterns
- Complete sizing system (width, height, min/max variants)

### Technical
- No breaking changes
- Fully backward compatible with v3.0.0
- Same performance characteristics (~12KB gzipped)

## [3.0.1] - 2026-02-12

### Documentation
- Added CHANGELOG.md with full version history

## [3.0.0] - 2026-02-10

### 🚀 Major Release - Modern CSS Edition

PascalCSS v3.0 is a complete modernization with cutting-edge CSS features for 2026+ browsers.

### Added
- **Container Queries** - New `Co:` prefix for container-responsive utilities
- **OKLCH Color System** - Perceptually uniform colors with RGB fallbacks
- **Custom Media Queries** - DRY breakpoint definitions (`@custom-media`)
- **Modern CSS Reset** - Added `text-wrap: balance` and `scrollbar-gutter: stable`
- **Extended Spacing Scale** - Added 30, 40, 50 values (3rem, 4rem, 5rem)
- **Flex Utilities** - FlexGrow0/1, FlexShrink0/1, FlexBasis utilities
- **Width/Height Percentages** - Width25, Width33, Width50, Width66, Width75
- **Responsive Visibility** - HiddenSm, HiddenMd, VisibleLg, VisibleXl
- **Negative Margins** - MarginTopNeg10, MarginBottomNeg20, etc.
- **Auto Margins** - MarginXAuto, MarginYAuto for centering
- **Full Responsive Coverage** - All major utilities now have Sm:, Md:, Lg:, Xl: variants

### Changed
- **Naming Standardization** - Consistent use of full direction names (PaddingLeft not PaddingL)
- **Breakpoints** - Confirmed as Sm: 640px, Md: 768px, Lg: 1024px,Xl: 1280px
- **Color Implementation** - Migrated from hex to OKLCH with CSS variables
- **Build System** - Added PostCSS pipeline for autoprefixing and minification

### Fixed
- Naming inconsistencies (MarginBottom vs MarginBot)
- Missing responsive variants for spacing utilities
- Border color utilities now match main color palette

### Infrastructure
- Created distribution system via GitHub + jsDelivr CDN
- Added build.js for automated minification
- Created GitHub Actions workflow for releases
- Established semantic versioning

### Performance
- **Unminified**: ~60KB
- **Minified**: ~35KB
- **Gzipped**: ~12KB (estimated)

### Browser Support
- Chrome/Edge 105+
- Safari 16+
- Firefox 110+
- Progressive enhancement for older browsers

---

## [0.2.0] - 2026-01-15

### Added
- Initial responsive utilities (Sm:, Md:, Lg:, Xl: prefixes)
- Basic grid system (GridTemplateColumns1-4)
- Shadow utilities (Small, Medium, Large)
- Transform utilities (Scale, Rotate)
- Aspect ratio utilities

### Changed
- Expanded from basic utilities to more comprehensive coverage

---

## [0.1.0] - 2025-12-01

### Added
- Initial release with core utilities
- PascalCase naming convention
- Basic responsive support
- Minimal CSS reset
- Essential layout utilities (Display, Flex, Position)
- Typography utilities
- Spacing system (Padding, Margin)
- Color utilities (6 base colors)

---

## Versioning Strategy

**Major (X.0.0)**: Breaking changes (class renames, removals, significant behavior changes)

**Minor (x.X.0)**: New utilities, features, backward-compatible additions

**Patch (x.x.X)**: Bug fixes, documentation updates, performance improvements
