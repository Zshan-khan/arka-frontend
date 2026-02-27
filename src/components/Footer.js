import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="Arka Logo"
            className="h-12 mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-500 text-sm max-w-xs">
            Premium luxury car rentals in Dubai. Experience the ultimate drive
            with Arka.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 text-2xl">
          <a
            href="https://www.instagram.com/arkaluxurycarrental/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#d4af37] transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/arkaluxurycarrental/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#d4af37] transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@ARKALuxuryCarRental/shorts"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#d4af37] transition-all"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-white/5 text-gray-600 text-[10px] tracking-[0.2em] uppercase font-bold">
        © 2026 Arka Luxury Car Rental. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
