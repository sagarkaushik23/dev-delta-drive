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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Hire Me
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What sets me apart as a full-stack developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in rounded-xl"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-5">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={28} />
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

          <div className="mt-20 text-center">
            <Card className="p-12 bg-white border border-border max-w-5xl mx-auto animate-fade-in rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Available For
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Full-Time Roles</div>
                  <div className="text-base text-muted-foreground">Join your team</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Freelance Projects</div>
                  <div className="text-base text-muted-foreground">Fixed-scope work</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Contract Work</div>
                  <div className="text-base text-muted-foreground">Long-term contracts</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Consulting</div>
                  <div className="text-base text-muted-foreground">Architecture & code reviews</div>
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
