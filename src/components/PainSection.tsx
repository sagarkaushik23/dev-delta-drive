const painPoints = [
  {
    icon: "⏰",
    title: "Hours wasted on repetitive data tasks",
    description:
      "Your team manually copies data, generates reports, and processes files — tasks that AI can do in seconds, perfectly, 24/7.",
  },
  {
    icon: "🌙",
    title: "Customer queries going unanswered at 2 AM",
    description:
      "Leads and customers reach out outside business hours. Without an AI system, they leave. With one — they convert.",
  },
  {
    icon: "📊",
    title: "Decisions made without real-time insights",
    description:
      "You're flying blind on data that's already available. AI systems can surface insights instantly, before it's too late.",
  },
];

const PainSection = () => {
  return (
    <section id="pain" className="py-28 bg-[#0A0A0F] relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E1E2E] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
              Your team is doing manually
              <br />
              <span className="gradient-text-indigo">what AI can do in seconds.</span>
            </h2>
          </div>

          {/* Pain cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="pain-card rounded-2xl p-6 animate-fade-in glass-card-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  {point.icon}
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-red-400 mt-0.5 text-lg">✗</span>
                  <h3 className="text-white font-semibold text-base leading-snug">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Transition line */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5">
              <span className="text-[#10B981] text-xl">→</span>
              <p className="text-white font-semibold text-lg">
                I build the AI systems that fix this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
