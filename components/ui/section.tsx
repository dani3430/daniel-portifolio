import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}