"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

export default function Investors() {
  const { t } = useSite();
  return (
    <section id="invest" className="relative overflow-hidden border-t border-line py-28 text-center lg:py-36">
      <SectionGlow variant="warm" />
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-wider text-accent">
            {t("invest.label")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-10 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            {t("invest.h2")}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-ink-muted">
            {t("invest.p1")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            {t("invest.p2")}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <Link
            href="/capital"
            className="mt-10 inline-block text-sm font-semibold text-accent no-underline hover:text-accent-hover"
          >
            {t("invest.readmore")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
