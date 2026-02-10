# Changelog

All notable changes to PascalCSS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

---

## Unreleased

### Planned for v3.1
- npm package publication
- Dark mode utilities (DarkModeOnly, LightModeOnly)
- Extended color palette (secondary colors)
- Animation utilities (keyframe-based)
- Print utilities
- Accessibility utilities (ScreenReaderOnly, FocusVisible)

### Planned for v3.2
- RTL support utilities
- Additional container query breakpoints
- Subset builds (layout-only, core-only)
- Performance optimizations

### Planned for v4.0
- CSS Houdini exploration
- View Transitions API utilities
- Scroll-driven animations
- Subgrid utilities
