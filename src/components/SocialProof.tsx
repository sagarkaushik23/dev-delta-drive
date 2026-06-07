import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Founder, TechStartup",
    country: "🇺🇸",
    avatar: "AT",
    text: "Sagar delivered an AI chatbot for our SaaS in under 2 weeks. Customer support tickets dropped by 60% instantly. Absolutely recommend.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Head of Trading, FX Firm",
    country: "🇬🇧",
    avatar: "JR",
    text: "TradeLensAI is the most useful tool in our analysts' workflow. The AI pattern detection saves us hours of manual chart analysis every day.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CTO, HealthTech",
    country: "🇮🇳",
    avatar: "PS",
    text: "Working with Sagar was seamless. He understood our requirements quickly and delivered a production-grade AI pipeline on time, within budget.",
    rating: 5,
  },
];

const stats = [
  { value: 2000, suffix: "+", label: "LinkedIn Followers" },
  { value: 2.5, suffix: "+ Yrs", label: "Experience", decimal: true },
  { value: 3, suffix: "", label: "Countries" },
  { value: 1, suffix: " Live AI", label: "Product in Production" },
];

function useCountUp(target: number, duration = 2000, active = false, decimal = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active, decimal]);

  return count;
}

const StatItem = ({ stat, active }: { stat: typeof stats[0]; active: boolean }) => {
  const count = useCountUp(stat.value, 1800, active, stat.decimal);
  return (
    <div className="text-center">
      <p className="stat-number mb-1">
        {stat.decimal ? count.toFixed(1) : count}
        {stat.suffix}
      </p>
      <p className="text-[#64748B] text-sm">{stat.label}</p>
    </div>
  );
};

const SocialProof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="social-proof" className="py-28 bg-[#0A0A0F] relative" ref={sectionRef}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E1E2E] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              Social Proof
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by builders & founders
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover rounded-2xl p-6 animate-fade-in flex flex-col"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 mb-5">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1E1E2E]">
                  <div className="w-10 h-10 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/30 flex items-center justify-center text-[#A5B4FC] text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold flex items-center gap-1.5">
                      {t.name} <span>{t.country}</span>
                    </p>
                    <p className="text-[#475569] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="glass-card rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <StatItem key={i} stat={stat} active={statsActive} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
