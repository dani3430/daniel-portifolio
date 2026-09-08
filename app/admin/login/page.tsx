"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const urlError = searchParams.get("error");

  function getUrlErrorMessage() {
    if (urlError === "CredentialsSignin") {
      return "Invalid email or password.";
    }

    if (urlError) {
      return "Unable to sign in. Please try again.";
    }

    return "";
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result || result.error) {
        setErrorMessage(
          result?.error === "CredentialsSignin"
            ? "Invalid email or password."
            : "Unable to sign in. Please try again.",
        );
        setLoading(false);
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const displayedError = errorMessage || getUrlErrorMessage();

  return (
    <main className="flex min-h-[calc(100svh-5rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3a4 4 0 0 0-4 4v2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a4 4 0 0 0-4-4Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14v2"
              />
            </svg>
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Admin Panel
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            Welcome back
          </h1>

          <p className="mt-3 text-sm leading-6 text-foreground/60">
            Sign in to manage your portfolio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="••••••••"
            />
          </div>

          {displayedError && (
            <div
              role="alert"
              aria-live="polite"
              className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400"
            >
              {displayedError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="min-h-12 w-full rounded-xl bg-primary px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}