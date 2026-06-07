import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const openCalendly = () => {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/sagarkaushikme",
    });
  } else {
    window.open("https://calendly.com/sagarkaushikme", "_blank");
  }
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Work", id: "featured-project" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#1E1E2E] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-white hover:text-[#6366F1] transition-colors flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-[#6366F1] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span>Sagar Kaushik</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#94A3B8] hover:text-white transition-colors font-medium text-sm relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6366F1] after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </button>
              ))}
              <button
                id="nav-book-call"
                onClick={openCalendly}
                className="bg-[#10B981] text-white px-5 py-2.5 rounded-lg text-sm font-semibold glow-pulse hover:bg-[#0EA472] transition-colors"
              >
                Book a Free Call
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in border-t border-[#1E1E2E] pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-[#94A3B8] hover:text-white transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={openCalendly}
                className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold glow-pulse"
              >
                Book a Free 15-min Call
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sticky Bottom CTA */}
      <div className="mobile-sticky-cta md:hidden">
        <button
          id="mobile-sticky-cta"
          onClick={openCalendly}
          className="w-full bg-[#10B981] text-white py-3.5 rounded-xl font-semibold text-base glow-pulse"
        >
          🗓 Book a Free 15-min Call
        </button>
      </div>
    </>
  );
};

export { openCalendly };
export default Navigation;
