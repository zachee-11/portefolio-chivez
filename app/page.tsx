import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experiences } from "@/components/sections/Experiences";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { CVSection } from "@/components/sections/CVSection";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#dff2ff] text-slate-900">
      <Header />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Education />
      <Projects />
      <CVSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}