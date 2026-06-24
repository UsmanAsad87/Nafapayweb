import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Shell used by /privacy and /terms. Provides the slim site chrome
 * (logo header + minimal footer) plus the title band + legal-prose
 * container. The root layout intentionally renders no chrome so the
 * pre-launch homepage stays a single-screen teaser; only the legal
 * pages opt into header/footer via this component.
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
      <Header />

      <section className="relative overflow-hidden border-b border-divider">
        <div className="absolute inset-0 brand-gradient-radial pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">
            Document légal
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-4 text-ink-muted text-sm">
            {version} · IMCO Digital S.A.U · {date}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-14 legal-prose">
        {children}
      </section>

      <Footer />
    </>
  );
}
