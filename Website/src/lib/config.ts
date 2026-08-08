// Live backend: Google Cloud Function "one-hundred-chat". Empty string
// would mean the live LLM backend is not connected — the chat would run on
// chatRules.ts only. main.js/ChatPanel.tsx falls back to the rule-based
// engine automatically whenever this endpoint fails, so the chat keeps
// working either way. No code change is needed once the Gemini API's
// pay-as-you-go plan is activated (see EXECUTION_ORDER_004_REPORT.md,
// private workspace) — it starts responding live immediately.
export const CHAT_ENDPOINT =
  "https://us-central1-project-97975aea-ebc6-45aa-82c.cloudfunctions.net/one-hundred-chat";

export const CHAT_ENDPOINT_TIMEOUT_MS = 10000;
