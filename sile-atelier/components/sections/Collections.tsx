"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WheatIllustration from "@/components/ui/WheatIllustration";

const collections = [
  {
    id: "kimono",
    en: "Kimono",
    tr: "Kimono",
    descEn: "Draped in morning light",
    descTr: "Sabah ışığına sarılan",
    gradient: "linear-gradient(160deg, #d8cbb8, #bfa98a, #a08060)",
    offset: "md:mt-10",
  },
  {
    id: "kaftan",
    en: "Kaftan",
    tr: "Kaftan",
    descEn: "Ancient form, modern breath",
    descTr: "Kadim form, modern nefes",
    gradient: "linear-gradient(160deg, #c9c0b0, #b5a48c, #9a8268)",
    offset: "",
  },
  {
    id: "dress",
    en: "Dress",
    tr: "Elbise",
    descEn: "Where simplicity becomes ceremony",
    descTr: "Sadeliğin törene dönüştüğü yer",
    gradient: "linear-gradient(160deg, #e2dbd0, #cec2ae, #b8a48e)",
    offset: "md:mt-5",
  },
  {
    id: "skirt",
    en: "Skirt",
    tr: "Etek",
    descEn: "Flow as a second skin",
    descTr: "İkinci bir deri gibi akar",
    gradient: "linear-gradient(160deg, #d0c5b2, #bfae97, #a89074)",
    offset: "md:-mt-6",
  },
];

export default function Collections() {
  const { t } = useLang();

  return (
    <section id="collections" className="bg-cream py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
          {collections.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 4) as 0 | 1 | 2 | 3}
              className={item.offset}
            >
              <div className="group cursor-pointer">
                {/* Image block */}
                <div className="relative overflow-hidden aspect-[2/3]">
                  <div
                    className="w-full h-full transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                    style={{ background: item.gradient }}
                  >
                    {/* Wheat motif inside card */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
                      <WheatIllustration color="#fdfaf6" className="w-10" />
                    </div>

                    {/* Image placeholder label */}
                    <div className="absolute inset-0 flex items-end p-4">
                      <span
                        className="text-[0.5rem] tracking-[0.25em] uppercase text-ivory/30"
                        style={{ fontFamily: "var(--font-jost)" }}
                      >
                        {t("Photo soon", "Fotoğraf yakında")}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-umber/0 group-hover:bg-umber/15 transition-colors duration-500" />
                </div>

                {/* Card caption */}
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
