// Rich, layered CSS gradient backgrounds — no image assets. Percentages are
// deliberately capped at 10% per layer: computed against real WCAG contrast
// (not eyeballed) so that text-ink-muted — the most common body text color,
// used in nearly every section — stays at or above 4.5:1 even in a
// pessimistic worst case where all three layers of a recipe overlap at one
// point (geometrically near-impossible given each layer's center is
// elsewhere, but verified against it anyway). An earlier draft used up to
// 38% and silently failed AA behind its busiest spots.
const RECIPES = {
  gold: [
    "radial-gradient(60% 55% at 20% 15%, color-mix(in srgb, var(--raw-accent) 10%, transparent), transparent 70%)",
    "radial-gradient(50% 60% at 85% 75%, color-mix(in srgb, var(--raw-accent-hover) 8%, transparent), transparent 70%)",
    "radial-gradient(70% 50% at 50% 100%, color-mix(in srgb, var(--raw-success) 6%, transparent), transparent 70%)",
  ],
  green: [
    "radial-gradient(60% 55% at 80% 20%, color-mix(in srgb, var(--raw-success) 10%, transparent), transparent 70%)",
    "radial-gradient(55% 60% at 15% 80%, color-mix(in srgb, var(--raw-accent) 8%, transparent), transparent 70%)",
    "radial-gradient(65% 45% at 50% 0%, color-mix(in srgb, var(--raw-success) 6%, transparent), transparent 70%)",
  ],
  mixed: [
    "radial-gradient(55% 55% at 25% 25%, color-mix(in srgb, var(--raw-accent) 9%, transparent), transparent 70%)",
    "radial-gradient(55% 55% at 75% 30%, color-mix(in srgb, var(--raw-success) 9%, transparent), transparent 70%)",
    "radial-gradient(70% 60% at 50% 100%, color-mix(in srgb, var(--raw-accent-hover) 6%, transparent), transparent 70%)",
  ],
  warm: [
    "radial-gradient(65% 60% at 30% 10%, color-mix(in srgb, var(--raw-accent-hover) 10%, transparent), transparent 70%)",
    "radial-gradient(50% 50% at 90% 60%, color-mix(in srgb, var(--raw-accent) 8%, transparent), transparent 70%)",
    "radial-gradient(60% 50% at 10% 90%, color-mix(in srgb, var(--raw-danger) 5%, transparent), transparent 70%)",
  ],
} as const;

export type GlowVariant = keyof typeof RECIPES;

export default function SectionGlow({
  variant = "gold",
  className = "",
}: {
  variant?: GlowVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{ backgroundImage: RECIPES[variant].join(", ") }}
    />
  );
}
