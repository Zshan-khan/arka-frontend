import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change Navbar style on scroll for better visibility
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNav(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={handleHomeClick}>
          <img src={logo} alt="Arka" className="h-10 md:h-12" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center font-black tracking-[0.2em] text-[10px] uppercase">
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

          <div className="flex gap-5 ml-6 border-l border-white/20 pl-6 text-lg">
            <a
              href="https://www.instagram.com/arkaluxurycarrental/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#d4af37] transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/arkaluxurycarrental/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#d4af37] transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/@ARKALuxuryCarRental/shorts"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#d4af37] transition-all"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
