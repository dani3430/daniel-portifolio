import { Section } from "@/components/ui/section";

const projects = [
  {
    number: "01",
    title: "Automated Competitor Monitoring Dashboard",
    description:
      "A monitoring dashboard that uses automated web scraping to collect competitor information and present it through a practical interface.",
    technologies: ["HTML", "CSS", "Python", "Web Scraping"],
    featured: true,
  },
  {
    number: "02",
    title: "Addis Eats",
    description:
      "A food-ordering e-commerce application built around a modern digital experience for discovering and ordering food.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    featured: false,
  },
];

export function Projects() {
  return (
    <Section id="projects" className="border-t border-border/60">
      <div>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Projects built to solve{" "}
              <span className="text-primary">real problems.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
            A selection of software work that reflects how I approach
            technology, problem-solving, and product development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-[2rem] border border-border bg-surface transition-all duration-500 hover:border-primary/30 ${
                project.featured
                  ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]"
                  : "lg:grid lg:grid-cols-[0.85fr_1.15fr]"
              }`}
            >
              {/* Visual */}
              <div
                className={`relative min-h-[300px] overflow-hidden bg-surface-muted sm:min-h-[380px] lg:min-h-[480px] ${
                  project.featured ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Decorative background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_40%)] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px]"
                />

                {/* Project number */}
                <div className="absolute left-7 top-7 sm:left-9 sm:top-9">
                  <span className="text-sm font-bold text-primary">
                    {project.number}
                  </span>
                </div>

                {/* Preview placeholder */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-lg">
                    <div className="rounded-2xl border border-border/80 bg-surface/90 p-2 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="overflow-hidden rounded-xl border border-border bg-background">
                        <div className="flex h-9 items-center gap-1.5 border-b border-border px-4">
                          <span className="h-2 w-2 rounded-full bg-foreground/15" />
                          <span className="h-2 w-2 rounded-full bg-foreground/15" />
                          <span className="h-2 w-2 rounded-full bg-foreground/15" />
                        </div>

                        <div className="grid min-h-44 gap-4 p-5 sm:min-h-52 sm:p-7">
                          <div className="flex items-center justify-between">
                            <div className="h-3 w-28 rounded-full bg-foreground/10" />
                            <div className="h-8 w-8 rounded-lg bg-primary/15" />
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            <div className="h-20 rounded-xl border border-border bg-surface-muted" />
                            <div className="h-20 rounded-xl border border-border bg-surface-muted" />
                            <div className="h-20 rounded-xl border border-border bg-surface-muted" />
                          </div>

                          <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Future image indicator */}
                <div className="absolute bottom-7 left-7 rounded-full border border-border/80 bg-surface/80 px-3 py-1.5 text-xs font-medium text-foreground/50 backdrop-blur-sm sm:bottom-9 sm:left-9">
                  Project preview
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${
                  project.featured ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/35">
                    Featured Project
                  </span>

                  <span className="text-sm font-semibold text-primary">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-8 max-w-xl text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
                  {project.description}
                </p>

                <div className="mt-8 h-px w-full bg-border" />

                <div className="mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/35">
                    Built with
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-foreground/65 transition-colors duration-300 group-hover:border-primary/20 group-hover:text-foreground sm:text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Future dynamic content */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-foreground/45 sm:text-base">
            More projects will appear here as the portfolio grows.
          </p>

          <span className="shrink-0 text-sm font-semibold text-primary">
            More in development ↗
          </span>
        </div>
      </div>
    </Section>
  );
}