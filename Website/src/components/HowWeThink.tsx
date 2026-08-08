"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";

const CARD_KEYS = ["c1", "c2", "c3", "c4", "c5", "c6"] as const;

export default function HowWeThink() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="think" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            {t("think.label")}
          </p>
          <h2 className="mb-10 max-w-2xl text-2xl font-bold">{t("think.h2")}</h2>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
          }}
        >
          {CARD_KEYS.map((key, i) => (
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
              <h3 className="mb-2 text-base font-semibold">{t(`think.${key}.h` as const)}</h3>
              <p className="text-sm text-ink-muted">{t(`think.${key}.p` as const)}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <Link
            href="/how-we-think"
            className="mt-8 inline-block text-sm font-semibold text-accent no-underline hover:text-accent-hover"
          >
            {t("think.readmore")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
