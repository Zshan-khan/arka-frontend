import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNav(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={handleHomeClick}>
          <img src={logo} alt="Arka" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center font-bold tracking-widest text-[10px] uppercase">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="hover:text-[#d4af37] transition-colors"
          >
            Home
          </Link>
          <a
            href="/#requirements"
            className="hover:text-[#d4af37] transition-colors"
          >
            Requirements
          </a>
          <a href="/#faqs" className="hover:text-[#d4af37] transition-colors">
            FAQs
          </a>
          <Link
            to="/contact"
            className="hover:text-[#d4af37] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <div
          className="md:hidden text-white cursor-pointer z-[110]"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* OVERLAY BLUR (Click to close) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[101] transition-opacity duration-500 ${
          nav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNav(false)}
      />

      {/* PARTIAL SLIDE-OUT MENU */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-screen bg-[#080808] z-[105] border-l border-white/10 p-10 flex flex-col transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 flex flex-col gap-8 text-lg font-black italic uppercase tracking-tighter">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="hover:text-[#d4af37] border-b border-white/5 pb-4"
          >
            HOME
          </Link>
          <a
            href="/#requirements"
            onClick={() => setNav(false)}
            className="hover:text-[#d4af37] border-b border-white/5 pb-4"
          >
            REQUIREMENTS
          </a>
          <a
            href="/#faqs"
            onClick={() => setNav(false)}
            className="hover:text-[#d4af37] border-b border-white/5 pb-4"
          >
            FAQS
          </a>
          <Link
            to="/contact"
            onClick={() => setNav(false)}
            className="hover:text-[#d4af37] border-b border-white/5 pb-4"
          >
            CONTACT
          </Link>
        </div>

        <div className="mt-auto pb-10 flex gap-6 text-[#d4af37]">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
