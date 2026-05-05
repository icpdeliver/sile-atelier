"use client";

import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "tr";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, tr: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "tr" : "en"));
  const t = (en: string, tr: string): string => (lang === "tr" ? tr : en);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
