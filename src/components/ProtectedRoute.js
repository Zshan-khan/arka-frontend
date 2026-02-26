import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/arka-admin-2026" replace />;
  }

  return children;
}

export default ProtectedRoute;
