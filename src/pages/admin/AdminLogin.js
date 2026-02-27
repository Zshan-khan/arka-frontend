import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";
import { FaLock, FaUserShield } from "react-icons/fa";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);

      toast.success("ACCESS GRANTED. WELCOME TO ARKA.", {
        icon: "🗝️",
      });

      // Brief delay to let the toast show before the dashboard transition
      setTimeout(() => {
        navigate("/arka-admin-2026/dashboard");
      }, 800);
    } catch (err) {
      toast.error("INVALID CREDENTIALS. ACCESS DENIED.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md z-10">
        {/* Logo Area */}
        <div className="text-center mb-10">
          <img src={logo} alt="Arka Luxury" className="h-16 mx-auto mb-6" />
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4af37]">
            Private Administration
          </h2>
        </div>

        {/* Login Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Admin Identifier
              </label>
              <div className="relative">
                <FaUserShield className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl text-white outline-none focus:border-[#d4af37] transition-all font-bold text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Security Key
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-xl text-white outline-none focus:border-[#d4af37] transition-all font-bold text-sm"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-[#d4af37] text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-xl shadow-gold/10 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Initialize Session"}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-gray-600 text-[9px] font-bold uppercase tracking-widest">
          Arka Luxury Car Rental &copy; 2026 Dashboard Access
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
