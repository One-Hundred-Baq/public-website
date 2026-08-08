import SectionGlow, { type GlowVariant } from "./SectionGlow";

// The "big block with a floating card on top" composition.
//
// `hasOpaqueContent` (default true) controls glow intensity:
// - true: children are an opaque bg-surface box (ChatPanel) that covers the
//   center, so the glow is only ever visible in the surrounding gutter — a
//   zone with no text in it — and can run far more vivid than WCAG allows
//   for actual body copy.
// - false: children include raw text sitting directly on this background
//   (e.g. a pull-quote) — falls back to SectionGlow's WCAG-verified
//   intensity instead. Get this wrong in the true direction and text
//   contrast silently breaks; every call site is required to state which
//   case it is, there's no default that's safe for both.
const VIVID_RECIPES = {
  gold: "radial-gradient(120% 100% at 15% 0%, color-mix(in srgb, var(--raw-accent) 38%, transparent), transparent 60%), radial-gradient(100% 90% at 100% 100%, color-mix(in srgb, var(--raw-success) 30%, transparent), transparent 60%)",
  green: "radial-gradient(120% 100% at 85% 0%, color-mix(in srgb, var(--raw-success) 38%, transparent), transparent 60%), radial-gradient(100% 90% at 0% 100%, color-mix(in srgb, var(--raw-accent) 26%, transparent), transparent 60%)",
  mixed: "radial-gradient(110% 100% at 10% 10%, color-mix(in srgb, var(--raw-accent) 34%, transparent), transparent 60%), radial-gradient(100% 90% at 90% 90%, color-mix(in srgb, var(--raw-success) 34%, transparent), transparent 60%)",
  warm: "radial-gradient(120% 100% at 20% 0%, color-mix(in srgb, var(--raw-accent-hover) 40%, transparent), transparent 60%), radial-gradient(100% 90% at 100% 100%, color-mix(in srgb, var(--raw-accent) 30%, transparent), transparent 60%)",
} as const;

export default function HeroVisual({
  children,
  variant = "gold",
  hasOpaqueContent,
}: {
  children: React.ReactNode;
  variant?: GlowVariant;
  hasOpaqueContent: boolean;
}) {
  if (!hasOpaqueContent) {
    return (
      <div
        className="relative overflow-hidden rounded-[2.5rem] border border-line p-8 md:p-14"
        style={{ background: "linear-gradient(160deg, var(--raw-surface), var(--raw-canvas))" }}
      >
        <SectionGlow variant={variant} />
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden rounded-[2.5rem] border border-line p-8 md:p-14"
      style={{
        backgroundImage: `${VIVID_RECIPES[variant]}, linear-gradient(160deg, var(--raw-surface), var(--raw-canvas))`,
      }}
    >
      {children}
    </div>
  );
}
