import Link from "next/link";
import styles from "@/components/LegalPage.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.container} style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", letterSpacing: "0.3em", color: "var(--gold)", marginBottom: "1.5rem" }}>
          404
        </p>
        <h1 className={styles.title}>Cette page s&apos;est égarée.</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2.5rem" }}>
          Comme une muse qui n&apos;a pas encore trouvé sa couronne, cette page n&apos;existe pas — ou plus.
        </p>
        <Link href="/" className={styles.back} style={{ display: "inline-flex" }}>
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
