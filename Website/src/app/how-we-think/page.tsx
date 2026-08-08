import type { Metadata } from "next";
import ThinkContent from "@/components/ThinkContent";

export const metadata: Metadata = {
  title: "Cómo pensamos",
  description: "Los seis principios de decisión de One Hundred, explicados a fondo.",
  alternates: { canonical: "/how-we-think" },
};

export default function ThinkPage() {
  return <ThinkContent />;
}
