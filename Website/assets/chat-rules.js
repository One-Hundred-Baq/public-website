// One Hundred — rule-based chat engine.
// This is the REAL, working demo today (not a placeholder): keyword-matched
// answers pulled from Brand/01-BrandStrategy.md and OneHundred-Workspace evidence.
// To upgrade to a live LLM: set window.ONE_HUNDRED_CHAT_ENDPOINT to a backend URL
// that accepts {message, lang, history} and returns {reply}.
// Nothing else in this file needs to change; main.js already checks that global first.

function normalize(text) {
  const diacritics = new RegExp(
    "[" + String.fromCharCode(0x0300) + "-" + String.fromCharCode(0x036f) + "]",
    "g"
  );
  return text.toLowerCase().normalize("NFD").replace(diacritics, "");
}

const CHAT_RULES = [
  {
    keywords: ["agencia", "agency", "software factory", "estudio", "studio"],
    reply: {
      es: "No somos una agencia. Una agencia vende tiempo y ejecución por proyecto. One Hundred construye y es dueño de sistemas y activos reutilizables — un cliente entregado es la prueba de que el activo funciona, no el negocio en sí.",
      en: "We're not an agency. An agency sells time and per-project execution. One Hundred builds and owns reusable systems and assets — a delivered client is proof the asset works, not the business itself."
    }
  },
  {
    keywords: ["que construyen", "que hacen", "what do you build", "what do you do", "products", "productos"],
    reply: {
      es: "Construimos sistemas de IA reutilizables. La primera prueba: un motor que instancia un agente de ventas de IA con landing y pago integrados, en una sola sesión, en vez de un proyecto de meses.",
      en: "We build reusable AI systems. The first proof: an engine that instantiates an AI sales agent with landing and payment integrated, in a single session instead of a months-long project."
    }
  },
  {
    keywords: ["clientes", "clients", "customer", "evidencia", "proof", "case study", "caso"],
    reply: {
      es: "Un cliente real y confirmado hoy: Osman Vergara. Landing, pago y agente de ventas de IA funcionando de punta a punta. No inflamos esa cifra — es exactamente uno.",
      en: "One real, confirmed client today: Osman Vergara. Landing page, payment, and AI sales agent working end-to-end. We don't inflate that number — it's exactly one."
    }
  },
  {
    keywords: ["precio", "costo", "cuanto cuesta", "price", "cost", "pricing", "how much"],
    reply: {
      es: "Todavía no tenemos un precio de referencia público — cada paquete se configura según el negocio. Cuéntame qué necesitas y te oriento mejor cuando conectemos el canal en vivo.",
      en: "We don't have a public reference price yet — each package is configured to the business. Tell me what you need and I can guide you better once we connect the live channel."
    }
  },
  {
    keywords: ["invertir", "inversion", "invest", "investor", "capital"],
    reply: {
      es: "Cada cliente no es un proyecto aislado, es una prueba más del mismo motor — eso es lo que compone valor. No compartimos valuaciones ni proyecciones que no podamos sostener con evidencia. Mira la sección 'Por qué esto escala' más abajo.",
      en: "No client is an isolated project — each one is one more proof of the same engine, and that's what compounds value. We don't share valuations or projections we can't back with evidence. See the 'Why This Scales' section below."
    }
  },
  {
    keywords: ["hablar con alguien", "humano", "human", "contacto", "contact", "talk to someone", "hablar con un asesor"],
    reply: {
      es: "Ahora mismo esta conversación es una demo y no queda guardada en ningún lado. En cuanto conectemos el canal real (Telegram/WhatsApp), sigue exactamente aquí.",
      en: "Right now this conversation is a demo and isn't saved anywhere. Once we connect the real channel (Telegram/WhatsApp), it continues right here."
    }
  },
  {
    keywords: ["como funciona", "como empiezo", "how does it work", "how do i start", "instanciar", "instantiat"],
    reply: {
      es: "Tomamos un motor ya probado (landing + pago + agente de IA), lo configuramos con los datos reales de un negocio, y queda funcionando — sin reescribir código para cada cliente nuevo.",
      en: "We take a proven engine (landing + payment + AI agent), configure it with a business's real data, and it goes live — no code rewritten per new client."
    }
  },
  {
    keywords: ["tecnologia", "technology", "stack", "whatsapp", "telegram", "paypal"],
    reply: {
      es: "IA con respaldo entre proveedores, WhatsApp y Telegram como canales de venta, pagos integrados (PayPal y pasarelas locales). Preferimos motores probados a reinventar infraestructura.",
      en: "AI with cross-provider fallback, WhatsApp and Telegram as sales channels, integrated payments (PayPal and local gateways). We prefer proven engines over reinventing infrastructure."
    }
  },
  {
    keywords: ["hola", "hello", "hi", "buenas", "hey"],
    reply: {
      es: "Hola — soy el agente de demostración de One Hundred. Pregúntame qué construimos, si somos una agencia, o si tenemos clientes reales.",
      en: "Hi — I'm One Hundred's demo agent. Ask me what we build, whether we're an agency, or whether we have real clients."
    }
  }
];

const FALLBACK_REPLY = {
  es: "No tengo una respuesta preparada para eso todavía — esta es una demo con reglas mientras conectamos el modelo de lenguaje en vivo. Prueba una de las preguntas sugeridas, o pregúntame qué construimos, si somos una agencia, o si tenemos clientes reales.",
  en: "I don't have a scripted answer for that yet — this is a rule-based demo while we connect the live language model. Try one of the suggested questions, or ask what we build, whether we're an agency, or whether we have real clients."
};

function getRuleBasedReply(message, lang) {
  const normalized = normalize(message);
  for (const rule of CHAT_RULES) {
    if (rule.keywords.some((kw) => normalized.includes(normalize(kw)))) {
      return rule.reply[lang] || rule.reply.es;
    }
  }
  return FALLBACK_REPLY[lang] || FALLBACK_REPLY.es;
}
