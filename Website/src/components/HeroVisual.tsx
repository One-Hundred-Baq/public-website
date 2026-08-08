// The "big image block with a floating card on top" composition from the
// reference layout — built from an original generated image asset
// (public/images/atmosphere-*.svg), not stock photography and not a copy of
// any reference image.
const VARIANTS = {
  gold: "/images/atmosphere-gold.svg",
  green: "/images/atmosphere-green.svg",
  mixed: "/images/atmosphere-mixed.svg",
} as const;

export default function HeroVisual({
  children,
  variant = "gold",
}: {
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-line p-8 md:p-14">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={VARIANTS[variant]}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-canvas/35" />
      {children}
    </div>
  );
}
