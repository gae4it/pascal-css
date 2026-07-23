# Security Policy

## Supported versions

| Version | Supported |
|---------|-----------|
| Latest release tag on [GitHub Releases](https://github.com/gae4it/pascal-css/releases) | Yes |
| Older tagged releases | Best-effort |
| `main` branch without a tag | No — pin a release version in production |

**Production CDN usage:** always pin a version, e.g. `@v4.2.0`, never `@main`.

## Reporting a vulnerability

PascalCSS is a **static CSS file** — there is no server, authentication, database, or runtime code in the library itself.

If you believe you have found a security issue (e.g. unexpected behavior when combined with certain browsers, supply-chain concern in the build pipeline, or malicious content in the repository):

1. **Do not** open a public issue for sensitive reports
2. Email or contact the maintainer via [GitHub Issues](https://github.com/gae4it/pascal-css/issues) with the label `security` if email is unavailable
3. Include: affected version, steps to reproduce, and impact assessment

We aim to acknowledge reports within **7 days** and provide a fix or assessment within **30 days** when applicable.

## Out of scope

The following are generally **not** security vulnerabilities in this project:

- Visual glitches or layout differences across browsers (file a normal bug report)
- Class name collisions with your own CSS (use namespacing or load order)
- Bundle size or performance preferences
- Missing utilities or naming opinions

## Supply chain

- Dependencies are limited to **devDependencies** (`postcss`, `autoprefixer`, `cssnano`) used only at build time
- The published artifact is plain CSS consumed via CDN or download
- Run `npm run health` locally to verify build integrity before releases

## Recommendations for consumers

- Pin CDN URLs to a specific release tag
- Review [CHANGELOG.md](CHANGELOG.md) before upgrading
- Self-host or Subresource Integrity (SRI) if your security policy requires it — jsDelivr supports version pinning
