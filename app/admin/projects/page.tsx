import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Project } from "@/lib/models/project";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminProjectsPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  await connectToDatabase();

  const projects = await Project.find({})
    .sort({ order: 1, createdAt: -1 })
    .lean();

  return (
    <main className="min-h-[calc(100svh-5rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Projects
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              Manage Projects
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/60">
              View and manage the projects displayed on your portfolio.
            </p>
          </div>

          <button
            type="button"
            className="min-h-11 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-hover"
          >
            Add Project
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          {projects.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <h2 className="text-lg font-semibold text-foreground">
                No projects yet
              </h2>

              <p className="mt-2 text-sm text-foreground/60">
                Your projects will appear here once you add them.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {projects.map((project) => (
                <div
                  key={project._id.toString()}
                  className="flex flex-col gap-4 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-lg font-semibold text-foreground">
                        {project.title}
                      </h2>

                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium capitalize text-primary">
                        {project.status}
                      </span>

                      {project.featured && (
                        <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground/60">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-6 text-foreground/60">
                      {project.description}
                    </p>

                    {project.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                       {project.technologies.map((technology: string) => (
                          <span
                            key={technology}
                            className="rounded-lg bg-background px-2.5 py-1 text-xs text-foreground/60"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-4">
  <span className="text-sm text-foreground/50">
    Order: {project.order}
  </span>

  <Link
    href={`/admin/projects/${project._id.toString()}/edit`}
    className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
  >
    Edit
  </Link>
</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}