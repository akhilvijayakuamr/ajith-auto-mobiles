import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Brands from "@/components/sections/Brands";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import SpareParts from "@/components/sections/SpareParts";
import SparePartsGallery from "@/components/sections/SparePartsGallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Intro loader overlay */}
      <LoadingScreen />

      {/* Sticky navigation */}
      <Navbar />

      {/* Core sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Brands />
        <Services />
        <Team />
        <SpareParts />
        <SparePartsGallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer copyright and links */}
      <Footer />

      {/* Pulsing floating actions */}
      <WhatsAppButton />
    </>
  );
}


