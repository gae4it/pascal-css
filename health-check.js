const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

const root = __dirname;
const strict = process.argv.includes('--strict');

const paths = {
  packageJson: path.join(root, 'package.json'),
  buildJs: path.join(root, 'build.js'),
  generateImportant: path.join(root, 'scripts', 'generate-important.js'),
  source: path.join(root, '.future-features', 'pascalcss-draft-4.1.0.css'),
  distCss: path.join(root, 'dist', 'pascal-css.css'),
  distMin: path.join(root, 'dist', 'pascal-css.min.css'),
  distMap: path.join(root, 'dist', 'pascal-css.css.map'),
  distImportant: path.join(root, 'dist', 'pascal-css.important.css'),
  distImportantMin: path.join(root, 'dist', 'pascal-css.important.min.css'),
  rootMin: path.join(root, 'pascal-css.css'),
  readme: path.join(root, 'README.md'),
  changelog: path.join(root, 'CHANGELOG.md'),
  releaseWorkflow: path.join(root, '.github', 'workflows', 'release.yml'),
};

const errors = [];
const warnings = [];
const ok = [];

function pass(message) {
  ok.push(message);
}

function warn(message) {
  warnings.push(message);
}

function fail(message) {
  errors.push(message);
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function fileSizeKB(file) {
  return (fs.statSync(file).size / 1024).toFixed(2);
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function run(command) {
  return execSync(command, { cwd: root, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}

function tryRun(command) {
  try {
    return run(command);
  } catch {
    return null;
  }
}

function section(title) {
  console.log(`\n${title}`);
  console.log('-'.repeat(title.length));
}

console.log('PascalCSS health check\n');

// --- Version & files ---
section('Version & files');

const pkg = JSON.parse(read(paths.packageJson));
const version = pkg.version;
pass(`package.json version: v${version}`);

for (const [label, file] of Object.entries({
  'Source CSS': paths.source,
  'generate-important.js': paths.generateImportant,
  'dist/pascal-css.css': paths.distCss,
  'dist/pascal-css.min.css': paths.distMin,
  'dist/pascal-css.css.map': paths.distMap,
  'dist/pascal-css.important.css': paths.distImportant,
  'dist/pascal-css.important.min.css': paths.distImportantMin,
  'pascal-css.css (root)': paths.rootMin,
  'README.md': paths.readme,
  'CHANGELOG.md': paths.changelog,
  'release workflow': paths.releaseWorkflow,
})) {
  if (fs.existsSync(file)) {
    pass(`${label} present (${fileSizeKB(file)} KB)`);
  } else {
    fail(`Missing: ${label} (${path.relative(root, file)})`);
  }
}

if (fs.existsSync(paths.source)) {
  const source = read(paths.source);
  const headerMatch = source.match(/PascalCSS v(\d+\.\d+\.\d+)/);
  if (!headerMatch) {
    fail('Source header version not found');
  } else if (headerMatch[1] !== version) {
    fail(`Source header v${headerMatch[1]} does not match package.json v${version}`);
  } else {
    pass(`Source header matches package.json (v${version})`);
  }

  if (source.includes('order: ;')) fail('Corrupt CSS: empty order values');
  else pass('No empty order declarations');

  if (source.includes('LineHeightRatio')) warn('Stale LineHeightRatio class names in source');
  if (source.includes('.BorderTL')) warn('Stale BorderTL shorthand in source');

  for (let i = 1; i <= 30; i++) {
    const n = String(i).padStart(2, '0');
    if (!source.includes(`.LineHeight${n} {`)) {
      fail(`Missing .LineHeight${n}`);
      break;
    }
  }
  if (!errors.some((e) => e.startsWith('Missing .LineHeight'))) {
    pass('LineHeight01–LineHeight30 present');
  }
}

// --- Build output sync ---
section('Build output');

if (fs.existsSync(paths.distCss) && fs.existsSync(paths.source)) {
  const distHeader = read(paths.distCss).match(/PascalCSS v(\d+\.\d+\.\d+)/);
  if (distHeader && distHeader[1] === version) {
    pass(`dist/pascal-css.css header is v${version}`);
  } else {
    fail('dist/pascal-css.css is out of date — run npm run build');
  }
}

if (fs.existsSync(paths.distMin) && fs.existsSync(paths.rootMin)) {
  if (sha256(paths.distMin) === sha256(paths.rootMin)) {
    pass('Root pascal-css.css matches dist/pascal-css.min.css');
  } else {
    fail('Root pascal-css.css differs from dist/pascal-css.min.css — run npm run build');
  }
}

// --- Important modifier ---
section('Important modifier (!)');

if (fs.existsSync(paths.distCss)) {
  const defaultCss = read(paths.distCss);
  if (defaultCss.includes('.DisplayFlex\\!')) {
    fail('Default dist/pascal-css.css must not include !important variants');
  } else {
    pass('Default dist CSS has no DisplayFlex! variants');
  }
}

if (fs.existsSync(paths.distImportant)) {
  const importantCss = read(paths.distImportant);

  const flexImportant = importantCss.match(/\.DisplayFlex\\!\s*\{[^}]*display:\s*flex\s*!important/s);
  if (flexImportant) {
    pass('.DisplayFlex\\! has display: flex !important');
  } else {
    fail('Missing or incorrect .DisplayFlex\\! in pascal-css.important.css');
  }

  const mdFlexImportant = importantCss.match(
    /@media\s*\(min-width:\s*768px\)\s*\{[\s\S]*?\.Md\\:DisplayFlex\\!\s*\{[^}]*display:\s*flex\s*!important/
  );
  if (mdFlexImportant) {
    pass('.Md\\:DisplayFlex\\! present inside @media (min-width: 768px)');
  } else {
    fail('Missing .Md\\:DisplayFlex\\! inside Md media query');
  }

  if (importantCss.includes('IMPORTANT MODIFIER')) {
    pass('Important build banner present');
  } else {
    warn('Important build banner missing');
  }

  // Default utilities still present in the combined important file
  if (importantCss.includes('.DisplayFlex {') || importantCss.includes('.DisplayFlex{')) {
    pass('Important file includes base utilities (combined artifact)');
  } else {
    fail('Important file should include base + ! variants');
  }
} else {
  fail('Missing dist/pascal-css.important.css — run npm run build');
}

if (fs.existsSync(paths.generateImportant)) {
  try {
    const { toImportantSelector } = require(paths.generateImportant);
    if (toImportantSelector('.DisplayFlex') === '.DisplayFlex\\!') {
      pass('toImportantSelector(.DisplayFlex) → .DisplayFlex\\!');
    } else {
      fail('toImportantSelector(.DisplayFlex) returned unexpected value');
    }
    if (toImportantSelector('.Md\\:Padding20') === '.Md\\:Padding20\\!') {
      pass('toImportantSelector(.Md\\:Padding20) → .Md\\:Padding20\\!');
    } else {
      fail('toImportantSelector responsive selector incorrect');
    }
  } catch (error) {
    fail(`generate-important.js failed to load: ${error.message}`);
  }
}

// --- Docs & CDN ---
section('Docs & CDN');

if (fs.existsSync(paths.readme)) {
  const readme = read(paths.readme);
  const cdnTag = `@v${version}`;
  if (readme.includes(cdnTag)) {
    pass(`README CDN link references ${cdnTag}`);
  } else {
    warn(`README CDN link does not reference ${cdnTag}`);
  }
}

if (fs.existsSync(paths.changelog)) {
  const changelog = read(paths.changelog);
  if (changelog.includes(`## [${version}]`)) {
    pass(`CHANGELOG has section for v${version}`);
  } else {
    warn(`CHANGELOG missing section for v${version}`);
  }
}

// --- Git ---
section('Git');

const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';

const gitStatus = tryRun('git status --porcelain');
if (gitStatus === null) {
  if (!isCI) warn('Git not available');
} else if (gitStatus === '') {
  pass('Working tree clean');
} else if (isCI) {
  pass('Git status skipped in CI');
} else {
  warn('Uncommitted changes present');
}

const tag = tryRun(`git tag -l v${version}`);
if (tag === `v${version}`) {
  pass(`Git tag v${version} exists`);
} else if (isCI) {
  pass(`Git tag check skipped in CI (tag after release)`);
} else {
  warn(`Git tag v${version} not found locally`);
}

const upstream = tryRun('git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>nul') ||
  tryRun('git rev-parse --abbrev-ref --symbolic-full-name @{u}');
if (upstream && !isCI) {
  const aheadBehind = tryRun(`git rev-list --left-right --count @{u}...HEAD`);
  if (aheadBehind) {
    const [behind, ahead] = aheadBehind.split(/\s+/).map(Number);
    if (ahead === 0 && behind === 0) pass(`Branch synced with ${upstream}`);
    else if (ahead > 0) pass(`${ahead} commit(s) ahead of ${upstream} — ready to push`);
    else if (behind > 0) warn(`${behind} commit(s) behind ${upstream} — consider pulling`);
  }
}

// --- Dependencies ---
section('Dependencies');

const outdated = tryRun('npm outdated --json');
if (outdated) {
  try {
    const data = JSON.parse(outdated);
    const packages = Object.keys(data);
    if (packages.length === 0) {
      pass('All devDependencies up to date');
    } else {
      for (const name of packages) {
        const info = data[name];
        warn(`${name}: ${info.current} → latest ${info.latest}`);
      }
    }
  } catch {
    pass('npm outdated check completed');
  }
} else {
  pass('All devDependencies up to date');
}

const browserslistPkg = path.join(root, 'node_modules', 'caniuse-lite', 'package.json');
if (fs.existsSync(browserslistPkg)) {
  pass('caniuse-lite installed (run npx update-browserslist-db@latest if build warns)');
} else {
  warn('node_modules missing — run npm install');
}

// --- Build smoke test ---
section('Build smoke test');

try {
  run('node build.js');
  pass('npm run build succeeds');
} catch (error) {
  fail('Build failed');
  if (error.stderr) console.error(error.stderr.toString());
}

// --- Report ---
section('Summary');

for (const message of ok) console.log(`  OK   ${message}`);
for (const message of warnings) console.log(`  WARN ${message}`);
for (const message of errors) console.log(`  FAIL ${message}`);

console.log(`\n${ok.length} passed, ${warnings.length} warning(s), ${errors.length} error(s)`);

if (errors.length > 0) {
  console.log('\nHealth check failed.\n');
  process.exit(1);
}

if (strict && warnings.length > 0) {
  console.log('\nHealth check failed in strict mode (warnings treated as errors).\n');
  process.exit(1);
}

console.log('\nHealth check passed.\n');
