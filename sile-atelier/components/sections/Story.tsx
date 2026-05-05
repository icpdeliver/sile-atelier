"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WheatIllustration from "@/components/ui/WheatIllustration";

const stats = [
  { value: "Şile", en: "Origin",      tr: "Köken" },
  { value: "1975", en: "Established", tr: "Kuruluş" },
  { value: "100%", en: "Natural",     tr: "Doğal" },
];

export default function Story() {
  const { lang, t } = useLang();

  return (
    <section id="story" className="bg-ivory py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center">

          {/* ── Visual ── */}
          <Reveal className="relative">
            <div
              className="w-full aspect-[3/4] relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #ede6d8, #d6c9b0, #bfa98a)" }}
            >
              <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
                <WheatIllustration color="#4a3728" className="w-28" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(196,169,125,0.3),transparent_60%)]" />
              <div className="absolute inset-0 flex items-end p-8">
                <p
                  className="text-[0.55rem] tracking-[0.28em] uppercase text-umber/35"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {t("Image placeholder", "Görsel alanı")}
                </p>
              </div>
            </div>

            {/* Year badge */}
            <div className="absolute -top-5 right-0 md:-right-8 bg-umber text-ivory px-6 py-5 z-10">
              <span
                className="block font-cormorant font-light text-[2rem] leading-none tracking-[0.05em]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                1975
              </span>
              <span
                className="block text-sand text-[0.48rem] tracking-[0.3em] uppercase mt-1"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Est. Şile
              </span>
            </div>
          </Reveal>

          {/* ── Text ── */}
          <Reveal delay={1}>
            <SectionLabel>{t("Our Story", "Hikayemiz")}</SectionLabel>

            {/* Heading — JSX with <em>, use lang ternary */}
            <h2
              className="font-cormorant font-light text-char leading-[1.2] mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
            >
              {lang === "tr" ? (
                <>
                  Şile&apos;den gelen,<br />
                  <em className="italic text-bark">doğanın dokusu.</em>
                </>
              ) : (
                <>
                  From Şile,<br />
                  <em className="italic text-bark">woven by nature.</em>
                </>
              )}
            </h2>

            <p
              className="text-bark text-[0.88rem] leading-[2.1] mb-5"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {t(
                "Sile Atelier was established in 1975 in Şile, a small coastal town on the Black Sea. We work with the traditional Şile cloth — a lightweight, natural cotton textile woven in the region for centuries.",
                "Sile Atelier, 1975 yılında Karadeniz kıyısındaki küçük bir kasaba olan Şile'de kuruldu. Bölgede yüzyıllardır dokunan geleneksel Şile bezi ile çalışıyoruz."
              )}
            </p>

            <p
              className="text-bark text-[0.88rem] leading-[2.1]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {t(
                "Every piece is made in small quantities, with care. We believe in clothing that is quiet, considered, and built to last.",
                "Her parça, özenle ve küçük miktarlarda üretilir. Sessiz, düşünceli ve uzun ömürlü kıyafetlere inanıyoruz."
              )}
            </p>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-parchment flex gap-10">
              {stats.map((s) => (
                <div key={s.value} className="flex flex-col gap-1">
                  <span
                    className="font-cormorant font-light text-char text-[1.8rem] leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-wheat text-[0.56rem] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {t(s.en, s.tr)}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
