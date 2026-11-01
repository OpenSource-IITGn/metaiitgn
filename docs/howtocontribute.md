# How to Contribute

Meta IITGandhinagar is a community-driven documentation site. Anyone — students, alumni, faculty, and contributors — can help improve it by fixing typos, adding missing information, updating outdated pages, or writing new articles.

## Prerequisites

The site is built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

### Install MkDocs

Choose the method that works for your operating system:

**Using pip (recommended — works on macOS, Linux, and Windows):**

```bash
pip install mkdocs mkdocs-material
```

**Verify the installation:**

```bash
mkdocs --version
```

## Fork and Clone

1. **Fork the repository** on GitHub: https://github.com/OpenSource-IITGn/metaiitgn
2. **Clone your fork:**

```bash
git clone https://github.com/YOUR_USERNAME/metaiitgn.git
cd metaiitgn
```

3. **Add the upstream remote** (to keep your fork in sync):

```bash
git remote add upstream https://github.com/OpenSource-IITGn/metaiitgn.git
```

## Create a Branch

Always create a new branch for your changes — do not edit `main` directly:

```bash
git checkout -b your-branch-name
```

Use a descriptive branch name, e.g. `fix/clubs-page`, `update/courses`, `docs/about`.

## Make Your Changes

### Editing an existing page

Pages live in the `docs/` folder. For example, to edit the clubs page:

```bash
# edit docs/clubs.md
```

### Adding a new page

1. Create a new markdown file in `docs/`, e.g. `docs/my-new-page.md`
2. Add your content in markdown
3. Add the page to `mkdocs.yml` under the `nav:` section:

```yaml
nav:
  - My New Page: my-new-page.md
```

### Writing style

- Use clear, concise language
- Prefer tables and lists for structured information
- Link to other pages using relative links: `[Clubs](clubs.md)`
- Link to external sites using full URLs
- Avoid inventing phone numbers, email addresses, or event dates — use verified information only
- Keep content neutral and factual

## Preview Locally

Serve the site locally to see how your changes look:

```bash
mkdocs serve
```

Then open http://127.0.0.1:8000/ in your browser.

## Commit and Push

```bash
git add .
git commit -m "docs: describe your change"
git push origin your-branch-name
```

## Open a Pull Request

1. Go to your fork on GitHub
2. Click **Compare & pull request**
3. Select `base: main` (OpenSource-IITGn/metaiitgn) and `compare: your-branch-name`
4. Add a clear title and description
5. Submit the pull request

## Keep Your Fork in Sync

Before starting new work, sync with upstream:

```bash
git checkout main
git pull upstream main
git push origin main
```

## Need Help?

- Open an issue for questions or suggestions
- Read the [Article Guidelines](articleguidelines.md) for writing standards
- Read the [Discussion Guidelines](discussionguidelines.md) for community conduct

---

*Last updated: November 2026.*
