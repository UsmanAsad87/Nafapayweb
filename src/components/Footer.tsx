import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Image
              src="/nafapay-logo.png"
              alt="Nafa Pay"
              width={40}
              height={40}
              className="rounded-lg bg-white/10 p-1"
            />
            <span className="text-xl font-bold tracking-tight">Nafa Pay</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-md leading-relaxed">
            Épargnez maintenant, achetez plus tard. La marketplace
            sénégalaise qui sécurise vos paiements progressifs via un compte
            de cantonnement chez FBN Bank Sénégal.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Produit
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/#features" className="hover:text-white transition">Fonctionnalités</Link></li>
            <li><Link href="/#how" className="hover:text-white transition">Comment ça marche</Link></li>
            <li><Link href="/#trust" className="hover:text-white transition">Sécurité</Link></li>
            <li><Link href="/#download" className="hover:text-white transition">Télécharger</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Légal
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/privacy" className="hover:text-white transition">Politique de confidentialité</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Conditions générales</Link></li>
          </ul>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mt-8">
            Contact
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>Scat Urbam, Villa F22, Dakar, Sénégal</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0" />
              <a href="tel:+221710107070" className="hover:text-white transition">71-010-70-70</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0" />
              <a href="mailto:contact@imco.digital" className="hover:text-white transition">contact@imco.digital</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} IMCO Digital S.A.U. Tous droits réservés.</p>
          <p>Édité par IMCO Digital — Dakar, Sénégal</p>
        </div>
      </div>
    </footer>
  );
}
