import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ENDPOINT =
  (import.meta.env.VITE_WEB3FORMS_ENDPOINT as string | undefined) || "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) || "";


const initialFormState = {
  name: "",
  
  email: "",
  phone: "",
  message: "",
};

type SubmissionStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      const message = "Please fill out your name, email, and project details before submitting.";
      setStatus({ type: "error", message });
      toast({ title: message });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      const message = "Please enter a valid email address.";
      setStatus({ type: "error", message });
      toast({ title: message });
      return;
    }

    if (!formRef.current) {
      console.error("[Web3Forms] Form reference is not available.");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      const message = "Contact form is temporarily unavailable. Please email me directly.";
      setStatus({ type: "error", message });
      toast({ title: message });
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = new FormData(formRef.current);
      const botcheck = submissionData.get("botcheck");

      if (botcheck) {
        console.warn("[Web3Forms] Honeypot triggered.");
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
        return;
      }

      submissionData.set("name", trimmedName);
      submissionData.set("email", trimmedEmail.toLowerCase());
      submissionData.set("message", trimmedMessage);
      submissionData.set("subject", `New Portfolio Contact - ${trimmedName}`);
      submissionData.set("access_key", WEB3FORMS_ACCESS_KEY);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: submissionData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        const errorMessage = result.message || "Failed to send message. Please try again later.";
        throw new Error(errorMessage);
      }

      console.log("[Web3Forms] Message sent successfully", {
        name: trimmedName,
        email: trimmedEmail,
        phone: formData.phone,
      });

      const successMessage = "Your message has been sent successfully! I'll get back to you soon.";
      setStatus({ type: "success", message: successMessage });
      toast({ title: successMessage });

      setFormData(initialFormState);
      formRef.current.reset();
    } catch (error) {
      console.error("[Web3Forms] Failed to send message", error);
      const message =
        error instanceof Error ? error.message : "Failed to send message. Please try again later.";
      setStatus({ type: "error", message });
      toast({ title: message });
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
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build Something Great Together
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Get in touch and let's discuss how I can help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-8 bg-white border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:sagarkaushikme@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      sagarkaushikme@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <Phone className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+918287752676"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      +91 8287752676
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <MapPin className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground text-base">
                      India (Serving global clients)
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="md:col-span-2 p-10 bg-white border border-border animate-fade-in rounded-xl shadow-sm">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
            action={WEB3FORMS_ENDPOINT}
                method="POST"
                className="space-y-6"
              >
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value={`New Portfolio Contact - ${formData.name || "Visitor"}`} />
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botcheck" className="sr-only">
                    Leave this field blank
                  </label>
                  <input
                    id="botcheck"
                    name="botcheck"
                    type="checkbox"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">
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
                      className="bg-background border-border focus:border-primary h-12 text-base rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
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
                      className="bg-background border-border focus:border-primary h-12 text-base rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-medium text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-background border-border focus:border-primary h-12 text-base rounded-lg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
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
                    className="bg-background border-border focus:border-primary resize-none text-base rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
                <div aria-live="polite">
                  {status.type !== "idle" && (
                    <div
                      className={`rounded-lg border px-4 py-3 text-sm transition-all duration-200 ${
                        status.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-destructive/40 bg-destructive/10 text-destructive"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
