"use client";

import { useLang } from "@/context/LangContext";
import WheatIllustration from "@/components/ui/WheatIllustration";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* ── Video / background ── */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: warm cream-to-dark gradient, no video */}
        <div
          className="block md:hidden absolute inset-0"
          style={{
            background: "linear-gradient(160deg, #f5efe6 0%, #e8ddd0 30%, #c9b99a 65%, #8b6f4e 100%)",
          }}
        />
        {/* Desktop: video */}
        <video
          className="hidden md:block w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/*
        ── Overlays ──
        Strategy: the logo must read on both a light poster image AND a dark video.
        We use a centred radial gradient that creates a subtle dark halo behind
        the text cluster without muddying the edges of the frame.
        On mobile (light gradient bg) the overlay is lighter.
      */}

      {/* Soft full-frame darkening — desktop only, keeps video cinematic */}
      <div
        className="hidden md:block absolute inset-0 z-10"
        style={{ background: "rgba(30, 18, 8, 0.45)" }}
      />

      {/* Vignette: darkens centre-bottom where text sits */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(20,12,5,0.52) 0%, transparent 100%)",
        }}
      />

      {/* Grain */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="grain-overlay" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">

        {/* Wheat ornament */}
        <WheatIllustration
          color="#b89a6a"
          className="w-8 mb-6 hero-anim animate-fade-up opacity-0"
        />

        {/* ── SILE ATELIER — primary brand mark ── */}
        {/*
          Color: #3A2E25 on light bg (mobile), warm off-white on dark video (desktop).
          We solve this with a CSS variable trick: the text is always #3A2E25,
          but on desktop the dark overlay makes it feel brighter — we flip to
          #f0e8dc via a media query inline style.
        */}
        <h1
          className="
            hero-anim animate-fade-up-delay-1 opacity-0
            font-cormorant font-light uppercase leading-none tracking-[0.28em]
            text-[#3A2E25] md:text-[#f0e8dc]
          "
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
          }}
        >
          Sile Atelier
        </h1>

        {/* Sub-brand line */}
        <p
          className="
            hero-anim animate-fade-up-delay-2 opacity-0
            mt-3 tracking-[0.42em] uppercase
            text-[#8B6F4E] md:text-[#c4a97d]
          "
          style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem" }}
        >
          Şile &nbsp;•&nbsp; 1975 &nbsp;/&nbsp; Since 1975
        </p>

        {/* Ornament line */}
        <div
          className="hero-anim animate-fade-up-delay-3 opacity-0 w-px h-10 mx-auto mt-7 mb-7"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #8B6F4E, transparent)",
          }}
        />

        {/* Tagline TR */}
        <p
          className="
            hero-anim animate-fade-up-delay-4 opacity-0
            font-cormorant italic font-light tracking-[0.1em]
            text-[#6F5943] md:text-[#ede6d8]
          "
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          }}
        >
          Doğadan Gelen Zarafet
        </p>

        {/* Tagline EN */}
        <p
          className="
            hero-anim animate-fade-up-delay-5 opacity-0
            mt-2 tracking-[0.26em] uppercase
            text-[#8B6F4E] md:text-[#b89a6a]
          "
          style={{ fontFamily: "var(--font-jost)", fontSize: "0.6rem" }}
        >
          Elegance from Nature
        </p>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hero-anim animate-fade-up opacity-0 [animation-delay:2s]">
        <span
          className="tracking-[0.3em] uppercase text-[#8B6F4E] md:text-[rgba(196,169,125,0.6)]"
          style={{ fontFamily: "var(--font-jost)", fontSize: "0.5rem" }}
        >
          {t("Scroll", "Kaydır")}
        </span>
        <div
          className="w-px h-8 animate-scroll-pulse"
          style={{
            background:
              "linear-gradient(to bottom, #8B6F4E, transparent)",
          }}
        />
      </div>
    </section>
  );
}
