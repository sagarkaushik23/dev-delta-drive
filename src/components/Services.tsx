import { ArrowRight, ExternalLink } from "lucide-react";
import { openCalendly } from "@/components/Navigation";

const services = [
  {
    icon: "🤖",
    title: "Custom AI Chatbots",
    description:
      "GPT-4 powered bots trained on YOUR data. Handles support, sales, and onboarding — 24/7, without human intervention.",
    price: "Starting $299",
    tags: ["RAG", "GPT-4", "LangChain", "Any platform"],
    accentColor: "#6366F1",
    popular: false,
  },
  {
    icon: "⚡",
    title: "Autonomous AI Agents",
    description:
      "Multi-step agents that think, decide, and act — browsing the web, calling APIs, managing data, without human intervention.",
    price: "Starting $599",
    tags: ["LangChain", "Tool use", "Memory", "APIs"],
    accentColor: "#818CF8",
    popular: true,
  },
  {
    icon: "📈",
    title: "FinTech & Trading AI Tools",
    description:
      "Custom dashboards, chart analyzers, and signal generators powered by AI. Upload a chart — get a full trade analysis instantly.",
    price: "Starting $799",
    tags: ["OpenAI Vision", "Python", "React", "FastAPI"],
    accentColor: "#10B981",
    popular: false,
    liveExample: "https://tradelensai.in",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-[#0A0A0F] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What I build for you
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Fixed-price AI solutions. Clear scope. No surprises.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-7 glass-card glass-card-hover animate-fade-in flex flex-col ${
                  service.popular ? "border-[#6366F1]/40 ring-1 ring-[#6366F1]/20" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#6366F1] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${service.accentColor}15`, border: `1px solid ${service.accentColor}30` }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#1E1E2E]">
                  <span
                    className="text-xl font-bold"
                    style={{ color: service.accentColor }}
                  >
                    {service.price}
                  </span>
                  {service.liveExample && (
                    <a
                      href={service.liveExample}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#10B981] hover:text-[#34D399] transition-colors font-medium"
                    >
                      See live example
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-[#64748B] text-sm mb-4">Not sure which service fits your needs?</p>
            <button
              id="services-book-call"
              aria-label="Book a free 15-minute call to discuss services"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 bg-[#6366F1] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#5558E8] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Let's Talk — Free 15-min Call
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
