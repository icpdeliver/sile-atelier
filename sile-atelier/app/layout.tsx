import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Sile Atelier — Elegance from Nature",
  description:
    "Sile Atelier — born in Şile, Turkey, 1975. Handcrafted natural garments woven from the legendary Şile cloth. Kimono, Kaftan, Dress & Skirt.",
  keywords: ["Sile Atelier", "Şile bezi", "natural fashion", "Turkey", "kimono", "kaftan"],
  openGraph: {
    title: "Sile Atelier — Elegance from Nature",
    description: "Doğadan Gelen Zarafet — Handcrafted garments from Şile, Turkey since 1975.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
