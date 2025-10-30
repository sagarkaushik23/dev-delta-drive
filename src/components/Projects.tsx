import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  highlights: string[];
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "High-Performance E-Commerce API Platform",
      problem: "Client needed a scalable backend API for a fast-growing e-commerce platform handling 10,000+ daily users",
      solution: "Built a production-grade REST API using Node.js & TypeScript with JWT authentication, optimized database queries, and implemented caching with Redis. Deployed on AWS EC2 with CloudWatch monitoring.",
      technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Redis", "JWT", "AWS EC2", "AWS RDS", "CloudWatch", "Postman"],
      results: [
        "API response time reduced from 800ms to 150ms",
        "Handles 5,000 concurrent requests",
        "99.9% uptime achieved",
        "Zero critical bugs in production"
      ],
      highlights: [
        "Implemented connection pooling for database efficiency",
        "Query optimization reduced database load by 60%",
        "Redis caching improved response times for frequent queries",
        "Automatic scaling based on traffic patterns"
      ]
    },
    {
      title: "Real-Time Chat Application with WebSocket Integration",
      problem: "Build a full-stack real-time messaging platform for team collaboration with enterprise-grade security",
      solution: "Created React frontend with TypeScript for UI, Node.js backend with WebSocket support, PostgreSQL database with optimized schema, and deployed on AWS Lambda for serverless scalability.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "WebSocket", "PostgreSQL", "AWS Lambda", "API Gateway", "AWS Cognito", "Docker"],
      results: [
        "Real-time message delivery <100ms latency",
        "Supports 1000+ concurrent users",
        "Secure authentication with AWS Cognito",
        "Fully responsive design (mobile & desktop)"
      ],
      highlights: [
        "JWT token refresh mechanism for seamless sessions",
        "Automatic reconnection logic for network interruptions",
        "Real-time typing indicators and read receipts",
        "End-to-end message encryption"
      ]
    },
    {
      title: "Microservices Architecture on AWS for SaaS Platform",
      problem: "Monolithic application needed to be split into microservices for independent scaling and deployment",
      solution: "Architected microservices using AWS Lambda, API Gateway, and EventBridge. Implemented inter-service communication through events. Set up CI/CD pipelines for automated deployment.",
      technologies: ["AWS Lambda", "API Gateway", "EventBridge", "DynamoDB", "CloudFormation", "Node.js", "TypeScript", "Docker", "AWS CodeCommit"],
      results: [
        "Reduced deployment time from 2 hours to 5 minutes",
        "Cost reduction of 40% with serverless architecture",
        "Improved system reliability to 99.95% uptime",
        "Independent service scaling based on demand"
      ],
      highlights: [
        "Event-driven architecture for loose coupling",
        "Infrastructure as Code with CloudFormation",
        "Comprehensive monitoring with CloudWatch",
        "Automated rollback on deployment failures"
      ]
    },
    {
      title: "High-Volume Data Pipeline with Python & Node.js",
      problem: "Process and analyze 100GB+ of daily data with real-time dashboard updates for business intelligence",
      solution: "Built data pipeline using Python for ETL, Node.js REST API for queries, RDS PostgreSQL for warehousing, and CloudWatch for monitoring. Optimized queries reduced processing time by 60%.",
      technologies: ["Python", "Node.js", "PostgreSQL", "AWS Lambda", "AWS RDS", "CloudWatch", "EventBridge", "TypeScript", "Postman"],
      results: [
        "Processes 100M+ records daily",
        "Query response time <500ms",
        "Real-time dashboard updates",
        "99.9% data accuracy maintained"
      ],
      highlights: [
        "Batch processing optimization with parallel execution",
        "Database indexing strategy for fast queries",
        "Automated alerting for data anomalies",
        "Incremental data processing for efficiency"
      ]
    },
    {
      title: "Enterprise-Grade Authentication with AWS Cognito & OAuth2",
      problem: "Multi-tenant SaaS application needed secure, scalable authentication with third-party integrations",
      solution: "Implemented AWS Cognito for user management, OAuth2 for third-party integrations, custom JWT tokens for API security, and role-based access control (RBAC).",
      technologies: ["AWS Cognito", "OAuth2", "JWT", "Node.js", "TypeScript", "React", "Express", "Security Best Practices"],
      results: [
        "Zero authentication-related security breaches",
        "<100ms login time",
        "Supports 50,000+ active users",
        "99.99% authentication success rate"
      ],
      highlights: [
        "Bcrypt password hashing with salt rounds",
        "Token expiration and refresh strategies",
        "Security headers (CORS, CSP, HSTS)",
        "Multi-factor authentication (MFA) support"
      ]
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world solutions delivering measurable business results
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <span className="font-semibold text-foreground">Problem: </span>
                        {project.problem}
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Solution: </span>
                        {project.solution}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {project.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>

                  {expandedProject === index && (
                    <div className="pt-4 border-t border-border space-y-3 animate-fade-in">
                      <h4 className="font-semibold text-foreground">Key Technical Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    onClick={() => toggleProject(index)}
                    className="w-full mt-2 text-primary hover:text-primary/80 hover:bg-primary/10"
                  >
                    {expandedProject === index ? (
                      <>
                        Show Less <ChevronUp className="ml-2" size={16} />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown className="ml-2" size={16} />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
