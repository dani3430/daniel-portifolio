import { Section } from "@/components/ui/section";

const contactLinks = [
  {
    label: "Email",
    value: "danieltemesgen75@gmail.com",
    href: "mailto:danieltemesgen75@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dani3430",
    href: "https://linkedin.com/in/dani3430",
  },
  {
    label: "GitHub",
    value: "github.com/dani3430",
    href: "https://github.com/dani3430",
  },
  {
    label: "Telegram",
    value: "@AbjuuSirrii",
    href: "https://t.me/AbjuuSirrii",
  },
];

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Introduction */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
            Get In Touch
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-primary">meaningful.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/60 sm:text-xl sm:leading-9">
            Have an idea, a project, or simply want to connect? I&apos;d be
            happy to hear from you.
          </p>

          {/* Contact links */}
          <div className="mt-10 space-y-2">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 transition-all duration-300 hover:border-border hover:bg-surface"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="text-xs font-bold text-primary">
                    0{index + 1}
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/35">
                      {link.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-foreground/70 sm:text-base">
                      {link.value}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-lg text-foreground/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-bold text-foreground">
              Send me a message
            </p>

            <p className="mt-2 text-sm leading-6 text-foreground/50">
              Tell me a little about what you&apos;re working on.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-foreground/70"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-foreground/70"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-foreground/70"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-foreground/70"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your idea, project, or question..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl"
            >
              Send Message
              <span className="ml-2">↗</span>
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}