"use client";

import styles from "./Toast.module.css";
import { useSite } from "./site-context";

export default function Toast() {
  const { toastMessage } = useSite();

  return (
    <div className={`${styles.toast} ${toastMessage ? styles.toastShow : ""}`}>
      <span className={styles.icon}>✦</span>
      <span>{toastMessage}</span>
    </div>
  );
}
