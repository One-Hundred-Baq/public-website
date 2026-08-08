"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";
import HeroVisual from "./HeroVisual";
import ChatPanel from "./ChatPanel";

const ITEMS = ["item1", "item2", "item3", "item4", "item5"] as const;
const READY: Record<(typeof ITEMS)[number], boolean> = {
  item1: true,
  item2: false,
  item3: true,
  item4: true,
  item5: false,
};

export default function TechnologyContent() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  return (
    <main id="main" className="flex-1">
      <section className="relative px-6 pb-16 pt-20 text-center md:pt-28">
        <SectionGlow variant="mixed" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-accent">{t("tech.eyebrow")}</p>
          <h1 className="mb-5 text-[clamp(2rem,4.5vw+1rem,3.25rem)] font-bold leading-[1.1] tracking-tight">
            {t("tech.h1")}
          </h1>
          <p className="mx-auto max-w-xl text-lg text-ink-muted">{t("tech.sub")}</p>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="green" />
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
            }}
          >
            {ITEMS.map((key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="rounded-2xl border border-line bg-surface p-7"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold">{t(`tech.${key}.h` as const)}</h3>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs ${
                      READY[key] ? "text-success-text" : "text-warning"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${READY[key] ? "bg-success" : "bg-warning"}`}
                    />
                    {t(`tech.${key}.status` as const)}
                  </span>
                </div>
                <p className="text-sm text-ink-muted">{t(`tech.${key}.p` as const)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="gold" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("tech.principle.label")}
            </p>
            <h2 className="mb-12 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t("tech.principle.h2")}</h2>
            <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
              {t("tech.principle.p")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-line py-24 lg:py-32">
        <SectionGlow variant="mixed" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              {t("tech.cta.label")}
            </p>
            <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t("tech.cta.h2")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <HeroVisual variant="mixed" hasOpaqueContent>
              <ChatPanel />
            </HeroVisual>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
