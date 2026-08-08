"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

export default function Proof() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { num: t("proof.stat1.num"), label: t("proof.stat1.label") },
    { num: t("proof.stat2.num"), label: t("proof.stat2.label") },
    { num: t("proof.stat3.num"), label: t("proof.stat3.label") },
  ];

  return (
    <section id="proof" className="relative overflow-hidden border-t border-line bg-surface py-28 lg:py-36">
      <SectionGlow variant="green" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-wider text-accent">
            {t("proof.label")}
          </p>
          <h2 className="mb-16 max-w-2xl text-3xl leading-tight tracking-tight md:text-4xl">
            {t("proof.h2")}
          </h2>
        </Reveal>

        <motion.div
          className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
          }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, scale: 0.94, y: 12 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="border-t-2 border-accent pt-6"
            >
              <span className="mb-3 block text-5xl font-bold tracking-tight text-accent md:text-6xl">
                {s.num}
              </span>
              <span className="text-sm leading-relaxed text-ink-muted">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted">{t("proof.note")}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/case-study"
            className="mt-6 inline-block text-sm font-semibold text-accent no-underline hover:text-accent-hover"
          >
            {t("case.eyebrow")} →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
