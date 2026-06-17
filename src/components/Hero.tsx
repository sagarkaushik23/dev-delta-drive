import { ArrowRight, ChevronDown } from "lucide-react";
import { openCalendly } from "@/components/Navigation";
import tradelensaiDashboard from "@/assets/tradelensai-dashboard.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0F] grid-bg pt-20 pb-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow w-[600px] h-[600px] left-[-15%] top-[-20%] bg-[#6366F1] opacity-[0.12]" />
        <div className="hero-glow w-[500px] h-[500px] right-[-10%] bottom-[-15%] bg-[#10B981] opacity-[0.08]" />
        <div className="hero-glow w-[300px] h-[300px] left-[40%] top-[30%] bg-[#6366F1] opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Available badge */}
            <div className="available-badge w-fit">
              <span className="green-dot" />
              Currently available for new projects
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                I build{" "}
                <span className="gradient-text">AI systems</span>{" "}
                that automate your{" "}
                <span className="gradient-text">business workflows.</span>
              </h1>

              <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
                <span className="text-[#A5B4FC] font-medium">Chatbots · AI Agents · LLM Integrations · FinTech Tools</span>
                <br />
                <span className="font-mono text-sm text-[#64748B]">GPT-4 · LangChain · RAG · Python · React</span>
              </p>

              {/* Social proof */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {["🇺🇸", "🇬🇧", "🇮🇳"].map((flag, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#13131A] border-2 border-[#1E1E2E] flex items-center justify-center text-sm">
                      {flag}
                    </div>
                  ))}
                </div>
                <p className="text-[#64748B] text-sm">
                  Shipped{" "}
                  <a
                    href="https://tradelensai.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A5B4FC] font-semibold hover:text-[#6366F1] transition-colors"
                  >
                    TradeLensAI
                  </a>
                  {" "}— used by traders
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="hero-book-call"
                aria-label="Book a free 15-minute call"
                onClick={openCalendly}
                className="group inline-flex items-center justify-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-xl text-base font-semibold glow-pulse hover:bg-[#0EA472] transition-all hover:-translate-y-0.5"
              >
                Book a Free 15-min Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-see-work"
                aria-label="Scroll down to see my featured work"
                onClick={() => scrollToSection("featured-project")}
                className="inline-flex items-center justify-center gap-2 border border-[#1E1E2E] text-white px-8 py-4 rounded-xl text-base font-semibold hover:border-[#6366F1]/40 hover:bg-[#6366F1]/5 transition-all hover:-translate-y-0.5"
              >
                See My Work
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Trust line */}
            <p className="text-[#475569] text-sm flex items-center gap-2">
              <span className="text-[#10B981]">✓</span> No long contracts · Fixed-price delivery · Full docs included
            </p>
          </div>

          {/* Right — Code Snippet Visual */}
          <div className="relative animate-fade-in-right hidden lg:block">
            <div className="relative">
              {/* Glow behind window */}
              <div className="absolute inset-0 bg-[#6366F1]/20 rounded-2xl blur-2xl scale-95" />

              {/* Mac Window UI */}
              <div className="relative rounded-2xl overflow-hidden border border-[#1E1E2E] shadow-[0_40px_100px_rgba(0,0,0,0.6)] bg-[#0D0D14] flex flex-col font-mono text-sm">
                {/* Top bar */}
                <div className="bg-[#13131A] px-4 py-3 flex items-center gap-2 border-b border-[#1E1E2E]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="flex-1 text-center text-[#64748B] text-xs font-medium font-sans">
                    ai_orchestrator.py
                  </div>
                  <div className="w-12" /> {/* Spacer to balance */}
                </div>

                {/* Code body */}
                <div className="p-7 text-[#A5B4FC] leading-loose whitespace-pre overflow-x-auto text-[13px]">
<span className="text-[#F472B6]">from</span> langchain.agents <span className="text-[#F472B6]">import</span> initialize_agent<br/>
<span className="text-[#F472B6]">from</span> tools <span className="text-[#F472B6]">import</span> MarketAnalyzer, SupportBot<br/>
<br/>
<span className="text-[#F472B6]">def</span> <span className="text-[#60A5FA]">deploy_ai_system</span>(client_reqs):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;agent = initialize_agent(<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tools=[MarketAnalyzer(), SupportBot()],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;llm=<span className="text-[#10B981]">"gpt-4-turbo"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memory=<span className="text-[#F472B6]">True</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F472B6]">return</span> agent.deploy(auto_scale=<span className="text-[#F472B6]">True</span>)<br/>
<br/>
<span className="text-[#64748B]"># Status: Online & Automating Workflows 🟢</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 glass-card rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 bg-[#6366F1]/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">System Deployed</p>
                  <p className="text-[#6366F1] text-xs">0 latency • 100% automated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#475569]">
          <span className="text-xs">scroll down</span>
          <div className="w-5 h-8 border border-[#1E1E2E] rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-[#6366F1] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
