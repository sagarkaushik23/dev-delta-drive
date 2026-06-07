import { openCalendly } from "@/components/Navigation";

const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Discovery Call",
    subtitle: "Free · 15 minutes",
    description:
      "We talk about your problem, your current workflow, and what AI can automate. I'll suggest the best solution — no sales pitch.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Proposal & Scope",
    subtitle: "Clear timeline · Fixed price",
    description:
      "You receive a detailed scope document: what I'll build, how long it'll take, and the exact cost. No surprises, ever.",
  },
  {
    number: "03",
    icon: "🛠",
    title: "Build & Update",
    subtitle: "Daily progress updates",
    description:
      "I build with daily or every-other-day progress updates. You see what's happening at every step — no black box.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Deliver & Handoff",
    subtitle: "Full docs + walkthrough call",
    description:
      "Deployed, documented, and fully handed off. I walk you through the system so your team can own it going forward.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-28 bg-[#0D0D14] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              How a project works
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Simple, transparent, and collaborative — from first call to final delivery.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical connector line (desktop) */}
            <div className="hidden lg:block absolute left-[2.35rem] top-12 bottom-12 w-px bg-gradient-to-b from-[#6366F1]/40 via-[#6366F1]/20 to-transparent" />

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-fade-in glass-card glass-card-hover rounded-2xl p-6 lg:p-7"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step number bubble */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <span className="text-[#6366F1] text-xs font-mono font-semibold">
                        {step.number}
                      </span>
                      <h3 className="text-white font-bold text-lg">{step.title}</h3>
                      <span className="hidden sm:block text-[#1E1E2E]">·</span>
                      <span className="text-[#10B981] text-sm font-medium">{step.subtitle}</span>
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              id="process-book-call"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 border border-[#6366F1]/40 text-[#A5B4FC] px-7 py-3.5 rounded-xl font-medium hover:bg-[#6366F1]/5 hover:border-[#6366F1]/60 transition-all"
            >
              📞 Start with a free discovery call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
