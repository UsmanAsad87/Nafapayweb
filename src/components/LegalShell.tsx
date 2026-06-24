import { ReactNode } from "react";

/**
 * Shared shell for /privacy and /terms. Gives both pages the same hero
 * band (title + version/date) and the same legal-prose container so
 * future updates to legal copy only need to touch the body content.
 */
export default function LegalShell({
  title,
  version,
  date,
  children,
}: {
  title: string;
  version: string;
  date: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-divider)]">
        <div className="absolute inset-0 brand-gradient-radial pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider">
            Document légal
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
            {title}
          </h1>
          <p className="mt-4 text-[var(--color-ink-muted)] text-sm">
            {version} · IMCO Digital S.A.U · {date}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-14 legal-prose">
        {children}
      </section>
    </>
  );
}
