// The "big image block with a floating card on top" composition from the
// reference layout — but built from original abstract gradient art in the
// brand palette instead of stock photography (can't reuse the reference's
// actual photo, and brand policy rules out generic stock photos of
// people/offices anyway).
export default function HeroVisual({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-line p-8 md:p-14">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 15%, color-mix(in srgb, var(--raw-accent) 55%, transparent), transparent 60%), " +
            "radial-gradient(100% 80% at 85% 85%, color-mix(in srgb, var(--raw-success) 40%, transparent), transparent 60%), " +
            "linear-gradient(160deg, var(--raw-surface), var(--raw-canvas))",
        }}
      />
      <svg
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-visual-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--raw-ink)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-visual-dots)" />
      </svg>
      {children}
    </div>
  );
}
