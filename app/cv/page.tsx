import Link from "next/link";

export default function CVPage() {
  return (
    <main className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl rounded-[2rem] border border-border bg-surface p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
            />
          </svg>
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Curriculum Vitae
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Daniel Temesgen
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-foreground/60">
          My CV will be available here once it is uploaded through the admin
          dashboard.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}