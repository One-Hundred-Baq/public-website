// Original, brand-palette abstract background — not stock photography, not a
// copy of any reference image. Pure CSS radial gradients + an SVG dot grid,
// so it costs nothing to render and never needs sourcing/licensing.
export default function GradientGlow({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "section";
  className?: string;
}) {
  const size = variant === "hero" ? "h-[560px]" : "h-[360px]";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 -z-10 ${size} overflow-hidden ${className}`}
    >
      <div
        className="absolute left-1/2 top-[-180px] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--raw-accent), transparent 70%)",
        }}
      />
      <div
        className="absolute left-[15%] top-[80px] h-[280px] w-[280px] rounded-full opacity-20 blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--raw-success), transparent 70%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`dots-${variant}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--raw-ink)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${variant})`} />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, var(--raw-canvas) 95%)",
        }}
      />
    </div>
  );
}
