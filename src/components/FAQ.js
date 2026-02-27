import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState(null);
  const faqs = [
    {
      q: "Is insurance included in the rental price?",
      a: "Yes, basic comprehensive insurance is included.",
    },
    {
      q: "Do you offer doorstep delivery in Dubai?",
      a: "Absolutely. We provide free delivery and pickup across Dubai.",
    },
    {
      q: "What is the daily mileage limit?",
      a: "Our standard limit is 250km per day.",
    },
    {
      q: "What happens if I get a traffic fine?",
      a: "Fines are processed through the RTA system and billed to the customer.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-black px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 italic uppercase">
          FAQ<span className="text-[#d4af37]">S</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-semibold">{faq.q}</span>
                {active === i ? (
                  <FaMinus className="text-[#d4af37]" />
                ) : (
                  <FaPlus className="text-[#d4af37]" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ${
                  active === i ? "max-h-40 p-6 pt-0" : "max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-400 border-t border-white/10 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
