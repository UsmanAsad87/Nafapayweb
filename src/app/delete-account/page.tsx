import type { Metadata } from "next";
import Image from "next/image";

// Stand-alone account / data deletion page. The URL we hand Google
// Play Console (and Apple App Store Connect) as the "account-deletion
// instructions" link required by their respective policies:
//
//     https://nafapay.africa/delete-account
//
// Intentionally NOT linked from Header / Footer / homepage — the user
// only reaches it via the store-listing link or by typing it directly.
// noindex so it doesn't pollute search results for the marketing URL.
//
// The page covers BOTH account deletion and data deletion in one
// document — Google Play accepts either model, and Apple requires
// account deletion. Retention exceptions mirror sections 8.2/8.3 of
// the Politique de Confidentialité (10y transactions / 5y KYC under
// UEMOA LBC-FT rules) so legal stays consistent.

export const metadata: Metadata = {
  title: "Suppression de compte et de données",
  description:
    "Comment supprimer votre compte Nafa Pay et vos données personnelles.",
  robots: { index: false, follow: false },
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-full flex flex-col">
      <header className="border-b border-divider bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 h-14 flex items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/nafapay-logo.png"
              alt=""
              width={28}
              height={28}
              className="rounded-md"
              priority
            />
            <span className="font-bold tracking-tight text-ink">Nafa Pay</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-divider">
        <div className="absolute inset-0 brand-gradient-radial pointer-events-none" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8 py-14 sm:py-20">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">
            Confidentialité
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            Supprimer mon compte et mes données
          </h1>
          <p className="mt-4 text-ink-muted text-sm">
            IMCO Digital S.A.U · Édité par Nafa Pay
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-14 legal-prose">
        <p>
          Vous pouvez à tout moment demander la suppression de votre compte
          Nafa Pay et des données personnelles associées. Deux options vous
          sont proposées ci-dessous, selon que vous avez ou non encore accès
          à l&apos;application.
        </p>

        <h2>Option 1 — Depuis l&apos;application (recommandé)</h2>
        <ol className="list-decimal pl-5 space-y-1 mb-4">
          <li>Ouvrez l&apos;application Nafa Pay et connectez-vous.</li>
          <li>
            Rendez-vous dans <strong>Paramètres</strong> &gt;{" "}
            <strong>Compte</strong>.
          </li>
          <li>
            Sélectionnez <strong>Supprimer mon compte</strong>.
          </li>
          <li>
            Confirmez votre demande. Votre compte est désactivé immédiatement.
          </li>
        </ol>

        <h2>Option 2 — Par email</h2>
        <p>
          Si vous n&apos;avez plus accès à l&apos;application, envoyez votre demande
          à&nbsp;:{" "}
          <a className="text-brand hover:underline" href="mailto:contact@imco.digital?subject=Suppression%20de%20compte%20Nafa%20Pay">
            contact@imco.digital
          </a>
          .
        </p>
        <p>Merci de préciser dans votre message&nbsp;:</p>
        <ul>
          <li>Votre nom et prénom ;</li>
          <li>Le numéro de téléphone associé à votre compte Nafa Pay ;</li>
          <li>
            L&apos;objet de votre demande&nbsp;: <em>suppression du compte</em>{" "}
            et/ou <em>suppression des données</em>.
          </li>
        </ul>
        <p>
          Afin de protéger votre compte, nous pouvons vous demander une preuve
          d&apos;identité avant de procéder.
        </p>

        <h2>Délai de traitement</h2>
        <p>
          Votre demande est traitée dans un délai maximal de{" "}
          <strong>trente (30) jours</strong> à compter de sa réception,
          conformément à la loi sénégalaise n°&nbsp;2008-12 du 25&nbsp;janvier 2008
          sur la protection des données à caractère personnel.
        </p>

        <h2>Données supprimées</h2>
        <p>À l&apos;issue du traitement, sont supprimés&nbsp;:</p>
        <ul>
          <li>Vos identifiants de compte (nom, prénom, adresse e-mail) ;</li>
          <li>
            Votre mot de passe et vos jetons d&apos;authentification ;
          </li>
          <li>Votre photo de profil et vos préférences ;</li>
          <li>
            Vos données de navigation et journaux d&apos;utilisation associés à
            votre compte.
          </li>
        </ul>

        <h2>Données conservées (obligations légales)</h2>
        <p>
          Certaines données sont conservées au-delà de la suppression de votre
          compte pour répondre à nos obligations légales et comptables&nbsp;:
        </p>
        <ul>
          <li>
            <strong>Données de transaction</strong>&nbsp;: 10&nbsp;ans
            (obligations comptables et fiscales sénégalaises) ;
          </li>
          <li>
            <strong>Données KYC / LBC-FT</strong>&nbsp;: 5&nbsp;ans après la fin
            de la relation commerciale (réglementation UEMOA) ;
          </li>
          <li>
            <strong>Journaux de connexion</strong>&nbsp;: 1&nbsp;an
            (réglementation sénégalaise sur les transactions électroniques).
          </li>
        </ul>
        <p>
          Ces données sont conservées sous une forme verrouillée, accessibles
          uniquement aux personnes habilitées au sein d&apos;IMCO Digital ou aux
          autorités compétentes en cas de réquisition légale. Elles sont
          définitivement supprimées à l&apos;expiration des délais ci-dessus.
        </p>

        <h2>Objectifs de paiement en cours</h2>
        <p>
          La fermeture de votre compte n&apos;affecte pas les objectifs de paiement
          que vous avez engagés auprès d&apos;un vendeur partenaire. Vous restez
          tenu de finaliser ces engagements ou de vous rapprocher du vendeur
          concerné pour trouver une solution amiable. Aucun remboursement
          n&apos;est dû par Nafa Pay au titre des sommes déjà versées au vendeur.
        </p>

        <h2>Nous contacter</h2>
        <p>
          Pour toute question relative à la suppression de votre compte&nbsp;:
        </p>
        <p>
          <strong>IMCO Digital S.A.U</strong>
          <br />
          Scat Urbam, Villa F22, Dakar, Sénégal
          <br />
          Téléphone&nbsp;: 71-010-70-70
          <br />
          Email&nbsp;:{" "}
          <a className="text-brand hover:underline" href="mailto:contact@imco.digital">
            contact@imco.digital
          </a>
        </p>
      </section>
    </main>
  );
}
