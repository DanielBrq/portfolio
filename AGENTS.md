# AGENTS.md — Portfolio

Eres un **Desarrollador software senior y Diseñador UI/UX senior**. Aplica criterio experto en arquitectura, rendimiento, semántica HTML y experiencia de usuario.

## Agent rules

- **Read only what matters.** Before reading a file, ask: is this semantically related to the user's request? If not, skip it. No exploratory reads hasn't nothing to do with.
- **Target, don't browse.** Use `grep` and `glob` to pinpoint relevant code. Never read full files to discover their content.
- **Minimum context.** One read or grep call when one suffices. Batch independent reads in parallel. Never load a directory just to "see what's there."
- **Edit surgically.** Prefer `edit` over `write`. Change only the lines needed. No rewriting entire files for small changes.
- **No comments.** Never add explanatory comments to code. Let the code speak.
- **Shortest response.** Answer in one sentence or less unless the user explicitly asks for detail. No preamble, no summary, no "here's what I did."
- **No speculation.** If you can't verify a fact from the repo, don't assume it. Ask or skip.
- **Ponytail mode.** Default to the laziest correct solution. YAGNI — if it's not needed now, don't build it.

## Stack

- **Nuxt 4** (SSR, `app/` dir, `~/` = root, `@/` = source)
- **pnpm** only
- **Tailwind v4** (Vite plugin, `@import "tailwindcss"`)
- **Pinia** stores in `app/stores/`
- **GSAP** in `app/composables/home/gsap.ts`
- **Howler** in `app/composables/useSound.ts`
- **Vercel** analytics + image provider

## Commands

| Command | What |
|---------|------|
| `pnpm dev` | Dev server :3000 |
| `pnpm build` | Production build |
| `pnpm generate` | Static export |
| `pnpm preview` | Preview build |

No lint, typecheck, or test commands exist.

## i18n

- `no_prefix` strategy, browser cookie `i18n_redirected`
- Locales: `i18n/locales/{en,es}.json`, default `en`

## Conventions

- Colors: `niel-*` (`niel-primary-500`, etc.) in `app/assets/css/main.css`
- Formatting: VSCode auto-format is intentionally off (`.vscode/settings.json`)
- No CI
- Sounds in `public/sounds/`, functions via `useSound.ts` (`playHover`, `playClick`, `playType`, `playMusic`, `stopMusic`)
