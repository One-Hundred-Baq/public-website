"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

const PRINCIPLES = ["c1", "c2", "c3", "c4", "c5", "c6"] as const;

export default function ThinkContent() {
  const { t } = useSite();

  return (
    <main id="main" className="flex-1">
      <section className="relative px-6 pb-16 pt-20 text-center md:pt-28">
        <SectionGlow variant="mixed" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-accent">
            {t("thinkpage.eyebrow")}
          </p>
          <h1 className="mb-5 text-[clamp(2rem,4.5vw+1rem,3.25rem)] leading-[1.1] tracking-tight">
            {t("thinkpage.h1")}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-ink-muted">{t("thinkpage.sub")}</p>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="green" />
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          {PRINCIPLES.map((key, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <div className="flex gap-6">
                <span className="hidden shrink-0 font-bold text-3xl text-accent/40 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="mb-3 text-xl">{t(`thinkpage.${key}.h` as const)}</h2>
                  <p className="mb-2 text-sm leading-relaxed text-ink-muted">
                    {t(`thinkpage.${key}.p1` as const)}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {t(`thinkpage.${key}.p2` as const)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32 text-center">
        <SectionGlow variant="mixed" />
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("thinkpage.cta.label")}
            </p>
            <h2 className="mb-12 text-3xl leading-tight tracking-tight md:text-4xl">{t("thinkpage.cta.h2")}</h2>
            <Link
              href="/case-study"
              className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas no-underline transition-opacity hover:opacity-90"
            >
              {t("case.eyebrow")} →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
