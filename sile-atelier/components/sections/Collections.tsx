"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const collections = [
  {
    id: "kimono",
    en: "Kimono",
    tr: "Kimono",
    descEn: "Draped in morning light",
    descTr: "Sabah ışığına sarılan",
    image: "/images/collection-kimono.jpg",
    offset: "md:mt-10",
  },
  {
    id: "kaftan",
    en: "Kaftan",
    tr: "Kaftan",
    descEn: "Ancient form, modern breath",
    descTr: "Kadim form, modern nefes",
    image: "/images/collection-kaftan.jpg",
    offset: "",
  },
  {
    id: "dress",
    en: "Dress",
    tr: "Elbise",
    descEn: "Where simplicity becomes ceremony",
    descTr: "Sadeliğin törene dönüştüğü yer",
    image: "/images/collection-elbise.jpg",
    offset: "md:mt-5",
  },
  {
    id: "skirt",
    en: "Skirt",
    tr: "Etek",
    descEn: "The elegance of natural flow",
    descTr: "Doğal akışın zarafeti",
    image: "/images/collection-etek.jpg",
    offset: "md:-mt-6",
  },
];

export default function Collections() {
  const { t } = useLang();

  return (
    <section id="collections" className="bg-cream py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16 md:mb-20">
          <SectionLabel>{t("The Collection", "Koleksiyon")}</SectionLabel>

          <h2
            className="font-cormorant font-light text-char tracking-[0.06em]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            {t("Dressed in Light", "Işığa Giyinmek")}
          </h2>

          <p
            className="mt-3 text-bark text-[0.82rem] tracking-[0.08em]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {t(
              "Each silhouette, a meditation on simplicity.",
              "Her silüet, sadelik üzerine bir meditasyon."
            )}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
          {collections.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 4) as 0 | 1 | 2 | 3}
              className={item.offset}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[2/3] bg-sand/30">
                  <img
                    src={item.image}
                    alt={item.en}
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-umber/0 group-hover:bg-umber/15 transition-colors duration-500" />
                </div>

                <div className="pt-4 pb-2">
                  <h3
                    className="font-cormorant font-light text-char text-[1.25rem] tracking-[0.08em]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {t(item.en, item.tr)}
                  </h3>

                  <p
                    className="mt-1 text-wheat text-[0.58rem] tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {t(item.descEn, item.descTr)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}