import SectionGlow, { type GlowVariant } from "./SectionGlow";

// The "big block with a floating card on top" composition — built from a
// rich layered CSS gradient (no image assets, per explicit direction).
export default function HeroVisual({
  children,
  variant = "gold",
}: {
  children: React.ReactNode;
  variant?: GlowVariant;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[2.5rem] border border-line p-8 md:p-14"
      style={{
        background: "linear-gradient(160deg, var(--raw-surface), var(--raw-canvas))",
      }}
    >
      <SectionGlow variant={variant} />
      {children}
    </div>
  );
}
