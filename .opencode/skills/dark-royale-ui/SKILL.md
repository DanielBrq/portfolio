---
name: dark-royale-ui
description: >-
  Use when refactoring, creating, or styling any Vue component or page in this
  portfolio. Applies the Dark Royale design system (obsidian/blue-black
  foundation, silver accent, gold/red details, cinematic typography, rigid
  geometry, metallic hover). Inspired by Insomnia (FFXV).
  Gate on requests mentioning "royal", "dark", "UI", "design system",
  "estética", "estilo", or "theme".
---

# Dark Royale UI — Design System

## Source of truth

- **Fonts**: `app/assets/css/main.css` — imports Cinzel (serif, headings) + Inter (sans-serif, body)
- **Palette**: `@theme` block in `main.css` — `niel-primary-*` (gold tones), `niel-secondary-*` (obsidian deep tones), `niel-neutral-300` (silver)
- **Component examples**: `app/components/projects/cardPreview.vue`, `app/components/projects/postContainer.vue`, `app/pages/contact/index.vue`

## Tokens

| Role | Value | Tailwind class |
|------|-------|---------------|
| Base bg | `#06090e` | `bg-niel-secondary-900` / `bg-[#06090e]` |
| Card bg | `#0c111a` | `bg-niel-secondary-600` / `bg-[#0c111a]` |
| Silver accent | `#d1d5db` | `text-niel-neutral-300` / `border-niel-neutral-300` / `bg-silver` |
| Body text | `#8b949e` | `text-[#8b949e]` / `text-app-text-muted` |
| Gold detail | `#c5a880` | `text-niel-primary-400` / `border-[#c5a880]` / `bg-gold` |
| Red detail | `#f87171` | `text-niel-red-400` / `border-niel-red-400` |
| Heading font | Cinzel | `font-serif` |
| Body font | Inter (light 300) | `font-sans` (default) + `font-light` |
| Silver gradient | — | `niel-gradient-w` / `niel-gradient-h` |
| Gold gradient | — | `niel-gradient-gold-w` / `niel-gradient-gold-h` |
| Cursor | — | `typing-cursor` (silver) |

## Color balance: 50/30/20 (Royale rule)

Apply color with restraint — the UI is **modern dark** first, accent second.

| % | Role | What goes here |
|---|------|---------------|
| **50%** | Foundation | Obsidian deep blues (`#06090e`, `#0c111a`). Backgrounds, cards, surfaces. The UI is dark, not gold. |
| **30%** | Silver accent | `#d1d5db`. Borders (`border-white/5`), body text, icons, hover glows, secondary text. The dominant accent — clean, cold, metallic. |
| **20%** | Royal details | **Gold** (`#c5a880`): hero headings, primary CTAs, special hover states, royal touches only. **Red** (`#f87171`): repo visibility badges, destructive actions, emphasis. Use sparingly — these are the spice, not the meal. |

**Golden rule of dark royale**: if everything is highlighted, nothing is. Silver does the everyday work. Gold and red mark what matters.

```html
<!-- ✅ Balanced: silver borders, gold on hero heading only -->
<div class="bg-[#0c111a] border border-white/5 p-8 rounded-sm">
  <h1 class="font-serif text-niel-primary-400 text-4xl">Royal Title</h1>
  <p class="text-[#8b949e]">Standard body text in silver tones.</p>
</div>

<!-- ❌ Overdone: too much gold destroys the effect -->
<div class="border border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880] ...">
```

## Layout: 16:9 game-like viewport

This is **not** a vertical-scroll website. Every page/section must feel like a game menu or HUD screen:

- **Fixed viewport, no cascade**: Each page is `w-screen h-screen` (or `h-dvh` / `min-h-screen` with no overflow-y beyond the screen). Content fits in one 16:9 frame.
- **Horizontal arrangement first**: Use `flex-row` or `grid-cols-*` to lay out panels side by side. Avoid stacking vertically unless the content genuinely needs a list.
- **No scroll storytelling**: The home hero, about cards, skill grid — all fit in the viewport. If a section overflows, reduce font size, padding, or split into a second "screen" (route/page) instead of scrolling.
- **Section as a screen**: Treat each route as one screen. Use `h-dvh w-dvw`, `flex items-center justify-center` or `grid place-items-center` to center content in the viewport like a game menu.
- **Exception**: Detail/project pages (e.g., `projects/legacygym`) may scroll vertically for long-form reading, but the chrome/nav stays compact.

