import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

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
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Sagar Kaushik<span className="text-primary">.</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Full-Stack Developer specializing in TypeScript, React, Node.js, and AWS.
                Building scalable applications with 2.5+ years of experience.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sagarkaushik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/sagarkaushik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:sagarkaushikme@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Stats</h4>
              <ul className="space-y-2 text-muted-foreground">
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
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              aria-label="Back to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
