"use client";

import { useLang } from "@/context/LangContext";

export default function Atelier() {
  const { lang } = useLang();

  return (
    <section className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wheat tracking-[0.35em] text-xs uppercase mb-6">
            {lang === "tr" ? "Atölyeden" : "From the Atelier"}
          </p>

          <h2 className="font-cormorant text-char text-4xl md:text-6xl font-light mb-6">
            {lang === "tr" ? "Üretimin içinden" : "Inside the making"}
          </h2>

          <p className="text-bark max-w-3xl mx-auto leading-8">
            {lang === "tr"
              ? "Kumaşın dokusunu, ellerin emeğini ve atölyenin doğal ritmini göstermek için bu alana gerçek üretim videolarımızı ve fotoğraflarımızı ekleyeceğiz."
              : "This space will feature real production videos and photos — the texture of fabric, the rhythm of hands and the quiet atmosphere of the atelier."}
          </p>
        </div>

        <div className="mb-8 bg-parchment aspect-video flex items-center justify-center">
          <video controls className="w-full h-full object-cover">
            <source src="/video/atelier.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/images/atelier-1.jpg" alt="Atelier 1" className="w-full aspect-[4/5] object-cover bg-parchment" />
          <img src="/images/atelier-2.jpg" alt="Atelier 2" className="w-full aspect-[4/5] object-cover bg-parchment" />
          <img src="/images/atelier-3.jpg" alt="Atelier 3" className="w-full aspect-[4/5] object-cover bg-parchment" />
        </div>
      </div>
    </section>
  );
}