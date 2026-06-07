import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import Niches from "@/components/Niches";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navigation />
      <main>
        <Hero />
        <PainSection />
        <Services />
        <FeaturedProject />
        <TechStack />
        <Process />
        <SocialProof />
        <Niches />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
