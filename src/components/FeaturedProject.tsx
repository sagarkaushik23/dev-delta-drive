import { ExternalLink } from "lucide-react";
import tradelensaiDashboard from "@/assets/tradelensai-dashboard.png";

const impactStats = [
  { value: "48hrs", label: "Time to build", sub: "MVP to production" },
  { value: "3", label: "Countries", sub: "Active users worldwide" },
  { value: "100%", label: "Automated", sub: "Zero manual analysis" },
];

const features = [
  "Upload any candlestick chart → AI identifies patterns",
  "Auto-generates complete trade dashboard",
  "Entry zone · Stop Loss · Take Profit targets",
  "Risk/Reward Ratio calculation",
  "Trade confidence score (0–100%)",
];

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="py-28 bg-[#0D0D14] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow w-[400px] h-[400px] right-[-5%] top-[10%] bg-[#6366F1] opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#10B981] text-sm font-semibold uppercase tracking-widest mb-4">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              TradeLensAI
            </h2>
            <p className="text-[#64748B] mt-3 text-lg">
              AI-powered trading analysis · Live in production
            </p>
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left — Description */}
            <div className="space-y-7 animate-fade-in-left">
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#10B981] text-xs">✓</span>
                    </div>
                    <p className="text-[#94A3B8] text-base leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="pt-4 border-t border-[#1E1E2E]">
                <p className="text-[#475569] text-xs uppercase tracking-widest mb-3">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {["GPT-4 Vision", "Python", "FastAPI", "React", "TypeScript"].map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://tradelensai.in"
                target="_blank"
                rel="noopener noreferrer"
                id="featured-project-link"
                aria-label="View TradeLensAI live product in a new tab"
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0F] px-7 py-3.5 rounded-xl font-semibold hover:bg-[#F1F5F9] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Live Product
                <ExternalLink size={16} />
              </a>
            </div>

          {/* Right — Code Snippet Visual */}
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-[#6366F1]/20 rounded-2xl blur-2xl scale-95" />
              
              {/* Mac Window UI */}
              <div className="relative rounded-2xl overflow-hidden border border-[#1E1E2E] shadow-[0_40px_100px_rgba(0,0,0,0.7)] bg-[#0D0D14] flex flex-col font-mono text-sm">
                {/* Top bar */}
                <div className="bg-[#13131A] px-4 py-3 flex items-center gap-2 border-b border-[#1E1E2E]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="flex-1 text-center text-[#64748B] text-xs font-medium font-sans">
                    tradelens_vision.py
                  </div>
                  <div className="w-12" /> {/* Spacer */}
                </div>

                {/* Code body */}
                <div className="p-7 text-[#A5B4FC] leading-loose whitespace-pre overflow-x-auto text-[13px]">
<span className="text-[#F472B6]">import</span> openai<br/>
<span className="text-[#F472B6]">import</span> cv2<br/>
<br/>
<span className="text-[#F472B6]">def</span> <span className="text-[#60A5FA]">analyze_chart</span>(image_path: <span className="text-[#10B981]">str</span>) -&gt; <span className="text-[#10B981]">dict</span>:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#64748B]"># 1. Process candlestick chart</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;processed_img = cv2.imread(image_path)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#64748B]"># 2. Extract patterns via Vision API</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;response = openai.ChatCompletion.create(<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model=<span className="text-[#10B981]">"gpt-4-vision-preview"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;messages=[{"{"}<span className="text-[#10B981]">"role"</span>: <span className="text-[#10B981]">"user"</span>, <span className="text-[#10B981]">"content"</span>: [<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<span className="text-[#10B981]">"type"</span>: <span className="text-[#10B981]">"text"</span>, <span className="text-[#10B981]">"text"</span>: <span className="text-[#10B981]">"Find Support/Resistance"</span>{"}"},<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<span className="text-[#10B981]">"type"</span>: <span className="text-[#10B981]">"image_url"</span>, <span className="text-[#10B981]">"image_url"</span>: processed_img{"}"}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]{"}"}]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F472B6]">return</span> {"{"}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#10B981]">"confidence"</span>: <span className="text-[#10B981]">"92%"</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#10B981]">"entry"</span>: <span className="text-[#F59E0B]">42500</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#10B981]">"take_profit"</span>: <span className="text-[#F59E0B]">44000</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br/>
                </div>
              </div>
            </div>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {impactStats.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 text-center animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="stat-number mb-1">{stat.value}</p>
                <p className="text-white text-sm font-semibold">{stat.label}</p>
                <p className="text-[#475569] text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
