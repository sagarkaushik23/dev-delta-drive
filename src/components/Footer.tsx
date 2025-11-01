import { Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-section border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Sagar Kaushik
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                Full-Stack Developer specializing in TypeScript, React, Node.js, and AWS.
                Building scalable applications with 2.5+ years of experience.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:sagarkaushikme@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors group"
                  aria-label="Email"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-5 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-5 text-lg">Stats</h4>
              <ul className="space-y-3 text-muted-foreground text-base">
                <li>2.5+ Years Experience</li>
                <li>20+ Projects Completed</li>
                <li>99.9% Uptime Average</li>
                <li>Available Worldwide</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Sagar Kaushik. All rights reserved. Built with React, TypeScript & Tailwind CSS.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
