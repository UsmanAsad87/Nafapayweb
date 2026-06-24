import Image from "next/image";
import Link from "next/link";

// Pre-launch teaser. Deliberately reveals nothing about the product —
// marketplace mechanics, partner banks, and the "save-now buy-later"
// model stay private until launch on 15 juillet 2026. Only the legal
// pages (/privacy, /terms) need real content because the app stores
// require those URLs to be live before listings are approved.
export default function Home() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      <div className="absolute inset-0 brand-gradient-radial pointer-events-none" aria-hidden />

      <div className="relative">
        <Image
          src="/nafapay-logo.png"
          alt="Nafa Pay"
          width={88}
          height={88}
          className="rounded-2xl mx-auto shadow-xl shadow-red-500/20"
          priority
        />

        <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          Nafa Pay
        </h1>

        <p className="mt-4 text-base text-ink-muted">
          Bientôt disponible — 15 juillet 2026
        </p>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-ink-muted">
          <Link href="/privacy" className="hover:text-brand transition-colors">
            Politique de confidentialité
          </Link>
          <span className="w-px h-4 bg-divider" />
          <Link href="/terms" className="hover:text-brand transition-colors">
            Conditions générales
          </Link>
        </div>
      </div>
    </section>
  );
}
