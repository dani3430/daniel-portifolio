import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          className="shrink-0 text-lg font-bold tracking-tight text-foreground"
        >
          Daniel<span className="text-primary">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile navigation */}
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-border bg-surface text-foreground [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <div className="absolute right-0 top-12 w-56 rounded-xl border border-border bg-surface p-2 shadow-xl">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-surface-muted hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}