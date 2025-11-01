import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyHireMe from "@/components/WhyHireMe";
import BugFixesFeatures from "@/components/BugFixesFeatures";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <WhyHireMe />
        <BugFixesFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
