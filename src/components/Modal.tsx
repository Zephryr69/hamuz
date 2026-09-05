"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import { useSite } from "./site-context";
import { submitToPrivateList } from "@/lib/googleForm";

export default function Modal() {
  const { modalOpen, modalSuccess, closeModal, submitModal } = useSite();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeModal]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setName("");
      setEmail("");
      setError(false);
    }
  }, [modalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      await submitToPrivateList(name, email);
      submitModal();
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${styles.overlay} ${modalOpen ? styles.overlayOpen : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={closeModal} aria-label="Fermer">
          &times;
        </button>
        {!modalSuccess ? (
          <>
            <div className={styles.logo}>
              <Image src="/hamuz-logo.png" alt="HAMUZ" width={160} height={44} className={styles.logoImg} />
            </div>
            <h3 className={styles.title}>Rejoindre la liste privée</h3>
            <p className={styles.text}>
              HAMUZ n&apos;est pas encore en vente. Inscrivez-vous pour être parmi les premiers à découvrir nos
              créations et bénéficier d&apos;un accès exclusif.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Votre prénom"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={submitting}>
                {submitting ? "Envoi..." : "Rejoindre le cercle"}
              </button>
            </form>
            {error && (
              <p className={styles.error}>
                Une erreur est survenue. Réessayez, ou écrivez-nous directement à hamuz.official@gmail.com.
              </p>
            )}
          </>
        ) : (
          <div>
            <div className={styles.successIcon}>✦</div>
            <h3 className={styles.successTitle}>Bienvenue, Muse.</h3>
            <p className={styles.successText}>
              Vous êtes maintenant dans le cercle des Royal Muses. Nous vous tiendrons informé(e).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
