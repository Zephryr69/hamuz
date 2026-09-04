"use client";

import { useEffect, useState } from "react";
import styles from "./StickyMobileCta.module.css";
import { useSite } from "./site-context";

export default function StickyMobileCta() {
  const { openModal } = useSite();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <button className={styles.btn} onClick={openModal}>
        Rejoindre la liste privée
      </button>
    </div>
  );
}
