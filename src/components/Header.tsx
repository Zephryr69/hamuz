"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Notre histoire", href: "#histoire" },
  { label: "Collection", href: "#collection" },
  { label: "Héritage", href: "#heritage" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#hero" className={styles.navLogo}>
          <Image
            src={scrolled ? "/hamuz-logo.png" : "/hamuz-logo-light.png"}
            alt="HAMUZ"
            width={140}
            height={39}
            priority
            className={styles.navLogoImg}
          />
          <span className={styles.navTagline}>Le Luxe Élévateur</span>
        </a>
        <ul className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.slice(1) ? styles.navLinkActive : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#communaute" className={styles.navCta}>
              Liste privée
            </a>
          </li>
        </ul>
        <button
          className={`${styles.navToggle} ${menuOpen ? styles.navToggleActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#communaute" onClick={closeMenu}>
          Liste privée
        </a>
      </div>
    </>
  );
}
