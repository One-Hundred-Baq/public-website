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
  const hasMessages = messages.length > 0;

  return (
    <div
      id="chat"
      className="mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-line bg-surface/90 text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-6 pb-2 pt-6">
        <strong className="whitespace-nowrap text-sm">{t("chat.title")}</strong>
        <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs text-ink-muted">
          <span className="h-2 w-2 shrink-0 rounded-full bg-success" aria-hidden />
          {t("chat.status")}
        </span>
      </div>

      <p className="mx-6 mb-4 rounded-xl border border-line/70 bg-canvas/60 px-4 py-2.5 text-center text-xs text-ink-muted">
        {t("chat.disclaimer")}
      </p>

      {hasMessages && (
        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          className="flex max-h-80 flex-col gap-3 overflow-y-auto px-6 pb-4"
        >
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
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
            <div className="self-start rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink-muted">
              <TypingDots />
            </div>
          )}
        </div>
      )}

      <div className="px-6 pb-3">
        <div className="flex flex-wrap gap-2">
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
      </div>

      <form
        className="px-6 pb-6"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <div className="relative flex items-center rounded-full border border-line bg-canvas pl-5 pr-2 shadow-inner transition-colors focus-within:border-accent">
          <SparkleIcon className="mr-3 h-4 w-4 shrink-0 text-accent" />
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
            className="min-w-0 flex-1 bg-transparent py-4 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
          <button
            type="submit"
            disabled={sending}
            aria-label={t("chat.send")}
            className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
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

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 2l1.8 5.6L19.5 9l-5.7 1.8L12 16.5l-1.8-5.7L4.5 9l5.7-1.4L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 19V5M12 5l-6 6M12 5l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
