const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Directories
const sourceFile = path.join(__dirname, 'pascal-css.css');
const distDir = path.join(__dirname, 'dist');
const distFile = path.join(distDir, 'pascal-css.css');
const minFile = path.join(distDir, 'pascal-css.min.css');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Read source CSS
const css = fs.readFileSync(sourceFile, 'utf8');

console.log('🚀 Building PascalCSS v3.2...\n');

// Process CSS with PostCSS
postcss([
  autoprefixer({
    overrideBrowserslist: [
      'last 2 versions',
      '> 1%',
      'not dead',
      'Chrome >= 105',
      'Safari >= 16',
      'Firefox >= 110'
    ]
  })
])
  .process(css, {
    from: sourceFile,
    to: distFile,
    map: { inline: false }
  })
  .then(result => {
    // Write unminified version
    fs.writeFileSync(distFile, result.css);
    if (result.map) {
      fs.writeFileSync(distFile + '.map', result.map.toString());
    }
    console.log('✅ Unminified: dist/pascal-css.css');

    // Get file size
    const sizeKB = (Buffer.byteLength(result.css, 'utf8') / 1024).toFixed(2);
    console.log(`   Size: ${sizeKB} KB\n`);

    // Process minified version
    return postcss([
      autoprefixer({
        overrideBrowserslist: [
          'last 2 versions',
          '> 1%',
          'not dead',
          'Chrome >= 105',
          'Safari >= 16',
          'Firefox >= 110'
        ]
      }),
      cssnano({
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: true
        }]
      })
    ]).process(result.css, {
      from: distFile,
      to: minFile
    });
  })
  .then(result => {
    // Write minified version
    fs.writeFileSync(minFile, result.css);
    console.log('✅ Minified: dist/pascal-css.min.css');

    // Get file sizes
    const minSizeKB = (Buffer.byteLength(result.css, 'utf8') / 1024).toFixed(2);
    console.log(`   Size: ${minSizeKB} KB`);

    // Estimate gzipped size (rough approximation: ~70% compression)
    const gzipEstimate = (minSizeKB * 0.3).toFixed(2);
    console.log(`   Estimated gzipped: ~${gzipEstimate} KB\n`);

    console.log('✨ Build complete!\n');
    console.log('📦 Distribution files ready in /dist:');
    console.log('   - pascal-css.css (unminified with comments)');
    console.log('   - pascal-css.min.css (production-ready)');
    console.log('   - pascal-css.css.map (source map)\n');
  })
  .catch(error => {
    console.error('❌ Build failed:', error);
    process.exit(1);
  });
