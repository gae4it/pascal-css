# Built files will appear here after running: npm run build

This directory contains the distribution files:
- `pascal-css.css` - Unminified with comments
- `pascal-css.min.css` - Minified for production
- `pascal-css.css.map` - Source map for debugging

## Build Command

```bash
npm install
npm run build
```

The build process:
1. Reads `pascal-css.css` from root
2. Processes with PostCSS (autoprefixer)
3. Outputs unminified version here
4. Minifies with cssnano
5. Generates source maps
