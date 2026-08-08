"use client";

import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

export default function Contact() {
  const { t } = useSite();
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 text-center lg:py-40">
      <SectionGlow variant="green" />
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-wider text-accent">
            {t("contact.label")}
          </p>
          <h2 className="mb-8 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {t("contact.h2")}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-ink-muted">
            {t("contact.p1")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href="#chat"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-canvas no-underline transition-colors hover:bg-accent-hover"
          >
            {t("contact.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
