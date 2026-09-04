import type { Metadata } from "next";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité — HAMUZ",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <a href="/" className={styles.back}>
          ← Retour au site
        </a>
        <h1 className={styles.title}>Politique de confidentialité</h1>
        <p className={styles.updated}>Dernière mise à jour : {new Date().getFullYear()}</p>

        <div className={styles.content}>
          <p>
            HAMUZ accorde une importance particulière à la protection de vos données personnelles. Cette page
            explique quelles informations sont collectées sur ce site, pourquoi, et comment vous pouvez exercer
            vos droits.
          </p>

          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées sur ce site est HAMUZ, joignable à l&apos;adresse{" "}
            <a href="mailto:hamuz.official@gmail.com">hamuz.official@gmail.com</a>.
          </p>

          <h2>Quelles données sont collectées</h2>
          <p>Ce site collecte uniquement les données que vous fournissez volontairement, à savoir :</p>
          <ul>
            <li>Votre adresse email, lorsque vous vous inscrivez à la liste privée</li>
            <li>Votre prénom, si vous le renseignez dans le formulaire d&apos;inscription</li>
          </ul>
          <p>Aucune autre donnée personnelle n&apos;est collectée automatiquement par ce site.</p>

          <h2>Pourquoi ces données sont collectées</h2>
          <p>
            Ces informations sont utilisées uniquement pour vous informer du lancement de la marque HAMUZ, de la
            disponibilité de ses produits et de ses actualités. Elles ne sont ni vendues, ni louées, ni partagées
            avec des tiers à des fins commerciales.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Vos données sont conservées jusqu&apos;à ce que vous demandiez leur suppression, ou jusqu&apos;à ce que
            vous vous désinscriviez de la liste privée.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez à tout moment demander l&apos;accès, la rectification ou la suppression de vos données
            personnelles en écrivant à{" "}
            <a href="mailto:hamuz.official@gmail.com">hamuz.official@gmail.com</a>.
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc. Pour plus d&apos;informations sur leurs pratiques en matière de
            données, consultez leur propre politique de confidentialité.
          </p>
        </div>
      </div>
    </main>
  );
}
