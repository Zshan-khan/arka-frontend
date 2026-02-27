import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import API from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Send data to /contact (matching your ContactController @PostMapping)
      await API.post("/contact", formData);

      // 2. Premium Success Feedback
      toast.success("INQUIRY SENT SUCCESSFULLY. OUR TEAM WILL CONTACT YOU.");

      // 3. Clear form after success
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("COULD NOT SEND INQUIRY. PLEASE TRY AGAIN.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#050505] px-4 md:px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black italic uppercase mb-8 tracking-tighter text-white">
            GET IN <span className="text-[#d4af37]">TOUCH</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-full text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                <FaPhone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Call Us
                </p>
                <p className="text-xl font-bold text-white">+971 54 513 9999</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-white/5 rounded-full text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  Email
                </p>
                <p className="text-xl font-bold text-white">
                  info@arkaluxury.ae
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white focus:border-[#d4af37] outline-none text-sm"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971"
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white focus:border-[#d4af37] outline-none text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white focus:border-[#d4af37] outline-none text-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Which car are you interested in?"
                rows="4"
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white focus:border-[#d4af37] outline-none text-sm resize-none"
                required
              ></textarea>
            </div>

            <button className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all shadow-xl">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
