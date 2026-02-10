# PascalCSS Versioning & Release Guide

Complete step-by-step guide for updating version numbers and releasing new versions of PascalCSS.

## Prerequisites

- Node.js installed
- Git configured with GitHub access
- All changes committed to main branch

---

## Step 1: Update Version in package.json

```bash
# For patch releases (3.0.0 → 3.0.1)
npm version patch

# For minor releases (3.0.0 → 3.1.0)
npm version minor

# For major releases (3.0.0 → 4.0.0)
npm version major

# OR manually edit package.json
# Change "version": "3.0.0" to your new version
```

---

## Step 2: Update Version in Source Files

### Update pascal-css.css header comment
```css
/* =========================================
   PascalCSS v3.0.1 - Modern CSS Edition  
   ...
```

### Update README.md CDN link
```markdown
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.min.css">
```

### Update CHANGELOG.md
Add new version entry at the top:
```markdown
## [3.0.1] - 2026-02-10

### Added
- Expanded color palette with 10 families and 60+ variants

### Changed
- Improved OKLCH color system with semantic shortcuts

### Fixed
- (List any bug fixes)
```

---

## Step 3: Rebuild Distribution Files

```bash
# Install dependencies (if not already done)
npm install

# Run the build script
npm run build
```

Expected output:
```
✅ Unminified: dist/pascal-css.css
   Size: XX.XX KB

✅ Minified: dist/pascal-css.min.css
   Size: XX.XX KB
   Estimated gzipped: ~X.XX KB

✨ Build complete!
```

---

## Step 4: Verify Build Output

```bash
# Check that all dist files were generated
ls dist/

# Expected files:
# - pascal-css.css
# - pascal-css.min.css
# - pascal-css.css.map
```

---

## Step 5: Stage All Changes

```bash
# Add source files with version updates
git add package.json pascal-css.css README.md CHANGELOG.md

# Add built distribution files
git add dist/

# Verify what will be committed
git status
```

---

## Step 6: Commit Changes

```bash
# For new features
git commit -m "feat: expanded color palette to 10 families with OKLCH"

# For bug fixes
git commit -m "fix: corrected border color utilities"

# For build/version updates
git commit -m "build: generate minified CSS for v3.0.1"

# For documentation
git commit -m "docs: updated installation guide"
```

**Commit Message Conventions:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code formatting (non-functional)
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `build:` - Build system changes
- `chore:` - Maintenance tasks

---

## Step 7: Push to GitHub

```bash
# Push commits to main branch
git push origin main
```

---

## Step 8: Delete Old Tag (if updating existing version)

⚠️ **Only needed if re-releasing the same version number**

```bash
# Delete local tag
git tag -d v3.0.1

# Delete remote tag
git push origin --delete v3.0.1
```

---

## Step 9: Create New Git Tag

```bash
# Create annotated tag with release message
git tag -a v3.0.1 -m "Release v3.0.1 - Expanded Color System"

# Verify tag was created
git tag -l
```

**Tag Message Examples:**
- `"Release v3.0.0 - Modern CSS Edition"`
- `"Release v3.0.1 - Expanded Color System"`
- `"Release v3.1.0 - Container Queries Support"`
- `"Release v4.0.0 - Major Architecture Update"`

---

## Step 10: Push Tag to GitHub

```bash
# Push the new tag
git push origin v3.0.1

# Verify tag on GitHub
git ls-remote --tags origin
```

---

## Step 11: Verify GitHub Release (Automated)

GitHub Actions will automatically:
1. Detect the new tag
2. Run the build workflow
3. Create a GitHub Release
4. Upload distribution files as artifacts

**Check release at:**
```
https://github.com/gae4it/pascal-css/releases/tag/v3.0.1
```

---

## Step 12: Verify jsDelivr CDN

Wait 5-10 minutes for jsDelivr to pick up the new release, then test:

```bash
# Test CDN URL (replace version number)
curl -I https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.min.css

# Should return: HTTP/2 200
```

**CDN URLs after release:**
- Minified: `https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.min.css`
- Unminified: `https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.css`
- Source map: `https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.css.map`

---

## Complete Command Sequence

