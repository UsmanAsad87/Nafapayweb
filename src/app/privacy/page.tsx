import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

// The legal copy below is the VERBATIM French text from the
// `NafaPay Politique de Confidentialité.docx` (Version 1.0, 18/03/2026)
// supplied by IMCO Digital. Do not rephrase or summarize — only the
// French version of this document is legally authoritative (cf.
// section 19. LANGUE).
export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Nafa Pay. Comment IMCO Digital S.A.U collecte, utilise et protège vos données personnelles.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Politique de confidentialité"
      version="Version 1.0"
      date="18/03/2026"
    >
      <h2>1. Préambule</h2>
      <p>
        La présente Politique de Confidentialité décrit la manière dont IMCO
        Digital S.A.U (ci-après «&nbsp;IMCO Digital&nbsp;» ou «&nbsp;nous&nbsp;»), éditeur de
        l&apos;application Nafa Pay, collecte, utilise, conserve et protège les
        données à caractère personnel des utilisateurs de la Plateforme.
      </p>
      <p>
        Nafa Pay est une application numérique de marketplace permettant la
        réalisation d&apos;achats à paiement comptant ou à paiement progressif avec
        objectif, mettant en relation des Utilisateurs/Acheteurs (ci-après
        «&nbsp;Acheteurs&nbsp;») et des Vendeurs partenaires (ci-après «&nbsp;Vendeurs&nbsp;»).
        Dans ce cadre, les fonds versés par les Acheteurs sont conservés sur
        un compte de cantonnement ouvert auprès de FBN Bank Sénégal (ci-après
        «&nbsp;Établissement Gardien des Fonds&nbsp;»), IMCO Digital agissant
        exclusivement en qualité d&apos;initiateur de paiement (ASP).
      </p>
      <p>
        En utilisant l&apos;Application Nafa Pay, vous acceptez les pratiques
        décrites dans la présente Politique de Confidentialité, laquelle est
        à lire conjointement avec les Conditions Générales d&apos;Utilisation
        (CGU) disponibles sur l&apos;Application.
      </p>
      <div className="callout">
        <strong>Note :</strong> Les termes «&nbsp;Vendeur&nbsp;», «&nbsp;Acheteur&nbsp;», «&nbsp;ASP&nbsp;»,
        «&nbsp;Établissement Gardien des Fonds&nbsp;» et «&nbsp;Compte de cantonnement&nbsp;»
        ont la signification qui leur est donnée dans les CGU de Nafa Pay.
      </div>

      <h2>2. Responsable du traitement</h2>
      <p>
        <strong>IMCO Digital S.A.U</strong>
        <br />
        Adresse : Scat Urbam, Villa F22, Dakar, Sénégal
        <br />
        Téléphone : 71-010-70-70
        <br />
        Email :{" "}
        <a className="text-[var(--color-brand)] hover:underline" href="mailto:contact@imco.digital">
          contact@imco.digital
        </a>
      </p>

      <h2>3. Données collectées</h2>
      <h3>3.1 Données d&apos;identification et de compte</h3>
      <p>Lors de la création de votre compte Utilisateur, nous collectons :</p>
      <ul>
        <li>Nom et prénom ;</li>
        <li>Adresse e-mail ;</li>
        <li>Numéro de téléphone ;</li>
        <li>Mot de passe (stocké de manière chiffrée).</li>
      </ul>

      <h3>3.2 Données relatives aux transactions</h3>
      <p>Dans le cadre de l&apos;utilisation de l&apos;Application, nous collectons et traitons :</p>
      <ul>
        <li>Historique des achats et des objectifs de paiement créés ;</li>
        <li>Montants des versements effectués ;</li>
        <li>Dates et heures des transactions ;</li>
        <li>Soldes et montants restants à verser ;</li>
        <li>Statut d&apos;avancement des objectifs de paiement ;</li>
        <li>Identifiants des produits sélectionnés ;</li>
        <li>Informations relatives aux Vendeurs concernés.</li>
      </ul>

      <h3>3.3 Données de paiement</h3>
      <p>
        Les données de paiement sont traitées par des prestataires de services
        de paiement tiers certifiés, dont l&apos;Établissement Gardien des Fonds
        (FBN Bank Sénégal). Nous ne conservons pas les informations bancaires
        complètes, mais pouvons conserver :
      </p>
      <ul>
        <li>Les quatre derniers chiffres du moyen de paiement utilisé ;</li>
        <li>Le type de moyen de paiement (carte bancaire, mobile money, etc.) ;</li>
        <li>Les identifiants de transaction fournis par les prestataires de paiement.</li>
      </ul>
      <p>
        Les fonds versés par les Acheteurs sont conservés sur un compte de
        cantonnement ségrégué des fonds propres d&apos;IMCO Digital, ouvert auprès
        de FBN Bank Sénégal (Établissement Gardien des Fonds). IMCO Digital
        n&apos;a pas accès à ces fonds en dehors de son rôle d&apos;initiateur de
        paiement (ASP).
      </p>

      <h3>3.4 Données techniques et de navigation</h3>
      <p>Nous collectons automatiquement :</p>
      <ul>
        <li>Adresse IP ;</li>
        <li>Type et version du navigateur ou de l&apos;application mobile ;</li>
        <li>Système d&apos;exploitation ;</li>
        <li>Identifiant unique de l&apos;appareil ;</li>
        <li>Données de géolocalisation approximative (pays, ville) ;</li>
        <li>Journaux de connexion (logs) ;</li>
        <li>Données d&apos;utilisation de l&apos;Application (pages consultées, fonctionnalités utilisées, durée de session).</li>
      </ul>

      <h3>3.5 Données communiquées volontairement</h3>
      <p>Vous pouvez également nous transmettre :</p>
      <ul>
        <li>Messages adressés au service client ;</li>
        <li>Avis et évaluations ;</li>
        <li>Préférences de notification.</li>
      </ul>

      <h3>3.6 Données collectées dans le cadre du KYC et de la LBC/FT</h3>
      <p>
        Dans le cadre de nos obligations légales de lutte contre le
        blanchiment de capitaux et le financement du terrorisme (LBC/FT),
        ainsi que des procédures de vérification d&apos;identité (KYC), nous
        pouvons être amenés à collecter des données supplémentaires, notamment :
      </p>
      <ul>
        <li>
          <strong>Pour les Acheteurs (KYC)</strong> : copie de pièce d&apos;identité,
          justificatif de domicile, et tout autre document requis par la
          réglementation applicable ;
        </li>
        <li>
          <strong>Pour les Vendeurs (KYB)</strong> : documents d&apos;immatriculation
          commerciale, pièces d&apos;identité, informations sur l&apos;activité de
          l&apos;entreprise.
        </li>
      </ul>
      <p>
        Le traitement des données repose sur une obligation légale et leur
        conservation s&apos;effectue conformément aux délais imposés par la
        réglementation LBC/FT applicable au sein de l&apos;UEMOA.
      </p>

      <h2>4. Finalités du traitement</h2>
      <h3>4.1 Fourniture et gestion du service</h3>
      <ul>
        <li>Créer et gérer votre compte Utilisateur ou Vendeur ;</li>
        <li>Permettre la sélection de produits et la création d&apos;objectifs de paiement ;</li>
        <li>Suivre l&apos;avancement des versements et des objectifs ;</li>
        <li>Faciliter la communication entre Acheteurs et Vendeurs ;</li>
        <li>Initier les opérations de paiement via des prestataires tiers agréés, dont l&apos;Établissement Gardien des Fonds.</li>
      </ul>

      <h3>4.2 Sécurité et prévention de la fraude</h3>
      <ul>
        <li>Authentifier les Utilisateurs et les Vendeurs ;</li>
        <li>Détecter et prévenir les fraudes, abus et activités illicites ;</li>
        <li>Assurer la sécurité de la Plateforme.</li>
      </ul>

      <h3>4.3 Conformité LBC/FT</h3>
      <ul>
        <li>Effectuer les vérifications d&apos;identité requises (KYC/KYB) ;</li>
        <li>Détecter et signaler les transactions suspectes conformément à la réglementation UEMOA/BCEAO ;</li>
        <li>Conserver les données requises dans le cadre des obligations de conformité.</li>
      </ul>

      <h3>4.4 Amélioration de nos services</h3>
      <ul>
        <li>Analyser l&apos;utilisation de l&apos;Application ;</li>
        <li>Développer de nouvelles fonctionnalités ;</li>
        <li>Réaliser des statistiques anonymisées.</li>
      </ul>

      <h3>4.5 Communication</h3>
      <p>
        Nous utilisons vos informations pour assurer une communication
        efficace dans le cadre de l&apos;utilisation de nos services. À ce titre,
        nous pouvons :
      </p>
      <ul>
        <li>Vous envoyer des notifications liées à vos transactions, à l&apos;évolution de vos opérations ou à l&apos;atteinte de vos objectifs de paiement ;</li>
        <li>Répondre à vos demandes d&apos;assistance ;</li>
        <li>Vous informer des mises à jour concernant nos services, nos CGU ou notre Politique de Confidentialité ;</li>
        <li>Vous adresser des communications commerciales (offres, promotions, nouveautés), uniquement si vous avez donné votre consentement préalable.</li>
      </ul>

      <h3>4.6 Obligations légales</h3>
      <ul>
        <li>Respecter nos obligations légales et réglementaires, notamment en matière de LBC/FT, de conformité financière ou de conservation des données ;</li>
        <li>Répondre aux demandes des autorités compétentes (autorités judiciaires, administratives ou de régulation).</li>
      </ul>

      <h2>5. Bases juridiques du traitement</h2>
      <p>
        Le traitement de vos données personnelles repose sur les bases
        juridiques suivantes, conformément à la loi n° 2008-12 du 25 janvier
        2008 portant sur la protection des données à caractère personnel :
      </p>
      <ul>
        <li>
          <strong>Exécution du contrat</strong> : lorsque le traitement est
          nécessaire à la fourniture des services Nafa Pay, y compris la
          gestion de votre compte, la réalisation des transactions et
          l&apos;assistance Utilisateur ;
        </li>
        <li>
          <strong>Intérêt légitime</strong> : pour garantir le bon
          fonctionnement et l&apos;amélioration continue de nos services, assurer
          la sécurité de la Plateforme et prévenir les usages frauduleux ;
        </li>
        <li>
          <strong>Consentement</strong> : lorsque vous acceptez volontairement
          certains traitements, notamment pour la réception de communications
          commerciales ou l&apos;utilisation de cookies non essentiels ;
        </li>
        <li>
          <strong>Obligation légale</strong> : lorsque le traitement est
          requis pour satisfaire à nos obligations légales, notamment dans le
          cadre du KYC, de la LBC/FT et de la conservation des données
          comptables et fiscales.
        </li>
      </ul>

      <h2>6. Destinataires des données</h2>
      <h3>6.1 En interne</h3>
      <p>
        Vos données personnelles ne sont accessibles qu&apos;au personnel dûment
        habilité d&apos;IMCO Digital, exclusivement dans la limite de leurs
        attributions et uniquement lorsque cet accès est nécessaire à
        l&apos;exécution de leurs missions (support Utilisateur, gestion des
        transactions, sécurité, conformité, etc.).
      </p>

      <h3>6.2 Vendeurs partenaires</h3>
      <p>
        Dans le cadre des achats effectués via leur boutique, les Vendeurs
        partenaires peuvent accéder exclusivement aux informations
        strictement nécessaires à la gestion de leurs ventes et au suivi des
        objectifs de paiement. À ce titre, ils ont accès aux données suivantes :
      </p>
      <ul>
        <li>L&apos;identité de l&apos;Acheteur (nom, prénom et, le cas échéant, identifiant Utilisateur) ;</li>
        <li>Le produit sélectionné ou le service souscrit ;</li>
        <li>Le montant total de l&apos;achat ainsi que l&apos;état d&apos;avancement de l&apos;objectif de paiement ;</li>
        <li>L&apos;historique des versements réalisés dans le cadre de l&apos;achat.</li>
      </ul>
      <p>
        Les Vendeurs partenaires ne reçoivent aucune donnée non pertinente, et
        notamment aucune information bancaire sensible, sauf lorsque la loi ou
        une obligation réglementaire l&apos;exige.
      </p>

      <h3>6.3 Établissement Gardien des Fonds</h3>
      <p>
        FBN Bank Sénégal, en sa qualité d&apos;Établissement Gardien des Fonds, a
        accès aux données nécessaires à la gestion du compte de cantonnement
        et à l&apos;exécution des opérations de paiement, conformément à la
        réglementation bancaire applicable.
      </p>

      <h3>6.4 Prestataires de services</h3>
      <ul>
        <li>Prestataires de services de paiement (traitement des transactions) ;</li>
        <li>Hébergeurs de données ;</li>
        <li>Prestataires de services informatiques et techniques ;</li>
        <li>Services d&apos;assistance client ;</li>
        <li>Prestataires d&apos;analyse et de statistiques.</li>
      </ul>

      <h3>6.5 Autorités</h3>
      <p>
        En cas d&apos;obligation légale, de demande judiciaire ou dans le cadre de
        nos obligations LBC/FT, vos données peuvent être communiquées aux
        autorités compétentes (Commission de Protection des Données, autorités
        judiciaires, CENTIF, etc).
      </p>

      <h2>7. Transferts de données hors du Sénégal</h2>
      <p>
        Si applicable, vos données peuvent être transférées et traitées dans
        des pays situés en dehors du Sénégal. Dans ce cas, nous nous assurons
        que des garanties appropriées sont mises en place conformément à la
        réglementation applicable, notamment par :
      </p>
      <ul>
        <li>Des clauses contractuelles types approuvées par la Commission de Protection des Données Personnelles (CDP) ;</li>
        <li>Des certifications ou mécanismes reconnus garantissant un niveau de protection adéquat ;</li>
        <li>L&apos;engagement contractuel des destinataires à respecter les normes sénégalaises de protection des données.</li>
      </ul>

      <h2>8. Durée de conservation des données</h2>
      <h3>8.1 Données de compte actif</h3>
      <p>Pendant toute la durée d&apos;utilisation de votre compte et jusqu&apos;à sa fermeture.</p>

      <h3>8.2 Après fermeture du compte</h3>
      <ul>
        <li><strong>Données d&apos;identification</strong> : 5 ans à compter de la fermeture du compte (obligations légales et fiscales) ;</li>
        <li><strong>Données de transaction</strong> : 10 ans conformément aux obligations comptables et fiscales sénégalaises ;</li>
        <li><strong>Données de paiement</strong> : durée légale applicable pour la conservation des justificatifs de paiement.</li>
      </ul>

      <h3>8.3 Données KYC LBC/FT</h3>
      <p>Conservées pendant 5 ans après la fin de la relation commerciale, conformément aux obligations légales LBC/FT en vigueur au sein de l&apos;UEMOA.</p>

      <h3>8.4 Données de prospection commerciale</h3>
      <p>Conservées pendant 3 ans à compter du dernier contact actif ou du retrait du consentement.</p>

      <h3>8.5 Données de connexion (logs)</h3>
      <p>1 an conformément à la réglementation sur les transactions électroniques.</p>

      <h3>8.6 Cessation d&apos;activité ou fin de partenariat bancaire</h3>
      <p>
        En cas de cessation d&apos;activité d&apos;IMCO Digital ou de fin de partenariat
        bancaire avec l&apos;Établissement Gardien des Fonds (FBN Bank Sénégal),
        les fonds conservés sur le compte de cantonnement feront l&apos;objet d&apos;un
        traitement conforme à la réglementation applicable et aux instructions
        de l&apos;établissement gardien des fonds. IMCO Digital s&apos;engage à informer
        les Utilisateurs et les vendeurs dans les meilleurs délais et à mettre
        en œuvre toutes les mesures nécessaires à la préservation de leurs
        intérêts.
      </p>

      <h3>8.7 Cas particuliers</h3>
      <p>
        En cas de contentieux, de litige ou d&apos;enquête des autorités, certaines
        données peuvent être conservées jusqu&apos;à l&apos;issue de la procédure et
        pendant les délais de prescription applicables. À l&apos;expiration de ces
        délais, vos données sont supprimées ou anonymisées de manière
        irréversible.
      </p>

      <h2>9. Sécurité des données</h2>
      <h3>9.1 Mesures de sécurité techniques</h3>
      <p>
        IMCO Digital met en œuvre des mesures de sécurité appropriées pour
        protéger vos données contre l&apos;accès non autorisé, la modification, la
        divulgation, la destruction non autorisée ou la perte accidentelle.
        Ces mesures comprennent notamment :
      </p>
      <ul>
        <li>Le chiffrement des données sensibles (notamment les mots de passe) ;</li>
        <li>L&apos;utilisation de protocoles sécurisés ;</li>
        <li>Des systèmes de sauvegarde réguliers ;</li>
        <li>Des pare-feu et systèmes de détection d&apos;intrusion ;</li>
        <li>La limitation de l&apos;accès aux données aux seules personnes habilitées ;</li>
        <li>L&apos;authentification sécurisée des Utilisateurs.</li>
      </ul>

      <h3>9.2 Mesures organisationnelles</h3>
      <p>Nous avons mis en place des procédures internes incluant :</p>
      <ul>
        <li>La formation de nos collaborateurs à la protection des données ;</li>
        <li>Des politiques de confidentialité strictes pour nos employés ;</li>
        <li>Des audits réguliers de sécurité ;</li>
        <li>Des procédures de gestion des incidents de sécurité.</li>
      </ul>

      <h3>9.3 Responsabilité de l&apos;Utilisateur</h3>
      <p>La sécurité de vos données dépend également de vous. Vous devez :</p>
      <ul>
        <li>Choisir un mot de passe robuste et unique ;</li>
        <li>Ne pas partager vos identifiants de connexion ;</li>
        <li>Vous déconnecter après chaque session, particulièrement sur un appareil partagé ;</li>
        <li>Maintenir vos appareils et applications à jour ;</li>
        <li>Nous signaler immédiatement toute utilisation suspecte de votre compte.</li>
      </ul>

      <h3>9.4 Notification de violation</h3>
      <p>
        En cas de violation de données personnelles susceptible d&apos;engendrer un
        risque élevé pour vos droits et libertés, nous vous en informerons
        dans les meilleurs délais conformément à la réglementation applicable,
        et notifierons la Commission de Protection des Données Personnelles
        (CDP) si nécessaire.
      </p>

      <h2>10. Vos droits sur vos données personnelles</h2>
      <p>
        Conformément à la loi n° 2008-12 du 25 janvier 2008 portant sur la
        protection des données à caractère personnel, vous disposez des droits
        suivants :
      </p>
      <h3>10.1 Droit d&apos;accès</h3>
      <p>
        Vous pouvez obtenir la confirmation que vos données sont traitées,
        l&apos;accès à vos données personnelles, des informations sur les finalités
        du traitement, les catégories de données, les destinataires ainsi que
        la durée de conservation prévue.
      </p>
      <h3>10.2 Droit de rectification</h3>
      <p>
        Vous disposez du droit de demander la correction de toute donnée
        personnelle inexacte, incomplète ou obsolète. Nous procédons à la
        rectification dans les meilleurs délais.
      </p>
      <h3>10.3 Droit d&apos;opposition</h3>
      <p>
        Vous pouvez vous opposer à tout moment au traitement de vos données à
        des fins de prospection commerciale, y compris le profilage, ou pour
        des motifs légitimes dans tout autre contexte non fondé sur une
        obligation légale ou l&apos;exécution d&apos;un contrat.
      </p>
      <h3>10.4 Droit à l&apos;effacement</h3>
      <p>
        Vous pouvez demander la suppression de vos données lorsqu&apos;elles ne
        sont plus nécessaires aux finalités pour lesquelles elles ont été
        collectées, lorsque vous retirez votre consentement, ou lorsqu&apos;elles
        ont fait l&apos;objet d&apos;un traitement illicite. Ce droit ne s&apos;applique pas
        lorsque la conservation est nécessaire au respect d&apos;obligations
        légales.
      </p>
      <h3>10.5 Droit à la limitation du traitement</h3>
      <p>
        Vous pouvez demander la limitation du traitement de vos données
        notamment lorsque vous contestez leur exactitude, lorsque le
        traitement est illicite mais que vous refusez leur suppression, ou
        lorsque vous vous êtes opposé au traitement pendant la vérification.
      </p>
      <h3>10.6 Droit à la portabilité</h3>
      <p>
        Vous avez le droit de recevoir vos données dans un format structuré,
        couramment utilisé et lisible par machine, et de les transmettre à un
        autre responsable de traitement, lorsque le traitement est fondé sur
        votre consentement ou un contrat et effectué par des moyens
        automatisés.
      </p>
      <h3>10.7 Droit de retirer votre consentement</h3>
      <p>
        Lorsque le traitement est fondé sur votre consentement, vous pouvez le
        retirer à tout moment. Ce retrait n&apos;affecte pas la licéité du
        traitement effectué avant le retrait.
      </p>

      <h2>11. Exercice de vos droits</h2>
      <h3>11.1 Modalités d&apos;exercice</h3>
      <p>Pour exercer l&apos;un des droits mentionnés à l&apos;article 10, vous pouvez nous contacter :</p>
      <ul>
        <li>
          Par email :{" "}
          <a className="text-[var(--color-brand)] hover:underline" href="mailto:contact@imco.digital">
            contact@imco.digital
          </a>
          {" "};
        </li>
        <li>Via votre espace Utilisateur : Paramètres &gt; Confidentialité &gt; Mes droits.</li>
      </ul>
      <p>
        Afin de faciliter le traitement de votre demande, il peut vous être
        demandé de fournir une preuve d&apos;identité lorsque cela est nécessaire
        pour garantir la sécurité de vos données personnelles.
      </p>

      <h3>11.2 Délai de réponse</h3>
      <p>
        Nous nous engageons à répondre à votre demande dans un délai
        raisonnable et au plus tard dans un délai d&apos;un (1) mois à compter de
        sa réception. Ce délai peut être prolongé en raison de la complexité
        ou du nombre de demandes. Vous en serez informé dans le délai initial
        d&apos;un mois.
      </p>

      <h3>11.3 Gratuité</h3>
      <p>
        L&apos;exercice de vos droits est gratuit. Toutefois, en cas de demandes
        manifestement infondées ou excessives, notamment en raison de leur
        caractère répétitif, nous pouvons exiger le paiement de frais
        raisonnables ou refuser de donner suite à la demande.
      </p>

      <h2>12. Réclamation auprès de l&apos;autorité de contrôle</h2>
      <p>
        Si vous estimez que le traitement de vos données personnelles
        constitue une violation de la réglementation applicable, vous avez le
        droit d&apos;introduire une réclamation auprès de la Commission de
        Protection des Données Personnelles (CDP) :
      </p>
      <ul>
        <li>Adresse : Complexe SICAP Point E, 1er étage, Immeuble A, Avenue Cheikh Anta Diop x Canal IV, Dakar ;</li>
        <li>Téléphone : +221 33 859 70 30 ;</li>
        <li>
          Email :{" "}
          <a className="text-[var(--color-brand)] hover:underline" href="mailto:contact.cdp@cdp.sn">
            contact.cdp@cdp.sn
          </a>
        </li>
      </ul>

      <h2>13. Cookies et technologies similaires</h2>
      <h3>13.1 Qu&apos;est-ce qu&apos;un cookie ?</h3>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal
        (ordinateur, smartphone, tablette) lors de la visite d&apos;un site ou de
        l&apos;utilisation d&apos;une application. Il permet de collecter des
        informations relatives à votre navigation.
      </p>

      <h3>13.2 Types de cookies utilisés</h3>
      <p>
        <strong>Cookies strictement nécessaires.</strong> Indispensables au
        fonctionnement de l&apos;Application. Ils permettent notamment
        l&apos;authentification et la sécurisation de votre connexion, la
        mémorisation de vos objectifs de paiement et le maintien de votre
        session. Ces cookies ne nécessitent pas votre consentement préalable.
      </p>
      <p>
        <strong>Cookies de performance et d&apos;analyse.</strong> Ces cookies nous
        permettent de comprendre comment les Utilisateurs utilisent
        l&apos;Application, d&apos;identifier les pages les plus consultées, de détecter
        les éventuels problèmes techniques et d&apos;améliorer les performances de
        nos services. Leur utilisation est soumise à votre consentement.
      </p>
      <p>
        <strong>Cookies de fonctionnalité.</strong> Permettent de mémoriser vos
        préférences (langue, paramètres d&apos;affichage) et de personnaliser votre
        expérience Utilisateur. Ils sont déposés sous réserve de votre
        consentement.
      </p>
      <p>
        <strong>Cookies publicitaires et de ciblage.</strong> Permettent de
        vous proposer des publicités adaptées à vos centres d&apos;intérêt, de
        mesurer l&apos;efficacité de nos campagnes et de limiter la répétition des
        publicités. Leur utilisation est conditionnée à votre consentement
        préalable.
      </p>

      <h3>13.3 Gestion des cookies</h3>
      <p>
        Vous pouvez à tout moment gérer vos préférences via l&apos;Application :
        Paramètres &gt; Confidentialité &gt; Gestion des cookies, ou via les
        paramètres de votre navigateur. Le refus de certains cookies peut
        limiter votre accès à certaines fonctionnalités de l&apos;Application.
      </p>

      <h3>13.4 Cookies tiers</h3>
      <p>
        Certains cookies peuvent être déposés par nos partenaires (prestataires
        de paiement, services d&apos;analyse, réseaux publicitaires). Ces
        partenaires sont responsables du traitement des données qu&apos;ils
        collectent via ces cookies.
      </p>

      <h2>14. Liens vers des sites tiers</h2>
      <p>
        L&apos;Application peut contenir des liens vers des sites web ou
        applications tiers (sites de Vendeurs, réseaux sociaux, etc.). IMCO
        Digital n&apos;exerce aucun contrôle sur ces sites et n&apos;est pas
        responsable de leurs pratiques en matière de protection des données
        personnelles. Nous vous invitons à consulter les politiques de
        confidentialité de ces sites tiers.
      </p>

      <h2>18. Acceptation de la politique de confidentialité</h2>
      <p>
        En utilisant l&apos;Application Nafa Pay, vous reconnaissez avoir lu,
        compris et accepté la présente Politique de Confidentialité.
      </p>

      <h2>19. Langue</h2>
      <p>
        La présente Politique de Confidentialité est rédigée en français. En
        cas de traduction dans une autre langue, seule la version française
        fait foi en cas de divergence d&apos;interprétation.
      </p>

      <h2>20. Droit applicable</h2>
      <p>
        La présente Politique de Confidentialité est régie par le droit
        sénégalais, notamment la loi n° 2008-12 du 25 janvier 2008 portant
        sur la protection des données à caractère personnel.
      </p>

      <div className="callout">
        Votre vie privée est importante pour nous. IMCO Digital s&apos;engage à
        protéger vos données personnelles et à respecter vos droits
        conformément à la législation sénégalaise en vigueur.
      </div>

      <p className="mt-8 text-xs text-[var(--color-ink-muted)]">
        Date de dernière mise à jour : 18/03/2026 — Version 1.0
      </p>
    </LegalShell>
  );
}
