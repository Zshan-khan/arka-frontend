import React, { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "./AdminLayout";
import { useNavigate, Link } from "react-router-dom";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

function AdminDashboard() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    API.get("/cars")
      .then((res) => setCars(res.data))
      .catch(() => toast.error("FAILED TO LOAD FLEET"));
  };

  const deleteCar = async (id) => {
    if (!window.confirm("REMOVE THIS VEHICLE FROM THE FLEET?")) return;
    const token = localStorage.getItem("token");
    try {
      await API.delete(`/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("VEHICLE REMOVED SUCCESSFULLY");
      fetchCars();
    } catch (err) {
      toast.error("ERROR: DELETE ACTION FAILED");
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">
              Admin <span className="text-[#d4af37]">Dashboard</span>
            </h1>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-1">
              Manage Arka Fleet
            </p>
          </div>
          <Link
            to="/arka-admin-2026/cars"
            className="bg-[#d4af37] text-black px-8 py-4 rounded-xl font-black text-xs tracking-widest flex items-center gap-3 hover:bg-white transition-all shadow-lg shadow-gold/10"
          >
            <FaPlus /> ADD NEW CAR
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Vehicle
                </th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Brand
                </th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Daily Price
                </th>
                <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr
                  key={car.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-6 font-bold text-lg italic text-white">
                    {car.name}
                  </td>
                  <td className="p-6 text-gray-400 font-medium">{car.brand}</td>
                  <td className="p-6 font-bold text-[#d4af37]">
                    AED {car.dailyPrice}
                  </td>
                  <td className="p-6">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() =>
                          navigate(`/arka-admin-2026/edit-car/${car.id}`)
                        }
                        className="p-3 bg-white/5 rounded-lg hover:text-[#d4af37] transition-all"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="p-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
