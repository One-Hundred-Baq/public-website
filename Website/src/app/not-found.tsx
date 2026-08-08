import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 font-mono text-5xl text-accent">404</div>
      <h1 className="mb-3 text-2xl font-bold">Esta página no existe.</h1>
      <p className="mb-8 max-w-md text-sm text-ink-muted">
        No inventamos una — si buscabas algo específico, el agente en la página principal
        probablemente te pueda orientar mejor que un enlace roto.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas no-underline transition-colors hover:bg-accent-hover"
      >
        ← Volver a One Hundred
      </Link>
    </div>
  );
}
