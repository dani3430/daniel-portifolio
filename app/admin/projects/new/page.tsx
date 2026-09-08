import Link from "next/link";
import { createProject } from "../actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function NewProjectPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-[calc(100svh-5rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <Link
            href="/admin/projects"
            className="text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            ← Back to Projects
          </Link>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Projects
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Add Project
          </h1>

          <p className="mt-3 text-sm leading-6 text-foreground/60">
            Add a project to your portfolio. You can connect it to your live
            demo and source code.
          </p>
        </div>

        <form action={createProject} className="space-y-6">
          <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Basic Information
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Project Title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  placeholder="e.g. Addis Eats"
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  placeholder="Describe what the project does, the problem it solves, and the technologies involved."
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="technologies"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Technologies
                </label>

                <input
                  id="technologies"
                  name="technologies"
                  type="text"
                  placeholder="Next.js, TypeScript, MongoDB"
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                <p className="mt-2 text-xs text-foreground/50">
                  Separate each technology with a comma.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Project Links
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="liveUrl"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Live Demo URL
                </label>

                <input
                  id="liveUrl"
                  name="liveUrl"
                  type="url"
                  placeholder="https://example.com"
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label
                  htmlFor="githubUrl"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  GitHub URL
                </label>

                <input
                  id="githubUrl"
                  name="githubUrl"
                  type="url"
                  placeholder="https://github.com/..."
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Portfolio Settings
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Status
                </label>

                <select
                  id="status"
                  name="status"
                  defaultValue="completed"
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="order"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Display Order
                </label>

                <input
                  id="order"
                  name="order"
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="featured"
                className="mt-1 h-4 w-4 rounded border-border accent-primary"
              />

              <span>
                <span className="block text-sm font-medium text-foreground">
                  Featured Project
                </span>

                <span className="mt-1 block text-xs leading-5 text-foreground/50">
                  Highlight this project in the featured projects section.
                </span>
              </span>
            </label>
          </section>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin/projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="min-h-12 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-hover"
            >
              Save Project
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}