```html
<!-- ✅ Correct: fits in one 16:9 game screen -->
<section class="w-dvw h-dvh flex items-center justify-center">
  <div class="grid grid-cols-2 gap-6 max-w-5xl">
    ...
  </div>
</section>

<!-- ❌ Wrong: tall cascade requiring scroll -->
<section class="min-h-screen flex flex-col gap-24 px-4 py-20">
  ...
</section>
```

## UI rules

### 1. Rigid geometry (`border-radius: 2px`)

Use `rounded-sm` (= 2px in Tailwind v4) on cards, sections, inputs. Never use `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`, or `rounded-4xl`.

```html
<!-- ✅ correct -->
<div class="rounded-sm ...">
<!-- ❌ wrong -->
<div class="rounded-2xl ...">
<div class="rounded-lg ...">
```

### 2. Thin borders, no shadows

Separate cards and sections with `border border-white/5` (silver-tinted). Never use thick shadows or opaque backgrounds.

On hover, the border transitions to silver with a silver glow by default. Reserve the **gold** glow for primary CTAs and hero cards only.

```html
<!-- ✅ Default hover: silver glow -->
<div class="border border-white/5 bg-[#0c111a] transition-all duration-300 hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]">

<!-- ✅ Hero/primary hover: gold glow (use sparingly) -->
<div class="... hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]">
```

### 3. Cinematic typography

- **All H1, H2, H3**: `font-serif font-light uppercase tracking-[0.15em]`
- Use `text-niel-primary-200` or `text-[#c5a880]` for heading color
- **Body text**: Inter 300, color `text-[#8b949e]` or `text-niel-neutral-300`

```html
<h1 class="font-serif font-light uppercase tracking-[0.15em] text-niel-primary-200 text-4xl">Title</h1>
<p class="text-[#8b949e] font-light text-base">Body copy here.</p>
```

### 4. Metallic hover

Borders transition to silver (default) or gold (hero/royal) on hover with a subtle glow:

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

```html
<!-- ✅ Silver hover (default — use this most of the time) -->
class="... transition-all duration-300 hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]"

<!-- ✅ Gold hover (royal/hero elements only) -->
class="... transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]"
```

### 5. Negative space

Use generous padding:
- Cards: `p-6` to `p-10` (`p-8 sm:p-10` is the sweet spot)
- Sections: `py-6` to `py-12`, `px-6` to `px-10`
- `gap-6` to `gap-8` between sections

## Exceptions

- **Navigation buttons** (`optionButton.vue`, `returnButton.vue`): no border or glow on hover. Use the original bottom gradient line instead (`bg-linear-to-r from-transparent via-niel-primary-500 to-transparent`, `scale-x-[0.15]`, `group-hover:scale-x-130`). The via color should use `niel-primary-400` (gold) for hero nav, or stay silver for secondary.

- **Private repo badges**: use red (`bg-rose-500/5 text-rose-300 border-rose-500/20`). This is the red detail in action — reserved for status indicators, not layout.

## File reference

| File | Role |
|------|------|
| `app/assets/css/main.css` | Font imports, @theme colors, base styles |
| `app/components/projects/cardPreview.vue` | Reference for card with gold hover |
| `app/components/projects/postContainer.vue` | Reference for bordered container |
| `app/components/optionButton.vue` | Nav button (underline hover, no border) |
| `app/components/returnButton.vue` | Return button (underline hover, no border) |
| `app/pages/contact/index.vue` | Contact cards with gold hover |
| `app/pages/skills/index.vue` | Skill cards with gold hover |
| `app/pages/experience/index.vue` | Experience cards with gold hover |
