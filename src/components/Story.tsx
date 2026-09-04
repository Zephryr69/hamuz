import styles from "./Story.module.css";

const points: { title: string; desc: string }[] = [
  {
    title: "Une histoire d'amour",
    desc: "Hansaou, ma mère musulmane, et mon père catholique se sont choisis au-delà des différences.",
  },
  {
    title: "Un nom, une promesse",
    desc: "Hansaou + Amour + Muse : HAMUZ est né comme un hommage vivant à cet amour.",
  },
  {
    title: "L'interdit, transfiguré",
    desc: "Le foulard, autrefois contrainte imposée aux femmes noires, devient élégance assumée.",
  },
];

export default function Story() {
  return (
    <section className={styles.story} id="histoire">
      <div className={styles.storyLeft}>
        <div className={`${styles.sectionLabel} reveal`}>Notre histoire</div>
        <h2 className={`${styles.sectionTitle} reveal reveal-delay-1`}>
          Née au-delà
          <br />
          des différences.
        </h2>
        <blockquote className={`${styles.storyQuote} reveal reveal-delay-2`}>
          « Mes parents m&apos;ont appris la fraternité. Ils m&apos;ont montré que les différences n&apos;existent
          pas en amour. »
        </blockquote>
        <p className={`${styles.storyText} reveal reveal-delay-3`}>
          D&apos;une mère musulmane et d&apos;un père catholique est née une conviction : ce qui nous relie a plus
          de force que ce qui prétend nous séparer. HAMUZ est leur héritage, porté comme un geste de grâce.
        </p>
      </div>
      <div className={styles.storyRight}>
        <div className={styles.storyPoints}>
          {points.map((point, index) => (
            <div className={`${styles.storyPoint} reveal ${index > 0 ? `reveal-delay-${index}` : ""}`} key={point.title}>
              <div className={styles.storyPointNumber}>{String(index + 1).padStart(2, "0")}</div>
              <h3 className={styles.storyPointTitle}>{point.title}</h3>
              <p className={styles.storyPointDesc}>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
