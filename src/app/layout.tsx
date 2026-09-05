import type { Metadata } from "next";
import "@fontsource-variable/ojuju";
import "@fontsource/cinzel-decorative/400.css";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/500.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/500-italic.css";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamuz.vercel.app"),
  title: {
    default: "HAMUZ — Le Luxe Élévateur",
    template: "%s — HAMUZ",
  },
  description:
    "HAMUZ, l'amour qui a fait naître une égérie royale. Une maison d'élégance africaine née d'une histoire d'amour au-delà des différences. Découvrez la collection Flair, en pré-lancement.",
  openGraph: {
    title: "HAMUZ — Le Luxe Élévateur",
    description:
      "Une maison d'élégance africaine née d'une histoire d'amour au-delà des différences. Découvrez la collection Flair, en pré-lancement.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMUZ — Le Luxe Élévateur",
    description: "Une maison d'élégance africaine née d'une histoire d'amour au-delà des différences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HAMUZ",
    alternateName: "HAMUZ — Le Luxe Élévateur",
    url: "https://hamuz.vercel.app",
    logo: "https://hamuz.vercel.app/hamuz-logo.png",
    description:
      "Maison d'élégance africaine née d'une histoire d'amour au-delà des différences. Collection de parfums HAMUZ Flair, en pré-lancement.",
    email: "hamuz.official@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    sameAs: ["https://instagram.com/hamuzofficial"],
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
