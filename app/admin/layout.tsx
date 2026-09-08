import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-[calc(100svh-5rem)] bg-background">
      <div className="mx-auto flex w-full max-w-[1600px]">
        <aside className="hidden w-64 shrink-0 border-r border-border bg-surface lg:block">
          <div className="sticky top-20 flex min-h-[calc(100svh-5rem)] flex-col p-5">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Admin Panel
              </p>

              <h2 className="mt-2 text-xl font-bold text-foreground">
                Portfolio Manager
              </h2>
            </div>

            <nav className="space-y-1">
              <AdminNavLink href="/admin" label="Dashboard" active />
              <AdminNavLink href="/admin/projects" label="Projects" />
              <AdminNavLink href="/admin/skills" label="Skills" />
              <AdminNavLink href="/admin/experience" label="Experience" />
              <AdminNavLink href="/admin/blog" label="Blog" />
              <AdminNavLink href="/admin/profile" label="Profile" />
              <AdminNavLink href="/admin/cv" label="CV" />
            </nav>

            <div className="mt-auto border-t border-border pt-5">
              <p className="truncate text-xs text-foreground/50">
                {session.user.email}
              </p>

              <Link
                href="/"
                className="mt-3 block text-sm font-medium text-primary transition-colors hover:text-primary-hover"
              >
                ← View Portfolio
              </Link>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="border-b border-border bg-surface px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Admin Panel
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-foreground">
                  Portfolio Manager
                </p>
              </div>

              <Link
                href="/"
                className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
              >
                Portfolio
              </Link>
            </div>

            <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
              <MobileNavLink href="/admin" label="Dashboard" />
              <MobileNavLink href="/admin/projects" label="Projects" />
              <MobileNavLink href="/admin/skills" label="Skills" />
              <MobileNavLink href="/admin/experience" label="Experience" />
              <MobileNavLink href="/admin/blog" label="Blog" />
              <MobileNavLink href="/admin/profile" label="Profile" />
              <MobileNavLink href="/admin/cv" label="CV" />
            </nav>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

function AdminNavLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? "bg-primary/10 text-primary"
          : "text-foreground/70 hover:bg-background hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="shrink-0 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
    >
      {label}
    </Link>
  );
}