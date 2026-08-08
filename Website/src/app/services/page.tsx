import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "First Commercial Package — landing, pago y agente de ventas de IA, ya entregado a un cliente real.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
