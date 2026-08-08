# One Hundred — Design System

Implementable specification. Matching CSS custom properties live in `tokens/design-tokens.css` — import that file directly into the public website and into every client landing page instantiated from `OneHundred/Products/FirstCommercialPackage/`.

## Typography

- **UI / body / headings**: `Rubik` (fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`) — used for everything except the logo. Free, variable-weight, well-hinted at small sizes in both Spanish and English (no licensing cost, no custom-font commission — Principio 7). Superseded the earlier Inter/JetBrains Mono pairing per founder direction; the dedicated "evidence" mono accent was dropped — stat/data emphasis is now carried by weight and accent color instead of a separate typeface.
- **Logo wordmark only**: `Audiowide` (single weight, 400) — used exclusively for the "one hundred" text wordmark in the header. Never used for body copy, headings, or UI text.

Type scale (rem, 16px base):

| Token | Size | Use |
|---|---|---|
| `--text-xs` | 0.75rem | Captions, labels |
| `--text-sm` | 0.875rem | Secondary text |
| `--text-base` | 1rem | Body |
| `--text-lg` | 1.25rem | Lead paragraph |
| `--text-xl` | 1.5rem | Card/section headings |
| `--text-2xl` | 2rem | Page section titles |
| `--text-3xl` | 3rem | Hero headline (desktop) |
| `--text-4xl` | 4rem | Hero headline (large desktop) |

## Color System

Dark-first. Both themes fully specified — see tokens file for exact values as CSS variables.

**Dark (default)**
- Background: `#0A0A0B`
- Surface: `#151517`
- Border: `#2A2A2E`
- Text primary: `#F5F5F7`
- Text secondary: `#9A9AA2`
- Accent: `#F5A623` (gold — deliberately not blue/purple, to avoid reading as "one more Linear/Stripe clone")
- Accent hover: `#FFBB47`
- Success: `#3DD68C` (non-text UI only — status dots, badge fills; passes the 3:1 non-text threshold, not the 4.5:1 text one)
- Success (as text): `#3DD68C` — same value works fine as text in dark mode
- Warning: `#F5A623`
- Danger: `#F0554A`

**Light**
- Background: `#FFFFFF`
- Surface: `#F7F7F8`
- Border: `#E3E3E6`
- Text primary: `#111113`
- Text secondary: `#5C5C66`
- Accent: `#96640D` (darkened for AA contrast on white — 5.09:1)
- Accent hover: `#7A5209`
- Success: `#1E9E63` (non-text UI only)
- Success (as text): `#146B45` — `#1E9E63` fails AA as text on light backgrounds (3.20:1); darkened specifically for the text use case, same bug pattern as the accent fix above
- Warning: `#96640D`
- Danger: `#C93A30`

All text/background pairs above meet WCAG AA (4.5:1) at body size.

## Spacing System

4px base unit: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` → tokens `--space-1` through `--space-10`.

## Grid

12-column grid, max content width `1200px` (`1440px` on hero/full-bleed sections), gutter `24px`. Breakpoints: `640px` (mobile), `1024px` (tablet), `1280px` (desktop).

## Icons

[Lucide](https://lucide.dev) icon set, outline style, 1.5px stroke, 24px bounding box. Using an existing, maintained open-source set rather than commissioning custom icons is a direct application of Principio 7 — icons are not a differentiator worth spending on.

## Components

- **Buttons**: radius `8px`, padding `12px 20px`, primary = accent background / bg-color text, secondary = 1px border / text-primary, states: default / hover (accent-hover or border-accent) / active (2% darken) / disabled (40% opacity, no pointer).
- **Cards**: surface background, 1px border, radius `12px`, padding `24px`.
- **Forms**: inputs use surface background, 1px border (accent on focus, 2px), radius `8px`, padding `10px 14px`; error state = danger border + danger helper text below field.
- **Dark/Light theme switch**: implemented purely via the CSS variable set in `tokens/design-tokens.css` — no component-level branching, components only ever reference tokens.
