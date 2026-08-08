"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import AtmosphereBg from "./AtmosphereBg";
import ChatPanel from "./ChatPanel";
import HeroVisual from "./HeroVisual";

const MODULES = ["module1", "module2", "module3", "module4"] as const;
const STEPS = ["delivery1", "delivery2", "delivery3"] as const;

export default function ServicesContent() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  return (
    <main id="main" className="flex-1">
      <section className="relative px-6 pb-16 pt-20 text-center md:pt-28">
        <AtmosphereBg variant="green" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-accent">
            {t("services.eyebrow")}
          </p>
          <h1 className="mb-5 text-[clamp(2rem,4.5vw+1rem,3.25rem)] font-bold leading-[1.1] tracking-tight">
            {t("services.h1")}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-ink-muted">{t("services.sub")}</p>
        </div>
      </section>

      {/* Flagship package — marketplace-style listing */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-line bg-surface p-8 shadow-xl shadow-black/10 md:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-success/10 px-3 py-1 text-xs font-semibold text-success-text">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {t("services.package.tag")}
              </div>
              <h2 className="mb-3 text-2xl font-bold">{t("services.package.name")}</h2>
              <p className="max-w-2xl text-sm text-ink-muted">{t("services.package.desc")}</p>
            </div>
          </Reveal>

          <motion.div
            className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
            }}
          >
            {MODULES.map((key, i) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <span className="mb-3 block text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-base font-semibold">
                  {t(`services.${key}.h` as const)}
                </h3>
                <p className="text-sm text-ink-muted">{t(`services.${key}.p` as const)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Delivery steps */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("services.delivery.label")}
            </p>
            <h2 className="mb-10 max-w-2xl text-2xl font-bold">{t("services.delivery.h2")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STEPS.map((key, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {t(`services.${key}.h` as const)}
                  </h3>
                  <p className="text-sm text-ink-muted">{t(`services.${key}.p` as const)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing honesty */}
      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("services.pricing.label")}
            </p>
            <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("services.pricing.h2")}</h2>
            <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
              {t("services.pricing.p")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA — the agent itself */}
      <section className="relative border-t border-line py-16">
        <AtmosphereBg variant="green" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("services.cta.label")}
            </p>
            <h2 className="mb-10 text-2xl font-bold">{t("services.cta.h2")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroVisual variant="green">
              <ChatPanel />
            </HeroVisual>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
