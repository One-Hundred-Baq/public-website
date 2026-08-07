(function () {
  const root = document.documentElement;
  const STORAGE_LANG = "oh_lang";
  const STORAGE_THEME = "oh_theme";

  function applyLang(lang) {
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang] && I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (I18N[lang] && I18N[lang][key] !== undefined) el.setAttribute("placeholder", I18N[lang][key]);
    });
    document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) {}
    window.__ohLang = lang;
  }

  function applyTheme(theme) {
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.setAttribute("data-theme", "dark");
    document.getElementById("theme-toggle").textContent = theme === "light" ? "☽" : "☀";
    try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
  }

  function initToggles() {
    let lang = "es";
    let theme = "dark";
    try {
      lang = localStorage.getItem(STORAGE_LANG) || "es";
      theme = localStorage.getItem(STORAGE_THEME) || "dark";
    } catch (e) {}
    applyLang(lang);
    applyTheme(theme);

    document.getElementById("lang-toggle").addEventListener("click", () => {
      applyLang(window.__ohLang === "es" ? "en" : "es");
    });
    document.getElementById("theme-toggle").addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  function addMessage(log, text, role) {
    const div = document.createElement("div");
    div.className = "msg " + role;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    return div;
  }

  const CHAT_ENDPOINT_TIMEOUT_MS = 10000;

  async function getReply(message, lang, history) {
    if (typeof window.ONE_HUNDRED_CHAT_ENDPOINT === "string" && window.ONE_HUNDRED_CHAT_ENDPOINT) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), CHAT_ENDPOINT_TIMEOUT_MS);
      try {
        const res = await fetch(window.ONE_HUNDRED_CHAT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, lang, history }),
          signal: controller.signal
        });
        if (!res.ok) throw new Error("bad status");
        const data = await res.json();
        if (data && typeof data.reply === "string") return data.reply;
      } catch (e) {
        // Falls through to the rule-based engine below — the live agent must
        // never go silent (timeout, missing key, rate limit, network) —
        // a visitor always gets an answer, just a less capable one.
      } finally {
        clearTimeout(timeout);
      }
    }
    return getRuleBasedReply(message, lang);
  }

  function initChat() {
    const log = document.getElementById("chat-log");
    const form = document.getElementById("chat-form");
    const input = document.getElementById("chat-input");
    const chips = document.querySelectorAll("[data-chip]");
    const sendBtn = document.getElementById("chat-send");
    const history = [];

    async function send(text) {
      if (!text.trim()) return;
      addMessage(log, text, "user");
      input.value = "";
      sendBtn.disabled = true;
      const reply = await getReply(text, window.__ohLang || "es", history);
      addMessage(log, reply, "agent");
      history.push({ role: "user", text }, { role: "agent", text: reply });
      sendBtn.disabled = false;
      input.focus();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      send(input.value);
    });

    chips.forEach((chip) => {
      chip.addEventListener("click", () => send(chip.textContent));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initToggles();
    initChat();
  });
})();
