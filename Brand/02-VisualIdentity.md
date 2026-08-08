# One Hundred — Visual Identity

Implements the tone set in `01-BrandStrategy.md` ("evidence-first, no manufactured hype, simplicity as advantage") as concrete visual rules. Every rule here is implementable today — see `03-DesignSystem.md` and `tokens/design-tokens.css` for the buildable version.

## Visual Language

Precise, engineering-grade, restrained. The visual system should read like proof, not decoration: grid-driven layouts, generous whitespace, a single accent color used sparingly, and monospace typography reserved for anything that is a number, a fact, or a piece of evidence (pricing, stats, code, timestamps). Reference points: Linear, Stripe, Vercel — dark-first, minimal, enterprise-credible, zero stock-photo aesthetic.

## Design Principles

1. **Evidence over decoration.** If a visual element doesn't help someone understand what's proven vs. aspirational, cut it.
2. **One primary action per screen.** Every page/section has exactly one clear next step.
3. **Legible in Spanish and English at a glance.** No copy-dependent layouts that break when Spanish text runs longer than English.
4. **Dark-first, light as an equal citizen.** Primary audience (technical buyers, investors) defaults dark; light theme is fully specified, not an afterthought.
5. **Every component is reusable across client instances.** Nothing built for the public site or a client package is single-use (Principio 5).

## Logo Concept

**Decided (founder direction, supersedes the numeral-primary concept below): the primary logo is a text-only wordmark**, `one hundred` set in lowercase in **Audiowide** — a single-weight display typeface reserved exclusively for this use, never for body copy, headings, or UI text (see `03-DesignSystem.md`). This is what actually ships in the site header today.

The numeral **"100"** ring mark (geometric strokes, both zeros as perfect circles) is retained narrowly as the **favicon / small-icon mark only** — resolving the "Open Evaluation" below in practice: it survives at favicon size, so it stays there, but it doesn't appear in-page next to the wordmark anymore.

*(Original two-lockup concept, kept for reference — no longer how the logo ships:)*

- ~~Mark: standalone "100" used anywhere space is tight~~ — narrowed to favicon/small-icon only.
- ~~Wordmark: "One Hundred" in the primary typeface~~ — now Audiowide specifically, not the body typeface.

## Open Evaluation — Symbolic Mark vs. Numeral-Only (per Execution Review, not yet decided)

Flagged for evaluation, not redesign: should One Hundred have a symbol capable of standing alone, independent of the "100" typography, the way Stripe/OpenAI/Notion/Linear/GitHub do?

**The case for yes:** a numeral-only mark is legible as a logo but reads as a *wordmark treatment*, not a symbol — at very small sizes (favicon, app icon, social avatar) it competes with every other brand that has ever put a number in a circle. A distinct symbol survives cropping, scaling, and monochrome reproduction (stamped, embossed, single-color print) better than typography does, and it can outlive a name change or brand-architecture shift in a way a numeral tied to the literal word "hundred" cannot.

**The case for staying numeral-only:** the "100" mark is already doing real conceptual work (complete/full delivery, score cleared — see Naming Validation) that a fully abstract symbol would have to earn from zero. Commissioning and validating a new abstract symbol is real design cost and time against Principio 7 (simplicity as competitive advantage) — justified only if the numeral mark demonstrably fails at small sizes or in monochrome once actually rendered, which hasn't been tested yet because no vector has been produced.

**Recommendation:** don't decide this in the abstract. Render the numeral mark as a real vector first (cheap, already specified), stress-test it at 16px/24px favicon size and in single-color reproduction, and only commission an abstract symbol if it visibly fails there. Deciding now, with no rendered artifact to evaluate against, would be a redesign call made without evidence — exactly what Phase 1's evidence-first rule exists to prevent.

## Logo Construction Rules

- **Clear space**: minimum equal to the height of the digit "1" in the mark, on all sides, in every application.
- **Minimum size**: 24px digital (mark), 10mm print (mark); wordmark minimum 120px digital / 20mm print.
- **Never**: stretch or distort proportions, recolor outside the palette in `03-DesignSystem.md`, apply drop shadows/gradients/bevels, rotate, or place on a background with contrast ratio below 4.5:1 (WCAG AA).
- **Backgrounds**: approved on pure background token (`--color-bg`) or pure surface token (`--color-surface`) in either theme. Never on photography or busy imagery directly — use a solid-color safe area behind it.

## Illustration Style

No commissioned illustration. Use real product screenshots, terminal/code captures, and abstract geometric line-art built from the grid system (circles, grids, the "100" motif) instead. This is a direct application of "evidence over decoration" and Principio 7 (simplicity as competitive advantage) — commissioned illustration is cost and time spent on decoration, not proof.

## Photography Style

Avoid generic stock photography of people/offices. When imagery is needed: real product UI, real terminal/chat captures of the AI agent in conversation, or abstract renders built from the geometric mark. If a human photo is ever needed (team, founder), it must be a real, specific photo — never a stock placeholder.

## Motion Style

Fast and functional only — motion communicates a state change, never decorates. Standard transition: **150–200ms, ease-out**. No parallax, no scroll-hijacking, no looping decorative animation. Used for: hover/focus states, content reveal on scroll (single fade+8px translate, not staggered spectacle), loading states, page transitions.

## Brand Applications

- Public website (`OneHundred-Public/Website/`)
- Landing page template per client instance (`OneHundred/Products/FirstCommercialPackage/landing/`)
- Pitch deck (`OneHundred-Public/Pitch/`)
- Social avatar + banner (mark for avatar, wordmark+mark for banner)
- One-pager / capital package PDF (`OneHundred-Public/Pitch/`)
- Email signature (wordmark, text-only fallback)
