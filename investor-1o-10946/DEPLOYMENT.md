# Deployment Guide

## Repository Structure

This project has a specific structure that's important to understand for successful deployments:

```
/Users/jonathanmorav/Series A/          ← Git repo root
├── .git/                                ← Git directory
├── .gitignore
├── docs/                                ← GitHub Pages serves from HERE
│   ├── .nojekyll                        ← Required to bypass Jekyll
│   ├── index.html
│   └── assets/
│       ├── index-[hash].js
│       └── index-[hash].css
├── investor-1o-10946/                   ← Project source code
│   ├── src/
│   ├── docs/                            ← Vite builds HERE (NOT used by GitHub Pages)
│   ├── package.json
│   └── vite.config.ts
└── [other files]
```

### Key Points

1. **Git repo root is `/Series A/`**, not `/Series A/investor-1o-10946/`
2. **GitHub Pages serves from `/Series A/docs/`** (repo root)
3. **Vite builds to `/Series A/investor-1o-10946/docs/`** (project subfolder)
4. **You must manually sync** the build output to the repo root docs folder

---

## Deployment Steps

### 1. Make your code changes

Edit files in `/Series A/investor-1o-10946/src/`

### 2. Commit source changes

```bash
cd "/Users/jonathanmorav/Series A/investor-1o-10946"
git add src/
git commit -m "Your commit message"
```

### 3. Build the project

```bash
cd "/Users/jonathanmorav/Series A/investor-1o-10946"
npm run build
```

This outputs to `/Series A/investor-1o-10946/docs/`

### 4. Sync build to repo root docs folder

```bash
# Remove old assets and copy new ones
rm -rf "/Users/jonathanmorav/Series A/docs/assets"
cp -R "/Users/jonathanmorav/Series A/investor-1o-10946/docs/assets" "/Users/jonathanmorav/Series A/docs/"
cp "/Users/jonathanmorav/Series A/investor-1o-10946/docs/index.html" "/Users/jonathanmorav/Series A/docs/"
```

### 5. Commit and push the docs folder

```bash
cd "/Users/jonathanmorav/Series A"
git add -f docs
git commit -m "Build: Update docs for GitHub Pages deployment"
git push origin main
```

### 6. Wait for deployment

- GitHub Pages deployment takes 1-3 minutes
- Check status: https://github.com/jonathanmorav/cakewalk-series-a-deck/deployments
- Or via CLI: `gh api repos/jonathanmorav/cakewalk-series-a-deck/pages --jq '.status'`

---

## One-Liner Deployment Script

Run this from the project directory after making changes:

```bash
cd "/Users/jonathanmorav/Series A/investor-1o-10946" && \
npm run build && \
rm -rf "../docs/assets" && \
cp -R docs/assets ../docs/ && \
cp docs/index.html ../docs/ && \
cd .. && \
git add -f docs && \
git commit -m "Build: Deploy to GitHub Pages" && \
git push origin main
```

---

## Troubleshooting

### Build fails on GitHub Pages

**Symptom:** `gh api repos/.../pages` shows `status: "errored"`

**Solution:** Ensure `.nojekyll` file exists in `/Series A/docs/`:
```bash
touch "/Users/jonathanmorav/Series A/docs/.nojekyll"
git add -f docs/.nojekyll
git commit -m "Add .nojekyll"
git push origin main
```

### Changes not appearing after deploy

**Symptom:** Hard refresh doesn't show changes

**Possible causes:**
1. **Wrong docs folder:** Check that `/Series A/docs/` (not `/Series A/investor-1o-10946/docs/`) has the new files
2. **CDN caching:** Wait 2-5 minutes, try incognito window
3. **Check file hashes:** The JS/CSS filenames should change with each build

**Verify correct files are deployed:**
```bash
# Check what's being served
curl -s -I "https://jonathanmorav.github.io/cakewalk-series-a-deck/assets/index-[hash].js" | head -3

# Should return HTTP/2 200, not 404
```

### Deployment stuck in "building"

**Symptom:** `status: "building"` for more than 5 minutes

**Solution:** Trigger a rebuild:
```bash
gh api -X POST repos/jonathanmorav/cakewalk-series-a-deck/pages/builds
```

---

## GitHub Pages Configuration

- **Source:** `/docs` folder on `main` branch
- **Build type:** Legacy (Jekyll-based, bypassed with `.nojekyll`)
- **URL:** https://jonathanmorav.github.io/cakewalk-series-a-deck/

### Checking Configuration

```bash
gh api repos/jonathanmorav/cakewalk-series-a-deck/pages --jq '{source, build_type, status, html_url}'
```

---

## File Reference

| File | Purpose |
|------|---------|
| `/Series A/docs/.nojekyll` | Bypasses Jekyll processing |
| `/Series A/docs/index.html` | Entry point, references JS/CSS with hashes |
| `/Series A/docs/assets/index-[hash].js` | Compiled React app |
| `/Series A/docs/assets/index-[hash].css` | Compiled styles |
| `/Series A/investor-1o-10946/vite.config.ts` | Build config (outputs to local `docs/`) |

---

## Future Improvement

Consider setting up a GitHub Actions workflow to automate the build-and-deploy process, eliminating the need to manually sync the docs folders.
