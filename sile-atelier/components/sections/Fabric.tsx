"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WheatIllustration from "@/components/ui/WheatIllustration";

const properties = [
  { en: "100% natural Şile cloth",            tr: "100% doğal Şile bezi" },
  { en: "Hand-loomed by local artisans",       tr: "Yerel ustalar tarafından elle dokunmuş" },
  { en: "Breathable & temperature-regulating", tr: "Nefes alan ve ısı dengeleyen" },
  { en: "Chemical-free, skin-safe",            tr: "Kimyasal içermeyen, cilt dostu" },
  { en: "Sustainably sourced cotton",          tr: "Sürdürülebilir kaynaklı pamuk" },
];

export default function Fabric() {
  const { lang, t } = useLang();

  return (
    <section
      id="fabric"
      className="relative py-36 md:py-48 overflow-hidden"
      style={{ backgroundColor: "#3A2E25" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-wheat/8 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">

          {/* ── Text ── */}
          <Reveal>
            <SectionLabel light>{t("The Fabric", "Kumaş")}</SectionLabel>

            {/* Heading — JSX with <em>, use lang ternary */}
            <h2
              className="font-cormorant font-light text-cream leading-[1.22] mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {lang === "tr" ? (
                <>
                  <em className="italic text-wheat">Şile bezi</em> — <br />
                  doğanın dokusu.
                </>
              ) : (
                <>
                  <em className="italic text-wheat">Şile cloth</em> — <br />
                  woven by nature.
                </>
              )}
            </h2>

            <p
              className="text-sand text-[0.88rem] leading-[2.1] mb-5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {t(
                "Şile cloth is one of Turkey's oldest natural textiles, produced on the Black Sea coast for centuries. Its open-weave structure is exceptionally breathable — light in summer, layerable in cooler months.",
                "Şile bezi, Türkiye'nin en eski doğal dokumalarından biridir. Karadeniz kıyısında yüzyıllardır üretilmektedir. Açık örgü yapısı son derece nefes alıcıdır — yazın serin, serin aylarda katmanlı kullanıma elverişlidir."
              )}
            </p>

            <p
              className="text-sand text-[0.88rem] leading-[2.1]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {t(
                "We work directly with weavers in Şile to source cloth that meets our standards for quality and traceability.",
                "Şile'deki dokuyucularla doğrudan çalışarak kalite ve izlenebilirlik standartlarımızı karşılayan kumaş temin ediyoruz."
              )}
            </p>

            {/* Properties list */}
            <ul className="mt-10 flex flex-col gap-3">
              {properties.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-sand/80 text-[0.65rem] tracking-[0.16em] uppercase"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  <span className="w-5 h-px bg-wheat/60 flex-shrink-0" />
                  {t(p.en, p.tr)}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ── Visual ── */}
          <Reveal delay={1}>
            <div
              className="w-full aspect-[4/5] relative overflow-hidden border border-wheat/10 fabric-weave flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(196,169,125,0.07), rgba(139,111,78,0.18), rgba(20,13,7,0.45))",
              }}
            >
              <WheatIllustration color="#c4a97d" className="w-32 opacity-12" />

              {/* Quote */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#1e1710]/90 to-transparent">
                <p
                  className="font-cormorant italic font-light text-parchment text-[0.95rem] leading-[1.75] tracking-[0.04em]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t(
                    "\u201cThe cloth remembers the hands that made it.\u201d",
                    "\u201cBez, onu dokuyan elleri hatırlar.\u201d"
                  )}
                </p>
                <span
                  className="block mt-2 text-wheat/50 text-[0.52rem] tracking-[0.28em] uppercase"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  — Şile, 1975
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
