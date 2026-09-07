import { Section } from "@/components/ui/section";

const experiences = [
  {
    number: "01",
    period: "1 Year",
    type: "Self-Directed",
    title: "Self-Taught Software Developer",
    organization: "Independent Learning & Development",
    description:
      "Built my foundation in software development through one year of self-directed learning, hands-on experimentation, and consistent practice. I developed my skills across frontend, backend, databases, and modern web technologies by building applications and exploring how real software systems are designed.",
    skills: [
      "Web Development",
      "Backend Development",
      "Databases",
      "Problem Solving",
    ],
  },
  {
    number: "02",
    period: "6 Months",
    type: "Trainee & Internship",
    title: "Web & App Development Trainee / Intern",
    organization: "Qiyas Program — IBT College of Canada",
    description:
      "Currently developing my skills through a six-month training and internship experience with the Qiyas Program at IBT College of Canada. I am gaining practical experience building web and mobile applications, working with modern development technologies, and applying software development concepts to real projects.",
    skills: [
      "Web Applications",
      "Mobile Applications",
      "Modern Technologies",
      "Practical Development",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/60">
      <div>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              Experience
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              From learning independently to{" "}
              <span className="text-primary">building professionally.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
            My development journey has been shaped by continuous learning,
            practical projects, and an opportunity to grow through real-world
            training.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[15px] top-8 hidden w-px bg-border sm:block"
          />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="group relative grid gap-6 sm:grid-cols-[32px_1fr] sm:gap-8"
              >
                {/* Timeline marker */}
                <div className="relative hidden sm:block">
                  <span className="absolute left-1/2 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background" />
                </div>

                {/* Experience card */}
                <div className="rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-9 lg:p-10">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-bold text-primary">
                          {experience.number}
                        </span>

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        {experience.title}
                      </h3>

                      <p className="mt-2 text-base font-medium text-foreground/50 sm:text-lg">
                        {experience.organization}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm font-semibold text-foreground/35">
                      {experience.period}
                    </span>
                  </div>

                  <div className="mt-7 h-px bg-border" />

                  <p className="mt-7 max-w-4xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
                    {experience.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/60 sm:px-3.5 sm:py-2 sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 border-t border-border pt-10">
          <p className="max-w-4xl text-xl font-medium leading-8 tracking-tight text-foreground sm:text-2xl sm:leading-9">
            From learning independently to building with others, my journey is
            driven by{" "}
            <span className="text-primary">
              curiosity, practical development, and continuous growth.
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}