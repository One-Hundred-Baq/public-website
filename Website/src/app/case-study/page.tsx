import type { Metadata } from "next";
import CaseStudyContent from "@/components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Caso de estudio",
  description: "Osman Vergara — el único cliente real confirmado hoy, descrito sin inflar nada.",
  alternates: { canonical: "/case-study" },
};

export default function CaseStudyPage() {
  return <CaseStudyContent />;
}
