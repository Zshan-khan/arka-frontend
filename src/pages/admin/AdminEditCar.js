import React, { useState, useEffect, useCallback } from "react";
import API from "../../services/api";
import AdminLayout from "./AdminLayout";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCloudUploadAlt, FaArrowLeft } from "react-icons/fa";

function AdminEditCar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: "",
    brand: "",
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const fetchCar = useCallback(async () => {
    try {
      const res = await API.get("/cars");
      const car = res.data.find((c) => String(c.id) === String(id));
      if (car) {
        setForm({
          name: car.name,
          brand: car.brand,
          dailyPrice: car.dailyPrice,
          weeklyPrice: car.weeklyPrice,
          monthlyPrice: car.monthlyPrice,
          description: car.description,
        });
        setPreview(car.imageUrl);
      } else {
        toast.error("VEHICLE NOT FOUND");
      }
    } catch (error) {
      console.error("Error loading car:", error);
      toast.error("FAILED TO LOAD VEHICLE DATA");
    }
  }, [id]);

  useEffect(() => {
    fetchCar();
  }, [fetchCar]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (image) formData.append("image", image);

    try {
      await API.put(`/cars/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // 1. Trigger the Success Toast
      toast.success("VEHICLE UPDATED SUCCESSFULLY");

      // 2. Delay navigation slightly so the toast is visible
      setTimeout(() => {
        navigate("/arka-admin-2026/dashboard");
      }, 100);
    } catch (error) {
      toast.error("ERROR UPDATING VEHICLE");
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <FaArrowLeft /> Back to Dashboard
        </button>

        <h1 className="text-4xl font-black italic uppercase mb-10 text-white">
          Edit <span className="text-[#d4af37]">Vehicle</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Vehicle Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] transition-all font-bold text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Brand
              </label>
              <input
                name="brand"
                value={form.brand}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] transition-all font-bold text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Daily (AED)
              </label>
              <input
                name="dailyPrice"
                value={form.dailyPrice}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Weekly (AED)
              </label>
              <input
                name="weeklyPrice"
                value={form.weeklyPrice}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Monthly (AED)
              </label>
              <input
                name="monthlyPrice"
                value={form.monthlyPrice}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#d4af37] text-sm resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Current/New Image Preview */}
            <div className="aspect-video bg-black/40 border border-white/10 rounded-2xl overflow-hidden relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-[10px] font-bold uppercase tracking-widest">
                  Current Image
                </p>
              </div>
            </div>

            <div className="relative border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-[#d4af37]/50 transition-all h-full flex flex-col justify-center">
              <input
                type="file"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <FaCloudUploadAlt className="mx-auto text-3xl text-[#d4af37] mb-2" />
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                {image ? image.name : "Replace Vehicle Image"}
              </p>
            </div>
          </div>

          <button className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-gold/10">
            Save Changes
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AdminEditCar;
