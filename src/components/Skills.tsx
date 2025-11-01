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
    <section id="skills" className="py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-scale-in rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1 rounded-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="p-12 bg-white border border-border max-w-5xl mx-auto animate-fade-in rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Tech Stack Overview
              </h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                I specialize in building full-stack applications with modern, production-ready technologies
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Frontend</div>
                  <div className="text-base text-muted-foreground">React + TypeScript</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Backend</div>
                  <div className="text-base text-muted-foreground">Node.js + Express</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Database</div>
                  <div className="text-base text-muted-foreground">PostgreSQL + MongoDB</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-2xl mb-2">Cloud</div>
                  <div className="text-base text-muted-foreground">AWS Ecosystem</div>
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
