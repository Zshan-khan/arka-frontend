import React from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCars from "./pages/admin/AdminCars";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminEditCar from "./pages/admin/AdminEditCar";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/arka-admin-2026");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Routes>
        {/* PUBLIC */}

        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/arka-admin-2026" element={<AdminLogin />} />

        {/* PROTECTED */}

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
    </>
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
