"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

const links = [
  { href: "#story",       en: "Story",       tr: "Hikaye" },
  { href: "#collections", en: "Collections", tr: "Koleksiyon" },
  { href: "#fabric",      en: "Fabric",      tr: "Kumaş" },
  { href: "#contact",     en: "Contact",     tr: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-700 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-sand/30"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className={`font-cormorant font-light text-[1rem] tracking-widest2 uppercase transition-colors duration-500 ${
          scrolled ? "text-[#3A2E25]" : "text-[#3A2E25] md:text-ivory"
        }`}
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Sile Atelier
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-[0.62rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-bark hover:text-umber"
                  : "text-ivory/75 hover:text-ivory"
              }`}
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {t(link.en, link.tr)}
            </a>
          </li>
        ))}
      </ul>

      {/* Language toggle */}
      <button
        onClick={toggle}
        className={`text-[0.6rem] tracking-[0.18em] uppercase border px-3 py-1.5 bg-transparent cursor-pointer transition-all duration-300 ${
          scrolled
            ? "text-bark border-sand hover:border-umber hover:text-umber"
            : "text-[#6F5943] border-[#8B6F4E]/40 md:text-ivory/60 md:border-ivory/30 hover:text-umber md:hover:text-ivory"
        }`}
        style={{ fontFamily: "var(--font-jost)" }}
        aria-label="Toggle language"
      >
        {lang === "en" ? "TR" : "EN"}
      </button>
    </nav>
  );
}
