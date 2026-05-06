"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="bg-ivory py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <Reveal>
          <h2
            className="font-cormorant font-light text-char mb-8"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            }}
          >
            {t("Discover the Collection", "Koleksiyonu Keşfet")}
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">

            {/* Etsy */}
            <a
              href="https://www.etsy.com/shop/sileatelier?ref=seller-platform-mcnav"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sand px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase text-bark hover:border-umber hover:text-umber transition-all duration-300"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Etsy
            </a>

            {/* Trendyol */}
            <a
              href="https://www.trendyol.com/magaza/sile-atelier"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sand px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase text-bark hover:border-umber hover:text-umber transition-all duration-300"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Trendyol
            </a>

            {/* Hepsiburada */}
            <a
              href="https://www.hepsiburada.com/magaza/sileatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sand px-6 py-3 text-[0.68rem] tracking-[0.22em] uppercase text-bark hover:border-umber hover:text-umber transition-all duration-300"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Hepsiburada
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}