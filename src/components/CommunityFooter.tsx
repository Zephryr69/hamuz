function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function CommunityFooter() {
  return (
    <footer id="communaute" className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="text-sm text-bronze">La communauté</p>
        <h2 className="mt-5 max-w-lg font-serif text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl">
          Entrez dans le cercle des Royal Muses.
        </h2>
        <a
          href="https://instagram.com/hamuzofficial"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm text-bronze transition hover:text-ivory"
        >
          <InstagramIcon /> Suivre le mouvement
        </a>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/12 pt-7 text-sm text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© Hamuz</span>
          <span>Fait avec amour</span>
        </div>
      </div>
    </footer>
  );
}
