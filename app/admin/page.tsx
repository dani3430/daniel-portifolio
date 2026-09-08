import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-[calc(100svh-5rem)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Admin Dashboard
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                Welcome back, {session.user.name ?? "Admin"}
              </h1>

              <p className="mt-3 text-sm leading-6 text-foreground/60">
                Manage your portfolio content from one place.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background px-4 py-3">
              <p className="text-xs text-foreground/50">Signed in as</p>

              <p className="mt-1 text-sm font-medium text-foreground">
                {session.user.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Projects",
              description:
                "Manage portfolio projects and featured work.",
            },
            {
              title: "Skills",
              description:
                "Manage learned and currently learning skills.",
            },
            {
              title: "Experience",
              description:
                "Manage your professional and learning experience.",
            },
            {
              title: "Blog",
              description:
                "Create and manage blog posts.",
            },
            {
              title: "Profile",
              description:
                "Update your personal portfolio information.",
            },
            {
              title: "CV",
              description:
                "Upload and manage your active CV.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-foreground">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-foreground/60">
                {item.description}
              </p>

              <div className="mt-5">
                <span className="text-sm font-medium text-primary">
                  Coming next →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}