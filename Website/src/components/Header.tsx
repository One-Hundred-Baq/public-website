"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";

const NAV_ITEMS = [
  { href: "/#about", key: "nav.about" as const },
  { href: "/services", key: "nav.services" as const },
  { href: "/#think", key: "nav.think" as const },
  { href: "/#proof", key: "nav.proof" as const },
  { href: "/#invest", key: "nav.invest" as const },
  { href: "/#faq", key: "nav.faq" as const },
  { href: "/#contact", key: "nav.contact" as const },
];

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/#top"
          className="font-logo text-lg tracking-wide text-ink no-underline lowercase"
          aria-label="One Hundred"
          onClick={() => setMenuOpen(false)}
        >
          one hundred
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ToggleButtons lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <BurgerIcon open={menuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
            className="overflow-hidden border-b border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-3 text-sm text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2 px-2">
                <ToggleButtons lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function ToggleButtons({
  lang,
  setLang,
  theme,
  toggleTheme,
}: {
  lang: "es" | "en";
  setLang: (l: "es" | "en") => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  return (
    <>
      <button
        type="button"
        className="rounded-lg border border-line px-3 py-2 text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
        aria-label="Toggle language"
        onClick={() => setLang(lang === "es" ? "en" : "es")}
      >
        {lang === "es" ? "EN" : "ES"}
      </button>
      <button
        type="button"
        className="rounded-lg border border-line px-3 py-2 text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "light" ? "☽" : "☀"}
      </button>
    </>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <motion.line
        x1="1" y1="4.5" x2="17" y2="4.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
        style={{ originX: "9px", originY: "4.5px" }}
      />
      <motion.line
        x1="1" y1="9" x2="17" y2="9"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.line
        x1="1" y1="13.5" x2="17" y2="13.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
        style={{ originX: "9px", originY: "13.5px" }}
      />
    </svg>
  );
}
