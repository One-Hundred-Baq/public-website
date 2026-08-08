"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";

export default function Investors() {
  const { t } = useSite();
  return (
    <section id="invest" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            {t("invest.label")}
          </p>
          <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("invest.h2")}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
            {t("invest.p1")}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
            {t("invest.p2")}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/capital"
            className="mt-6 inline-block text-sm font-semibold text-accent no-underline hover:text-accent-hover"
          >
            {t("invest.readmore")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
