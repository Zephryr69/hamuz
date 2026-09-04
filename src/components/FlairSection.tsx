import Image from "next/image";

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
    name: "Flair Man",
    tagline: "Le parfum de l'autorité et de la sagesse",
    description: "Pour l'homme qui connaît sa place. Et on la lui reconnaît.",
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
    name: "Flair Woman",
    tagline: "La signature de l'élégance qui impose le respect",
    description: "Pour la femme qui dirige sans élever la voix.",
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

export default function FlairSection() {
  return (
    <section id="flair" className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <p className="text-sm text-bronze">La collection</p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          Hamuz Flair
        </h2>
        <p className="mt-7 max-w-xl text-[15px] leading-7 text-ivory/70">
          Deux signatures pensées pour accompagner l&apos;attitude et le mental d&apos;un leader. Pas de bruit.
          Juste de la présence. Deux flacons, une intention : laisser une trace.
        </p>

        <div className="mt-16 space-y-24">
          {profiles.map((profile, index) => (
            <div
              key={profile.name}
              className={`grid gap-10 lg:grid-cols-2 lg:gap-20 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <Image
                  src={profile.image}
                  alt={profile.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-2xl italic">{profile.name}</h3>
                <p className="mt-2 text-sm text-bronze">{profile.tagline}</p>
                <p className="mt-6 text-[15px] leading-7 text-ivory/70">{profile.description}</p>

                <dl className="mt-8 space-y-3">
                  {profile.pyramid.map((layer) => (
                    <div key={layer.label} className="flex gap-4 text-sm">
                      <dt className="w-12 shrink-0 text-ivory/45">{layer.label}</dt>
                      <dd className="text-ivory/75">{layer.notes}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-8 text-sm text-ivory/45">{profile.effect}</p>
                <p className="mt-2 max-w-sm text-[15px] italic leading-7 text-ivory/70">{profile.quote}</p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-ivory/45">30 ml</span>
                  <a
                    href="#communaute"
                    className="border-b border-bronze pb-1 text-sm text-bronze transition hover:text-ivory"
                  >
                    Rejoindre la liste privée
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-20 max-w-md text-sm text-ivory/40">
          Soyez parmi les premiers informés de la disponibilité de la collection Flair.
        </p>
      </div>
    </section>
  );
}
