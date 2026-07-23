# Contributing to PascalCSS

Thank you for your interest in PascalCSS. This project is a **static CSS library** distributed via GitHub and jsDelivr — contributions should keep the public API stable and the bundle lean.

## Before you start

1. Read [README.md](README.md) for naming conventions and scope
2. Check [CHANGELOG.md](CHANGELOG.md) and open issues to avoid duplicate work
3. Interactive docs live at [pascalcss.netlify.app](https://pascalcss.netlify.app/)

## Development setup

```bash
git clone https://github.com/gae4it/pascal-css.git
cd pascal-css
npm install
npm run build
npm run health
```

| Command | Purpose |
|---------|---------|
| `npm run build` | Build `dist/` from `.future-features/pascalcss-draft-4.1.0.css` |
| `npm run watch` | Rebuild on source changes |
| `npm run health` | Pre-release diagnostics (read-only) |
| `npm run health:strict` | Same, but warnings fail the check |

## Where to edit

| File | Role |
|------|------|
| `.future-features/pascalcss-draft-4.1.0.css` | **Source of truth** for utilities |
| `build.js` | PostCSS pipeline + optional `!important` artifact |
| `scripts/generate-important.js` | Generates `pascal-css.important.*` variants |
| `health-check.js` | Repository health checks |
| `dist/` | Built output (commit with releases) |
| `pascal-css.css` | Root minified copy for CDN/npm `files` field |

Do **not** hand-edit `pascal-css.css` in the root — run `npm run build`.

## Naming conventions

- **PascalCase** for all classes: `DisplayFlex`, `MarginT10`, `FcBlue500`
- **Responsive prefixes:** `Sm:`, `Md:`, `Lg:`, `Xl:`, `Xxl:` (mobile-first)
- **Spacing:** compact direction codes only for `Margin*` / `Padding*`: `T`, `B`, `L`, `R`, `X`, `Y`
- **Full words** elsewhere: `JustifyContentFlexStart`, not `JustifyStart`
- **Important modifier:** suffix `!` in HTML → escaped `\!` in CSS (`.DisplayFlex\!`)

## Pull request checklist

- [ ] Changes made in the source CSS file under `.future-features/`
- [ ] `npm run build` completes without errors
- [ ] `npm run health` passes
- [ ] [CHANGELOG.md](CHANGELOG.md) updated under `[Unreleased]`
- [ ] New utilities documented in README or docs site if user-facing
- [ ] Responsive variants added for layout utilities where applicable
- [ ] No secrets, evaluation files, or unrelated refactors

## Commit messages

Use conventional prefixes when possible:

- `feat:` new utilities or features
- `fix:` bug fixes
- `docs:` documentation only
- `build:` build pipeline or dist output
- `chore:` maintenance (deps, CI, health check)

## Releases

Maintainers follow [.docs/VERSIONING_GUIDE.md](.docs/VERSIONING_GUIDE.md):

1. Bump `package.json` version and source header
2. Update README CDN links and CHANGELOG
3. `npm run build` → `npm run health`
4. Commit, tag `vX.Y.Z`, push tag (triggers GitHub Release + CDN)

## Questions

Open a [GitHub Issue](https://github.com/gae4it/pascal-css/issues) for bugs, feature requests, or design questions.
