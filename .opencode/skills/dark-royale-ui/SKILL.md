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

| Asset | File | Lines |
|-------|------|-------|
| `@theme` (colors, fonts, breakpoints, font sizes) | `app/assets/css/main.css` | 5–118 |
| Base styles (body bg, noise texture, scrollbar hide) | `app/assets/css/main.css` | 120–148 |
| Custom utilities (gradients, typing cursor) | `app/assets/css/main.css` | 150–198 |
| Page transition classes | `app/assets/css/main.css` | 200–226 |

---

## 1. Color system — 50/30/20

| % | Role | Token range | Usage |
|---|------|-------------|-------|
| **50%** | Foundation | `niel-secondary-*` (`#06090e`–`#04060a`) | Backgrounds, cards, surfaces. The UI is dark, not gold. |
| **30%** | Silver accent | `niel-neutral-300` (`#d1d5db`), `silver` alias | Borders (`border-white/5`), body text (`text-app-text-muted`), icons, hover glows |
| **20%** | Royal details | `niel-primary-*` (gold `#c5a880`), `niel-red-400` (`#f87171`) | Hero headings, primary CTAs, private badges, emphasis only |

**Golden rule**: Silver does the everyday work. Gold/red mark what matters.

```html
<!-- ✅ Balanced -->
<div class="bg-[#0c111a] border border-white/5 p-8 rounded-sm">
  <h1 class="font-serif text-niel-primary-400 text-6xl">Royal Title</h1>
  <p class="text-app-text-muted">Standard body text in silver tones.</p>
</div>

<!-- ❌ Overdone -->
<div class="border border-[#c5a880] bg-[#c5a880]/10 text-[#c5a880] ...">
```

### Semantic aliases (main.css:109–117)

| Alias | Value | Use |
|-------|-------|-----|
| `silver` | `#d1d5db` | Border, text shorthand |
| `gold` | `#c5a880` | Heading, CTA shorthand |
| `app-bg` | `#06090e` | Page background |
| `app-text-muted` | `#8b949e` | Body text, secondary |
| `app-surface` | `#0c111a` | Card/surface bg |

---

## 2. Type scale

### Canon

| Level | Size | Class | Leading | Tracking | Font | Color |
|-------|------|-------|---------|----------|------|-------|
| **H1** — hero, main title | 60px | `text-6xl` ✅ | `leading-tight` | `tracking-[0.15em]` | `font-serif` | `niel-gradient-h` or `text-niel-primary-200` |
| **H2** — section headers | 40px | `text-[40px]` ⚠️ | `leading-tight` | `tracking-[0.15em]` | `font-serif` | `text-niel-primary-200` |
| **H3** — card titles | 28px | `text-[28px]` ⚠️ | `leading-tight` | `tracking-[0.15em]` | `font-serif` | `text-niel-primary-200` |
| **H4** — small headers | 20px | `text-xl` ✅ | `leading-tight` | `tracking-[0.10em]` | `font-serif` | `text-niel-primary-200` |
| **Body** — paragraphs | 16px | `text-base` ✅ | `leading-relaxed` | `tracking-[0.02em]` | `font-sans font-light` | `text-app-text-muted` |
| **Small** — metadata | 14px | `text-sm` ✅ | `leading-snug` | `tracking-[0.05em]` | `font-sans font-light` | `text-app-text-muted` |
| **Tiny** — badges | 12px | `text-xs` ✅ | `leading-snug` | `tracking-[0.05em]` | `font-sans font-light` | per context |

✅ = exact match in `@theme`. ⚠️ = no theme token — use `text-[40px]` / `text-[28px]`.

### Heading formula

```
font-serif font-light uppercase tracking-[0.15em] text-niel-primary-200 leading-tight
```

### Body formula

```
text-app-text-muted font-light [level] tracking-[0.02em] leading-relaxed
```

### Existing theme font sizes (main.css:16–41)

These are the actual tokens available. Only `text-6xl` (60px) and `text-xl` (20px) match the canon exactly. For 40px and 28px, use arbitrary values until added to `@theme`.

