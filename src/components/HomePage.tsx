import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Services from "@/components/Services";
import LokaKasir from "@/components/LokaKasir";
import Inventra from "@/components/Inventra";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import type { Locale } from "@/i18n/config";

export default function HomePage({ lang }: { lang: Locale }) {
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <TechStack lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <LokaKasir lang={lang} />
        <Inventra lang={lang} />
        <Pricing lang={lang} />
        <Process lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp />
    </>
  );
}
