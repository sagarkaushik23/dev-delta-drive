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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Section - Left Side */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Curved decorative lines */}
                <svg 
                  className="absolute w-full h-full max-w-[500px] max-h-[500px] opacity-20" 
                  viewBox="0 0 500 500"
                  aria-hidden="true"
                >
                  <path
                    d="M 100,250 Q 150,150 250,150 T 400,250"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M 150,350 Q 200,400 300,400 T 450,350"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <circle
                    cx="420"
                    cy="120"
                    r="60"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Photo Container */}
              <div className="relative z-10 group">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                
                {/* Photo with circular crop and border */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl group-hover:border-primary group-hover:scale-105 transition-all duration-500">
                    <img 
                      src={professionalHeadshot}
                      alt="Professional headshot of Sagar Kaushik, Full-Stack Developer specializing in TypeScript, React, and Node.js"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Full-Stack Developer <br />
                  <span className="text-primary">TypeScript • React • Node.js</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  Scalable Web Solutions & Cloud Infrastructure
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I build production-ready applications that scale. With 2.5+ years of experience building backend APIs, 
                full-stack applications, and cloud infrastructure for startups and enterprises. Specializing in 
                TypeScript, React, Node.js, and AWS ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-glow"
                >
                  Let's Work Together
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
                >
                  View My Work
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
                <a
                  href="mailto:sagarkaushikme@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email Sagar Kaushik"
                >
                  <Mail size={28} />
                </a>
              </div>

              <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">2.5+</div>
                  <div>Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">20+</div>
                  <div>Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div>Uptime Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors"
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
