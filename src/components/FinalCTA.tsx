import { ArrowRight } from "lucide-react";
import { openCalendly } from "@/components/Navigation";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-28 bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow w-[600px] h-[400px] left-1/2 -translate-x-1/2 top-0 bg-[#6366F1] opacity-[0.1]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Scarcity badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            Only 2 project spots left this month
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Ready to build your{" "}
            <span className="gradient-text">AI system?</span>
          </h2>

          <p className="text-[#64748B] text-xl leading-relaxed mb-10">
            I take on 2–3 projects per month.
            <br />
            <span className="text-[#10B981] font-medium">Currently available for new projects.</span>
          </p>

          <button
            id="final-cta-book-call"
            onClick={openCalendly}
            className="group inline-flex items-center gap-3 bg-[#10B981] text-white px-10 py-5 rounded-2xl text-lg font-bold glow-pulse hover:bg-[#0EA472] transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,185,129,0.4)] mb-6"
          >
            Book a Free 15-min Call
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[#475569] text-sm">
            No commitment · No credit card · Just a conversation
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-[#1E1E2E]">
            {[
              { icon: "⚡", label: "Fast delivery" },
              { icon: "📋", label: "Fixed price" },
              { icon: "📞", label: "Daily updates" },
              { icon: "📚", label: "Full docs" },
            ].map((trust) => (
              <div key={trust.label} className="flex items-center gap-2 text-[#475569] text-sm">
                <span>{trust.icon}</span>
                <span>{trust.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
