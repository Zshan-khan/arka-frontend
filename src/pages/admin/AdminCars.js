import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import AdminLayout from "./AdminLayout";
import API from "../../services/api";
import { toast } from "react-toastify";
import { FaCloudUploadAlt } from "react-icons/fa";

function AdminCars() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize navigate
  const token = localStorage.getItem("token");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const uploadCar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    formData.append("image", image);

    try {
      await API.post("/cars/upload", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // 1. Trigger the Success Toast first
      toast.success("VEHICLE ADDED TO FLEET");

      // 2. Use navigate instead of window.location.href
      // This allows the toast to persist during the transition
      setTimeout(() => {
        navigate("/arka-admin-2026/dashboard");
      }, 100);
    } catch (err) {
      toast.error("UPLOAD FAILED - CHECK YOUR CONNECTION");
    }
  };
  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-black italic uppercase mb-10 text-white">
          Add New <span className="text-[#d4af37]">Vehicle</span>
        </h1>

        <form
          onSubmit={uploadCar}
          className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="CAR NAME"
              onChange={handleChange}
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] transition-all font-bold text-xs"
            />
            <input
              name="brand"
              placeholder="BRAND"
              onChange={handleChange}
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] transition-all font-bold text-xs"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input
              name="dailyPrice"
              placeholder="DAILY AED"
              onChange={handleChange}
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-xs"
            />
            <input
              name="weeklyPrice"
              placeholder="WEEKLY AED"
              onChange={handleChange}
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-xs"
            />
            <input
              name="monthlyPrice"
              placeholder="MONTHLY AED"
              onChange={handleChange}
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-xs"
            />
          </div>

          <textarea
            name="description"
            placeholder="VEHICLE DESCRIPTION"
            onChange={handleChange}
            rows="4"
            className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-xs resize-none"
          />

          <div className="relative border-2 border-dashed border-white/10 rounded-2xl p-10 text-center hover:border-[#d4af37]/50 transition-all cursor-pointer">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <FaCloudUploadAlt className="mx-auto text-4xl text-[#d4af37] mb-2" />
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              {image ? image.name : "Select Vehicle Image"}
            </p>
          </div>

          <button className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            Publish to Website
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AdminCars;