```bash
# 1. Update version in package.json
npm version patch  # or minor/major

# 2. Update version in source files manually
# - pascal-css.css (header comment)
# - README.md (CDN links)
# - CHANGELOG.md (add new entry)

# 3. Rebuild distribution files
npm run build

# 4. Stage all changes
git add package.json pascal-css.css README.md CHANGELOG.md dist/

# 5. Commit changes
git commit -m "feat: your feature description"

# 6. Push to GitHub
git push origin main

# 7. Delete old tag (only if re-releasing)
git tag -d v3.0.1
git push origin --delete v3.0.1

# 8. Create new tag
git tag -a v3.0.1 -m "Release v3.0.1 - Feature Description"

# 9. Push tag
git push origin v3.0.1

# 10. Verify release
# Check: https://github.com/gae4it/pascal-css/releases
# Check: https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.min.css
```

---

## Semantic Versioning Quick Reference

**MAJOR.MINOR.PATCH** (e.g., 3.0.1)

- **MAJOR** (3.x.x): Breaking changes, incompatible API changes
  - Example: Renaming all utility classes, removing features
  
- **MINOR** (x.3.x): New features, backward compatible
  - Example: Adding new color variants, new utility classes
  
- **PATCH** (x.x.1): Bug fixes, backward compatible
  - Example: Fixing broken utilities, correcting OKLCH values

---

## Troubleshooting

### Problem: jsDelivr returns 404 for new version

**Solution:**
```bash
# Verify tag exists on GitHub
git ls-remote --tags origin | grep v3.0.1

# Verify dist/ files are in the tag
git ls-tree -r v3.0.1 dist/

# Purge jsDelivr cache
# Visit: https://www.jsdelivr.com/tools/purge
# Enter: https://cdn.jsdelivr.net/gh/gae4it/pascal-css@v3.0.1/dist/pascal-css.min.css
```

### Problem: GitHub Actions workflow not triggered

**Solution:**
```bash
# Verify workflow file exists
cat .github/workflows/release.yml

# Check GitHub Actions tab
# https://github.com/gae4it/pascal-css/actions

# Manually trigger workflow (if configured)
```

### Problem: Wrong version number in built files

**Solution:**
```bash
# Delete dist/ folder
rm -rf dist/

# Rebuild from scratch
npm run build

# Re-commit and push
git add dist/
git commit -m "build: regenerate dist files with correct version"
git push origin main
```

---

## Best Practices

1. ✅ **Always update CHANGELOG.md** - Document what changed
2. ✅ **Test build locally** - Run `npm run build` before pushing
3. ✅ **Use semantic versioning** - Follow MAJOR.MINOR.PATCH convention
4. ✅ **Commit dist/ files** - jsDelivr serves from git tags
5. ✅ **Write clear commit messages** - Use conventional commit format
6. ✅ **Verify CDN after release** - Test URLs before announcing
7. ✅ **Keep main branch stable** - Only push working code

---

## Quick Release Checklist

- [ ] Version updated in `package.json`
- [ ] Version updated in `pascal-css.css` header
- [ ] Version updated in `README.md` CDN links
- [ ] New entry added to `CHANGELOG.md`
- [ ] `npm run build` executed successfully
- [ ] All files staged with `git add`
- [ ] Changes committed with clear message
- [ ] Changes pushed to `main` branch
- [ ] Git tag created with `git tag -a`
- [ ] Tag pushed with `git push origin vX.X.X`
- [ ] GitHub Release created (automatic)
- [ ] jsDelivr CDN serving new version (wait 5-10 min)

---

## Version History Reference

- **v3.0.0** (2026-02-10) - Modern CSS Edition with OKLCH colors
- **v0.2.0** (2024-XX-XX) - Enhanced utilities
- **v0.1.0** (2023-XX-XX) - Initial release

---

## Support

- **Documentation:** https://pascalcss.netlify.app/
- **Repository:** https://github.com/gae4it/pascal-css
- **Issues:** https://github.com/gae4it/pascal-css/issues
- **CDN:** https://cdn.jsdelivr.net/gh/gae4it/pascal-css@latest/

---

*Last updated: February 10, 2026*
