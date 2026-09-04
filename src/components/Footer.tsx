"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import { useSite } from "./site-context";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useSite();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    showToast("Inscription réussie ! Bienvenue ✦");
  };

  return (
    <footer className={styles.footer} id="communaute">
      <div className={styles.top}>
        <div className={`${styles.label} reveal`}>Communauté</div>
        <h2 className={`${styles.title} reveal reveal-delay-1`}>
          Entrez dans le cercle
          <br />
          des <em>Royal Muses</em>.
        </h2>
        <p className={`${styles.subtitle} reveal reveal-delay-2`}>
          Soyez parmi les premiers informés du lancement et des surprises HAMUZ.
        </p>

        <form className={`${styles.form} reveal reveal-delay-3`} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Votre adresse email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Adresse email"
          />
          <button type="submit">S&apos;inscrire</button>
        </form>
        {submitted && <p className={styles.success}>✓ Merci ! Vous êtes maintenant dans la liste privée.</p>}
      </div>

      <div className={`${styles.social} reveal`}>
        <a href="https://instagram.com/hamuzofficial" target="_blank" rel="noopener noreferrer">
          <InstagramIcon /> Instagram
        </a>
        <a href="mailto:hamuz.official@gmail.com">
          <MailIcon /> Nous écrire
        </a>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <span className={styles.copy}>© {new Date().getFullYear()} HAMUZ. Tous droits réservés.</span>
        <div className={styles.links}>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
