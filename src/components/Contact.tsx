import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// EmailJS configuration from environment variables (set in .env.local)
const EMAILJS_USER_ID = (import.meta as any).env.VITE_EMAILJS_USER_ID as string;
const EMAILJS_SERVICE_ID = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID as string;

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on mount using User ID from env
  useEffect(() => {
    try {
      const emailjs = (window as any).emailjs;
      if (emailjs && typeof emailjs.init === "function") {
        if (!EMAILJS_USER_ID) {
          console.warn("[EmailJS] Missing VITE_EMAILJS_USER_ID env variable");
          return;
        }
        emailjs.init(EMAILJS_USER_ID);
        console.log("[EmailJS] Initialized via React with env User ID");
      }
    } catch (err) {
      console.error("[EmailJS] Initialization error", err);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const emailjs = (window as any).emailjs;

      if (!emailjs) {
        console.error("[EmailJS] SDK not found on window. Make sure the CDN script is loaded in index.html");
        throw new Error("EmailJS SDK not loaded");
      }

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        console.error("[EmailJS] Missing Service ID or Template ID from env");
        throw new Error("EmailJS IDs not configured");
      }

      // Send the form using EmailJS sendForm API
      // This sends all inputs with name attributes in the form
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current);

      console.log("[EmailJS] Message sent successfully", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      toast({
        title: "Your message has been sent successfully! I'll get back to you soon.",
      });

      // Clear form UI and state
      setFormData({ name: "", email: "", phone: "", message: "" });
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("[EmailJS] Failed to send message", error);
      toast({
        title: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Build Something Great Together
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Get in touch and let's discuss how I can help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:sagarkaushikme@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sagarkaushikme@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+918287752676"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8287752676
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      India (Serving global clients)
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="md:col-span-2 p-8 bg-card border-border animate-fade-in">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
