import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const WhyHireMe = () => {
  const reasons = [
    {
      title: "Production-Ready Code",
      description: "I follow industry best practices, coding standards, and write code that's maintainable and scalable",
    },
    {
      title: "Scalable Architecture",
      description: "Built systems handling millions of requests with optimized performance and automatic scaling",
    },
    {
      title: "Performance Focused",
      description: "Optimize for speed and efficiency - API response times <200ms, query optimization, caching strategies",
    },
    {
      title: "Cloud Expert",
      description: "Deep AWS expertise across EC2, Lambda, RDS, Cognito, EventBridge, CloudWatch, and more",
    },
    {
      title: "Clear Communication",
      description: "Comprehensive documentation, regular updates, proactive problem-solving, and transparent workflow",
    },
    {
      title: "Full-Stack Ownership",
      description: "Complete ownership from frontend UI to backend infrastructure - no dependencies on other developers",
    },
    {
      title: "Business Results",
      description: "Code that drives revenue, improves user experience, and delivers measurable business outcomes",
    },
    {
      title: "Fast Delivery",
      description: "Efficient development with CI/CD pipelines, automated testing, and rapid iteration cycles",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Hire Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets me apart as a full-stack developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-card border-primary/50 max-w-4xl mx-auto animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Available For
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Full-Time Roles</div>
                  <div className="text-sm text-muted-foreground">Join your team</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Freelance Projects</div>
                  <div className="text-sm text-muted-foreground">Fixed-scope work</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Contract Work</div>
                  <div className="text-sm text-muted-foreground">Long-term contracts</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Consulting</div>
                  <div className="text-sm text-muted-foreground">Architecture & code reviews</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
