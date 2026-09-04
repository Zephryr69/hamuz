const facets: [string, string][] = [
  [
    "Une histoire d'amour",
    "Hansaou, ma mère musulmane, et mon père catholique se sont choisis au-delà des différences.",
  ],
  [
    "Un nom, une promesse",
    "Hansaou + Amour + Muse : HAMUZ est né comme un hommage vivant à cet amour.",
  ],
  [
    "L'interdit, transfiguré",
    "Le foulard, autrefois contrainte imposée aux femmes noires, devient élégance assumée.",
  ],
];

export default function Histoire() {
  return (
    <section id="histoire" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.4fr] lg:gap-24">
        <div>
          <p className="text-sm text-clay">Origine</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
            Née au-delà des différences.
          </h2>
        </div>
        <div className="pt-2">
          <p className="max-w-xl font-serif text-2xl italic leading-[1.35] text-charcoal sm:text-[1.75rem]">
            « Mes parents m&apos;ont appris la fraternité. Ils m&apos;ont montré que les différences n&apos;existent
            pas en amour. »
          </p>
          <p className="mt-7 max-w-lg text-[15px] leading-7 text-charcoal/70">
            D&apos;une mère musulmane et d&apos;un père catholique est née une conviction : ce qui nous relie a plus
            de force que ce qui prétend nous séparer. HAMUZ est leur héritage, porté comme un geste de grâce.
          </p>
          <div className="woven-rule mt-14 text-clay" />
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {facets.map(([title, description]) => (
              <div key={title}>
                <h3 className="font-serif text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
