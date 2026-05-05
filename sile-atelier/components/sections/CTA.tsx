"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import WheatIllustration from "@/components/ui/WheatIllustration";

// ── Update these with your actual links ──
const INSTAGRAM_URL  = "https://instagram.com/sileatelier";
const WHATSAPP_URL   = "https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20Sile%20Atelier%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
const MARKETPLACE_URL = "https://www.trendyol.com/"; // replace with actual store URL

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.855L.057 23.25a.75.75 0 00.916.921l5.506-1.457A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.696-.512-5.23-1.401l-.374-.222-3.878 1.026 1.052-3.765-.242-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px]" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ShopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px]" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

export default function CTA() {
  const { lang, t } = useLang();

  return (
    <section id="contact" className="bg-cream py-32 md:py-44">
      <div className="max-w-lg mx-auto px-6 text-center">

        <Reveal>
          <WheatIllustration color="#c4a97d" className="w-7 mx-auto mb-8 opacity-40" />

          {/* Heading — JSX with <em>, use lang ternary */}
          <h2
            className="font-cormorant font-light text-char leading-[1.25] mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
            }}
          >
            {lang === "tr" ? (
              <>Hikayeyi <em className="italic text-bark">giy.</em></>
            ) : (
              <>Wear the <em className="italic text-bark">story.</em></>
            )}
          </h2>

          <p
            className="text-bark text-[0.85rem] leading-[2] mb-12"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t(
              "Each piece from Sile Atelier is made in small batches, by hand, in Şile. Contact us to learn more, or find us on our marketplace.",
              "Sile Atelier'den her parça, Şile'de elde, küçük miktarlarda üretilir. Daha fazla bilgi için bize ulaşın ya da pazaryerinde bulun."
            )}
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="flex flex-col items-center gap-4">

            {/* WhatsApp — primary */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-72 px-8 py-4 bg-umber text-ivory overflow-hidden text-[0.63rem] tracking-[0.22em] uppercase transition-colors duration-500"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              <span className="absolute inset-0 bg-char translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-luxury" />
              <WhatsAppIcon />
              <span className="relative">{t("Contact via WhatsApp", "WhatsApp'tan Bilgi Al")}</span>
            </a>

            {/* Instagram — secondary */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-72 px-8 py-4 border border-sand text-umber overflow-hidden text-[0.63rem] tracking-[0.22em] uppercase transition-colors duration-500"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              <span className="absolute inset-0 bg-parchment translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-luxury" />
              <InstagramIcon />
              <span className="relative">{t("View on Instagram", "Instagram'da İncele")}</span>
            </a>

            {/* Marketplace — tertiary */}
            <a
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-72 px-8 py-4 border border-parchment text-bark overflow-hidden text-[0.61rem] tracking-[0.22em] uppercase transition-colors duration-500"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              <span className="absolute inset-0 bg-cream translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-luxury" />
              <ShopIcon />
              <span className="relative">{t("Shop on Marketplaces", "Pazaryerinde Satın Al")}</span>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
