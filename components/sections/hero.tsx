import Image from "next/image";
import { Section } from "@/components/ui/section";

export function Hero() {
  return (
    <Section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-12 sm:py-16 lg:py-12"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid w-full min-w-0 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text */}
       <div className="min-w-0 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/70 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Available for opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Full-Stack Software Developer
          </p>

         <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
             Hi, I&apos;m
            <span className="block text-primary">Daniel Temesgen.</span>
            </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">
            I build modern, responsive, and scalable software experiences
            across the web and beyond.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
  <a
    href="#projects"
    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl"
  >
    View My Work
  </a>

  <a
    href="#contact"
    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-surface px-7 py-3 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-surface-muted"
  >
    Let&apos;s Talk
  </a>

  <a
    href="/cv"
    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-7 py-3 font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
      />
    </svg>

    Download CV
  </a>
</div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/50">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* Profile */}
      <div className="relative mx-auto w-full min-w-0 max-w-sm lg:max-w-md">
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-[2rem] bg-primary/20 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-2xl">
           <div className="relative aspect-[4/4.5] max-h-[560px] overflow-hidden rounded-[1.5rem] bg-surface-muted">
              <Image
                src="/images/profile.jpg"
                alt="Daniel Temesgen"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>

            <div className="flex items-center justify-between px-4 py-4">
              <div>
                <p className="font-semibold text-foreground">
                  Daniel Temesgen
                </p>
                <p className="text-sm text-foreground/50">
                  Full-Stack Developer
                </p>
              </div>

              <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Open to work
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}