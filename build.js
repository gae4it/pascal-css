const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { generateImportant } = require('./scripts/generate-important');

const sourceFile = path.join(__dirname, '.future-features', 'pascalcss-draft-4.1.0.css');
const distDir = path.join(__dirname, 'dist');
const distFile = path.join(distDir, 'pascal-css.css');
const minFile = path.join(distDir, 'pascal-css.min.css');
const importantFile = path.join(distDir, 'pascal-css.important.css');
const importantMinFile = path.join(distDir, 'pascal-css.important.min.css');
const rootMinFile = path.join(__dirname, 'pascal-css.css');
const packageVersion = require('./package.json').version;
const isWatchMode = process.argv.includes('--watch');

const modeArg = process.argv.find((arg) => arg.startsWith('--important-mode='));
const importantMode = modeArg ? modeArg.split('=')[1] : 'full';

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

const nanoPreset = {
  preset: ['default', {
    discardComments: { removeAll: true },
    normalizeWhitespace: true,
    colormin: true,
    minifyFontValues: true,
    minifySelectors: true
  }]
};

async function processUnminified(css, from, to) {
  return postcss([
    autoprefixer({
      overrideBrowserslist: browsers
    })
  ]).process(css, {
    from,
    to,
    map: to === distFile ? { inline: false } : false
  });
}

async function processMinified(css, from, to) {
  return postcss([
    autoprefixer({
      overrideBrowserslist: browsers
    }),
    cssnano(nanoPreset)
  ]).process(css, {
    from,
    to
  });
}

function sizeKB(css) {
  return (Buffer.byteLength(css, 'utf8') / 1024).toFixed(2);
}

async function build() {
  const css = fs.readFileSync(sourceFile, 'utf8');

  // --- Default build (unchanged size / no ! variants) ---
  const unminified = await processUnminified(css, sourceFile, distFile);

  fs.writeFileSync(distFile, unminified.css);
  if (unminified.map) {
    fs.writeFileSync(`${distFile}.map`, unminified.map.toString());
  }

  const minified = await processMinified(unminified.css, distFile, minFile);
  fs.writeFileSync(minFile, minified.css);
  fs.writeFileSync(rootMinFile, minified.css);

  console.log('✅ Unminified: dist/pascal-css.css');
  console.log(`   Size: ${sizeKB(unminified.css)} KB\n`);
  console.log('✅ Minified: dist/pascal-css.min.css  +  pascal-css.css (root)');
  console.log(`   Size: ${sizeKB(minified.css)} KB`);
  console.log(`   Estimated gzipped: ~${(Number(sizeKB(minified.css)) * 0.3).toFixed(2)} KB\n`);

  // --- Optional important build (base + !important twins) ---
  const { css: importantCss, count, mode } = await generateImportant(css, {
    mode: importantMode
  });

  const importantUnminified = await processUnminified(importantCss, sourceFile, importantFile);
  fs.writeFileSync(importantFile, importantUnminified.css);

  const importantMinified = await processMinified(
    importantUnminified.css,
    importantFile,
    importantMinFile
  );
  fs.writeFileSync(importantMinFile, importantMinified.css);

  console.log(`✅ Important: dist/pascal-css.important.css  (mode: ${mode}, +${count} variants)`);
  console.log(`   Size: ${sizeKB(importantUnminified.css)} KB`);
  console.log('✅ Important minified: dist/pascal-css.important.min.css');
  console.log(`   Size: ${sizeKB(importantMinified.css)} KB`);
  console.log(`   Estimated gzipped: ~${(Number(sizeKB(importantMinified.css)) * 0.3).toFixed(2)} KB\n`);
}

async function runBuildCycle() {
  try {
    await build();
    console.log('✨ Build complete!\n');
    console.log('📦 Distribution files ready in /dist:');
    console.log('   - pascal-css.css (unminified with comments)');
    console.log('   - pascal-css.min.css (production-ready)');
    console.log('   - pascal-css.css.map (source map)');
    console.log('   - pascal-css.important.css (base + !important variants)');
    console.log('   - pascal-css.important.min.css (important, minified)\n');
  } catch (error) {
    console.error('❌ Build failed:', error);
    if (!isWatchMode) {
      process.exit(1);
    }
  }
}

console.log(`🚀 Building PascalCSS v${packageVersion}...\n`);
console.log(`   Important mode: ${importantMode}  (use --important-mode=full|subset|opt-in)\n`);

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

  console.log('👀 Watch mode enabled. Listening for changes in source CSS...\n');

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
