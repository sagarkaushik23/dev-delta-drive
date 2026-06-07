import { useRef, useState } from "react";
import { Loader2, Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { openCalendly } from "@/components/Navigation";

const WEB3FORMS_ENDPOINT =
  (import.meta.env.VITE_WEB3FORMS_ENDPOINT as string | undefined) || "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) || "";

const initialFormState = { name: "", email: "", phone: "", message: "" };

type SubmissionStatus = { type: "idle" | "success" | "error"; message: string };

const Contact = () => {
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
      setStatus({ type: "error", message: "Please fill out your name, email, and project details." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus({ type: "error", message: "Contact form is temporarily unavailable. Please email me directly." });
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = new FormData(formRef.current!);
      submissionData.set("name", trimmedName);
      submissionData.set("email", trimmedEmail.toLowerCase());
      submissionData.set("message", trimmedMessage);
      submissionData.set("subject", `New Portfolio Contact - ${trimmedName}`);
      submissionData.set("access_key", WEB3FORMS_ACCESS_KEY);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: submissionData,
        headers: { Accept: "application/json" },
      });

      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error(result.message || "Failed to send message.");

      setStatus({ type: "success", message: "Message sent! I'll get back to you within 24 hours." });
      setFormData(initialFormState);
      formRef.current?.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 bg-[#0D0D14] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#6366F1] text-sm font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Let's build something great
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Prefer a call? Skip the form and book a time directly.
            </p>
          </div>

          {/* Calendly CTA */}
          <div className="flex justify-center mb-12">
            <button
              id="contact-book-call"
              onClick={openCalendly}
              className="inline-flex items-center gap-3 bg-[#10B981] text-white px-8 py-4 rounded-xl text-base font-bold glow-pulse hover:bg-[#0EA472] transition-all hover:-translate-y-0.5"
            >
              <Calendar size={20} />
              Book a Free 15-min Call
            </button>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#1E1E2E]" />
            <span className="text-[#475569] text-sm px-3">or send a message</span>
            <div className="h-px flex-1 bg-[#1E1E2E]" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left contact info */}
            <div className="space-y-4">
              {[
                { Icon: Mail, label: "Email", value: "sagarkaushikme@gmail.com", href: "mailto:sagarkaushikme@gmail.com" },
                { Icon: Phone, label: "Phone", value: "+91 8287752676", href: "tel:+918287752676" },
                { Icon: MapPin, label: "Location", value: "India (Serving global clients)", href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#6366F1]" />
                  </div>
                  <div>
                    <p className="text-[#475569] text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-[#6366F1] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8">
                <form ref={formRef} onSubmit={handleSubmit} action={WEB3FORMS_ENDPOINT} method="POST" className="space-y-5">
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  <input type="hidden" name="subject" value={`New Portfolio Contact - ${formData.name || "Visitor"}`} />
                  <div className="hidden" aria-hidden="true">
                    <input name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Your Name *", type: "text", placeholder: "John Doe" },
                      { id: "email", label: "Email Address *", type: "email", placeholder: "john@example.com" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-[#94A3B8] text-sm font-medium mb-2">
                          {label}
                        </label>
                        <input
                          id={id}
                          name={id}
                          type={type}
                          required={id !== "phone"}
                          value={formData[id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full bg-[#0A0A0F] border border-[#1E1E2E] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6366F1]/50 placeholder:text-[#475569] transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#94A3B8] text-sm font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6366F1]/50 placeholder:text-[#475569] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#94A3B8] text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — what problem you're solving, your timeline, and budget range..."
                      rows={5}
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#6366F1]/50 placeholder:text-[#475569] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#6366F1] text-white py-4 rounded-xl font-semibold text-base hover:bg-[#5558E8] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send size={16} />
                      </span>
                    )}
                  </button>

                  {status.type !== "idle" && (
                    <div
                      className={`rounded-xl border px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "border-[#10B981]/30 bg-[#10B981]/08 text-[#10B981]"
                          : "border-red-500/30 bg-red-500/08 text-red-400"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
