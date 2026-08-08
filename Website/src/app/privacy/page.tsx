import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Qué datos maneja el sitio de One Hundred y cómo — descrito con honestidad, no con plantilla legal genérica.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-2xl">Privacidad</h1>
      <p className="mb-10 text-xs text-ink-muted">
        Última actualización: 2026-08-07. Este documento describe lo que el sitio realmente
        hace hoy — no es una plantilla legal genérica, y no ha sido revisado por un abogado.
      </p>

      <Section title="Qué pasa cuando escribes en el chat">
        <p className="mb-3">Tu mensaje se procesa de una de dos formas:</p>
        <ul className="mb-3 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Modo por reglas (por defecto)</strong>: el mensaje
            nunca sale de tu navegador. Se compara contra un conjunto fijo de respuestas — no
            se envía a ningún servidor.
          </li>
          <li>
            <strong className="text-ink">Modo con modelo en vivo (cuando está activo)</strong>:
            tu mensaje se envía a un backend propio de One Hundred (una función en la nube),
            que lo reenvía a la API de Gemini de Google para generar una respuesta, y la borra
            de su propia memoria una vez respondida. No guardamos tu conversación en ninguna
            base de datos — no existe una hoy.
          </li>
        </ul>
        <p>
          En ambos casos, el historial de la conversación vive solo en la memoria de tu
          navegador mientras tienes la página abierta. Si recargas la página, se pierde — no
          queda guardado en ningún lado nuestro.
        </p>
      </Section>

      <Section title="Terceros involucrados">
        <p>
          Si el modo con modelo en vivo está activo, tu mensaje pasa por la API de Gemini de
          Google, sujeta a las{" "}
          <a
            href="https://ai.google.dev/gemini-api/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            políticas de Google para la API de Gemini
          </a>
          . No usamos ningún otro proveedor externo para procesar tus mensajes.
        </p>
      </Section>

      <Section title="Qué guardamos en tu navegador">
        <p>
          Dos preferencias, en <code>localStorage</code>, nunca compartidas con nosotros ni con
          nadie: tu idioma elegido (<code>oh_lang</code>) y tu tema claro/oscuro (
          <code>oh_theme</code>). Nada más.
        </p>
      </Section>

      <Section title="Lo que NO hacemos">
        <p>
          No usamos cookies de rastreo, no usamos analítica de terceros, no mostramos
          publicidad, y no vendemos ni compartimos ningún dato con nadie — principalmente
          porque hoy no recolectamos nada que se pudiera vender o compartir.
        </p>
      </Section>

      <Section title="Si compartes tu nombre, negocio o contacto en la conversación">
        <p>
          El agente puede reconocerlo dentro de la propia conversación para responderte
          mejor, pero — de nuevo — no queda guardado en ningún sistema nuestro una vez que
          cierras la página.
        </p>
      </Section>

      <Section title="Sobre nosotros como responsables de esta información">
        <p>
          One Hundred todavía no tiene una entidad legal constituida. Esto significa que, hoy,
          no hay una oficina o proceso formal de protección de datos al que dirigirte — la vía
          más directa para cualquier pregunta sobre privacidad es la misma conversación con el
          agente en el sitio.
        </p>
      </Section>

      <Section title="Cambios">
        <p>
          Este sitio está en construcción activa y este documento puede cambiar sin aviso
          previo mientras eso sea cierto.
        </p>
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
