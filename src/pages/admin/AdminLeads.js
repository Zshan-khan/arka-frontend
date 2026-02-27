import React, { useEffect, useState, useCallback } from "react";
import API from "../../services/api";
import AdminLayout from "./AdminLayout";
import { FaUser, FaEnvelope, FaPhone, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  // 1. Wrap fetchLeads in useCallback to fix the ESLint dependency warning
  const fetchLeads = useCallback(async () => {
    try {
      const res = await API.get("/contact", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLeads(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching leads:", err);
      toast.error("ERROR FETCHING INQUIRIES");
      setLoading(false);
    }
  }, [token]); // Function only re-creates if token changes

  // 2. useEffect now safely includes fetchLeads in the dependency array
  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const deleteLead = async (id) => {
    if (!window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS INQUIRY?"))
      return;
    try {
      await API.delete(`/contact/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("INQUIRY REMOVED SUCCESSFULLY");
      fetchLeads(); // Refresh the list
    } catch (err) {
      toast.error("FAILED TO REMOVE INQUIRY");
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 md:p-10 min-h-screen">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">
            Customer <span className="text-[#d4af37]">Inquiries</span>
          </h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">
            Manage your Arka leads
          </p>
        </div>

        {/* Loading State / Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-white/5 animate-pulse rounded-[2rem] border border-white/5"
              />
            ))}
          </div>
        ) : leads.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-32 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <p className="text-gray-500 font-black uppercase tracking-widest italic text-sm">
              No new inquiries found in database
            </p>
          </div>
        ) : (
          /* Data Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="group bg-[#0c0c0c] border border-white/10 p-8 rounded-[2.5rem] hover:border-[#d4af37]/40 transition-all duration-500 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-[#d4af37] text-black rounded-2xl shadow-lg shadow-gold/20">
                        <FaUser size={18} />
                      </div>
                      <h3 className="font-black italic uppercase text-xl text-white tracking-tight">
                        {lead.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="text-gray-700 hover:text-red-500 transition-all duration-300 p-2 hover:bg-red-500/10 rounded-lg"
                      title="Delete Inquiry"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5">
                        <FaPhone size={12} className="text-[#d4af37]" />
                      </div>
                      <span className="font-bold text-sm tracking-widest">
                        {lead.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5">
                        <FaEnvelope size={12} className="text-[#d4af37]" />
                      </div>
                      <span className="font-bold text-sm tracking-tight break-all">
                        {lead.email}
                      </span>
                    </div>
                  </div>

                  {/* Message Box */}
                  <div className="bg-black/60 p-6 rounded-3xl border border-white/5 relative">
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mb-3">
                      Customer Message
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed italic">
                      "{lead.message}"
                    </p>
                  </div>
                </div>

                {/* Quick Action Bar */}
                <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex-1 bg-white/5 hover:bg-[#d4af37] hover:text-black text-white text-[10px] font-black uppercase py-3 rounded-xl text-center transition-all duration-300 tracking-widest"
                  >
                    Call
                  </a>
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex-1 bg-white/5 hover:bg-white hover:text-black text-white text-[10px] font-black uppercase py-3 rounded-xl text-center transition-all duration-300 tracking-widest"
                  >
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminLeads;
