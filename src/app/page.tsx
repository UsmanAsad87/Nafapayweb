import Link from "next/link";
import {
  ShieldCheck,
  Wallet,
  Store,
  Smartphone,
  TrendingUp,
  Lock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
} from "lucide-react";

// All copy is in French (fr_SN) to match the legal docs and the target
// market. If we ever ship an English variant we'd split this into an
// `i18n/messages.ts` and pull from `useTranslations` — but for the
// store-listing requirement that's not needed yet.

// ─── HERO ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden />
      <div className="absolute inset-0 brand-gradient-radial pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 sm:pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-pale)] text-[var(--color-brand-deep)] text-xs font-medium border border-[var(--color-brand)]/15">
              <Sparkles size={14} /> Save Now · Buy Later
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.05]">
              Épargnez maintenant,{" "}
              <span className="bg-gradient-to-r from-[var(--color-brand-soft)] to-[var(--color-brand)] bg-clip-text text-transparent">
                achetez plus tard
              </span>
              .
            </h1>

            <p className="mt-6 text-lg text-[var(--color-ink-soft)] max-w-xl leading-relaxed">
              Nafa Pay est la marketplace sénégalaise qui vous permet de
              financer progressivement vos achats auprès de vendeurs
              partenaires. Chaque versement est sécurisé sur un compte de
              cantonnement dédié chez{" "}
              <span className="font-semibold text-[var(--color-secondary)]">
                FBN Bank Sénégal
              </span>
              .
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#download"
                className="brand-gradient text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-red-500/25 hover:opacity-95 transition flex items-center justify-center gap-2"
              >
                Télécharger l&apos;application
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#how"
                className="bg-white border border-[var(--color-divider)] text-[var(--color-ink)] font-semibold px-6 py-3.5 rounded-xl hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition text-center"
              >
                Comment ça marche ?
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-ink-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[var(--color-accent-green)]" />
                Aucun crédit, aucun intérêt
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[var(--color-accent-green)]" />
                Fonds ségrégués
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[var(--color-accent-green)]" />
                Conforme UEMOA / BCEAO
              </span>
            </div>
          </div>

          {/* Phone mockup-ish card — built from primitives so we don't
              depend on an external screenshot the marketing team would
              need to keep in sync with the app. */}
          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-8 brand-gradient opacity-10 blur-3xl rounded-full" aria-hidden />
            <div className="relative w-[300px] sm:w-[340px] mx-auto aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-[var(--color-brand-pale)] to-white p-2 shadow-2xl shadow-red-500/15 ring-1 ring-black/5">
              <div className="w-full h-full rounded-[2rem] bg-white overflow-hidden flex flex-col">
                <div className="brand-gradient px-5 pt-12 pb-5 text-white">
                  <div className="flex items-center justify-between text-xs/4">
                    <span className="font-semibold">Mon objectif</span>
                    <span className="opacity-80">Aujourd&apos;hui</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold">iPhone 15 Pro</p>
                  <p className="text-sm opacity-90 mt-1">650 000 FCFA</p>
                  <div className="mt-4 h-2 rounded-full bg-white/30 overflow-hidden">
                    <div className="h-full w-[62%] rounded-full bg-white" />
                  </div>
                  <div className="mt-2 flex justify-between text-xs opacity-90">
                    <span>403 000 FCFA versés</span>
                    <span>62 %</span>
                  </div>
                </div>
                <div className="flex-1 p-5 space-y-3">
                  {[
                    { label: "Versement Wave", amount: "+ 25 000", date: "Hier" },
                    { label: "Versement Orange Money", amount: "+ 50 000", date: "Lun." },
                    { label: "Versement carte", amount: "+ 100 000", date: "Sam." },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-surface-tinted)] border border-[var(--color-divider)]"
                    >
                      <div>
                        <p className="text-xs font-medium text-[var(--color-ink)]">
                          {row.label}
                        </p>
                        <p className="text-[10px] text-[var(--color-ink-muted)]">
                          {row.date}
                        </p>
                      </div>
                      <p className="text-sm font-bold text-[var(--color-accent-green)]">
                        {row.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PARTNER STRIP ─────────────────────────────────────────────────────
function PartnerStrip() {
  return (
    <section className="border-y border-[var(--color-divider)] bg-[var(--color-surface-tinted)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-sm">
        <p className="text-[var(--color-ink-muted)] text-center sm:text-left">
          Fonds conservés en partenariat avec{" "}
          <span className="font-semibold text-[var(--color-secondary)]">FBN Bank Sénégal</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[var(--color-ink-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Building2 size={14} /> Compte de cantonnement
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={14} /> KYC / LBC-FT
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock size={14} /> Données chiffrées
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ──────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: Wallet,
    title: "Objectifs de paiement",
    desc: "Définissez un produit, un montant total et un calendrier. Versez librement, sans minimum imposé, jusqu'à l'atteinte de votre objectif.",
  },
  {
    icon: Store,
    title: "Marketplace de vendeurs vérifiés",
    desc: "Tous les vendeurs partenaires sont soumis à un processus KYB (Ninéa, registre du commerce). Vous achetez chez des professionnels validés.",
  },
  {
    icon: ShieldCheck,
    title: "Fonds sécurisés en cantonnement",
    desc: "Vos versements sont conservés sur un compte ségrégué chez FBN Bank Sénégal. IMCO Digital n'y a pas accès en dehors de son rôle d'ASP.",
  },
  {
    icon: TrendingUp,
    title: "Suivi en temps réel",
    desc: "Tableau de bord clair, historique détaillé des paiements, rappels automatiques et notifications à chaque versement.",
  },
  {
    icon: Smartphone,
    title: "Wave, Orange Money, cartes",
    desc: "Payez avec le moyen qui vous convient — Mobile Money, carte bancaire — via des prestataires de paiement tiers certifiés.",
  },
  {
    icon: Lock,
    title: "Aucun crédit, aucun intérêt",
    desc: "Nafa Pay n'octroie pas de crédit. Vous épargnez progressivement le prix du produit, sans frais de financement.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider">
            Fonctionnalités
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
            Acheter intelligemment, sans s&apos;endetter.
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)] text-lg">
            Une plateforme transparente, sécurisée et alignée avec la
            réglementation bancaire de l&apos;UEMOA.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-[var(--color-divider)] bg-white hover:border-[var(--color-brand)]/40 hover:shadow-xl hover:shadow-red-500/5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ──────────────────────────────────────────────────────
const STEPS = [
  {
    n: "01",
    title: "Choisissez un produit",
    desc: "Parcourez les boutiques partenaires et sélectionnez le produit que vous souhaitez acquérir.",
  },
  {
    n: "02",
    title: "Définissez votre objectif",
    desc: "Le montant total devient votre objectif de paiement. Aucune mensualité imposée — vous versez quand vous voulez.",
  },
  {
    n: "03",
    title: "Versez progressivement",
    desc: "Wave, Orange Money ou carte. Chaque versement est confirmé instantanément et conservé en cantonnement.",
  },
  {
    n: "04",
    title: "Récupérez votre produit",
    desc: "Une fois l'objectif atteint, le vendeur partenaire vous remet ou vous livre votre produit selon sa politique.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 bg-[var(--color-surface-tinted)] border-y border-[var(--color-divider)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider">
            Comment ça marche
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
            Quatre étapes, un produit livré.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="bg-white p-6 rounded-2xl border border-[var(--color-divider)] h-full">
                <span className="text-5xl font-bold bg-gradient-to-br from-[var(--color-brand-soft)] to-[var(--color-brand)] bg-clip-text text-transparent leading-none">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight
                  className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 text-[var(--color-brand)]/50"
                  size={20}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TRUST / SECURITY ──────────────────────────────────────────────────
function Trust() {
  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider">
            Confiance & Sécurité
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
            Conçue pour vous protéger, à chaque versement.
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)] text-lg">
            IMCO Digital agit en qualité d&apos;initiateur de paiement (ASP) et ne
            détient à aucun moment vos fonds. La protection de vos versements
            est assurée par notre partenaire bancaire.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                t: "Compte de cantonnement chez FBN Bank Sénégal",
                d: "Vos fonds sont ségrégués des fonds propres d'IMCO Digital.",
              },
              {
                t: "Conformité LBC/FT et KYC",
                d: "Vérification d'identité Acheteurs et KYB Vendeurs selon les normes UEMOA / BCEAO.",
              },
              {
                t: "Données chiffrées",
                d: "Mots de passe et données sensibles chiffrés. Aucune donnée bancaire complète conservée.",
              },
              {
                t: "Loi sénégalaise sur les données personnelles",
                d: "Traitement conforme à la loi n° 2008-12 du 25 janvier 2008.",
              },
            ].map((it) => (
              <li key={it.t} className="flex gap-3">
                <CheckCircle2 size={22} className="shrink-0 text-[var(--color-accent-green)] mt-0.5" />
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">{it.t}</p>
                  <p className="text-sm text-[var(--color-ink-soft)] mt-0.5">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 brand-gradient opacity-10 blur-3xl rounded-full" aria-hidden />
          <div className="relative bg-gradient-to-br from-[var(--color-secondary)] to-[#061f54] rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <ShieldCheck size={32} className="text-[var(--color-accent-yellow)]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60">Partenaire bancaire</p>
                <p className="font-bold text-lg">FBN Bank Sénégal</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/80 leading-relaxed">
              Vos versements arrivent directement sur un compte bancaire dédié,
              séparé du patrimoine d&apos;IMCO Digital. Si IMCO Digital cessait son
              activité, les fonds restent protégés et gérés conformément à la
              réglementation en vigueur.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur p-4 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-[var(--color-accent-yellow)]">100 %</p>
                <p className="text-xs text-white/70 mt-1">des fonds ségrégués</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-4 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-[var(--color-accent-yellow)]">0 %</p>
                <p className="text-xs text-white/70 mt-1">d&apos;intérêt ou de crédit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DOWNLOAD CTA ──────────────────────────────────────────────────────
function Download() {
  return (
    <section id="download" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="relative rounded-3xl brand-gradient text-white px-6 sm:px-12 py-14 sm:py-16 overflow-hidden shadow-2xl shadow-red-500/30">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" aria-hidden />

          <div className="relative flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Téléchargez Nafa Pay aujourd&apos;hui.
              </h2>
              <p className="mt-4 text-white/90 leading-relaxed">
                Disponible bientôt sur l&apos;App Store et Google Play. Commencez
                votre premier objectif de paiement dès l&apos;ouverture de votre
                compte.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                aria-label="Télécharger sur l'App Store"
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-xl hover:bg-zinc-900 transition"
              >
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
                  <path d="M17.564 12.6c-.014-2.413 1.97-3.585 2.06-3.638-1.124-1.643-2.872-1.867-3.494-1.893-1.49-.15-2.91.876-3.668.876-.76 0-1.927-.855-3.17-.83-1.63.024-3.135.946-3.972 2.402-1.69 2.93-.432 7.275 1.214 9.66.806 1.165 1.766 2.47 3.02 2.424 1.21-.05 1.668-.785 3.13-.785 1.46 0 1.876.785 3.16.76 1.306-.024 2.13-1.184 2.93-2.355.92-1.347 1.302-2.65 1.323-2.716-.029-.012-2.546-.978-2.533-3.905zM15.36 5.396c.673-.815 1.126-1.948.999-3.073-.972.04-2.146.65-2.84 1.46-.625.726-1.17 1.879-1.024 2.985 1.083.082 2.19-.55 2.865-1.372z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">Télécharger sur</span>
                  <span className="block text-base font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="#"
                aria-label="Télécharger sur Google Play"
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-xl hover:bg-zinc-900 transition"
              >
                <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
                  <path fill="#34A853" d="M12.954 11.616L3.45 21.146 14.27 14.83l-1.316-3.214z" />
                  <path fill="#FBBC05" d="M19.07 9.815l-2.937-1.726-3.286 2.918 3.275 3.275 2.948-1.731c.94-.554.94-1.987 0-2.736z" />
                  <path fill="#EA4335" d="M3.45 2.854l9.504 9.566 1.316-3.214L3.45 2.854z" />
                  <path fill="#4285F4" d="M3.45 2.854l9.504 9.566L3.45 21.987c-.243-.16-.388-.42-.388-.748V3.602c0-.328.145-.588.388-.748z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">Disponible sur</span>
                  <span className="block text-base font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="relative mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-white/80">
            <p>Édité par IMCO Digital S.A.U — Dakar, Sénégal</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition">Confidentialité</Link>
              <Link href="/terms" className="hover:text-white transition">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <Features />
      <HowItWorks />
      <Trust />
      <Download />
    </>
  );
}
