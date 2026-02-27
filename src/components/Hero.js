// src/components/Hero.js
import React from "react";

// Make sure { onExploreClick } is inside these curly braces!
const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
          className="w-full h-full object-cover brightness-[0.35]"
          alt="Luxury Car Dubai"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic uppercase mb-4">
          ARKA <span className="text-[#d4af37]">LUXURY</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl font-light tracking-[0.3em] uppercase mb-10">
          Redefining the Dubai Drive
        </p>

        {/* Check: This must call onExploreClick */}
        <button
          onClick={onExploreClick}
          className="px-10 py-4 bg-[#d4af37] text-black font-black text-lg rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          EXPLORE FLEET
        </button>
      </div>
    </section>
  );
};

export default Hero;
