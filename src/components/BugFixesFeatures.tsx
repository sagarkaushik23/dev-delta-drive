import { Card } from "@/components/ui/card";
import { Wrench, Zap, Shield, Plus, RefreshCw, Palette, Cloud } from "lucide-react";

const BugFixesFeatures = () => {
  const services = [
    {
      icon: Wrench,
      title: "Quick troubleshooting and resolved bugs in frontend and backend systems",
    },
    {
      icon: Zap,
      title: "Performance tuning and optimization",
    },
    {
      icon: Shield,
      title: "Security patches and updates",
    },
    {
      icon: Plus,
      title: "Adding new features, modules, and integrations",
    },
    {
      icon: RefreshCw,
      title: "Refactoring and improving legacy code",
    },
    {
      icon: Palette,
      title: "Enhancing UI/UX with modern technologies",
    },
    {
      icon: Cloud,
      title: "Cloud services updates and DevOps enhancements",
    },
  ];

  const advantages = [
    {
      title: "Fast turnaround times",
      description: "with emphasis on high-quality code",
    },
    {
      title: "Transparent communication",
      description: "and status updates throughout the process",
    },
    {
      title: "Expertise across the stack",
      description: "JavaScript, TypeScript, Node.js, React, Python, and AWS services",
    },
    {
      title: "Proven track record",
      description: "of solving complex issues and delivering scalable solutions",
    },
  ];

  return (
    <section id="bug-fixes-features" className="py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bug Fixes & Feature Updates
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              As a skilled full-stack software developer with 2.5 years of professional experience, I specialize in delivering both small and large-scale bug fixes to ensure your applications run smoothly and efficiently. Whether it's a critical issue that needs immediate attention or subtle improvements, I respond quickly and implement effective solutions.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In addition to fixing bugs, I also offer feature development services to enhance your existing applications. From adding new functionalities to optimizing user experience, I work closely with clients to bring their ideas to life and improve business value.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
              Services Include
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in rounded-xl"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/5 rounded-xl flex-shrink-0">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {service.title}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-10 text-center">
              Why Choose Me?
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-scale-in rounded-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {advantage.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="p-12 bg-white border border-border max-w-4xl mx-auto animate-fade-in rounded-xl shadow-sm">
              <p className="text-xl text-foreground leading-relaxed">
                If you have any bugs or feature requests in your current software projects, I'm here to help you get them resolved <span className="text-primary font-semibold">efficiently and effectively</span>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugFixesFeatures;
