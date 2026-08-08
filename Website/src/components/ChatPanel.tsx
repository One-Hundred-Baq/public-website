"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useSite } from "@/lib/providers";
import { getRuleBasedReply } from "@/lib/chatRules";
import { CHAT_ENDPOINT, CHAT_ENDPOINT_TIMEOUT_MS } from "@/lib/config";

type Message = { role: "user" | "agent"; text: string; id: number };

let idCounter = 0;

async function getReply(
  message: string,
  lang: "es" | "en",
  history: { role: "user" | "agent"; text: string }[]
): Promise<string> {
  if (CHAT_ENDPOINT) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), CHAT_ENDPOINT_TIMEOUT_MS);
    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, lang, history }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error("bad status");
      const data = await res.json();
      if (data && typeof data.reply === "string") return data.reply;
    } catch {
      // Falls through to the rule-based engine — the live agent must never
      // go silent (timeout, missing key, rate limit, network) — a visitor
      // always gets an answer, just a less capable one.
    } finally {
      clearTimeout(timeout);
    }
  }
  return getRuleBasedReply(message, lang);
}

export default function ChatPanel() {
  const { t, lang } = useSite();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const historyRef = useRef<{ role: "user" | "agent"; text: string }[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  async function send(text: string) {
    if (!text.trim() || sending) return;
    const userMsg: Message = { role: "user", text, id: idCounter++ };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);

    const reply = await getReply(text, lang, historyRef.current);
    historyRef.current = [...historyRef.current, { role: "user", text }, { role: "agent", text: reply }];
    setMessages((m) => [...m, { role: "agent", text: reply, id: idCounter++ }]);
    setSending(false);
    requestAnimationFrame(() => {
      logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
    });
  }

  const chips = [t("chat.chip1"), t("chat.chip2"), t("chat.chip3"), t("chat.chip4")];

  return (
    <div
      id="chat"
      className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-2xl shadow-black/20"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <strong className="text-sm">{t("chat.title")}</strong>
        <span className="flex items-center gap-2 font-mono text-xs text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
          {t("chat.status")}
        </span>
      </div>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        className="flex h-80 flex-col gap-3 overflow-y-auto p-5"
      >
        <div className="mx-auto max-w-full text-center font-mono text-xs text-ink-muted">
          {t("chat.disclaimer")}
        </div>
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[85%] rounded-lg px-4 py-3 text-sm ${
                m.role === "user"
                  ? "self-end bg-accent text-canvas"
                  : "self-start border border-line bg-canvas"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {sending && (
          <div className="self-start rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink-muted">
            <TypingDots />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 px-5 pb-4">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => send(chip)}
            className="rounded-full border border-line px-4 py-2 text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            {chip}
          </button>
        ))}
      </div>

      <form
        className="flex gap-2 border-t border-line px-5 py-4"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <label htmlFor="chat-input" className="visually-hidden">
          Message
        </label>
        <input
          id="chat-input"
          type="text"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("chat.placeholder")}
          className="flex-1 rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={sending}
          className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {t("chat.send")}
        </button>
      </form>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-ink-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}
