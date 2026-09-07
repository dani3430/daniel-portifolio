import { Section } from "@/components/ui/section";

const expertise = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building modern full-stack applications, APIs, scalable architectures, and responsive digital experiences.",
  },
  {
    number: "02",
    title: "Agritech",
    description:
      "Applying technology to agricultural challenges, value chains, and opportunities across the agriculture sector.",
  },
  {
    number: "03",
    title: "Business & Marketing",
    description:
      "Understanding customers, markets, products, and business models to build technology around real business needs.",
  },
  {
    number: "04",
    title: "SaaS Products",
    description:
      "Turning ideas into useful software products designed to solve problems, create value, and scale with users.",
  },
];

export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <div className="space-y-24">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              About Me
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
              Where domain knowledge meets technology.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-lg leading-8 text-foreground/65 sm:text-xl sm:leading-9">
              I&apos;m a self-taught Full-Stack Software Developer who brings
              together technology, agriculture, business, and product thinking
              to build practical digital solutions.
            </p>
          </div>
        </div>

        {/* Main story */}
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
          {/* Side label */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-foreground/50">
                  My Story
                </span>
              </div>

              <div className="mt-6 h-px w-16 bg-primary" />
            </div>
          </div>

          {/* Story content */}
          <div className="max-w-4xl space-y-8">
            <p className="text-lg leading-8 text-foreground/70 sm:text-xl sm:leading-9">
              I graduated from{" "}
              <strong className="font-semibold text-foreground">
                Mekdela Amba University
              </strong>{" "}
              with a degree in{" "}
              <strong className="font-semibold text-foreground">
                Agribusiness and Value Chain Management
              </strong>
              .
            </p>

            <p className="text-lg leading-8 text-foreground/70 sm:text-xl sm:leading-9">
              My academic background gave me a strong understanding of
              agriculture, businesses, markets, customers, and value-chain
              systems. It also taught me to look at problems from both a
              business and practical perspective.
            </p>

            <p className="text-lg leading-8 text-foreground/70 sm:text-xl sm:leading-9">
              My passion for technology eventually led me into software
              development. I became a self-taught developer through continuous
              learning, experimentation, and building real applications.
            </p>

            <p className="text-lg leading-8 text-foreground/70 sm:text-xl sm:leading-9">
              Today, I build modern web, backend, and software solutions using
              technologies including{" "}
              <strong className="font-semibold text-foreground">
                Next.js, React, TypeScript, Node.js, Python, MongoDB, and
                PostgreSQL
              </strong>
              .
            </p>

            <p className="text-lg leading-8 text-foreground/70 sm:text-xl sm:leading-9">
              What makes my perspective different is the combination of{" "}
              <strong className="font-semibold text-foreground">
                technology and domain expertise
              </strong>
              . I have a particular interest in{" "}
              <strong className="font-semibold text-foreground">
                agritech, business, marketing, and SaaS products
              </strong>
              — areas where technology can transform complex problems into
              practical and scalable solutions.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="rounded-[2rem] border border-border bg-surface p-7 shadow-sm sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
                Education
              </p>

              <p className="mt-3 text-sm text-foreground/40">
                Academic foundation
              </p>
            </div>

            <div>
              <h3 className="max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Agribusiness & Value Chain Management
              </h3>

              <p className="mt-3 text-lg font-medium text-foreground/60">
                Mekdela Amba University
              </p>

              <div className="mt-7 h-px w-full bg-border" />

              <p className="mt-7 max-w-3xl text-base leading-7 text-foreground/60 sm:text-lg sm:leading-8">
                An academic foundation in agriculture, business, markets, and
                value-chain systems — now combined with software development,
                technology, and product thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div>
          <div className="mb-10 grid gap-5 sm:flex sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
                Domain Expertise
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
                More than just code.
              </h3>
            </div>

            <p className="max-w-md text-base leading-7 text-foreground/55">
              I combine technical skills with an understanding of the
              industries, markets, and people that technology is built to
              serve.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.number}
                className="group bg-surface p-7 transition-colors duration-300 hover:bg-surface-muted sm:p-9 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    {item.number}
                  </span>

                  <span className="text-lg text-foreground/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary">
                    ↗
                  </span>
                </div>

                <h4 className="mt-12 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h4>

                <p className="mt-4 max-w-lg text-base leading-7 text-foreground/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="border-t border-border pt-12">
          <p className="max-w-5xl text-2xl font-medium leading-9 tracking-tight text-foreground sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-[1.25]">
            I&apos;m interested in building technology that is not only
            technically strong, but also understands the{" "}
            <span className="text-primary">
              people, businesses, and problems
            </span>{" "}
            behind it.
          </p>
        </div>
      </div>
    </Section>
  );
}