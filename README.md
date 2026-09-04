# HAMUZ — refonte Next.js

Base portée depuis le site Vite/React existant, fidèle à la DA actuelle.

## Démarrer

```bash
npm install
npm run dev
```

## Ce qui est fait

- Header (nav + menu mobile)
- Hero
- Histoire (3 chapitres)
- Manifeste
- Heritage (signature du nom)
- CommunityFooter

## Ce qu'il reste à faire (toi)

- `src/components/FlairSection.tsx` — section collection FLAIR (voir les
  instructions en commentaire dans le fichier, et le brief dans
  /areas/site-hamuz.md côté Claude)
- Une fois FlairSection prête : décommenter son import + son usage dans
  `src/app/page.tsx`, et ajouter l'ancre `#flair` dans `Header.tsx` (NAV_ITEMS)
- Formulaire de contact / capture email liste privée
- Pages légales (plus tard, pas urgent tant qu'il n'y a pas de vente)

## Notes techniques

- Polices en self-hosted via `@fontsource` (pas `next/font/google`) — évite
  toute dépendance réseau au build, plus robuste en CI/déploiement.
- `lucide-react` a retiré les icônes de marque (Instagram, Facebook…) en v1.x
  — utilise un SVG inline si tu as besoin d'autres icônes de réseaux sociaux.
