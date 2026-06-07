const aiTools = [
  { name: "OpenAI", icon: "🧠", desc: "GPT-4 & Vision" },
  { name: "Anthropic", icon: "⚗️", desc: "Claude API" },
  { name: "LangChain", icon: "🔗", desc: "AI Orchestration" },
  { name: "LlamaIndex", icon: "🦙", desc: "Data Framework" },
  { name: "Pinecone", icon: "🌲", desc: "Vector DB" },
  { name: "Weaviate", icon: "🕸", desc: "Vector Search" },
];

const devTools = [
  { name: "Python", icon: "🐍", desc: "Core AI Language" },
  { name: "FastAPI", icon: "⚡", desc: "AI APIs" },
  { name: "React", icon: "⚛️", desc: "Frontend" },
  { name: "Node.js", icon: "💚", desc: "Backend" },
  { name: "TypeScript", icon: "🔷", desc: "Type-safe" },
  { name: "AWS", icon: "☁️", desc: "Cloud infra" },
  { name: "n8n", icon: "🔧", desc: "AI Workflows" },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-28 bg-[#0A0A0F] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1E1E2E] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              Tech Stack
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Tools I work with
            </h2>
          </div>

          {/* AI Tools Row */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-[#1E1E2E]" />
              <span className="text-[#6366F1] text-xs font-semibold uppercase tracking-widest px-3">
                AI & LLM Stack
              </span>
              <div className="h-px flex-1 bg-[#1E1E2E]" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {aiTools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="glass-card glass-card-hover rounded-xl p-4 text-center animate-scale-in cursor-default"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <p className="text-white text-xs font-semibold">{tool.name}</p>
                  <p className="text-[#475569] text-[10px] mt-0.5">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dev Tools Row */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-[#1E1E2E]" />
              <span className="text-[#10B981] text-xs font-semibold uppercase tracking-widest px-3">
                Development Stack
              </span>
              <div className="h-px flex-1 bg-[#1E1E2E]" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
              {devTools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="glass-card glass-card-hover rounded-xl p-4 text-center animate-scale-in cursor-default"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <p className="text-white text-xs font-semibold">{tool.name}</p>
                  <p className="text-[#475569] text-[10px] mt-0.5">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
