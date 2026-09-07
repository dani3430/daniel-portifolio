import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Daniel Temesgen
        </h1>

        <p className="text-foreground/70">
          Theme system test
        </p>

        <ThemeToggle />
      </div>
    </main>
  );
}