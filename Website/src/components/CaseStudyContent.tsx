"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import AtmosphereBg from "./AtmosphereBg";
import HeroVisual from "./HeroVisual";
import ChatPanel from "./ChatPanel";

const BUILT = ["built1", "built2", "built3"] as const;

export default function CaseStudyContent() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  return (
    <main id="main" className="flex-1">
      <section className="relative px-6 pb-16 pt-20 text-center md:pt-28">
        <AtmosphereBg variant="green" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-accent">{t("case.eyebrow")}</p>
          <h1 className="mb-5 text-[clamp(2rem,4.5vw+1rem,3.25rem)] font-bold leading-[1.1] tracking-tight">
            {t("case.h1")}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-ink-muted">{t("case.sub")}</p>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("case.client.label")}
            </p>
            <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("case.client.h2")}</h2>
            <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
              {t("case.client.p")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("case.built.label")}
            </p>
            <h2 className="mb-10 max-w-2xl text-2xl font-bold">{t("case.built.h2")}</h2>
          </Reveal>
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
            }}
          >
            {BUILT.map((key, i) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="rounded-xl border border-line bg-surface p-6"
              >
                <span className="mb-3 block text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-base font-semibold">{t(`case.${key}.h` as const)}</h3>
                <p className="text-sm text-ink-muted">{t(`case.${key}.p` as const)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("case.timeline.label")}
            </p>
            <h2 className="mb-6 max-w-2xl text-2xl font-bold">{t("case.timeline.h2")}</h2>
            <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
              {t("case.timeline.p")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-accent">
                {t("case.honest.label")}
              </p>
              <h2 className="mb-4 text-xl font-bold">{t("case.honest.h2")}</h2>
              <p className="mb-3 text-sm text-ink-muted">{t("case.honest.p1")}</p>
              <p className="text-sm text-ink-muted">{t("case.honest.p2")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-16">
        <AtmosphereBg variant="green" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("case.cta.label")}
            </p>
            <h2 className="mb-10 text-2xl font-bold">{t("case.cta.h2")}</h2>
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
