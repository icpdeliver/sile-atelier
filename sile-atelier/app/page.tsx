import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Collections from "@/components/sections/Collections";
import Fabric from "@/components/sections/Fabric";
import Social from "@/components/sections/Social";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Collections />
      <Fabric />
      <Social />
      <CTA />
      <Footer />
    </main>
  );
}
