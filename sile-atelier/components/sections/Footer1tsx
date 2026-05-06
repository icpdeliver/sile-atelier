"use client";

import { useLang } from "@/context/LangContext";
import WheatIllustration from "@/components/ui/WheatIllustration";

const footerLinks = [
  { href: "#story",       en: "Story",       tr: "Hikaye" },
  { href: "#collections", en: "Collections", tr: "Koleksiyon" },
  { href: "#fabric",      en: "Fabric",      tr: "Kumaş" },
  { href: "#contact",     en: "Contact",     tr: "İletişim" },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1e1710" }} className="pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
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

          {/* Nav links */}
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

          {/* Social icons */}
          <div className="flex gap-5">
            <a
              href="https://instagram.com/sileatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark hover:text-sand transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bark hover:text-sand transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.855L.057 23.25a.75.75 0 00.916.921l5.506-1.457A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.696-.512-5.23-1.401l-.374-.222-3.878 1.026 1.052-3.765-.242-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p
            className="text-bark/50 text-[0.56rem] tracking-[0.14em]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            © {year} Sile Atelier.{" "}
            {t("All rights reserved.", "Tüm hakları saklıdır.")}
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
