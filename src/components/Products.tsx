"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Products.module.css";
import { useSite } from "./site-context";

type Profile = {
  name: string;
  tagline: string;
  description: string;
  effect: string;
  quote: string;
  pyramid: { label: string; notes: string }[];
  image: string;
  imageAlt: string;
};

const profiles: Profile[] = [
  {
    name: "Hamuz Flair Man",
    tagline: "Eau de Parfum",
    description:
      "Le parfum de l'autorité et de la sagesse. Pour l'homme qui connaît sa place. Et on la lui reconnaît.",
    effect: "Boisé, épicé.",
    quote: "Ça sent le respect, la stabilité, l'ambition. Un homme sur qui on peut compter.",
    pyramid: [
      { label: "Tête", notes: "Citron vert, gingembre, poivre noir" },
      { label: "Cœur", notes: "Vétiver du Bénin, lavande, rose" },
      { label: "Fond", notes: "Karité, bois de santal, cèdre, vanille" },
    ],
    image: "/flair-man.jpeg",
    imageAlt: "Flacon Hamuz Flair Man, verre facetté noir et couronne dorée",
  },
  {
    name: "Hamuz Flair Woman",
    tagline: "Eau de Parfum",
    description:
      "La signature de l'élégance qui impose le respect. Pour la femme qui dirige sans élever la voix.",
    effect: "Floral, boisé, ambré.",
    quote: "Ça sent la confiance, la douceur, la puissance. Une femme qui entre. On se tait.",
    pyramid: [
      { label: "Tête", notes: "Bergamote, poire, ylang-ylang" },
      { label: "Cœur", notes: "Rose de Damas, jasmin, fleur d'oranger" },
      { label: "Fond", notes: "Bois de santal, musc blanc, vanille, ambre" },
    ],
    image: "/flair-woman.jpeg",
    imageAlt: "Flacon Hamuz Flair Woman, verre incurvé et couronne sertie",
  },
];

function ProductCard({ profile, delay }: { profile: Profile; delay: number }) {
  const [open, setOpen] = useState(false);
  const { openModal } = useSite();

  return (
    <div className={`${styles.card} reveal ${delay > 0 ? `reveal-delay-${delay}` : ""}`}>
      <div className={styles.cardTop}>
        <span className={styles.tagline}>{profile.tagline}</span>
        <span className={styles.volume}>30 ml</span>
      </div>
      <div className={styles.image}>
        <Image src={profile.image} alt={profile.imageAlt} fill sizes="(min-width: 1024px) 40vw, 90vw" style={{ objectFit: "cover" }} />
      </div>
      <h3 className={styles.name}>{profile.name}</h3>
      <p className={styles.desc}>{profile.description}</p>
      <p className={styles.quote}>« {profile.quote} »</p>

      <button
        className={`${styles.pyramidToggle} ${open ? styles.pyramidToggleActive : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>Pyramide olfactive</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={`${styles.pyramidContent} ${open ? styles.pyramidContentOpen : ""}`}>
        {profile.pyramid.map((layer) => (
          <div className={styles.pyramidRow} key={layer.label}>
            <span className={styles.pyramidLayer}>{layer.label}</span>
            <span className={styles.pyramidNotes}>{layer.notes}</span>
          </div>
        ))}
      </div>

      <button className={styles.cta} onClick={openModal}>
        🔒 Rejoindre la liste privée
      </button>
    </div>
  );
}

export default function Products() {
  return (
    <section className={styles.products} id="collection">
      <div className={styles.header}>
        <div className={`${styles.sectionLabel} ${styles.headerLabel} reveal`}>Collection</div>
        <h2 className={`${styles.sectionTitle} reveal reveal-delay-1`}>Hamuz Flair</h2>
        <p className={`${styles.intro} reveal reveal-delay-2`}>
          Deux signatures pensées pour accompagner l&apos;attitude et le mental d&apos;un leader. Pas de bruit.
          Juste de la présence.
        </p>
      </div>
      <div className={styles.grid}>
        {profiles.map((profile, index) => (
          <ProductCard profile={profile} delay={index * 2} key={profile.name} />
        ))}
      </div>
    </section>
  );
}
