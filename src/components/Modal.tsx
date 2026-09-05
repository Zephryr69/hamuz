"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Modal.module.css";
import { useSite } from "./site-context";

export default function Modal() {
  const { modalOpen, modalSuccess, closeModal, submitModal } = useSite();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
    }
  }, [modalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitModal();
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
              <button type="submit">Rejoindre le cercle</button>
            </form>
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
