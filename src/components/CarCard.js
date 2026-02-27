import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="group relative bg-[#121212] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-arka-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Image Container with Zoom Effect */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Top Right Badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-[10px] font-bold text-arka-gold uppercase tracking-widest">
            Available
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-arka-gold text-xs font-bold uppercase tracking-[0.2em] mb-1">
            {car.brand}
          </p>
          <h3 className="text-2xl font-black text-white italic uppercase">
            {car.name}
          </h3>
        </div>

        {/* Pricing Grid - High Contrast */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 mb-6">
          <div className="text-center">
            <p className="text-[9px] text-gray-500 uppercase font-bold">
              Daily
            </p>
            <p className="text-white font-bold text-sm">AED {car.dailyPrice}</p>
          </div>
          <div className="text-center border-x border-white/5">
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

        {/* Action Button */}
        <button className="w-full bg-arka-gold hover:bg-white text-black font-black py-4 rounded-xl transition-all duration-300 transform active:scale-95 uppercase tracking-widest text-sm">
          Book This Vehicle
        </button>
      </div>
    </div>
  );
};

export default CarCard;
