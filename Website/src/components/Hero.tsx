"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import ChatPanel from "./ChatPanel";
import GradientGlow from "./GradientGlow";

export default function Hero() {
  const { t } = useSite();
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="top" className="relative px-6 pb-16 pt-20 text-center md:pt-28">
      <GradientGlow variant="hero" />
      <motion.div
        className="mx-auto max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm uppercase tracking-wider text-accent"
        >
          {t("hero.eyebrow")}
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-5 text-[clamp(2rem,4.5vw+1rem,3.75rem)] font-bold leading-[1.1] tracking-tight"
        >
          {t("hero.h1")}
        </motion.h1>
        <motion.p variants={item} className="mx-auto mb-10 max-w-xl text-lg text-ink-muted">
          {t("hero.sub")}
        </motion.p>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <ChatPanel />
      </motion.div>
    </section>
  );
}
