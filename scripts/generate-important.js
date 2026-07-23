/**
 * Generate !important utility variants for PascalCSS.
 *
 * HTML:  class="DisplayFlex!"  /  class="Md:DisplayFlex!"
 * CSS:   .DisplayFlex\!        /  .Md\:DisplayFlex\!
 *
 * Modes:
 *   full    – every eligible utility gets a ! twin (default)
 *   subset  – only high-impact categories (display, spacing, position, size, flex/order/z)
 *   opt-in  – only rules preceded by an /* @important *\/ comment
 */

const postcss = require('postcss');

const SUBSET_PREFIXES = [
  'Display',
  'Hidden',
  'Visible',
  'Print',
  'Position',
  'Overflow',
  'Top',
  'Left',
  'Right',
  'Bottom',
  'Inset',
  'Margin',
  'Padding',
  'Gap',
  'Width',
  'Height',
  'MinWidth',
  'MaxWidth',
  'MinHeight',
  'MaxHeight',
  'Flex',
  'Order',
  'Justify',
  'Align',
  'Place',
  'ZIndex',
  'Grid',
];

/**
 * Strip responsive / container prefixes to get the bare utility name.
 * e.g. "Sm\\:DisplayFlex" → "DisplayFlex", "DisplayFlex" → "DisplayFlex"
 */
function bareUtilityName(selectorPart) {
  const name = selectorPart.replace(/^\./, '').replace(/\\/g, '');
  const colon = name.lastIndexOf(':');
  if (colon === -1) return name;
  return name.slice(colon + 1);
}

function isClassSelector(selector) {
  const parts = selector.split(',').map((s) => s.trim());
  return parts.every((part) => {
    return /^\./.test(part) && !/^:root/.test(part) && !/^\*/.test(part);
  });
}

function alreadyImportantSelector(selector) {
  return /\\!$/.test(selector.trim()) || /!$/.test(selector.replace(/\\/g, '').trim());
}

function ruleHasImportant(rule) {
  let has = false;
  rule.walkDecls((decl) => {
    if (decl.important) has = true;
  });
  return has;
}

function ruleOnlyCustomProps(rule) {
  const decls = [];
  rule.walkDecls((decl) => decls.push(decl));
  if (decls.length === 0) return true;
  return decls.every((decl) => decl.prop.startsWith('--'));
}

function hasOptInComment(rule) {
  let prev = rule.prev();
  while (prev) {
    if (prev.type === 'comment') {
      if (/@important\b/i.test(prev.text)) return true;
      prev = prev.prev();
      continue;
    }
    if (prev.type === 'rule' || prev.type === 'atrule') break;
    prev = prev.prev();
  }
  return false;
}

function matchesSubset(selector) {
  const parts = selector.split(',').map((s) => s.trim());
  return parts.every((part) => {
    // Take the class token before any real pseudo (focus-visible etc.)
    const classMatch = part.match(/^\.((?:[A-Za-z]+\\:)?[A-Za-z][A-Za-z0-9-]*)/);
    if (!classMatch) return false;
    const bare = bareUtilityName('.' + classMatch[1]);
    return SUBSET_PREFIXES.some((prefix) => bare.startsWith(prefix));
  });
}

/**
 * Append \! before any trailing pseudo-class/element on each class selector.
 * .DisplayFlex              → .DisplayFlex\!
 * .Md\:DisplayFlex          → .Md\:DisplayFlex\!
 * .FocusVisibleRing:focus-visible → .FocusVisibleRing\!:focus-visible
 */
function toImportantSelector(selector) {
  return selector
    .split(',')
    .map((part) => {
      const s = part.trim();
      if (alreadyImportantSelector(s)) return s;

      // Find first unescaped colon that starts a pseudo (class may contain \: for breakpoints)
      let i = 0;
      let classEnd = s.length;
      while (i < s.length) {
        if (s[i] === '\\') {
          i += 2;
          continue;
        }
        if (s[i] === ':' && i > 0) {
          classEnd = i;
          break;
        }
        i += 1;
      }
      const classPart = s.slice(0, classEnd);
      const pseudo = s.slice(classEnd);
      if (classPart.endsWith('\\!')) return s;
      return `${classPart}\\!${pseudo}`;
    })
    .join(', ');
}

function shouldGenerate(rule, mode) {
  if (rule.selector.includes(':root') || rule.selector.trim().startsWith('*')) {
    return false;
  }
  if (!isClassSelector(rule.selector)) return false;
  if (alreadyImportantSelector(rule.selector.split(',')[0].trim())) return false;
  if (ruleHasImportant(rule)) return false;
  if (ruleOnlyCustomProps(rule)) return false;

  if (mode === 'opt-in') return hasOptInComment(rule);
  if (mode === 'subset') return matchesSubset(rule.selector);
  return true; // full
}

function cloneAsImportant(rule) {
  const clone = rule.clone();
  clone.selector = toImportantSelector(rule.selector);
  clone.walkDecls((decl) => {
    decl.important = true;
  });
  return clone;
}

/**
 * Walk a PostCSS container and insert !important twins after each eligible rule.
 * @returns {number} number of variants generated
 */
function expandContainer(container, mode) {
  let count = 0;
  const nodes = [...container.nodes];

  for (const node of nodes) {
    if (node.type === 'atrule') {
      // Skip keyframes; recurse into media/supports/container/etc.
      if (/^keyframes$/i.test(node.name)) continue;
      if (node.nodes) count += expandContainer(node, mode);
      continue;
    }

    if (node.type === 'rule') {
      if (!shouldGenerate(node, mode)) continue;
      const twin = cloneAsImportant(node);
      node.after(twin);
      count += 1;
    }
  }

  return count;
}

/**
 * @param {string} css
 * @param {{ mode?: 'full' | 'subset' | 'opt-in' }} [options]
 * @returns {Promise<{ css: string, count: number, mode: string }>}
 */
async function generateImportant(css, options = {}) {
  const mode = options.mode || 'full';
  if (!['full', 'subset', 'opt-in'].includes(mode)) {
    throw new Error(`Unknown important mode: ${mode}`);
  }

  const root = postcss.parse(css);
  const banner = postcss.comment({
    text: `
   IMPORTANT MODIFIER (generated)
   Usage: class="DisplayFlex!"  →  .DisplayFlex\\!
   Responsive: class="Md:Padding20!"  →  .Md\\:Padding20\\!
   Mode: ${mode}
`,
  });

  // Insert banner after the first block comment if present
  const first = root.first;
  if (first && first.type === 'comment') {
    first.after(banner);
  } else {
    root.prepend(banner);
  }

  const count = expandContainer(root, mode);

  return {
    css: root.toString(),
    count,
    mode,
  };
}

module.exports = {
  generateImportant,
  toImportantSelector,
  shouldGenerate,
  SUBSET_PREFIXES,
};
