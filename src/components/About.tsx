import { Code2, Rocket, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following industry best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development process with clear communication and regular updates",
    },
    {
      icon: Shield,
      title: "Reliable Systems",
      description: "Building production-grade applications with 99.9% uptime",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-semibold">full-stack software developer</span> with 
                2.5+ years of hands-on experience building scalable web applications and backend systems. 
                I specialize in turning complex problems into elegant, maintainable solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans the entire development stack – from crafting intuitive React interfaces 
                to architecting high-performance Node.js APIs and deploying cloud infrastructure on AWS. 
                I'm passionate about code quality, best practices, and delivering measurable business results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've worked with startups and enterprises, building systems that handle millions of requests, 
                implementing secure authentication flows, and optimizing database performance. Every line of 
                code I write is focused on reliability, scalability, and user experience.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> India (serving global clients)
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a href="mailto:sagarkaushikme@gmail.com" className="text-primary hover:underline">
                    sagarkaushikme@gmail.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  <a href="tel:+918287752676" className="text-primary hover:underline">
                    +91 8287752676
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
