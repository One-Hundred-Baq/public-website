"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import Reveal from "./Reveal";
import SectionGlow from "./SectionGlow";

const FAQ_PAIRS = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
] as const;

export default function Faq() {
  const { t } = useSite();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line py-20">
      <SectionGlow variant="gold" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            {t("faq.label")}
          </p>
          <h2 className="mb-8 max-w-2xl text-2xl font-bold">{t("faq.h2")}</h2>
        </Reveal>

        <div className="max-w-2xl">
          {FAQ_PAIRS.map((pair, i) => (
            <FaqItem
              key={pair.q}
              question={t(pair.q)}
              answer={t(pair.a)}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left font-semibold"
      >
        <span>{question}</span>
        <motion.span
          aria-hidden
          className="text-accent"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pt-3 text-sm text-ink-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
