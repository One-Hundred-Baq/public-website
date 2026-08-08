"use client";

import { useSite } from "@/lib/providers";

const STEPS = ["delivery1", "delivery2", "delivery3"] as const;

export default function StepsPills() {
  const { t } = useSite();
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-line bg-surface p-1.5">
      {STEPS.map((key, i) => (
        <span
          key={key}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
            i === 0 ? "bg-canvas text-ink shadow-sm" : "text-ink-muted"
          }`}
        >
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full text-[0.6rem] ${
              i === 0 ? "bg-accent text-canvas" : "border border-line"
            }`}
          >
            {i + 1}
          </span>
          {t(`services.${key}.h` as const)}
        </span>
      ))}
    </div>
  );
}
