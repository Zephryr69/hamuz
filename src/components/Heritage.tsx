import styles from "./Heritage.module.css";

export default function Heritage() {
  return (
    <section className={styles.heritage} id="heritage">
      <div className={`${styles.label} reveal`}>Héritage</div>
      <h2 className={`${styles.title} reveal reveal-delay-1`}>
        <span>Hansaou.</span> Amour. Muse.
      </h2>
      <div className={`${styles.words} reveal reveal-delay-2`}>
        <span className={styles.word}>Hansaou</span>
        <span className={styles.word}>Amour</span>
        <span className={styles.word}>Muse</span>
      </div>
      <p className={`${styles.text} reveal reveal-delay-3`}>
        Trois sources, une identité. Une maison d&apos;élégance africaine, créée pour les muses qui font de leur
        histoire une couronne.
      </p>
    </section>
  );
}
