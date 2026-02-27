import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 md:py-32 bg-[#050505] px-4 md:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black italic uppercase mb-6 md:mb-8 leading-tight tracking-tighter">
            GET IN <span className="text-[#d4af37]">TOUCH</span>
          </h2>
          <p className="text-gray-400 mb-8 md:mb-12 max-w-md text-sm md:text-base tracking-wide leading-relaxed">
            Our luxury concierge team is available 24/7 to assist with your
            high-end rental inquiries in Dubai.
          </p>

          <div className="space-y-4 md:space-y-6">
            {/* Phone Card */}
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="p-3 md:p-4 bg-white/5 rounded-full text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
                <FaPhone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                  Call Us
                </p>
                <p className="text-lg md:text-xl font-bold">+971 54 513 9999</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="p-3 md:p-4 bg-white/5 rounded-full text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                  Email
                </p>
                <p className="text-lg md:text-xl font-bold">
                  info@arkaluxury.ae
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Contact Form */}
        <div className="bg-white/5 p-6 md:p-10 lg:p-14 rounded-[2rem] border border-white/10 backdrop-blur-sm">
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+971"
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                placeholder="Tell us which car you're interested in..."
                rows="4"
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl focus:border-[#d4af37] outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.15)] active:scale-[0.98]">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
