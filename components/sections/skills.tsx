import { Section } from "@/components/ui/section";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Interfaces that feel fast, clear, responsive, and natural to use.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "APIs and server-side systems designed around reliability and scale.",
    skills: ["Node.js", "Express", "Python"],
  },
  {
    number: "03",
    title: "Data",
    description:
      "Structured and document-based data systems for real applications.",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Mobile",
    description:
      "Cross-platform experiences built with a practical development workflow.",
    skills: ["Flutter"],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border/60">
      <div>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              Skills & Technologies
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              A toolkit built around{" "}
              <span className="text-primary">building.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
            I work across the stack, choosing technologies based on the
            problem, the product, and the people who will use it.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group bg-surface p-6 transition-colors duration-300 hover:bg-surface-muted sm:p-8 lg:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-primary">
                  {group.number}
                </span>

                <span className="text-lg text-foreground/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">
                  ↗
                </span>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-foreground/55 sm:text-base sm:leading-7">
                  {group.description}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/65 transition-colors duration-200 group-hover:border-primary/20 group-hover:text-foreground sm:px-3.5 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-10 border-t border-border pt-10">
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-8">
            <span
              aria-hidden="true"
              className="text-2xl leading-none text-primary"
            >
              ✦
            </span>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                The right technology for the right problem.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-foreground/55 sm:text-base sm:leading-7">
                I care more about creating useful, maintainable software than
                simply using the newest technology. Every technical choice
                should serve the product and its users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}