# PascalCSS — Extended Documentation

**Maintainer reference.** For end users, start with [README.md](README.md) and [pascalcss.netlify.app](https://pascalcss.netlify.app/).

**Current version:** 4.2.0

---

## 1. What is PascalCSS?

PascalCSS is a **utility-first CSS library** distributed as a single static file. No JavaScript, no runtime, no build step required for consumers.

**Vision:** The simplest path to modern, responsive web styling — with class names that read like code, not abbreviations.

**Value proposition:**

| Principle | Detail |
|-----------|--------|
| **PascalCase naming** | `DisplayFlex`, `JustifyContentCenter` instead of `flex`, `justify-center` |
| **Zero build for users** | Link a CDN URL or download `pascal-css.min.css` |
| **Modern CSS** | OKLCH colors, custom media, responsive typography, optional `!important` variants |
| **Mobile-first responsive engine** | `Sm:`, `Md:`, `Lg:`, `Xl:`, `Xxl:` prefixes (5700+ responsive utilities in v4+) |
| **Pinned CDN releases** | Always ship with `@vX.Y.Z` — never `@main` in production |

### Who is it for?

- Rapid prototyping and landing pages
- Developers from OOP backgrounds (C#, Java, Swift) who prefer readable class names
- Static sites, Astro, Eleventy, vanilla HTML projects
- Teams that want utility-first CSS **without** PostCSS config or purge pipelines

### How it compares

| | PascalCSS | Tailwind | Bootstrap |
|---|-----------|----------|-----------|
| **Build required** | No (users) | Yes | No (CSS only) |
| **Naming** | PascalCase | kebab-case | component classes |
| **Responsive** | `Md:DisplayFlex` | `md:flex` | grid/utilities |
| **JS dependency** | None | Optional | Yes (components) |
| **Distribution** | GitHub + jsDelivr | npm + build | npm / CDN |

Interactive class reference and examples live on the **docs site**, not in this file.

---

## 2. Repository layout

```
pascal-css/
├── .future-features/
│   └── pascalcss-draft-4.1.0.css   # ← SOURCE OF TRUTH (edit here)
├── .drafts/                          # Archived older draft CSS files
├── build.js                          # PostCSS pipeline + important artifact
├── scripts/generate-important.js     # !important variant generator
├── health-check.js                   # Pre-release diagnostics
├── dist/                             # Built output (committed for jsDelivr)
│   ├── pascal-css.css
│   ├── pascal-css.min.css
│   ├── pascal-css.important.min.css
│   └── pascal-css.css.map
├── pascal-css.css                    # Root copy of minified default bundle
├── package.json                      # Version + npm scripts
├── README.md                         # Public face of the project
├── README-EXTENDED.md                # This file — maintainer reference
├── CHANGELOG.md                      # Release history
├── CONTRIBUTING.md                   # Contributor guide
├── SECURITY.md                       # Security policy
└── .github/workflows/
    ├── ci.yml                        # Health check on push/PR
    └── release.yml                   # Build + GitHub Release on tag
```

**Do not hand-edit** `dist/` or root `pascal-css.css` — run `npm run build`.

### Folder notes

| Path | Purpose |
|------|---------|
| `.future-features/` | Active source CSS + experimental drafts |
| `.drafts/` | Historical version snapshots (not used by build) |

---

## 3. Build pipeline

```bash
npm install
npm run build          # default + full important artifact
npm run watch          # rebuild on source change
npm run health         # diagnose before release
npm run health:strict  # fail on warnings
```

**What `build.js` produces:**

| Artifact | Use |
|----------|-----|
| `dist/pascal-css.css` | Unminified, with comments |
| `dist/pascal-css.min.css` | **Default CDN** (~268 KB / ~80 KB gzip) |
| `pascal-css.css` (root) | Same as minified default |
| `dist/pascal-css.important.min.css` | Base + all `!` variants (~630 KB / ~189 KB gzip) |

**Important build modes:**

```bash
npm run build                          # full !important variants (default)
npm run build:important:subset         # high-impact categories only
npm run build:important:opt-in         # rules marked /* @important */
```

**Browser targets:** Chrome 105+, Safari 16+, Firefox 110+ (via autoprefixer).

---

## 4. Distribution

### CDN (jsDelivr)

Always pin a release tag:

```html
<!-- Default -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.2.0/dist/pascal-css.min.css">

<!-- Optional: !important variants -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v4.2.0/dist/pascal-css.important.min.css">
```

jsDelivr reads from GitHub tags. Pushing a tag triggers the release workflow; allow **5–10 minutes** for CDN propagation.

### GitHub Releases

Tag format: `vMAJOR.MINOR.PATCH` (e.g. `v4.2.0`)

Workflow `.github/workflows/release.yml` automatically:

1. Runs `npm run build` and `npm run health:strict`
2. Creates a GitHub Release
3. Uploads CSS assets

---

## 5. Release checklist

### Before you start

- [ ] Changes are in `.future-features/pascalcss-draft-4.1.0.css`
- [ ] `CHANGELOG.md` has an `[Unreleased]` or new version section
- [ ] Working tree is clean

### Steps

```bash
# 1. Bump version (or edit package.json manually)
npm version patch   # 4.2.0 → 4.2.1
# npm version minor # 4.2.0 → 4.3.0
# npm version major # 4.2.0 → 5.0.0

# 2. Update source header to match (first comment block in draft CSS)
# 3. Update README.md CDN links (@vX.Y.Z)
# 4. Finalize CHANGELOG.md entry with date + CDN URL

npm run build
npm run health:strict

git add -A
git commit -m "Release vX.Y.Z: short description"
git push origin main

git tag -a vX.Y.Z -m "PascalCSS vX.Y.Z"
git push origin vX.Y.Z
```

### Example (patch release 4.2.0 → 4.2.1)

```bash
npm version patch

# Update draft CSS header, README CDN @v4.2.1, CHANGELOG [4.2.1]

npm run build
npm run health:strict

git add -A
git commit -m "Release v4.2.1: fix line-height docs"
git push origin main

git tag -a v4.2.1 -m "PascalCSS v4.2.1"
git push origin v4.2.1
```

No `cd` is needed if you are already in the repository root. Avoid machine-specific absolute paths (e.g. `c:\MYDEV\...`) — they only apply to one machine and are not useful for other contributors.


### Verify

- GitHub Release: `https://github.com/gae4it/pascal-css/releases/tag/vX.Y.Z`
- CDN: `curl -I https://cdn.jsdelivr.net/gh/gae4it/pascal-css@vX.Y.Z/dist/pascal-css.min.css` → `200`

### Semantic versioning

| Bump | When |
|------|------|
| **PATCH** | Bug fixes, doc-only, small additive utilities |
| **MINOR** | New utilities, optional artifacts, backward compatible |
| **MAJOR** | Breaking renames, removed classes, incompatible behavior |

### Re-tagging (avoid if possible)

Only delete and re-push a tag if a release was broken immediately. Coordinate with anyone who already pinned the bad tag.

---

## 6. Health check & CI

`npm run health` validates:

- Version alignment (`package.json` ↔ source header ↔ `dist/`)
- CSS integrity (no corrupt rules, required scales present)
- Important artifact correctness (if built)
- README CDN link and CHANGELOG section
- Git state (locally); CI skips tag/clean-tree warnings
- `npm outdated` report (does **not** run `npm update`)
- Build smoke test

**CI** (`.github/workflows/ci.yml`) runs `npm run health:strict` on every push/PR to `main`.

### Dependency maintenance

| Command | Effect |
|---------|--------|
| `npm outdated` | Report only (used by health check) |
| `npm update` | Safe updates within `^` ranges in `package.json` |
| Major bumps (e.g. cssnano 6 → 8) | Manual, dedicated test session only |

`package-lock.json` is committed for reproducible CI installs (`npm ci`).

---

## 7. Naming & design conventions

- **PascalCase** for all utilities
- **Responsive:** mobile-first — base class applies everywhere; `Sm:`/`Md:`/… override at breakpoints
- **Spacing:** `MarginT10`, `PaddingX20` — compact `T`/`B`/`L`/`R`/`X`/`Y` only for margin/padding
- **Full words elsewhere:** `JustifyContentFlexStart`, not `JustifyStart`
- **Important modifier:** HTML `DisplayFlex!` → CSS `.DisplayFlex\!`
- **Line height:** `LineHeight15` = ratio 1.5; `LineHeight15Rem` = 1.5rem fixed

Full contributor workflow: [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 8. Product evolution (v3 → v4)

| Topic | v3.x | v4.x (current) |
|-------|------|----------------|
| Responsive | Breakpoint classes + some `*Mobile` patterns | Full `Sm:`/`Md:`/`Lg:`/`Xl:`/`Xxl:` engine |
| Container queries | `Co:` prefix | **Removed** — use viewport breakpoints |
| File size | ~12 KB gzip (early target) | ~80 KB gzip default build (much larger utility surface) |
| Important `!` | — | Optional `pascal-css.important.min.css` (v4.2+) |
| Corner radius | `BorderTL` shorthand | `BorderTopLeftRadius` (v4.1+) |

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

---

## 9. Where documentation lives

| Audience | Document |
|----------|----------|
| **End users** | [README.md](README.md), [pascalcss.netlify.app](https://pascalcss.netlify.app/) |
| **Contributors** | [CONTRIBUTING.md](CONTRIBUTING.md) |
| **Security** | [SECURITY.md](SECURITY.md) |
| **Maintainers** | This file |
| **Release history** | [CHANGELOG.md](CHANGELOG.md) |

---

## 10. Quick links

- **Repository:** https://github.com/gae4it/pascal-css
- **Releases:** https://github.com/gae4it/pascal-css/releases
- **New release:** https://github.com/gae4it/pascal-css/releases/new
- **Issues:** https://github.com/gae4it/pascal-css/issues
- **License:** MIT — [LICENSE](LICENSE)
