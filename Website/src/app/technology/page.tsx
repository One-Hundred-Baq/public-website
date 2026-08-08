import type { Metadata } from "next";
import TechnologyContent from "@/components/TechnologyContent";

export const metadata: Metadata = {
  title: "Tecnología",
  description: "El stack real detrás de One Hundred, con el estado real de cada pieza.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
