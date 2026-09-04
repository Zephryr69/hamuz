import type { Metadata } from "next";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/600.css";
import "@fontsource/unbounded/700.css";
import "@fontsource-variable/ojuju";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/500-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamuz.vercel.app"),
  title: {
    default: "HAMUZ — L'amour élève",
    template: "%s — HAMUZ",
  },
  description:
    "HAMUZ, l'amour qui a fait naître une égérie royale. Une maison d'élégance africaine née d'une histoire d'amour au-delà des différences. Découvrez la collection Flair, en pré-lancement.",
  openGraph: {
    title: "HAMUZ — L'amour élève",
    description:
      "Une maison d'élégance africaine née d'une histoire d'amour au-delà des différences. Découvrez la collection Flair, en pré-lancement.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAMUZ — L'amour élève",
    description: "Une maison d'élégance africaine née d'une histoire d'amour au-delà des différences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
