import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "React", "TypeScript", "JavaScript", "Tailwind CSS", 
        "HTML5 & CSS3", "Responsive Design", "Web Performance"
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        "Node.js", "TypeScript", "Java", "Python", 
        "Express.js", "RESTful APIs", "GraphQL", "Database Design"
      ],
    },
    {
      title: "AWS & Cloud Services",
      skills: [
        "EC2", "Lambda", "S3", "RDS", "DynamoDB", 
        "Cognito", "EventBridge", "CloudWatch", "CloudFormation", 
        "API Gateway", "IAM", "VPC"
      ],
    },
    {
      title: "Developer Tools & Databases",
      skills: [
        "Git & GitHub", "Docker", "PostgreSQL", "MongoDB", 
        "Redis", "CI/CD", "Linux/Unix", "Postman", "JIRA"
      ],
    },
    {
      title: "Specializations",
      skills: [
        "Full-Stack Development", "API Design", "Cloud Architecture", 
        "Microservices", "System Design", "Database Optimization", 
        "Authentication & Security"
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">◆</span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-card border-primary/50 max-w-4xl mx-auto animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tech Stack Overview
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                I specialize in building full-stack applications with modern, production-ready technologies
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Frontend</div>
                  <div className="text-sm text-muted-foreground">React + TypeScript</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Backend</div>
                  <div className="text-sm text-muted-foreground">Node.js + Express</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Database</div>
                  <div className="text-sm text-muted-foreground">PostgreSQL + MongoDB</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg mb-1">Cloud</div>
                  <div className="text-sm text-muted-foreground">AWS Ecosystem</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
