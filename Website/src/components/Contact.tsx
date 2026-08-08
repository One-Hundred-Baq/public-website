"use client";

import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useSite();
  return (
    <section id="contact" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            {t("contact.label")}
          </p>
          <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("contact.h2")}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
            {t("contact.p1")}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href="#chat"
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas no-underline transition-colors hover:bg-accent-hover"
          >
            {t("contact.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
