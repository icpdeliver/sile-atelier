"use client";

import { useLang } from "@/context/LangContext";
import WheatIllustration from "@/components/ui/WheatIllustration";

const footerLinks = [
  { href: "#story", en: "Story", tr: "Hikaye" },
  { href: "#collections", en: "Collections", tr: "Koleksiyon" },
  { href: "#fabric", en: "Fabric", tr: "Kumaş" },
  { href: "#contact", en: "Contact", tr: "İletişim" },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" style={{ backgroundColor: "#1e1710" }} className="pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="text-center pb-16 border-b border-white/[0.06]">
          <p
            className="text-bark text-[0.62rem] tracking-[0.32em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t("Since 1975", "1975'ten beri")}
          </p>

          <h2
            className="font-cormorant font-light text-parchment mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 4vw, 4rem)",
            }}
          >
            {t("Visit Our Atelier", "Atölyemizle Tanışın")}
          </h2>

          <p
            className="text-bark/80 leading-[2] max-w-xl mx-auto mb-10 text-[0.9rem]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t(
              "Crafted between the calm of Şile and the rhythm of modern living.",
              "Şile’nin dinginliği ile modern yaşamın ritmi arasında tasarlanır."
            )}
          </p>

          <div
            className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 text-[0.68rem] tracking-[0.22em] uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <span className="text-bark">Şile / Istanbul</span>

            <a
              href="mailto:info@sileatelier.com"
              className="text-bark hover:text-sand transition-colors duration-300"
            >
              info@sileatelier.com
            </a>

            <a
              href="https://instagram.com/sile_atelier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark hover:text-sand transition-colors duration-300"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark hover:text-sand transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 py-12 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <WheatIllustration color="#8B6F4E" className="w-5 opacity-60" />
              <span
                className="font-cormorant font-light text-parchment text-[1.7rem] tracking-widest2 uppercase"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Sile Atelier
              </span>
            </div>
            <p
              className="text-bark text-[0.55rem] tracking-[0.32em] uppercase ml-9"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Şile • 1975
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 list-none">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-bark text-[0.6rem] tracking-[0.2em] uppercase hover:text-sand transition-colors duration-300"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {t(link.en, link.tr)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p
            className="text-bark/50 text-[0.56rem] tracking-[0.14em]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            © {year} Sile Atelier. {t("All rights reserved.", "Tüm hakları saklıdır.")}
          </p>
          <p
            className="text-bark/35 text-[0.54rem] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t("Handcrafted in Şile, Turkey", "Türkiye, Şile'de el yapımı")}
          </p>
        </div>
      </div>
    </footer>
  );
}