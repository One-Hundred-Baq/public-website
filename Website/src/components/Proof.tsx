"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";

export default function Proof() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { num: t("proof.stat1.num"), label: t("proof.stat1.label") },
    { num: t("proof.stat2.num"), label: t("proof.stat2.label") },
    { num: t("proof.stat3.num"), label: t("proof.stat3.label") },
  ];

  return (
    <section id="proof" className="border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            {t("proof.label")}
          </p>
          <h2 className="mb-10 max-w-2xl text-2xl font-bold">{t("proof.h2")}</h2>
        </Reveal>

        <motion.div
          className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
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
              className="rounded-xl border border-line bg-surface p-6"
            >
              <span className="mb-2 block text-2xl text-accent">{s.num}</span>
              <span className="text-sm text-ink-muted">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink-muted">
            {t("proof.note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
