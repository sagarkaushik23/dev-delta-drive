import { ArrowUp } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sagarkaushik01/", icon: "in" },
  { label: "Twitter", href: "https://x.com/sagarkaushikdev", icon: "𝕏" },
  { label: "Reddit", href: "https://www.reddit.com/user/sagarkaushikdev/", icon: "re" },
  { label: "Medium", href: "https://medium.com/@sagarkaushikme", icon: "me" },
];

const footerLinks = [
  { label: "Services", id: "services" },
  { label: "Work", id: "featured-project" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1E1E2E] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1] flex items-center justify-center text-white font-bold text-sm">
                  SK
                </div>
                <h3 className="text-white text-xl font-bold">Sagar Kaushik</h3>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed max-w-sm">
                Software Development & AI Engineer. Building AI systems that automate business workflows — chatbots, agents, and FinTech tools powered by GPT-4, LangChain & RAG.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg bg-[#13131A] border border-[#1E1E2E] flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#6366F1]/40 hover:bg-[#6366F1]/10 transition-all text-xs font-bold"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-[#64748B] hover:text-[#6366F1] transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1E1E2E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#475569] text-xs text-center sm:text-left">
              © {currentYear} Sagar Kaushik · sagarkaushik.com · Built with React & TypeScript
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#475569] hover:text-[#6366F1] transition-colors group text-sm"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
