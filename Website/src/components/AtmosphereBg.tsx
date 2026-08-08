// Real image assets (public/images/atmosphere-*.svg) — original, generated
// with layered SVG noise/blur filters in the brand palette. Not stock
// photography, not a copy of any reference image. Used as actual <img>
// backgrounds (not inline CSS gradients) so the site is genuinely
// image-driven, with a theme-aware scrim on top so foreground text/cards
// stay legible in both light and dark mode.
const VARIANTS = {
  gold: "/images/atmosphere-gold.svg",
  green: "/images/atmosphere-green.svg",
  mixed: "/images/atmosphere-mixed.svg",
} as const;

export default function AtmosphereBg({
  variant = "gold",
  className = "",
}: {
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={VARIANTS[variant]}
        alt=""
        className="h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-canvas/55" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--raw-canvas) 96%)",
        }}
      />
    </div>
  );
}
