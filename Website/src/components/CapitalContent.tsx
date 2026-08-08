"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import GradientGlow from "./GradientGlow";
import HeroVisual from "./HeroVisual";
import ChatPanel from "./ChatPanel";

const FUND_ITEMS = ["funds1", "funds2", "funds3", "funds4"] as const;
const MILESTONES = [
  "capital.milestone1",
  "capital.milestone2",
  "capital.milestone3",
  "capital.milestone4",
] as const;

export default function CapitalContent() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  return (
    <main id="main" className="flex-1">
      <section className="relative px-6 pb-16 pt-20 text-center md:pt-28">
        <GradientGlow variant="hero" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-accent">
            {t("capital.eyebrow")}
          </p>
          <h1 className="mb-5 text-[clamp(1.75rem,4vw+1rem,3rem)] font-bold leading-[1.15] tracking-tight">
            {t("capital.h1")}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-ink-muted">{t("capital.sub")}</p>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("capital.what.label")}
            </p>
            <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("capital.what.h2")}</h2>
            <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
              {t("capital.what.p")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("capital.funds.label")}
            </p>
            <h2 className="mb-10 max-w-2xl text-2xl font-bold">{t("capital.funds.h2")}</h2>
          </Reveal>
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
            }}
          >
            {FUND_ITEMS.map((key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="rounded-xl border border-line bg-surface p-6"
              >
                <h3 className="mb-2 text-base font-semibold">
                  {t(`capital.${key}.h` as const)}
                </h3>
                <p className="text-sm text-ink-muted">{t(`capital.${key}.p` as const)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("capital.milestones.label")}
            </p>
            <h2 className="mb-8 max-w-2xl text-2xl font-bold">{t("capital.milestones.h2")}</h2>
          </Reveal>
          <div className="max-w-2xl space-y-4">
            {MILESTONES.map((key, i) => (
              <Reveal key={key} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-xs text-ink-muted">
                    {i + 1}
                  </span>
                  <p className="text-sm text-ink-muted">{t(key)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="rounded-2xl border border-danger/30 bg-surface p-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-danger">
                {t("capital.risk.label")}
              </p>
              <h2 className="mb-4 text-xl font-bold">{t("capital.risk.h2")}</h2>
              <p className="mb-3 text-sm text-ink-muted">{t("capital.risk.p1")}</p>
              <p className="mb-5 text-sm text-ink-muted">{t("capital.risk.p2")}</p>
              <a
                href="https://github.com/One-Hundred-Baq/public-website/blob/main/Capital/06-RiskDisclosure.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent"
              >
                {t("capital.risk.cta")} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-16">
        <GradientGlow variant="section" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("capital.cta.label")}
            </p>
            <h2 className="mb-10 text-2xl font-bold">{t("capital.cta.h2")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroVisual>
              <ChatPanel />
            </HeroVisual>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