| Token | Size | Line-height |
|-------|------|-------------|
| `text-xs` | 12px (0.75rem) | 1rem |
| `text-sm` | 14px (0.875rem) | 1.25rem |
| `text-base` | 16px (1rem) | 1.5rem |
| `text-lg` | 18px (1.125rem) | 1.75rem |
| `text-xl` | 20px (1.25rem) | 1.75rem |
| `text-2xl` | 24px (1.5rem) | 2rem |
| `text-3xl` | 30px (1.875rem) | 2.25rem |
| `text-4xl` | 36px (2.25rem) | 2.5rem |
| `text-5xl` | 48px (3rem) | 1 |
| `text-6xl` | 60px (3.75rem) | 1 |
| `text-7xl` | 72px (4.5rem) | 1 |
| `text-8xl` | 96px (6rem) | 1 |
| `text-9xl` | 128px (8rem) | 1 |

---

## 3. Spacing scale

No custom spacing tokens — use Tailwind defaults.

| Context | Range | Sweet spot |
|---------|-------|------------|
| Card inner padding | `p-6` to `p-10` | `p-8 sm:p-10` |
| Section padding | `py-6` to `py-12` | `px-[10%]` on layout wrappers |
| Flex/grid gaps | `gap-3` to `gap-8` | `gap-6` between sections |
| Nav button padding | `py-3` | — |

---

## 4. Viewport — 16:9 target resolutions

### Target canvases

| Resolution | Aspect | Breakpoint coverage |
|------------|--------|---------------------|
| **1280 × 720** (720p) | 16:9 | `desktop` = 1280px — exact match |
| **1920 × 1080** (1080p) | 16:9 | No theme token — responsive fallback via `desktop:` or `2xl:` |

Existing breakpoints in `@theme` (main.css:7–9):

| Token | Value |
|-------|-------|
| `mobile` | 425px |
| `tablet` | 744px |
| `desktop` | 1280px |

Design and test at 1280×720 first, then 1920×1080. Use `desktop:` prefix for 720p layout; for 1080p the existing desktop layout scales naturally via `max-w-*` and `%`-based widths.

### Viewport-first rule

Every page fits in one 16:9 frame unless explicitly exempted (long-form detail pages).

```html
<!-- ✅ Correct: one game screen -->
<section class="w-dvw h-dvh flex items-center justify-center">
  <div class="grid grid-cols-2 gap-6 max-w-5xl">
    ...
  </div>
</section>

<!-- ❌ Wrong: tall cascade -->
<section class="min-h-screen flex flex-col gap-24 px-4 py-20">
  ...
</section>
```

| Element | Classes | Found in |
|---------|---------|----------|
| Page wrapper | `w-dvw h-dvh overflow-hidden` | `experience/index.vue` |
| Page wrapper (alt) | `w-screen h-dvh scrollbar-none overscroll-y-none relative overflow-hidden` | `index.vue` |
| Centering | `flex items-center justify-center` or `grid place-items-center` | multiple |

---

## 5. Custom utilities

All defined in `main.css:150–198`. Global CSS classes, not `@apply` directives.

### `.niel-gradient-h` — Silver vertical gradient text

```css
background: linear-gradient(to top, niel-neutral-500, niel-neutral-300, niel-neutral-400);
@apply bg-clip-text text-transparent transition-all duration-300;
```

**Use**: home hero name (`index.vue:106`), any silver metallic heading.

### `.niel-gradient-w` — Silver horizontal gradient text

```css
background: linear-gradient(to right, niel-neutral-500, niel-neutral-400, niel-neutral-500);
@apply bg-clip-text text-transparent transition-all duration-300;
```

**Use**: page titles on contact (`contact/index.vue:23`) and skills (`skills/index.vue:52`).

### `.niel-gradient-gold-h` — Gold vertical gradient text

```css
background: linear-gradient(to top, niel-primary-400, niel-primary-300, niel-primary-500);
@apply bg-clip-text text-transparent transition-all duration-300;
```

**Use**: home job subtitle (`index.vue:114`).

### `.niel-gradient-gold-w` — Gold horizontal gradient text

```css
background: linear-gradient(to right, niel-primary-500, niel-primary-300, niel-primary-500);
@apply bg-clip-text text-transparent transition-all duration-300;
```

**Use**: home job cursor (`index.vue:117`).

### `.typing-cursor` — Animated cursor

Inline-block `<span>|</span>` with silver gradient. Controlled by GSAP composable (`blinkCursor`/`killCursor`). In `main.css:184–198`.

