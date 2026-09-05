import type { Metadata } from "next";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Mentions légales — HAMUZ",
};

export default function MentionsLegales() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <a href="/" className={styles.back}>
          ← Retour au site
        </a>
        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.updated}>Dernière mise à jour : {new Date().getFullYear()}</p>

        <div className={styles.content}>
          <h2>Éditeur du site</h2>
          <p>
            Le site HAMUZ est édité par Mariella Behanzin, en tant que personne physique responsable de la marque
            HAMUZ. À ce jour, HAMUZ n&apos;est pas encore constituée en société ; cette mention sera mise à jour
            dès l&apos;immatriculation officielle de l&apos;activité.
          </p>
          <p>
            Localisation : Cotonou, Bénin
            <br />
            Contact : <a href="mailto:hamuz.official@gmail.com">hamuz.official@gmail.com</a> —{" "}
            <a href="tel:+2290196531545">+229 01 96 53 15 45</a>
          </p>

          <h2>Directeur de la publication</h2>
          <p>Mariella Behanzin</p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images, logo, identité visuelle) est la
            propriété de HAMUZ, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou
            partielle, sans autorisation préalable est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations relatives au traitement de vos données personnelles sont détaillées dans notre{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
