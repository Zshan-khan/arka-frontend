import React, { useEffect, useState } from "react";
import API from "../services/api";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const CarCard = ({ car }) => {
  const whatsappNumber = "+971505132649";
  const callNumber = "+971545139999";
  const message = encodeURIComponent(
    `Hi Arka Luxury, I'm interested in renting the ${car.brand} ${car.name}.`
  );

  return (
    <div className="group relative bg-[#121212] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#d4af37]/40">
      {/* Image Section */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">
            Available
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 text-left">
          <p className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em] mb-1">
            {car.brand}
          </p>
          <h3 className="text-2xl font-black text-white italic uppercase leading-tight">
            {car.name}
          </h3>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 mb-6">
          <div className="text-center border-r border-white/5">
            <p className="text-[9px] text-gray-500 uppercase font-bold">
              Daily
            </p>
            <p className="text-white font-bold text-sm">AED {car.dailyPrice}</p>
          </div>
          <div className="text-center border-r border-white/5">
            <p className="text-[9px] text-gray-500 uppercase font-bold">
              Weekly
            </p>
            <p className="text-white font-bold text-sm">
              AED {car.weeklyPrice}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[9px] text-gray-500 uppercase font-bold">
              Monthly
            </p>
            <p className="text-white font-bold text-sm">
              AED {car.monthlyPrice}
            </p>
          </div>
        </div>

        {/* Dual Contact Buttons */}
        <div className="flex gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-[#25D366] hover:bg-white text-black font-black py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
          <a
            href={`tel:${callNumber}`}
            className="flex-1 bg-[#d4af37] hover:bg-white text-black font-black py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]"
          >
            <FaPhoneAlt size={14} /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/cars")
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
            OUR LUXURY <span className="text-[#d4af37]">FLEET</span>
          </h2>
          <div className="h-1 w-24 bg-[#d4af37] mx-auto mt-4"></div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-96 bg-white/5 animate-pulse rounded-3xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarList;
