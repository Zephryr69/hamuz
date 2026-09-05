"use client";

import { useEffect, useState } from "react";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const MIN_DISPLAY_MS = 500;
    const start = Date.now();

    const reveal = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal);
      return () => window.removeEventListener("load", reveal);
    }
  }, []);

  // Rien à afficher côté serveur : évite un flash au premier rendu SSR
  if (!mounted) return null;

  return (
    <div className={`${styles.overlay} ${hidden ? styles.overlayHidden : ""}`} aria-hidden={hidden}>
      <div className={styles.mark} />
      <span className={styles.word}>HAMUZ</span>
    </div>
  );
}
