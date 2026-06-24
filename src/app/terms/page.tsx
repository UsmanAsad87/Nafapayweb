import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

// The legal copy below is the VERBATIM French text from the
// `CGU NAFA PAY.docx` (Version 1.0) supplied by IMCO Digital. Do not
// rephrase or summarize — per Article 14.3, only the French version is
// legally authoritative.
export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions Générales d'Utilisation de l'application Nafa Pay, éditée par IMCO Digital S.A.U.",
};

// Reusable inline labels for the audience markers used throughout
// the CGU. Mirrors the bilingual style of the source .docx.
function Tag({ kind }: { kind: "buyers" | "sellers" | "common" }) {
  const label =
    kind === "buyers" ? "ACHETEURS" : kind === "sellers" ? "VENDEURS" : "COMMUN";
  const cls =
    kind === "buyers"
      ? "bg-[var(--color-brand)]/10 text-[var(--color-brand-deep)] border-[var(--color-brand)]/30"
      : kind === "sellers"
      ? "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] border-[var(--color-secondary)]/30"
      : "bg-zinc-100 text-zinc-700 border-zinc-300";
  return (
    <span
      className={`inline-flex items-center text-[10px] font-bold tracking-wider px-2 py-0.5 rounded border ${cls} mr-2 align-middle`}
    >
      {label}
    </span>
  );
}

