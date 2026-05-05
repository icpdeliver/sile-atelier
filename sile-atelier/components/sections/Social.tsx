"use client";

import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";

const gradients = [
  "linear-gradient(135deg, #ddd3c4, #c9b99a)",
  "linear-gradient(135deg, #c8bfb0, #b5a690)",
  "linear-gradient(135deg, #e0d8cc, #cfc3b0)",
  "linear-gradient(135deg, #d4c9b8, #c0b09a)",
  "linear-gradient(135deg, #ccc2b2, #baaa94)",
  "linear-gradient(135deg, #dbd2c5, #c9ba9e)",
];

export default function Social() {
  const { t } = useLang();

  return (
    <section id="social" className="bg-ivory py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <Reveal className="text-center mb-10 md:mb-12">
          <h2
            className="font-cormorant font-light text-char"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            }}
          >
            {t("Follow the Thread", "İpliği Takip Et")}
          </h2>
          <p
            className="mt-3 text-wheat text-[0.68rem] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            @sileatelier
          </p>
        </Reveal>

        {/* Instagram grid — 6 placeholders */}
        <Reveal>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
            {gradients.map((g, i) => (
              <a
                key={i}
                href="https://instagram.com/sileatelier"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden block"
              >
                <div
                  className="w-full h-full transition-transform duration-700 ease-luxury group-hover:scale-[1.06]"
                  style={{ background: g }}
                />
                <div className="absolute inset-0 bg-umber/0 group-hover:bg-umber/25 transition-colors duration-400 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    stroke="#fdfaf6"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#fdfaf6" stroke="none" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Instagram CTA */}
        <Reveal className="text-center mt-8">
          <a
            href="https://instagram.com/sileatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-bark text-[0.65rem] tracking-[0.22em] uppercase border border-sand px-6 py-3 hover:border-umber hover:text-umber transition-all duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            {t("View on Instagram", "Instagram'da İncele")}
          </a>
        </Reveal>

      </div>
    </section>
  );
}
