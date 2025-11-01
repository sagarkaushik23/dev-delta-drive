import { Card } from "@/components/ui/card";
import { FileSearch, Layout, Code, TestTube, Rocket, Activity } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "Requirement Analysis & Architecture Planning",
      description: "Deep dive into requirements, define technical specifications, and design scalable architecture",
    },
    {
      icon: Layout,
      title: "API Design & Database Schema",
      description: "Design RESTful APIs, plan database schema with optimization in mind, and document endpoints",
    },
    {
      icon: Code,
      title: "Implementation with Clean Code Practices",
      description: "Write maintainable TypeScript code, follow SOLID principles, and implement comprehensive error handling",
    },
    {
      icon: TestTube,
      title: "Testing (Unit, Integration, E2E)",
      description: "Thorough testing at all levels to ensure reliability, catch edge cases, and prevent regressions",
    },
    {
      icon: Rocket,
      title: "Deployment & DevOps Setup",
      description: "Deploy to AWS with CI/CD pipelines, configure monitoring, and set up automated scaling",
    },
    {
      icon: Activity,
      title: "Monitoring & Continuous Optimization",
      description: "CloudWatch monitoring, performance optimization, and proactive issue resolution",
    },
  ];

  return (
    <section id="process" className="py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How I Work
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A proven development process focused on reliability, scalability, and maintainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-scale-in rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-4 bg-primary/5 rounded-xl">
                      <step.icon className="text-primary" size={28} />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="p-12 bg-white border border-border max-w-5xl mx-auto animate-fade-in rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Why This Process Works
              </h3>
              <div className="grid sm:grid-cols-3 gap-10 text-left">
                <div>
                  <div className="text-primary font-bold text-2xl mb-3">Reliability</div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Comprehensive testing and monitoring ensure 99.9%+ uptime
                  </p>
                </div>
                <div>
                  <div className="text-primary font-bold text-2xl mb-3">Scalability</div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Architecture designed to handle growth from day one
                  </p>
                </div>
                <div>
                  <div className="text-primary font-bold text-2xl mb-3">Maintainability</div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Clean code and documentation for easy future updates
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
