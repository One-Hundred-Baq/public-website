"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, type DictKey, type Lang } from "./i18n";

type Theme = "dark" | "light";

const STORAGE_LANG = "oh_lang";
const STORAGE_THEME = "oh_theme";

type SiteContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: DictKey) => string;
  theme: Theme;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    // Deliberately synced from an effect, not a useState lazy initializer:
    // localStorage doesn't exist during static-export prerendering, so
    // reading it outside an effect throws at build time. This is the one
    // extra render standard SSR-safe hydration needs (same pattern
    // next-themes uses) — not an accidental cascading-render bug.
    try {
      const storedLang = localStorage.getItem(STORAGE_LANG) as Lang | null;
      const storedTheme = localStorage.getItem(STORAGE_THEME) as Theme | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (storedLang === "es" || storedLang === "en") setLangState(storedLang);
      if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
    } catch {
      // localStorage unavailable — defaults stand.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_LANG, lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_THEME, theme);
    } catch {}
  }, [theme]);

  const value = useMemo<SiteContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      t: (key: DictKey) => dictionaries[lang][key] ?? dictionaries.es[key],
      theme,
      toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    }),
    [lang, theme]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

// Inline, render-blocking script injected in the document head so the
// correct theme/lang apply before first paint — avoids a flash of the
// wrong theme while the SiteProvider's effect above still runs on mount
// (kept in sync for anyone landing with JS slow to hydrate).
export const noFlashScript = `
(function() {
  try {
    var theme = localStorage.getItem('${STORAGE_THEME}');
    var lang = localStorage.getItem('${STORAGE_LANG}');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    if (lang === 'es' || lang === 'en') {
      document.documentElement.lang = lang;
    }
  } catch (e) {}
})();
`;
