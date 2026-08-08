"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useSite } from "@/lib/providers";
import ChatPanel from "./ChatPanel";
import AtmosphereBg from "./AtmosphereBg";
import HeroVisual from "./HeroVisual";
import StepsPills from "./StepsPills";

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
      <AtmosphereBg variant="gold" />
      <motion.div
        className="mx-auto max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            {t("hero.badge")}
          </span>
        </motion.div>
        <motion.h1
          variants={item}
          className="mb-5 text-[clamp(2rem,4.5vw+1rem,3.75rem)] font-bold leading-[1.1] tracking-tight"
        >
          {t("hero.h1.a")} <span className="text-ink-muted">{t("hero.h1.b")}</span>
        </motion.h1>
        <motion.p variants={item} className="mx-auto mb-8 max-w-xl text-lg text-ink-muted">
          {t("hero.sub")}
        </motion.p>
        <motion.div variants={item} className="mb-10 flex justify-center">
          <StepsPills />
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-3xl"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <HeroVisual>
          <ChatPanel />
        </HeroVisual>
        <Link
          href="/#proof"
          className="mt-6 inline-block text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent"
        >
          {t("hero.link")}
        </Link>
      </motion.div>
    </section>
  );
}
