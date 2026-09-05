"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import { useSite } from "./site-context";
import { submitToPrivateList } from "@/lib/googleForm";

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

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.5 3.53 1.36 5L2 22l5.2-1.36C8.6 21.5 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.55 0-3-.42-4.26-1.15l-.3-.18-3.1.81.83-3.02-.2-.31A8.17 8.17 0 0 1 3.8 12c0-4.53 3.68-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.68 8.2-8.2 8.2zm4.5-6.15c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.12-.17.25-.65.8-.8.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const { showToast } = useSite();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitToPrivateList(name, email);
      setSubmitted(true);
      setName("");
      setEmail("");
      showToast("Inscription réussie ! Bienvenue ✦");
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
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
            type="text"
            placeholder="Votre prénom"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Prénom"
          />
          <input
            type="email"
            placeholder="Votre adresse email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Adresse email"
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "..." : "S'inscrire"}
          </button>
        </form>
        {submitted && <p className={styles.success}>✓ Merci ! Vous êtes maintenant dans la liste privée.</p>}
        {error && (
          <p className={styles.error}>
            Une erreur est survenue. Réessayez, ou écrivez à hamuz.official@gmail.com.
          </p>
        )}
      </div>

      <div className={`${styles.social} reveal`}>
        <a href="https://instagram.com/hamuzofficial" target="_blank" rel="noopener noreferrer">
          <InstagramIcon /> Instagram
        </a>
        <a href="https://wa.me/2290196531545" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon /> WhatsApp
        </a>
        <a href="mailto:hamuz.official@gmail.com">
          <MailIcon /> Nous écrire
        </a>
      </div>

      <p className={styles.collab}>
        Ouvert aux collaborations avec des agences et d&apos;autres marques de luxe.
      </p>

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
