import React from "react";
import { FaIdCard, FaCar, FaUserCheck, FaWallet } from "react-icons/fa";

const Requirements = () => {
  const data = [
    {
      icon: <FaIdCard />,
      title: "Valid ID / Passport",
      desc: "Original Passport or Emirates ID is mandatory.",
    },
    {
      icon: <FaCar />,
      title: "Driving License",
      desc: "A valid UAE license or International Driving Permit.",
    },
    {
      icon: <FaUserCheck />,
      title: "Age Limit",
      desc: "Minimum age of 21 years required.",
    },
    {
      icon: <FaWallet />,
      title: "Security Deposit",
      desc: "Refundable deposit via Credit Card or Cash.",
    },
  ];

  return (
    <section
      id="requirements"
      className="py-24 bg-[#050505] px-6 border-t border-white/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-center mb-16">
          RENTAL <span className="text-[#d4af37]">REQUIREMENTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center md:text-left"
            >
              <div className="text-[#d4af37] text-5xl mb-6 flex justify-center md:justify-start">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
