const niches = [
  {
    icon: "🏦",
    title: "FinTech & Trading",
    description: "AI trading tools, risk analysis, portfolio automation, and financial data pipelines.",
    accent: "#6366F1",
  },
  {
    icon: "🤖",
    title: "SaaS & Startups",
    description: "AI-powered features, onboarding bots, user analytics, and product automation.",
    accent: "#818CF8",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Product recommendation engines, AI support agents, and inventory intelligence.",
    accent: "#10B981",
  },
  {
    icon: "⚖️",
    title: "Legal & Compliance",
    description: "Document review AI, contract analysis, compliance monitoring, and legal research bots.",
    accent: "#F59E0B",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    description: "Patient triage chatbots, medical record summarization, and clinical workflow automation.",
    accent: "#EF4444",
  },
  {
    icon: "📚",
    title: "EdTech",
    description: "AI tutors, personalized learning paths, automated grading, and curriculum generation.",
    accent: "#8B5CF6",
  },
];

const Niches = () => {
  return (
    <section id="niches" className="py-28 bg-[#0D0D14] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              Industries
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industries I specialize in
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Deep domain knowledge in AI applications across 6 high-growth sectors.
            </p>
          </div>

          {/* Niche grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {niches.map((niche, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{
                    background: `${niche.accent}12`,
                    border: `1px solid ${niche.accent}25`,
                  }}
                >
                  {niche.icon}
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                >
                  {niche.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {niche.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Niches;
