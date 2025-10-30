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
    <section id="process" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How I Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven development process focused on reliability, scalability, and maintainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <step.icon className="text-primary" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-card border-primary/50 max-w-4xl mx-auto animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why This Process Works
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-primary font-bold text-lg mb-2">Reliability</div>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing and monitoring ensure 99.9%+ uptime
                  </p>
                </div>
                <div>
                  <div className="text-primary font-bold text-lg mb-2">Scalability</div>
                  <p className="text-sm text-muted-foreground">
                    Architecture designed to handle growth from day one
                  </p>
                </div>
                <div>
                  <div className="text-primary font-bold text-lg mb-2">Maintainability</div>
                  <p className="text-sm text-muted-foreground">
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
