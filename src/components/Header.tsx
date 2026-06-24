"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#how", label: "Comment ça marche" },
  { href: "/#trust", label: "Confiance" },
  { href: "/#download", label: "Télécharger" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[var(--color-divider)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/nafapay-logo.png"
            alt="Nafa Pay"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="font-bold text-lg tracking-tight text-[var(--color-ink)]">
            Nafa Pay
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-brand)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#download"
            className="brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition shadow-md shadow-red-500/20"
          >
            Obtenir l'app
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-[var(--color-ink)]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-divider)] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="mt-2 brand-gradient text-center text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-red-500/20"
            >
              Obtenir l'app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
