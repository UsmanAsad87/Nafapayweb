import Link from "next/link";

// Minimal pre-launch footer — just legal links and a copyright line.
// No social, no marketing copy, no "what we do" blurb. The team will
// flesh this back out post-launch (15 juillet 2026).
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-divider">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-muted">
        <p>© {new Date().getFullYear()} IMCO Digital S.A.U</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-brand transition-colors">
            Confidentialité
          </Link>
          <Link href="/terms" className="hover:text-brand transition-colors">
            CGU
          </Link>
        </div>
      </div>
    </footer>
  );
}
