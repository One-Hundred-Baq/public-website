import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos",
  description: "Condiciones de uso del sitio y el agente de IA de One Hundred.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-2xl font-bold">Términos</h1>
      <p className="mb-10 text-xs text-ink-muted">
        Última actualización: 2026-08-07. One Hundred todavía no tiene una entidad legal
        constituida — estos términos describen las condiciones de uso del sitio tal como
        existe hoy, no han sido revisados por un abogado, y se aclaran explícitamente como tal.
      </p>

      <Section title="Qué es este sitio">
        <p>
          Una demostración pública y en construcción activa de One Hundred, incluyendo un
          agente de IA (MVP) que responde preguntas sobre la empresa. No es una plataforma
          transaccional: no procesa pagos, no gestiona cuentas de usuario, no almacena tus
          datos en una base de datos propia.
        </p>
      </Section>

      <Section title="El agente de IA no es asesoría">
        <p>
          El agente responde solo con información verificada sobre One Hundred y está
          instruido para decir &ldquo;no lo sé&rdquo; en vez de inventar. Aun así, es un MVP —
          puede equivocarse. Nada que diga el agente constituye asesoría legal, financiera o
          de inversión. Cualquier decisión de capital debe basarse en la{" "}
          <a
            href="https://github.com/One-Hundred-Baq/public-website/blob/main/Capital/06-RiskDisclosure.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            divulgación de riesgos
          </a>{" "}
          del paquete de capital, no en una respuesta de chat.
        </p>
      </Section>

      <Section title="Ningún mecanismo de capital está cerrado">
        <p>
          Cualquier mención en este sitio o en el agente sobre capital inicial, participación
          futura, o mecanismos de retorno es una{" "}
          <strong className="text-ink">PROPUESTA SUJETA A REVISIÓN LEGAL</strong> — no una
          oferta, no un compromiso vinculante, y no una promesa de retorno, equity o pago.
        </p>
      </Section>

      <Section title="Uso aceptable">
        <p>
          No uses el chat para enviar spam, contenido ilegal, o intentar extraer
          comportamiento fuera de su propósito declarado (representar a One Hundred
          honestamente). Nos reservamos el derecho de limitar el acceso si el uso es abusivo —
          de hecho, el backend ya aplica un límite básico de solicitudes por minuto.
        </p>
      </Section>

      <Section title="Propiedad">
        <p>
          El contenido, diseño y código de este sitio pertenecen a quienes construyen One
          Hundred. Al no existir todavía una entidad legal constituida, esta titularidad se
          ejerce hoy a título personal por el/los fundador(es), no por una sociedad — esto se
          actualizará aquí en cuanto exista una entidad formal.
        </p>
      </Section>

      <Section title="Sin garantías">
        <p>
          Este sitio se ofrece &ldquo;tal cual&rdquo;, en construcción activa, sin garantía de
          disponibilidad continua, ausencia de errores, o exactitud completa de cada
          afirmación — aunque el objetivo explícito del proyecto es que cada afirmación
          pública sea verificable.
        </p>
      </Section>

      <Section title="Ley aplicable">
        <p>
          No definida todavía — depende de la jurisdicción de la entidad legal que aún no
          existe. Se actualizará este documento en cuanto se resuelva.
        </p>
      </Section>

      <Section title="Cambios">
        <p>Estos términos pueden cambiar sin aviso previo mientras el sitio esté en construcción activa.</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      <div className="space-y-2 text-sm text-ink-muted">{children}</div>
    </section>
  );
}
