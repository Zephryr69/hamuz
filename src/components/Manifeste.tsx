"use client";

import { useEffect, useState } from "react";
import styles from "./Manifeste.module.css";

type Particle = { id: number; left: string; top: string; delay: string; duration: string; size: string };

export default function Manifeste() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${6 + Math.random() * 6}s`,
        size: `${1 + Math.random() * 2}px`,
      }))
    );
  }, []);

  return (
    <section className={styles.manifeste} id="manifeste">
      <div className={styles.particles}>
        {particles.map((p) => (
          <span
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
      <div className={`${styles.label} reveal`}>Le manifeste</div>
      <blockquote className={`${styles.quote} reveal reveal-delay-1`}>
        « Le luxe n&apos;est pas une distance. C&apos;est la générosité de faire monter les autres avant de
        s&apos;élever. »
      </blockquote>
      <p className={`${styles.text} reveal reveal-delay-2`}>
        Jadis, les femmes noires avaient l&apos;interdiction de montrer leurs cheveux. Elles ont transformé cette
        contrainte en une élégance affirmée : le foulard. HAMUZ célèbre cette alchimie — celle qui fait du refus
        imposé un symbole de beauté souveraine.
      </p>
    </section>
  );
}
