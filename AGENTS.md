# AGENTS.md

## Purpose
This repository contains a statically exported Next.js 14 portfolio site for Mrigank Kishore Varma. Agents working here should preserve the portfolio's core goals:

- Keep the site professional, concise, and resume-driven.
- Maintain compatibility with GitHub Pages static hosting.
- Prefer small, targeted edits over broad redesigns unless explicitly requested.

## Stack
- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- `next-themes`
- GitHub Pages deployment via static export

## Project Layout
- `src/app/`
  - App shell, metadata, global styles, and the home page entrypoint.
- `src/components/`
  - Section components for the one-page portfolio.
- `src/data/profile.ts`
  - Main in-app profile content source used by the UI.
- `public/profile.json`
  - JSON copy of profile data used by the chatbot fetch path.
- `public/Mrigank Resume.pdf`
  - Resume source document.
- `.github/workflows/deploy.yml`
  - GitHub Pages build and deploy workflow.

## Source Of Truth
The UI currently reads resume content from `src/data/profile.ts`.

The chatbot fetches `public/profile.json` at runtime and also falls back to `src/data/profile.ts`.

When updating profile content, keep both files aligned:
- `src/data/profile.ts`
- `public/profile.json`

If you change field names in one, update the other and update chatbot access patterns in `src/components/Chatbot.tsx`.

## Content Rules
- Base portfolio copy on the current resume in `public/Mrigank Resume.pdf` unless the user asks otherwise.
- Keep tone executive, credible, and outcome-focused.
- Prefer measurable impact over vague claims.
- Do not invent certifications, employers, dates, or metrics.
- Preserve the overall one-page portfolio flow unless a structural redesign is requested.

## UI Rules
- Maintain responsiveness for mobile and desktop.
- Preserve dark/light theme support.
- Keep animations subtle and purposeful.
- Reuse existing visual patterns before introducing new ones.
- Avoid generic filler content and placeholder percentages unless they are meaningful.

## Static Export Constraints
This app is configured for GitHub Pages in `next.config.js` with:
- `output: 'export'`
- `trailingSlash: true`
- `basePath: '/web-portfolio'`
- `images.unoptimized: true`

Because of this:
- Prefer relative asset and fetch paths when possible.
- Be careful with absolute paths like `/file.pdf` because they may break under the GitHub Pages base path.
- Do not introduce features that require a server, API routes, SSR-only behavior, or middleware unless the user explicitly wants to change hosting/runtime assumptions.

## Editing Guidance
- Keep changes modular and localized.
- Prefer updating existing sections over adding duplicate sections.
- If content changes affect metadata, update `src/app/layout.tsx`.
- If navigation labels or anchors change, update `src/components/Navigation.tsx` and the target section ids together.
- If resume download behavior changes, verify the link works with the current `basePath` setup.

## Chatbot Notes
The chatbot is intentionally simple and local:
- No backend
- No external AI service
- Keyword-matching only

If expanding chatbot capabilities:
- Keep it static-export compatible.
- Prefer deterministic local logic.
- Avoid adding secrets, API keys, or server dependencies unless explicitly requested.

## Verification
Before finishing substantial changes, run these when available:

```bash
npm run build
npm run lint
```

If the environment does not have Node.js/npm available, state that clearly in the handoff.

## Deployment Notes
- Main deployment path is GitHub Pages via `.github/workflows/deploy.yml`.
- The workflow expects the static site output in `out/`.
- Avoid changes that break `npm run build` or static export behavior.

## Good Agent Behavior For This Repo
- Read the affected component and related data file before editing.
- Keep profile content synchronized across the UI and chatbot data.
- Mention any assumptions made when deriving content from the resume.
- Flag contradictions between resume data, JSON data, and visible UI copy instead of silently choosing one.