export default function TermsPage() {
  return (
    <LegalShell
      title="Conditions générales d'utilisation"
      version="Version 1.0"
      date="IMCO Digital S.A.U"
    >
      <h2>Guide de lecture du présent document</h2>
      <p>
        Les présentes CGU s&apos;adressent à deux catégories de parties distinctes
        dont les droits et obligations diffèrent. Afin de faciliter la
        lecture, chaque disposition est identifiée selon le public auquel
        elle s&apos;applique :
      </p>
      <ul>
        <li><Tag kind="buyers" /> Dispositions applicables aux Utilisateurs/Acheteurs ;</li>
        <li><Tag kind="sellers" /> Dispositions applicables aux Vendeurs ;</li>
        <li><Tag kind="common" /> Dispositions applicables à toutes les parties.</li>
      </ul>
      <p>Les dispositions sans marquage spécifique s&apos;appliquent à l&apos;ensemble des parties utilisant la Plateforme.</p>

      <h2>Article préliminaire — Définitions</h2>
      <p>Aux fins des présentes CGU, les termes ci-après ont la signification suivante :</p>
      <ul>
        <li><strong>«&nbsp;IMCO Digital&nbsp;» ou «&nbsp;ASP&nbsp;» ou «&nbsp;Initiateur de Paiement&nbsp;»</strong> : désigne la société IMCO Digital S.A.U, éditrice de l&apos;Application Nafa Pay, agissant en qualité de prestataire technique d&apos;initiation de paiement.</li>
        <li><strong>«&nbsp;Vendeur&nbsp;»</strong> : désigne toute personne morale ou commerçant personne physique dûment immatriculé, partenaire de la Plateforme, proposant des produits à la vente via l&apos;Application.</li>
        <li><strong>«&nbsp;FBN Bank Sénégal&nbsp;» ou «&nbsp;Établissement Gardien des Fonds&nbsp;»</strong> : désigne l&apos;établissement bancaire auprès duquel est ouvert le compte de cantonnement sur lequel sont conservés les fonds versés par les Utilisateurs.</li>
        <li><strong>«&nbsp;Utilisateur&nbsp;» ou «&nbsp;Acheteur&nbsp;»</strong> : désigne toute personne physique ou morale accédant à l&apos;Application aux fins d&apos;achat de produits auprès des Vendeurs partenaires.</li>
        <li><strong>«&nbsp;Application&nbsp;» ou «&nbsp;Plateforme&nbsp;»</strong> : désigne l&apos;application mobile et web Nafa Pay, éditée par IMCO Digital. Elle ne constitue ni un service de dépôt, ni un service de crédit, ni un service de paiement au sens de la réglementation bancaire et financière de l&apos;UEMOA.</li>
        <li><strong>«&nbsp;Compte de cantonnement&nbsp;»</strong> : désigne le compte bancaire dédié ouvert auprès de l&apos;Établissement Gardien des Fonds (FBN Bank Sénégal), sur lequel sont conservés les fonds versés par les Utilisateurs dans le cadre de leurs objectifs de paiement, ségrégués des fonds propres d&apos;IMCO Digital.</li>
        <li><strong>«&nbsp;Objectif de paiement&nbsp;»</strong> : désigne le montant total à atteindre par l&apos;Acheteur pour finaliser l&apos;acquisition d&apos;un produit sélectionné sur la Plateforme.</li>
      </ul>

      <h2>Article 1 — Dispositions générales</h2>
      <h3>1.1 Objet</h3>
      <p>
        Les présentes Conditions Générales d&apos;Utilisation (ci-après «&nbsp;CGU&nbsp;»)
        ont pour objet de définir les modalités et conditions d&apos;utilisation
        de l&apos;application Nafa Pay, éditée par IMCO Digital. Elles régissent
        les relations entre IMCO Digital (ASP) et, d&apos;une part, les
        Utilisateurs/Acheteurs et, d&apos;autre part, les Vendeurs partenaires,
        dans le cadre tripartite impliquant également l&apos;Établissement Gardien
        des Fonds (FBN Bank Sénégal). Chaque partie n&apos;est liée que par les
        dispositions qui lui sont expressément applicables, en sus des
        dispositions communes.
      </p>

      <h3>1.2 Éditeur de l&apos;Application</h3>
      <p>
        IMCO Digital S.A.U
        <br />
        Siège social : Scat Urbam, Villa F22, Dakar, Sénégal
        <br />
        Téléphone : 71-010-70-70
        <br />
        Email :{" "}
        <a className="text-[var(--color-brand)] hover:underline" href="mailto:contact@imco.digital">
          contact@imco.digital
        </a>
      </p>

      <h3>1.3 Description du service</h3>
      <p>Nafa Pay est une application numérique de marketplace permettant :</p>
      <ul>
        <li>La mise en relation d&apos;Utilisateurs/Acheteurs et Vendeurs partenaires ;</li>
        <li>La réalisation d&apos;achats à paiement comptant ou à paiement progressif avec objectif ;</li>
        <li>Le suivi en temps réel de l&apos;atteinte d&apos;un objectif de paiement associé à chaque achat.</li>
      </ul>
      <div className="callout">
        <strong>Important :</strong> L&apos;Application n&apos;octroie aucun crédit et
        ne constitue pas un outil de financement au sens de la réglementation
        bancaire sénégalaise. Elle permet uniquement à l&apos;Utilisateur de
        planifier et d&apos;exécuter un achat par constitution préalable ou
        progressive du montant requis.
      </div>

      <h3>1.4 Acceptation des CGU</h3>
      <p>L&apos;utilisation de l&apos;Application implique l&apos;acceptation pleine et entière des présentes CGU. L&apos;inscription sur la Plateforme vaut acceptation des présentes conditions.</p>

      <h3>1.5 Modification des CGU</h3>
      <p>
        IMCO Digital se réserve le droit de modifier les présentes CGU à tout
        moment. Les modifications entrent en vigueur dès leur publication sur
        l&apos;Application. Les Utilisateurs et les Vendeurs seront informés de
        toute modification substantielle par notification dans l&apos;Application
        ou par email. L&apos;utilisation continue de l&apos;Application après
        notification vaut acceptation des nouvelles conditions.
      </p>

      <h2>Article 2 — Accès à l&apos;Application</h2>
      <h3>2.1 Conditions d&apos;accès</h3>
      <p><Tag kind="buyers" /> L&apos;Application est accessible aux personnes physiques majeures ayant la capacité juridique de contracter. Pour les Utilisateurs mineurs, l&apos;utilisation nécessite l&apos;autorisation et la supervision d&apos;un représentant légal.</p>
      <p><Tag kind="sellers" /> L&apos;accès à la Plateforme en qualité de vendeur est réservé aux personnes morales ou aux commerçants personnes physiques dûment immatriculés, disposant de la capacité juridique et des pouvoirs nécessaires pour s&apos;engager.</p>

      <h3>2.2 Inscription</h3>
      <p><Tag kind="buyers" /> L&apos;accès aux fonctionnalités nécessite la création d&apos;un compte personnel. L&apos;Utilisateur s&apos;engage à fournir des informations exactes, complètes et à jour, à ne créer qu&apos;un seul compte, à maintenir la confidentialité de ses identifiants et à informer IMCO Digital de toute utilisation non autorisée.</p>
      <p><Tag kind="sellers" /> Les Vendeurs doivent compléter un processus d&apos;inscription spécifique, fournir les documents justificatifs requis et accepter les conditions générales spécifiques aux vendeurs. L&apos;inscription est soumise à validation par IMCO Digital.</p>

      <h3>2.3 Vérification d&apos;identité et conformité</h3>
      <p><Tag kind="buyers" /> IMCO Digital se réserve le droit de demander à tout moment des justificatifs d&apos;identité ou de domicile dans le cadre de la lutte contre la fraude et le blanchiment de capitaux. Le refus de fournir ces documents peut entraîner la suspension ou la fermeture du compte.</p>
      <p><Tag kind="sellers" /> Dans le cadre du processus Know Your Customer (KYC), les vendeurs sont tenus de fournir l&apos;ensemble des documents permettant de vérifier leur identité juridique et commerciale, notamment : extrait du registre du commerce, Ninéa, et tout autre document requis par IMCO Digital ou par la réglementation applicable.</p>
      <p>Les vendeurs s&apos;engagent à coopérer pleinement avec IMCO Digital dans le cadre de ses obligations de lutte contre le blanchiment de capitaux et le financement du terrorisme (LBC/FT). À ce titre, ils s&apos;engagent notamment à :</p>
      <ul>
        <li>Déclarer l&apos;origine des fonds utilisés dans le cadre de leurs activités sur la Plateforme ;</li>
        <li>Signaler toute transaction suspecte ou atypique à IMCO Digital ;</li>
        <li>Ne pas utiliser la Plateforme à des fins de blanchiment de capitaux, de financement du terrorisme ou de toute autre activité illicite.</li>
      </ul>
      <div className="callout">
        <strong>AML :</strong> IMCO Digital se réserve le droit de suspendre
        immédiatement tout compte Vendeur en cas de suspicion de blanchiment de
        capitaux ou de financement du terrorisme, et d&apos;en informer les
        autorités compétentes conformément à ses obligations légales.
      </div>

      <h3>2.4 Prérequis techniques</h3>
      <p>L&apos;accès à l&apos;Application nécessite un appareil compatible, une connexion Internet, un système d&apos;exploitation à jour et un moyen de paiement valide. Les frais de connexion restent à la charge de l&apos;Utilisateur.</p>

      <h2>Article 3 — Fonctionnement de l&apos;Application</h2>
      <h3>3.1 Principe général</h3>
      <p>
        Nafa Pay fonctionne selon le modèle «&nbsp;Save Now, Buy Later&nbsp;»
        (Épargner Maintenant, Acheter Plus Tard). Lorsqu&apos;un Utilisateur
        sélectionne un produit sur la Plateforme, un objectif de paiement
        correspondant au prix du produit est défini. L&apos;Utilisateur peut alors
        effectuer un paiement unique immédiat (paiement comptant) ou réaliser
        des versements successifs jusqu&apos;à l&apos;atteinte complète de l&apos;objectif
        (paiement progressif).
      </p>

      <h3>3.2 Création d&apos;un objectif de paiement</h3>
      <p>Pour chaque achat, l&apos;Application permet de consulter le montant total à atteindre, définir un calendrier de versements (facultatif), suivre en temps réel les montants versés, visualiser le solde restant et accéder à l&apos;historique détaillé des paiements.</p>

      <h3>3.3 Versements</h3>
      <p>Les versements peuvent être effectués librement, à tout moment, sans montant minimum ou maximum imposé (sauf limites techniques des prestataires de paiement), ou selon un calendrier prédéfini par l&apos;Utilisateur avec rappels automatiques. Chaque versement est enregistré et visible par l&apos;Utilisateur sur son tableau de bord personnel et par le Vendeur concerné sur son interface dédiée.</p>

      <h3>3.4 Rôle de la Plateforme</h3>
      <p>IMCO Digital agit en qualité de prestataire technique d&apos;initiation de paiement (ci-après «&nbsp;ASP&nbsp;»), sans détenir les fonds ni fournir de services de paiement au sens réglementaire. L&apos;Application ne constitue ni un service de dépôt, ni un service de crédit, ni un service de paiement au sens de la réglementation bancaire et financière de l&apos;UEMOA. Dans ce cadre tripartite :</p>
      <ul>
        <li><strong>IMCO Digital (ASP / Initiateur de Paiement)</strong> : initie techniquement les opérations de paiement, fournit et exploite la Plateforme, et assure le traitement sécurisé des instructions de paiement émises par les Utilisateurs ;</li>
        <li><strong>FBN Bank Sénégal (Établissement gardien des fonds)</strong> : assure la conservation des fonds versés par les Utilisateurs sur un compte de cantonnement dédié, distinct et ségrégué des fonds propres des parties ;</li>
        <li><strong>Le Vendeur</strong> : est responsable de la commercialisation, de la vente et de la livraison/remise des produits ou services aux Utilisateurs.</li>
      </ul>

      <h2>Article 4 — Paiements</h2>
      <h3>4.1 Modalités de paiement</h3>
      <p>Le paiement des produits s&apos;effectue via l&apos;Application, selon les modalités proposées au moment de la commande. Certains produits peuvent faire l&apos;objet d&apos;un paiement échelonné.</p>

      <h3>4.2 Paiement échelonné et disponibilité du produit</h3>
      <p><Tag kind="buyers" /> L&apos;Acheteur a la possibilité d&apos;opter pour un paiement échelonné de certains produits proposés sur la Plateforme, selon les modalités précisées au moment de la commande. Tant que le paiement intégral n&apos;est pas effectué, le produit n&apos;est pas définitivement réservé. En cas de non-respect du calendrier de paiement, IMCO Digital ne garantit plus la disponibilité du produit initial.</p>
      <p>Dans une telle situation, l&apos;Acheteur pourra :</p>
      <ul>
        <li>Soit sélectionner un produit équivalent auprès du même Vendeur ou d&apos;un autre Vendeur partenaire disponible sur la Plateforme ;</li>
        <li>Soit convertir les sommes déjà versées en avoir utilisable sur la Plateforme, selon les modalités en vigueur.</li>
      </ul>
      <p>Les avoirs sont valables pendant une durée de douze (12) mois à compter de leur date d&apos;émission. Passé ce délai, les avoirs non utilisés sont définitivement perdus. L&apos;Acheteur sera notifié par application un (1) mois avant l&apos;expiration de son avoir.</p>

      <h3>4.3 Produits liés aux métaux précieux — Or et argent</h3>
      <p><Tag kind="buyers" /> <strong>Clause importante :</strong> Pour les produits liés aux métaux précieux (or, argent), l&apos;Acheteur reconnaît expressément qu&apos;il acquiert une quantité exprimée en grammes et non un produit déterminé. La valeur de cette quantité évolue en fonction du cours du marché au moment de la conversion en produit. L&apos;Application affiche à tout moment une estimation de la valeur basée sur le cours actuel, à titre indicatif uniquement.</p>
      <div className="callout">IMCO Digital ne saurait être tenue responsable des variations de cours résultant de conditions de marché extérieures à son contrôle.</div>

      <h3>4.4 Moyens de paiement</h3>
      <p>Les paiements sont effectués par l&apos;intermédiaire de prestataires de services de paiement tiers agréés, notamment via cartes bancaires, services de Mobile Money (Orange Money, Wave, etc.) et tout autre moyen de paiement accepté par l&apos;Application.</p>

      <h3>4.5 Sécurisation des paiements</h3>
      <p>Les transactions sont sécurisées par des prestataires certifiés conformément aux normes de sécurité applicables. IMCO Digital ne collecte ni ne conserve les données bancaires complètes des Utilisateurs.</p>

      <h3>4.6 Traitement des paiements</h3>
      <p>Lors de chaque versement, l&apos;Utilisateur initie le paiement depuis l&apos;Application et est redirigé vers l&apos;interface sécurisée du prestataire de paiement. Après validation, le montant est conservé sur le compte de cantonnement géré par l&apos;Établissement Gardien des Fonds (FBN Bank Sénégal), et l&apos;état d&apos;avancement de l&apos;objectif est mis à jour en temps réel sur la Plateforme.</p>

      <h3>4.7 Confirmation de paiement</h3>
      <p>Chaque paiement validé donne lieu à une confirmation par notification dans l&apos;Application et par email ou SMS selon les préférences de l&apos;Utilisateur. Un reçu électronique est disponible dans l&apos;historique des transactions.</p>

      <h3>4.8 Échec de paiement</h3>
      <p>En cas d&apos;échec d&apos;un paiement, l&apos;Utilisateur en est immédiatement informé, aucun montant n&apos;est débité et l&apos;Utilisateur peut réessayer ultérieurement.</p>

      <h3>4.9 Frais applicables</h3>
      <p>L&apos;utilisation de l&apos;Application peut entraîner des frais de service, clairement indiqués avant la validation de chaque transaction. Des frais supplémentaires peuvent être appliqués par les prestataires de paiement tiers, lesquels restent à la charge de l&apos;Utilisateur.</p>

      <h3>4.10 Gestion des fonds en cas de cessation d&apos;activité</h3>
      <p>En cas de cessation d&apos;activité d&apos;IMCO Digital ou de fin de partenariat bancaire avec l&apos;établissement gardien des fonds (FBN Bank Sénégal), les fonds conservés sur le compte de cantonnement feront l&apos;objet d&apos;un traitement conforme à la réglementation applicable et aux instructions de l&apos;établissement gardien des fonds. IMCO Digital s&apos;engage à informer les Utilisateurs et les vendeurs dans les meilleurs délais et à mettre en œuvre toutes les mesures nécessaires à la préservation de leurs intérêts.</p>

      <h2>Article 5 — Produits : visuels, stocks et disponibilité</h2>
      <h3>5.1 Caractère non contractuel des visuels</h3>
      <p>Les photographies, illustrations et visuels des produits présentés sur la Plateforme sont fournis à titre purement indicatif. En raison des contraintes techniques (affichage écran, luminosité, compression des images, mise à jour des stocks), ces éléments n&apos;ont pas de valeur contractuelle. De légères différences peuvent exister entre le produit présenté en ligne et le produit effectivement livré.</p>
      <p><Tag kind="sellers" /> Les Vendeurs sont seuls responsables de l&apos;exactitude des descriptions textuelles de leurs produits. Ils s&apos;engagent à maintenir leurs visuels et descriptions aussi fidèles que possible à la réalité du produit disponible.</p>

      <h3>5.2 Disponibilité des stocks</h3>
      <p>Les produits proposés sur la Plateforme sont soumis à la disponibilité réelle des stocks des Vendeurs partenaires. La Plateforme ne saurait être tenue responsable :</p>
      <ul>
        <li>D&apos;une rupture de stock survenant entre la commande et le paiement définitif ;</li>
        <li>D&apos;une modification de l&apos;offre ou du catalogue du Vendeur ;</li>
        <li>D&apos;une indisponibilité du produit pour quelque cause que ce soit.</li>
      </ul>
      <p><Tag kind="sellers" /> Les Vendeurs s&apos;engagent à mettre à jour leur catalogue et leurs stocks sur la Plateforme avec diligence. En cas d&apos;indisponibilité d&apos;un produit commandé, le Vendeur s&apos;engage à en informer l&apos;Acheteur dans les meilleurs délais et à lui proposer une solution alternative ou un remboursement.</p>

      <h2>Article 6 — Remise et retrait des produits</h2>
      <div className="callout">
        <strong>Important :</strong> Nafa Pay ne déclenche pas automatiquement
        la remise ou le retrait du produit. La décision de remettre le produit
        avant ou après l&apos;atteinte complète de l&apos;objectif de paiement relève
        exclusivement du Vendeur, selon sa politique commerciale propre.
      </div>
      <h3>6.2 Rôle de l&apos;Application</h3>
      <p>L&apos;Application fournit au Vendeur un outil de suivi précis des versements, une visibilité continue sur l&apos;état d&apos;avancement du paiement et les informations nécessaires pour apprécier librement la situation. Nafa Pay n&apos;intervient pas dans la décision de remise du produit et ne la garantit pas.</p>

      <h3>6.3 Modalités de remise</h3>
      <p><Tag kind="sellers" /> Les conditions de remise, de retrait ou de livraison des produits ou services sont définies par chaque Vendeur dans ses propres conditions générales de vente. Les Vendeurs s&apos;engagent à porter ces conditions à la connaissance des Acheteurs de manière claire et préalable, avant la création de l&apos;objectif de paiement.</p>
      <p><Tag kind="buyers" /> L&apos;Acheteur est invité à consulter les conditions de remise du Vendeur avant de procéder à toute commande. En cas de litige concernant la remise ou la qualité d&apos;un produit, l&apos;Acheteur doit s&apos;adresser directement au Vendeur concerné.</p>

      <h3>6.4 Responsabilité</h3>
      <p>IMCO Digital ne peut être tenue responsable du refus d&apos;un Vendeur de remettre un produit, des retards de livraison, de la qualité, de la conformité ou de la disponibilité des produits, ni des conditions de remise ou de retrait définies par les Vendeurs.</p>

      <h2>Article 7 — Obligations et droits des parties</h2>
      <h3>7.1 Obligations communes</h3>
      <p>Toutes les parties s&apos;engagent à utiliser la Plateforme conformément aux présentes CGU, aux lois et règlements en vigueur au Sénégal, ainsi qu&apos;aux bonnes mœurs et à l&apos;ordre public. Il est strictement interdit de créer de faux comptes, d&apos;utiliser l&apos;Application à des fins frauduleuses, de tenter de contourner les mesures de sécurité, de diffuser des virus ou codes malveillants, ou d&apos;utiliser la Plateforme pour blanchir des fonds ou financer des activités illicites.</p>

      <h3>7.2 Obligations spécifiques aux Acheteurs</h3>
      <p><Tag kind="buyers" /> L&apos;Acheteur s&apos;engage à :</p>
      <ul>
        <li>Fournir des informations exactes, complètes et à jour lors de l&apos;inscription ;</li>
        <li>Ne créer qu&apos;un seul compte personnel, non cessible ;</li>
        <li>Maintenir la confidentialité de ses identifiants de connexion ;</li>
        <li>Informer immédiatement IMCO Digital de toute utilisation non autorisée de son compte ;</li>
        <li>Honorer les objectifs de paiement engagés ou, à défaut, se rapprocher du Vendeur concerné.</li>
      </ul>

      <h2>Article 8 — Propriété intellectuelle</h2>
      <h3>8.3 Contenus des Utilisateurs</h3>
      <p>Les Utilisateurs et Vendeurs conservent la propriété des contenus qu&apos;ils publient sur l&apos;Application. En publiant du contenu, ils accordent à IMCO Digital une licence mondiale, non exclusive, gratuite d&apos;utilisation, de reproduction et de modification de ce contenu aux seules fins du fonctionnement et de la promotion de l&apos;Application.</p>

      <h3>8.4 Signalement de violation</h3>
      <p>Toute violation des droits de propriété intellectuelle doit être signalée à :{" "}<a className="text-[var(--color-brand)] hover:underline" href="mailto:juridique@imco.digital">juridique@imco.digital</a>.</p>

      <h2>Article 9 — Données personnelles</h2>
      <p>IMCO Digital procède à la collecte et au traitement des données à caractère personnel conformément à la loi n° 2008-12 du 25 janvier 2008 relative à la protection des données personnelles au Sénégal, ainsi qu&apos;aux stipulations de la{" "}<a className="text-[var(--color-brand)] hover:underline" href="/privacy">Politique de Confidentialité</a> accessible sur l&apos;Application.</p>

      <h2>Article 10 — Responsabilité</h2>
      <h3>10.1 Responsabilité d&apos;IMCO Digital</h3>
      <p>IMCO Digital s&apos;engage à fournir l&apos;Application avec diligence et selon les règles de l&apos;art. En sa qualité d&apos;ASP (initiateur de paiement), IMCO Digital ne détient pas les fonds des Utilisateurs et n&apos;intervient pas dans la relation commerciale entre acheteur et vendeur. Elle ne peut être tenue responsable :</p>
      <ul>
        <li>Des relations entre Acheteurs et Vendeurs et des litiges en découlant ;</li>
        <li>De la qualité, de la conformité, de la disponibilité ou de la livraison des produits ;</li>
        <li>Des décisions des Vendeurs concernant la remise ou le retrait des produits ;</li>
        <li>Des dysfonctionnements des prestataires de paiement tiers ;</li>
        <li>Des variations de cours des produits indexés sur des matières premières (or, métaux précieux, etc.) résultant de conditions de marché extérieures à son contrôle ;</li>
        <li>Des fluctuations de stock et des caractéristiques finales des produits résultant des conditions de paiement échelonné ou de contraintes propres au Vendeur ;</li>
        <li>Des dommages indirects résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser l&apos;Application ;</li>
        <li>Des interruptions temporaires du service pour maintenance ou mise à jour.</li>
      </ul>

      <h3>10.2 Limitation de responsabilité</h3>
      <p>La responsabilité d&apos;IMCO Digital est limitée aux dommages directs et prévisibles résultant d&apos;un manquement prouvé à ses obligations contractuelles. En tout état de cause, elle ne pourra excéder le montant des frais de service effectivement perçus par IMCO Digital pour la transaction concernée.</p>

      <h3>10.3 Responsabilité des Acheteurs</h3>
      <p><Tag kind="buyers" /> Les Acheteurs sont seuls responsables de l&apos;utilisation qu&apos;ils font de l&apos;Application, du respect des présentes CGU, des dommages causés à des tiers et de la sécurité de leur compte.</p>

      <h3>10.4 Responsabilité des Vendeurs</h3>
      <p><Tag kind="sellers" /> Les Vendeurs sont seuls responsables de la qualité, de la conformité et de la disponibilité de leurs produits, du respect de leurs obligations légales et contractuelles envers les Acheteurs, de leurs décisions concernant la remise ou le retrait des produits, et des informations qu&apos;ils publient sur la Plateforme.</p>

      <h3>10.5 Force majeure</h3>
      <p>IMCO Digital ne sera pas tenue responsable de tout retard ou inexécution résultant d&apos;un cas de force majeure tel que défini par le Code des obligations civiles et commerciales du Sénégal, incluant notamment les catastrophes naturelles, incendies, actes de guerre, défaillances des réseaux de télécommunication ou d&apos;électricité, cyberattaques et décisions gouvernementales.</p>

      <h2>Article 11 — Disponibilité et maintenance</h2>
      <h3>11.1 Disponibilité</h3>
      <p>IMCO Digital s&apos;efforce d&apos;assurer la disponibilité de l&apos;Application 24h/24 et 7j/7, sous réserve des opérations de maintenance et des cas de force majeure. Aucun accès ininterrompu n&apos;est garanti.</p>

      <h3>11.2 Maintenance</h3>
      <p>IMCO Digital se réserve le droit de suspendre temporairement l&apos;accès pour maintenance programmée ou d&apos;urgence, de modifier ou améliorer l&apos;Application, et d&apos;ajouter ou supprimer des fonctionnalités. Les parties seront informées dans la mesure du possible des interruptions programmées.</p>

      <h2>Article 12 — Durée et résiliation</h2>
      <h3>12.1 Durée</h3>
      <p>Les présentes CGU sont applicables pendant toute la durée d&apos;utilisation de l&apos;Application.</p>

      <h3>12.2 Résiliation par l&apos;Utilisateur ou le Vendeur</h3>
      <p>Toute partie peut à tout moment fermer son compte en accédant aux paramètres de son compte ou en contactant le service client Nafa Pay. La fermeture du compte entraîne la suppression de l&apos;accès aux fonctionnalités et la conservation des données nécessaires au respect des obligations légales et comptables d&apos;IMCO Digital.</p>
      <div className="callout"><strong>Important :</strong> La fermeture du compte n&apos;affecte pas les objectifs de paiement en cours. L&apos;Acheteur reste tenu de finaliser les paiements engagés ou de se rapprocher des Vendeurs concernés pour trouver une solution amiable.</div>

      <h3>12.3 Résiliation par IMCO Digital</h3>
      <p>IMCO Digital se réserve le droit de suspendre ou de résilier immédiatement et sans préavis tout compte en cas de violation des CGU, de fraude, de comportement nuisible, d&apos;utilisation illégale, de fausses déclarations, d&apos;impayés répétés ou de demande des autorités compétentes.</p>

      <h3>12.4 Conséquences de la résiliation</h3>
      <p>En cas de résiliation, la partie concernée perd immédiatement l&apos;accès à son compte. Les objectifs de paiement en cours restent dus. IMCO Digital conserve les données nécessaires conformément à ses obligations légales. Les sommes déjà versées ne sont pas remboursables, sauf accord contraire avec le Vendeur.</p>

      <h2>Article 13 — Litiges et réclamations</h2>
      <h3>13.1 Service client</h3>
      <p>En cas de difficulté, contactez le service client de Nafa Pay :</p>
      <ul>
        <li>Par email :{" "}<a className="text-[var(--color-brand)] hover:underline" href="mailto:contact@imco.digital">contact@imco.digital</a></li>
        <li>Par téléphone : 71-010-70-70</li>
        <li>Via le formulaire de contact dans l&apos;Application.</li>
      </ul>

      <h3>13.2 Médiation</h3>
      <p>En cas de litige entre l&apos;Utilisateur et IMCO Digital, les parties s&apos;efforceront de trouver une solution amiable. Conformément au Code de la consommation sénégalais, l&apos;Utilisateur consommateur peut, en cas d&apos;échec de la résolution amiable, recourir à une procédure de médiation.</p>

      <h3>13.3 Litiges entre Acheteurs et Vendeurs</h3>
      <p>Les litiges relatifs à la vente de produits relèvent de la relation directe entre l&apos;Acheteur et le Vendeur. IMCO Digital peut, sans y être obligée, faciliter la communication entre les parties mais n&apos;intervient pas dans le règlement du litige.</p>

      <h2>Article 14 — Droit applicable et juridiction compétente</h2>
      <h3>14.1 Droit applicable</h3>
      <p>Les présentes CGU sont régies par le droit sénégalais, notamment :</p>
      <ul>
        <li>Le Code des obligations civiles et commerciales ;</li>
        <li>La loi n° 2008-12 du 25 janvier 2008 portant sur la protection des données à caractère personnel ;</li>
        <li>La loi n° 2008-08 du 25 janvier 2008 sur les transactions électroniques ;</li>
        <li>La loi n° 2021-25 du 12 avril 2021 sur les prix et la protection du consommateur.</li>
      </ul>

      <h3>14.2 Juridiction compétente</h3>
      <p>En cas de litige et à défaut de résolution amiable, les tribunaux sénégalais sont seuls compétents.</p>
      <p><Tag kind="buyers" /> Pour les litiges impliquant un Acheteur consommateur : les tribunaux du domicile du consommateur ou le tribunal du siège social d&apos;IMCO Digital, au choix du consommateur.</p>
      <p><Tag kind="sellers" /> Pour les litiges impliquant un Vendeur : le Tribunal de Commerce de Dakar est seul compétent.</p>

      <h3>14.3 Langue</h3>
      <p>Les présentes CGU sont rédigées en langue française. En cas de traduction, seule la version française fait foi.</p>

      <h2>Article 15 — Dispositions diverses</h2>
      <h3>15.1 Intégralité de l&apos;accord</h3>
      <p>Les présentes CGU constituent l&apos;intégralité de l&apos;accord entre les parties concernant l&apos;utilisation de l&apos;Application.</p>

      <h3>15.2 Nullité partielle</h3>
      <p>Si une ou plusieurs dispositions sont déclarées nulles ou inapplicables, les autres restent en vigueur. La disposition nulle sera remplacée par une disposition valide se rapprochant le plus du but poursuivi.</p>

      <h3>15.3 Renonciation</h3>
      <p>Le fait pour IMCO Digital de ne pas se prévaloir d&apos;un manquement ne saurait être interprété comme une renonciation à se prévaloir ultérieurement d&apos;un tel manquement.</p>

      <h3>15.4 Cession</h3>
      <p>Aucune partie ne peut céder ou transférer ses droits et obligations sans l&apos;accord préalable écrit d&apos;IMCO Digital. IMCO peut librement céder tout ou partie de ses droits notamment en cas de fusion, acquisition ou réorganisation.</p>

      <h3>15.5 Preuve</h3>
      <p>Les parties reconnaissent que les registres informatisés conservés dans les systèmes d&apos;IMCO Digital constituent des preuves des communications, transactions et paiements, conformément à la loi n° 2008-08 du 25 janvier 2008 sur les transactions électroniques.</p>

      <h3>15.6 Notifications</h3>
      <p>Toute notification adressée à IMCO Digital devra être transmise à l&apos;adresse électronique indiquée dans l&apos;Application ou par courrier postal envoyé à son siège social. Toute notification adressée à l&apos;Utilisateur ou au Vendeur sera valablement effectuée à l&apos;adresse électronique communiquée lors de l&apos;inscription sur l&apos;Application.</p>

      <h3>15.7 Titres</h3>
      <p>Les titres des articles sont insérés pour faciliter la lecture et n&apos;ont aucune valeur contractuelle.</p>

      <h2>Article 16 — Contact</h2>
      <p>Pour toute question concernant les présentes CGU ou l&apos;utilisation de l&apos;Application :</p>
      <ul>
        <li>Email :{" "}<a className="text-[var(--color-brand)] hover:underline" href="mailto:contact@imco.digital">contact@imco.digital</a></li>
        <li>Téléphone : 71-010-70-70</li>
        <li>Adresse : Scat Urbam, Villa F22, Dakar, Sénégal</li>
        <li>Horaires : Lundi – Vendredi, 9h – 17h</li>
      </ul>

      <div className="callout">
        En utilisant l&apos;Application Nafa Pay, vous reconnaissez avoir lu,
        compris et accepté l&apos;intégralité des présentes Conditions Générales
        d&apos;Utilisation.
      </div>
    </LegalShell>
  );
}
