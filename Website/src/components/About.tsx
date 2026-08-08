"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";
import HeroVisual from "./HeroVisual";

export default function About() {
  const { t } = useSite();
  return (
    <section id="about" className="relative overflow-hidden border-t border-line py-28 lg:py-36">
      <SectionGlow variant="gold" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-wider text-accent">
                {t("about.label")}
              </p>
              <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                {t("about.h2")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-ink-muted">{t("about.p1")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">{t("about.p2")}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-semibold text-accent no-underline hover:text-accent-hover"
              >
                {t("about.readmore")} →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <HeroVisual variant="warm" hasOpaqueContent={false}>
              <p className="text-xl font-medium leading-snug md:text-2xl">
                &ldquo;{t("aboutpage.manifesto1")}&rdquo;
              </p>
              <p className="mt-6 text-xs uppercase tracking-wider text-ink-muted">
                {t("aboutpage.manifesto.label")}
              </p>
            </HeroVisual>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
