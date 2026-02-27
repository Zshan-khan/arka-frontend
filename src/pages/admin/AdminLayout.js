import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaThLarge, FaCar, FaUsers, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/arka-admin-2026/dashboard",
      icon: <FaThLarge />,
    },
    { name: "Fleet", path: "/arka-admin-2026/cars", icon: <FaCar /> },
    { name: "Leads", path: "/arka-admin-2026/leads", icon: <FaUsers /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/arka-admin-2026");
  };

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Premium Sidebar */}
      <aside className="w-64 bg-[#080808] border-r border-white/5 flex flex-col fixed h-full z-50">
        <div className="p-8 mb-4">
          <img src={logo} alt="Arka Admin" className="h-8 opacity-90" />
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] mt-3">
            Admin Portal
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-[#d4af37] text-black shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                    : "text-gray-500 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 mt-auto border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px]"
          >
            <FaSignOutAlt /> Logout Session
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 min-h-screen">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
