import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 text-5xl text-accent">404</div>
      <h1 className="mb-3 text-2xl">Esta página no existe.</h1>
      <p className="mb-8 max-w-md text-sm text-ink-muted">
        No inventamos una — si buscabas algo específico, el agente en la página principal
        probablemente te pueda orientar mejor que un enlace roto.
      </p>
      <Link
        href="/"
        className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-canvas no-underline transition-opacity hover:opacity-90"
      >
        ← Volver a One Hundred
      </Link>
    </div>
  );
}
