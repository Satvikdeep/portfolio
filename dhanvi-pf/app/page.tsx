import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import FeaturedProject from "@/components/FeaturedProject";
import EasyCaterSpotlight from "@/components/EasyCaterSpotlight";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <FeaturedProject />
        <EasyCaterSpotlight />
        <Contact />
        <Footer />
      </main>
      <ScrollReveal />
    </>
  );
}
