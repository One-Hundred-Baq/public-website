"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";

const NAV_PRIMARY = [
  { href: "/services", key: "nav.services" as const },
  { href: "/how-we-think", key: "nav.think" as const },
  { href: "/capital", key: "nav.invest" as const },
];

const NAV_DROPDOWN = [
  { href: "/about", key: "nav.about" as const },
  { href: "/case-study", key: "nav.casestudy" as const },
  { href: "/technology", key: "nav.technology" as const },
  { href: "/#faq", key: "nav.faq" as const },
  { href: "/#contact", key: "nav.contact" as const },
];

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!dropdownOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/#top"
          className="font-logo text-lg tracking-wide text-ink no-underline lowercase"
          aria-label="One Hundred"
          onClick={() => setMenuOpen(false)}
        >
          one hundred
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV_PRIMARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {t(item.key)}
            </Link>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {t("nav.company")}
              <motion.span
                aria-hidden
                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.15 }}
                className="text-xs"
              >
                ⌄
              </motion.span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
                  className="absolute right-0 top-full mt-3 w-48 overflow-hidden rounded-xl border border-line bg-surface py-2 shadow-xl"
                >
                  {NAV_DROPDOWN.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-ink-muted no-underline transition-colors hover:bg-canvas hover:text-ink"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ToggleButtons lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
          <Link
            href="/#chat"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-canvas no-underline transition-colors hover:bg-accent-hover"
          >
            {t("nav.cta")}
          </Link>
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
              {[...NAV_PRIMARY, ...NAV_DROPDOWN].map((item) => (
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
              <Link
                href="/#chat"
                onClick={() => setMenuOpen(false)}
                className="mx-2 mt-2 rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-canvas no-underline"
              >
                {t("nav.cta")}
              </Link>
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
