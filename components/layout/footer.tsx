const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dani3430",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dani3430",
  },
  {
    label: "X",
    href: "https://x.com/daTemesgen",
  },
  {
    label: "Telegram",
    href: "https://t.me/AbjuuSirrii",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@danieltemesgen581",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              Daniel<span className="text-primary">.</span>
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-foreground/50">
              Full-Stack Software Developer building modern, responsive, and
              practical software experiences.
            </p>

            <a
              href="mailto:danieltemesgen75@gmail.com"
              className="mt-4 inline-block text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              danieltemesgen75@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground/50 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Daniel Temesgen. All rights reserved.
          </p>

          <p>
            Built with <span className="font-medium text-primary">Next.js</span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}