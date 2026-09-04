import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={`${styles.heroBrand} reveal`}>
          <Image src="/hamuz-logo-light.png" alt="HAMUZ" width={340} height={94} priority className={styles.heroLogoImg} />
        </div>
        <p className={`${styles.heroTagline} reveal reveal-delay-1`}>Le Luxe Élévateur</p>
        <h1 className={`${styles.heroTitle} reveal reveal-delay-1`}>L&apos;amour élève.</h1>
        <p className={`${styles.heroSubtitle} reveal reveal-delay-2`}>
          HAMUZ, l&apos;amour qui a fait naître une égérie royale. Une maison pour honorer la beauté qui unit.
        </p>
        <a href="#histoire" className={`${styles.heroBtn} reveal reveal-delay-3`}>
          Découvrir notre histoire
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className={`${styles.heroImage} reveal reveal-delay-2`}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/hamuz-royal-muse.png"
            alt="Une Royal Muse HAMUZ portant un foulard sculptural"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
          <div className={styles.heroImageFrame} />
        </div>
      </div>
      <div className={styles.heroScroll}>
        <div className={styles.heroScrollLine} />
        Défiler
      </div>
    </section>
  );
}
