import { ArrowRight, BriefcaseBusiness, FolderGit2, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-subtle py-28 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-15%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-[180px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          {/* Content column */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Available for new projects worldwide
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Building dependable <span className="text-primary">full-stack platforms</span>
              </h1>
              <p className="text-lg font-medium text-primary md:text-xl">
                TypeScript • React • Node.js • AWS
              </p>
              <p className="mx-auto max-w-2xl text-base leading-[1.75] text-muted-foreground md:text-lg">
                I craft production-grade web applications for startups and enterprises—covering elegant frontends, resilient APIs, and cloud infrastructure engineered for scale.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
              >
                Let's Work Together
                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </Button>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                variant="outline"
                className="h-14 rounded-xl border-2 border-primary/20 px-8 text-base font-semibold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/5"
              >
                View My Work
              </Button>
            </div>

            <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="mailto:sagarkaushikme@gmail.com"
                className="group inline-flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email Sagar Kaushik"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                sagarkaushikme@gmail.com
              </a>
              <div className="h-px w-full bg-border sm:hidden" role="presentation" />
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                <span>Trusted by startups & enterprises</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-3 sm:gap-6">
              <div className="rounded-xl border border-border bg-white/80 px-6 py-5 text-left shadow-sm backdrop-blur-sm">
                <BriefcaseBusiness className="mb-3 size-6 text-primary" aria-hidden="true" />
                <p className="text-2xl font-bold text-foreground">2.5+</p>
                <p className="text-sm text-muted-foreground">Years experience delivering high-impact products</p>
              </div>
              <div className="rounded-xl border border-border bg-white/80 px-6 py-5 text-left shadow-sm backdrop-blur-sm">
                <FolderGit2 className="mb-3 size-6 text-primary" aria-hidden="true" />
                <p className="text-2xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Product releases shipped end-to-end</p>
              </div>
              <div className="rounded-xl border border-border bg-white/80 px-6 py-5 text-left shadow-sm backdrop-blur-sm">
                <ShieldCheck className="mb-3 size-6 text-primary" aria-hidden="true" />
                <p className="text-2xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Reliability across mission-critical systems</p>
              </div>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-xl">
            <div className="relative flex w-full max-w-sm flex-col items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[42px] border border-white/40 bg-white/70 shadow-[0_30px_80px_rgba(39,82,165,0.18)] ring-1 ring-white/60">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-slate-900/40 opacity-80" aria-hidden="true" />
                <img
                  src={professionalHeadshot}
                  alt="Sagar Kaushik, full-stack developer"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[42px] ring-1 ring-white/50" aria-hidden="true" />

                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-[28px] border border-white/15 bg-slate-900/85 px-6 py-4 text-white shadow-[0_16px_40px_rgba(15,23,42,0.35)] backdrop-blur">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <div
                      key={index}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-200 hover:scale-105"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative -mt-8 w-[260px] sm:w-[320px]">
                <div className="absolute inset-0 rounded-3xl bg-primary/15 blur-xl" aria-hidden="true" />
                <div className="relative flex items-center gap-3 rounded-3xl border border-border bg-white/95 px-5 py-4 text-left text-foreground shadow-lg backdrop-blur">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Instant Response - Available 24/7</p>
                    <p className="text-xs text-muted-foreground">Quick Solutions - Quick turnaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/80 text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:text-primary"
          aria-label="Scroll down"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
