"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useSite();
  return (
    <section id="about" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            {t("about.label")}
          </p>
          <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("about.h2")}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
            {t("about.p1")}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
            {t("about.p2")}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-accent no-underline hover:text-accent-hover"
          >
            {t("about.readmore")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
