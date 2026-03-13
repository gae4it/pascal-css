const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const sourceFile = path.join(__dirname, 'pascal-css.css');
const distDir = path.join(__dirname, 'dist');
const distFile = path.join(distDir, 'pascal-css.css');
const minFile = path.join(distDir, 'pascal-css.min.css');
const isWatchMode = process.argv.includes('--watch');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const browsers = [
  'last 2 versions',
  '> 1%',
  'not dead',
  'Chrome >= 105',
  'Safari >= 16',
  'Firefox >= 110'
];

async function build() {
  const css = fs.readFileSync(sourceFile, 'utf8');

  const unminified = await postcss([
    autoprefixer({
      overrideBrowserslist: browsers
    })
  ]).process(css, {
    from: sourceFile,
    to: distFile,
    map: { inline: false }
  });

  fs.writeFileSync(distFile, unminified.css);
  if (unminified.map) {
    fs.writeFileSync(`${distFile}.map`, unminified.map.toString());
  }

  const sizeKB = (Buffer.byteLength(unminified.css, 'utf8') / 1024).toFixed(2);

  const minified = await postcss([
    autoprefixer({
      overrideBrowserslist: browsers
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
  ]).process(unminified.css, {
    from: distFile,
    to: minFile
  });

  fs.writeFileSync(minFile, minified.css);

  const minSizeKB = (Buffer.byteLength(minified.css, 'utf8') / 1024).toFixed(2);
  const gzipEstimate = (Number(minSizeKB) * 0.3).toFixed(2);

  console.log('✅ Unminified: dist/pascal-css.css');
  console.log(`   Size: ${sizeKB} KB\n`);
  console.log('✅ Minified: dist/pascal-css.min.css');
  console.log(`   Size: ${minSizeKB} KB`);
  console.log(`   Estimated gzipped: ~${gzipEstimate} KB\n`);
}

async function runBuildCycle() {
  try {
    await build();
    console.log('✨ Build complete!\n');
    console.log('📦 Distribution files ready in /dist:');
    console.log('   - pascal-css.css (unminified with comments)');
    console.log('   - pascal-css.min.css (production-ready)');
    console.log('   - pascal-css.css.map (source map)\n');
  } catch (error) {
    console.error('❌ Build failed:', error);
    if (!isWatchMode) {
      process.exit(1);
    }
  }
}

console.log('🚀 Building PascalCSS v3.3...\n');

if (!isWatchMode) {
  runBuildCycle();
} else {
  let running = false;
  let pending = false;

  const queueBuild = async () => {
    if (running) {
      pending = true;
      return;
    }

    running = true;
    await runBuildCycle();
    running = false;

    if (pending) {
      pending = false;
      await queueBuild();
    }
  };

  console.log('👀 Watch mode enabled. Listening for changes in pascal-css.css...\n');

  queueBuild();

  fs.watchFile(sourceFile, { interval: 250 }, (curr, prev) => {
    if (curr.mtimeMs !== prev.mtimeMs) {
      console.log('🔁 Change detected, rebuilding...');
      queueBuild();
    }
  });

  process.on('SIGINT', () => {
    fs.unwatchFile(sourceFile);
    console.log('\n🛑 Watch mode stopped.');
    process.exit(0);
  });
}
