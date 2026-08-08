import type { Metadata } from "next";
import CapitalContent from "@/components/CapitalContent";

export const metadata: Metadata = {
  title: "Capital",
  description:
    "Capital inicial de lanzamiento (no inversión, no equity) — qué existe hoy, uso de fondos, hitos y riesgos.",
  alternates: { canonical: "/capital" },
};

export default function CapitalPage() {
  return <CapitalContent />;
}
