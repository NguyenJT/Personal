# Personal Website

Portfolio site for Jonathan Nguyen — React + TypeScript + Tailwind CSS v4, built with Vite.

## Develop

```sh
bun install
bun run dev
```

## Build & preview

```sh
bun run build
bun run preview
```

## Editing content

All text on the site (bio, experience, projects, skills, education, contact info)
lives in `src/data.ts`. Edit that file and the site updates — no need to touch
the components.

Other assets:

- `src/assets/profile.jpg` — hero portrait
- `public/Jonathan_Nguyen_CV.pdf` — the downloadable CV (replace this file when
  the CV is updated)

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. One-time setup: in the repo settings on
GitHub, set **Settings → Pages → Source** to **GitHub Actions**.
