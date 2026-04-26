import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { WorkSection } from "@/components/sections/WorkSection";

export default function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        <HeroSection />
        <ValueStrip />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ProcessSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
