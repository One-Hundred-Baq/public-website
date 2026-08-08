"use client";

import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";
import HeroVisual from "./HeroVisual";
import ChatPanel from "./ChatPanel";

const MANIFESTO_LINES = [
  "aboutpage.manifesto1",
  "aboutpage.manifesto2",
  "aboutpage.manifesto3",
  "aboutpage.manifesto4",
  "aboutpage.manifesto5",
  "aboutpage.manifesto6",
] as const;

const NOT_LINES = ["aboutpage.not1", "aboutpage.not2", "aboutpage.not3", "aboutpage.not4"] as const;

export default function AboutContent() {
  const { t } = useSite();

  return (
    <main id="main" className="flex-1">
      <section className="relative px-6 pb-16 pt-20 text-center md:pt-28">
        <SectionGlow variant="gold" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-accent">
            {t("aboutpage.eyebrow")}
          </p>
          <h1 className="text-[clamp(2rem,4.5vw+1rem,3.5rem)] font-bold leading-[1.1] tracking-tight">
            {t("aboutpage.h1")}
          </h1>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="green" />
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("aboutpage.mission.label")}
            </p>
            <p className="text-lg leading-relaxed">{t("aboutpage.mission.p")}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("aboutpage.vision.label")}
            </p>
            <p className="text-lg leading-relaxed">{t("aboutpage.vision.p")}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="mixed" />
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="mb-8 text-center text-xs uppercase tracking-wider text-accent">
              {t("aboutpage.manifesto.label")}
            </p>
          </Reveal>
          <div className="space-y-6">
            {MANIFESTO_LINES.map((key, i) => (
              <Reveal key={key} delay={i * 0.05}>
                <p className="text-center text-xl font-medium leading-snug text-ink md:text-2xl">
                  {t(key)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="warm" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("aboutpage.not.label")}
            </p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t("aboutpage.not.h2")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {NOT_LINES.map((key, i) => (
              <Reveal key={key} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5">
                  <span className="mt-0.5 text-danger" aria-hidden>
                    ✕
                  </span>
                  <p className="text-sm text-ink-muted">{t(key)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="gold" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("aboutpage.cta.label")}
            </p>
            <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t("aboutpage.cta.h2")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroVisual variant="gold">
              <ChatPanel />
            </HeroVisual>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
