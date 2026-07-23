# Built files will appear here after running: npm run build

This directory contains the distribution files:
- `pascal-css.css` - Unminified with comments
- `pascal-css.min.css` - Minified for production
- `pascal-css.css.map` - Source map for debugging
- `pascal-css.important.css` - Base CSS + `!important` utility variants (`DisplayFlex!`)
- `pascal-css.important.min.css` - Important build, minified

## Build Command

```bash
npm install
npm run build
```

Optional important modes:

```bash
npm run build                          # full (default)
npm run build:important:subset         # high-impact categories only
npm run build:important:opt-in         # only /* @important */ marked rules
```

The build process:
1. Reads source from `.future-features/pascalcss-draft-4.1.0.css`
2. Processes with PostCSS (autoprefixer)
3. Outputs unminified + minified default CSS
4. Generates `!important` twins via `scripts/generate-important.js`
5. Outputs `pascal-css.important.css` (+ minified)
6. Generates source maps for the default unminified file