---

## 6. Transitions & animations

### Standard transition

```
transition-all duration-300 ease-out
```

Nav buttons use `transition-colors duration-200`.

### Page transitions (main.css:200–226)

| Class | Effect |
|-------|--------|
| `.page-enter-active` | `all 0.5s ease` |
| `.page-leave-active` | `all 0.4s ease` |
| `.page-enter-from` | `opacity: 0; transform: translateX(30px)` |
| `.page-leave-to` | `opacity: 0; transform: translateX(-30px)` |

### Card entrance (`contact/index.vue`, `skills/index.vue`)

```css
@keyframes cardIn {
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Staggered: `.contact-card:nth-child(n) { animation-delay: 0.15s + n*0.1s; }`

### Home glow pulse (`index.vue:139–157`)

```css
@keyframes glow-pulse {
  0%, 100% { text-shadow: 0 0 4px rgba(156,163,175,0.3), 0 0 10px rgba(156,163,175,0.15); }
  50%      { text-shadow: 0 0 4px rgba(156,163,175,0.5), 0 0 10px rgba(156,163,175,0.25); }
}
```

---

## 7. Geometry

### Border radius — `rounded-sm` (= 2px in Tailwind v4)

Cards, sections, inputs, buttons. Never `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`, `rounded-4xl`.

### Borders — thin, no shadows

Default card: `border border-white/5 bg-[#0c111a]`. No `box-shadow` in default — only on hover glow.

---

## 8. Metallic hover system

### Silver hover (default — use most)

```
transition-all duration-300 hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]
```

Found on: experience about card (`experience/index.vue:9`).

### Gold hover (hero/primary — use sparingly)

```
transition-all duration-300 hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]
```

Found on: project cards, skill cards, contact cards, experience primary, CTA buttons.

### Hover delivery: Tailwind classes vs. scoped CSS

| Location | Approach |
|----------|----------|
| `cardPreview.vue` | Inline Tailwind classes |
| `contact/index.vue` | Scoped `.contact-card:hover` |
| `skills/index.vue` | Scoped `.skill-card:hover` |
| `experience/index.vue` | Inline Tailwind classes |

Prefer Tailwind classes unless you need nested child selectors on hover.

---

## 9. Component states

Every interactive element (buttons, links, `cursor-pointer` cards, nav items).

### Default

```
border border-white/5 bg-[#0c111a] text-app-text-muted
```

### Hover

| Element | Effect |
|---------|--------|
| Standard card | border → `niel-neutral-300`, glow → `rgba(209,213,219,0.15)` |
| Hero/primary card | border → `#c5a880`, glow → `rgba(197,168,128,0.15)` |
| Nav button | text → `niel-primary-400`, underline `scale-x-[0.15]` → `scale-x-130` |
| Icon link | text → `#c5a880`, child icon `scale-110` |

### Active

Not defined in current codebase. Apply same as hover. Optionally add `active:scale-[0.98]` or `active:brightness-90`.

### Focus-visible

Defined only in `contact/index.vue:161–164`:

```css
.contact-card:focus-visible {
  outline: 2px solid var(--niel-primary-100, #f5f5f5);
  outline-offset: 3px;
}
```

Copy to every new interactive component.

### Disabled

Not defined. Apply: `opacity-40 cursor-not-allowed pointer-events-none`, strip hover effects.

---

## 10. Component patterns

### 10A. Gold hover card

```html
<div class="group relative w-full overflow-hidden rounded-sm border border-white/5 bg-[#0c111a]
            transition-all duration-300 ease-out
            hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]">
  <div class="relative flex flex-col h-full p-8 sm:p-10">
    <h3 class="font-serif font-light uppercase tracking-[0.15em] leading-tight text-niel-primary-200 text-[28px]">
      Title
    </h3>
    <p class="text-app-text-muted font-light text-base tracking-[0.02em] leading-relaxed">
      Description
    </p>
  </div>
</div>
```

### 10B. Silver hover card

```html
<section class="p-6 flex flex-col gap-6 bg-[#0c111a] rounded-sm border border-white/5
                transition-all duration-300
                hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]">
  <p class="text-app-text-muted font-light text-base tracking-[0.02em] leading-relaxed">Content</p>
</section>
```

### 10C. Navigation buttons — underline hover (no border, no glow)

These override the standard hover system. Text turns gold; a gradient underline scales from 15 % to 130 % width.

#### optionButton.vue

```html
<button @click="handleClick($event); navigateTo(to)" @mouseenter="playHover()"
  class="nav-button group flex flex-col items-start justify-center text-niel-neutral-400 hover:text-niel-primary-400
         text-sm sm:text-base md:text-xl desktop:text-2xl text-center font-light uppercase
         tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] desktop:tracking-[0.4em]
         w-full transition-colors duration-200 cursor-pointer select-none py-3 md:py-0">

  <span>{{ label }}</span>
  <div class="w-full h-0.5 mt-1
              bg-linear-to-r from-transparent via-niel-primary-400 to-transparent
              scale-x-[0.15] opacity-0
              group-hover:scale-x-130 group-hover:opacity-100
              transition-all duration-500 ease-in-out origin-center">
  </div>
</button>
```

#### returnButton.vue

```html
<div class="flex justify-center w-full py-8 mt-auto z-20">
  <div @mouseenter="playHover" @click="onClick"
    class="group flex flex-col items-center justify-center text-niel-neutral-400 hover:text-niel-primary-400
           text-sm sm:text-base md:text-xl text-center font-light uppercase
           tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.5em] w-fit px-4
           transition-colors duration-200 cursor-pointer select-none">
    <p>{{ t('returnButton') }}</p>
    <div class="w-full h-0.5 mt-1
                bg-linear-to-r from-transparent via-niel-primary-500 to-transparent
                scale-x-[0.15] opacity-0
                group-hover:scale-x-130 group-hover:opacity-100
                transition-all duration-500 ease-in-out origin-center">
    </div>
  </div>
</div>
```

| Aspect | optionButton | returnButton |
|--------|--------------|--------------|
| Element | `<button>` | `<div>` wrapper |
| Underline via | `niel-primary-400` (gold) | `niel-primary-500` (dimmer gold) |
| Layout | Part of nav `flex-row` / `flex-col` | Centered, `mt-auto` pushes to bottom |
| Sound | `playHover` mouseenter, `playClick` on emit | `playHover` mouseenter, `playClick` in `onClick` |

### 10D. Private repo badge

```html
<span class="inline-flex items-center px-3 py-1 rounded-sm text-xs font-light tracking-wider leading-snug border
            bg-rose-500/5 text-rose-300 border-rose-500/20">
  <span class="w-1.5 h-1.5 rounded-sm mr-2 bg-rose-400"></span>
  Private
</span>
```

---

## 11. Quick reference

```text
bg/page         → bg-[#06090e] or bg-niel-secondary-900
card bg         → bg-[#0c111a] or bg-niel-secondary-600
card border     → border border-white/5
silver text     → text-app-text-muted or text-niel-neutral-300
gold text       → text-niel-primary-200 or text-[#c5a880]
heading base    → font-serif font-light uppercase tracking-[0.15em] leading-tight
body base       → font-light text-app-text-muted tracking-[0.02em] leading-relaxed
radius          → rounded-sm
transition      → transition-all duration-300 ease-out
silver hover    → hover:border-niel-neutral-300 hover:shadow-[0_0_15px_rgba(209,213,219,0.15)]
gold hover      → hover:border-[#c5a880] hover:shadow-[0_0_15px_rgba(197,168,128,0.15)]
nav underline   → bg-linear-to-r from-transparent via-niel-primary-400 to-transparent
```

---

## File reference

| File | What it demonstrates |
|------|----------------------|
| `app/assets/css/main.css` | All tokens, utilities, base styles, page transitions |
| `app/components/projects/cardPreview.vue` | Gold hover card, repo badge, icon hover |
| `app/components/projects/postContainer.vue` | Bordered container, gold dot indicator |
| `app/components/optionButton.vue` | Nav button — underline hover, no border/glow |
| `app/components/returnButton.vue` | Return button — underline hover, centered |
| `app/pages/index.vue` | Hero, gradient text, glow pulse animation, 16:9 viewport |
| `app/pages/contact/index.vue` | Gold hover via scoped CSS, focus-visible |
| `app/pages/skills/index.vue` | Gold hover via scoped CSS, cardIn animation |
| `app/pages/experience/index.vue` | Silver hover + gold hover side by side |
