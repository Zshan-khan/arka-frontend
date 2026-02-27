import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import CarList from "../components/CarList";
import Requirements from "../components/Requirements";
import FAQ from "../components/FAQ";
import Contact from "./Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  const fleetRef = useRef(null);
  const { hash } = useLocation();

  // This Effect handles "Arriving" at a section from a different page
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [hash]);

  const scrollToFleet = () => {
    if (fleetRef.current) {
      fleetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white selection:bg-[#d4af37] selection:text-black">
      <Hero onExploreClick={scrollToFleet} />

      <div ref={fleetRef} className="scroll-mt-24">
        <CarList />
      </div>

      <Requirements />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;
