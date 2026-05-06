"use client";

import { useLang } from "@/context/LangContext";
import WheatIllustration from "@/components/ui/WheatIllustration";

export default function Story() {
  const { t } = useLang();

  return (
    <section
      id="story"
      className="w-full px-8 md:px-16 py-24 bg-[#F6F3EE]"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* SOL - BEIGE BLOK */}
        <div className="relative w-full h-[500px] bg-[#D8CBB8] flex items-end p-6">

          {/* Wheat icon */}
          <div className="absolute bottom-10 right-10 opacity-20">
            <WheatIllustration className="w-12" />
          </div>

          {/* küçük yazı */}
          <span
            className="text-[0.55rem] tracking-[0.25em] uppercase text-[#3A2E25]/40"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t("Visual area", "Görsel alanı")}
          </span>
        </div>

        {/* SAĞ - METİN */}
        <div>

          <h2
            className="font-cormorant text-[2.8rem] md:text-[3.2rem] leading-tight text-[#3A2E25] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {t(
              "From Şile, woven by nature.",
              "Şile’den gelen, doğanın dokusu."
            )}
          </h2>

          <p
  className="text-bark text-[0.95rem] leading-[2] mb-6"
  style={{ fontFamily: "var(--font-jost)" }}
>
  {t(
    "Sile Atelier was founded in 1975 in the coastal town of Şile, where lightweight cotton fabrics have been woven for generations. Inspired by the calm rhythm of the sea, natural textures, and timeless craftsmanship, each piece reflects a balance of comfort, simplicity, and understated elegance. Rooted in tradition yet designed for modern living, our collections are created to move effortlessly through seasons, moments, and everyday rituals.",
    "Sile Atelier, nesillerdir hafif ve doğal kumaşların dokunduğu sahil kasabası Şile’de, 1975 yılında kuruldu. Denizden, doğal dokulardan ve zamansız işçilikten ilham alan her parça; konfor, sadelik ve yalın zarafetin bir yansımasıdır. Gelenekten beslenen fakat modern yaşam için tasarlanan koleksiyonlarımız; mevsimlerin, anların ve günlük yaşamın içinde zahmetsizce yer bulur."
  )}
</p>
          <p
            className="text-bark text-[0.95rem] leading-[2]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t(
              "Each design is created to embody effortless versatility and timelessness — beyond seasons.",
              "Her tasarım, zahmetsiz bir uyum ve zamansız bir his sunmak için — mevsimlerin ötesinde tasarlanır."
            )}
          </p>

        </div>
      </div>
    </section>
  );
}