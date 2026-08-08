"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";

const SITEMAP_LINKS = [
  { href: "/about", key: "nav.about" as const },
  { href: "/services", key: "nav.services" as const },
  { href: "/how-we-think", key: "nav.think" as const },
  { href: "/case-study", key: "case.eyebrow" as const },
  { href: "/technology", key: "tech.eyebrow" as const },
  { href: "/capital", key: "nav.invest" as const },
];

export default function Footer() {
  const { t } = useSite();
  return (
    <footer className="border-t border-line py-12 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <Link href="/#chat" className="font-semibold text-accent no-underline">
          {t("footer.cta")}
        </Link>

        <nav
          aria-label="Footer"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-ink-muted"
        >
          {SITEMAP_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="mt-6 text-sm text-ink-muted">{t("footer.fine")}</div>
        <div className="mt-3 text-xs text-ink-muted">
          <Link href="/privacy" className="hover:text-ink">
            {t("footer.privacy")}
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="hover:text-ink">
            {t("footer.terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
