import Image from "next/image";
import Link from "next/link";

// Minimal chrome for the pre-launch site. No nav, no CTA, no
// product-positioning copy — just a logo that links back to /. The
// teaser homepage already centers the brand visually, so the header is
// really there to give legal-page visitors a way home.
export default function Header() {
  return (
    <header className="border-b border-divider bg-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 h-14 flex items-center">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Nafa Pay — accueil">
          <Image
            src="/nafapay-logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-md"
            priority
          />
          <span className="font-bold tracking-tight text-ink">Nafa Pay</span>
        </Link>
      </div>
    </header>
  );
}
