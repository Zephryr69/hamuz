"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const faqs: { q: string; a: string }[] = [
  {
    q: "Les parfums HAMUZ FLAIR sont-ils déjà en vente ?",
    a: "Pas encore. HAMUZ est en pré-lancement : vous pouvez rejoindre la liste privée pour être parmi les premiers informés dès l'ouverture des précommandes.",
  },
  {
    q: "Comment rejoindre la liste privée ?",
    a: "Via le bouton « Rejoindre la liste privée » présent sur la page, ou le formulaire d'inscription en bas du site. Il suffit d'un prénom et d'une adresse email.",
  },
  {
    q: "Quelle est la contenance des flacons FLAIR ?",
    a: "Chaque flacon de la collection FLAIR (Man comme Woman) est proposé en 30 ml.",
  },
  {
    q: "HAMUZ ne vend-elle que des parfums ?",
    a: "FLAIR est la première collection de la maison. HAMUZ a vocation à s'étendre à d'autres catégories, notamment le vêtement, dans le prolongement du même univers.",
  },
  {
    q: "D'où vient le nom HAMUZ ?",
    a: "HAMUZ est né de la contraction de trois sources : Hansaou (la mère), Amour, et Muse — un hommage à une histoire d'amour au-delà des différences.",
  },
  {
    q: "Que symbolise la couronne du logo ?",
    a: "Elle renvoie à l'idée de « Royal Muse » : faire de son histoire une couronne, et à la transfiguration du foulard, autrefois contrainte, en élégance assumée.",
  },
  {
    q: "Les parfums FLAIR sont-ils genrés ?",
    a: "La collection propose deux signatures distinctes, FLAIR Man et FLAIR Woman, chacune avec sa propre pyramide olfactive — mais rien n'empêche de porter celle qui vous correspond.",
  },
  {
    q: "HAMUZ livre-t-elle en dehors du Bénin ?",
    a: "Les modalités de livraison n'ont pas encore été fixées ; elles seront communiquées aux membres de la liste privée dès l'ouverture des précommandes.",
  },
  {
    q: "Comment contacter HAMUZ pour une collaboration (agence, marque) ?",
    a: "HAMUZ est ouverte aux collaborations avec des agences et d'autres marques de luxe. Écrivez à hamuz.official@gmail.com ou contactez directement via WhatsApp.",
  },
  {
    q: "Puis-je me désinscrire de la liste privée ?",
    a: "Oui, à tout moment, en écrivant à hamuz.official@gmail.com. Voir la politique de confidentialité pour le détail de vos droits.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.header}>
        <div className={`${styles.label} reveal`}>Questions fréquentes</div>
        <h2 className={`${styles.title} reveal reveal-delay-1`}>Vous vous demandez peut-être...</h2>
      </div>
      <div className={styles.list}>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""} reveal`} key={item.q}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                {item.q}
                <span className={styles.icon} />
              </button>
              <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
                <p className={styles.answerInner}>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
