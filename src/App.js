import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Page Imports
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCars from "./pages/admin/AdminCars";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminEditCar from "./pages/admin/AdminEditCar";

// Component Imports
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {
  const location = useLocation();
  // Check if current path is admin to hide the public Navbar
  const isAdmin = location.pathname.startsWith("/arka-admin-2026");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. Global Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        toastStyle={{
          backgroundColor: "#121212",
          color: "#fff",
          border: "1px solid rgba(212, 175, 55, 0.3)",
          borderRadius: "15px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontWeight: "bold",
          letterSpacing: "0.05em",
        }}
      />

      {/* 2. Public Navigation */}
      {!isAdmin && <Navbar />}

      {/* 3. Page Routes */}
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/arka-admin-2026" element={<AdminLogin />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route
          path="/arka-admin-2026/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/arka-admin-2026/cars"
          element={
            <ProtectedRoute>
              <AdminCars />
            </ProtectedRoute>
          }
        />
        <Route
          path="/arka-admin-2026/leads"
          element={
            <ProtectedRoute>
              <AdminLeads />
            </ProtectedRoute>
          }
        />
        <Route
          path="/arka-admin-2026/edit-car/:id"
          element={
            <ProtectedRoute>
              <AdminEditCar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
