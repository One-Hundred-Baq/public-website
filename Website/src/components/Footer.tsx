"use client";

import Link from "next/link";
import { useSite } from "@/lib/providers";

export default function Footer() {
  const { t } = useSite();
  return (
    <footer className="border-t border-line py-12 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <a href="#chat" className="font-semibold text-accent no-underline">
          {t("footer.cta")}
        </a>
        <div className="mt-4 text-sm text-ink-muted">{t("footer.fine")}</div>
        <div className="mt-3 font-mono text-xs text-ink-muted">
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
