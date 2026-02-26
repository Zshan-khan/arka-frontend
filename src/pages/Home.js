import React from "react";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CarList from "../components/CarList";
import Contact from "./Contact";
import Footer from "../components/Footer";

import WhatsAppButton from "../components/WhatsAppButton"; // ✅ ADD THIS

function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <CarList />
      <Contact />
      <Footer />
      <WhatsAppButton /> {/* ✅ ADD THIS */}
    </div>
  );
}

export default Home;
