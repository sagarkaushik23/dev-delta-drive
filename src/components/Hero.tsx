import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Section - Left Side */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              {/* Photo Container with minimal decoration */}
              <div className="relative z-10 group">
                {/* Photo with circular crop and subtle shadow */}
                <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-card group-hover:shadow-hover transition-all duration-300">
                    <img 
                      src={professionalHeadshot}
                      alt="Professional headshot of Sagar Kaushik, Full-Stack Developer specializing in TypeScript, React, and Node.js"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </div>
                  {/* Minimal decorative ring */}
                  <div className="absolute -inset-4 rounded-full border-2 border-primary/10"></div>
                </div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                  Full-Stack Developer
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold">
                  TypeScript • React • Node.js
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Building scalable web applications and cloud infrastructure that drive business results
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-[1.7] max-w-2xl">
                2.5+ years crafting production-ready applications for startups and enterprises. Specializing in 
                backend APIs, full-stack development, and AWS cloud architecture.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-8">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  Let's Work Together
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-lg border-2 border-foreground/10 hover:border-primary hover:bg-accent transition-all"
                >
                  View My Work
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
                <a
                  href="mailto:sagarkaushikme@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  aria-label="Email Sagar Kaushik"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">sagarkaushikme@gmail.com</span>
                </a>
              </div>

              <div className="pt-12 grid grid-cols-3 gap-8 max-w-xl">
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">2.5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors p-2"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
