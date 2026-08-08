import Hero from "@/components/Hero";
import About from "@/components/About";
import Proof from "@/components/Proof";
import HowWeThink from "@/components/HowWeThink";
import Investors from "@/components/Investors";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <About />
      <Proof />
      <HowWeThink />
      <Investors />
      <Faq />
      <Contact />
    </main>
  );
}
