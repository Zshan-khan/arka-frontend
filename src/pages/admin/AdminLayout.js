import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/arka-admin-2026");
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>ARKA ADMIN</h2>

        <button
          onClick={() => navigate("/arka-admin-2026/dashboard")}
          style={styles.link}
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/arka-admin-2026/cars")}
          style={styles.link}
        >
          Cars
        </button>

        <button
          onClick={() => navigate("/arka-admin-2026/leads")}
          style={styles.link}
        >
          Leads
        </button>

        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      </div>

      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {
  container: { display: "flex" },

  sidebar: {
    width: "200px",

    background: "#111",

    color: "white",

    height: "100vh",

    padding: "20px",
  },

  content: { flex: 1, padding: "20px" },

  link: {
    display: "block",

    marginBottom: "10px",

    background: "none",

    border: "none",

    color: "white",

    cursor: "pointer",
  },

  logout: {
    marginTop: "20px",

    background: "red",

    border: "none",

    padding: "10px",

    color: "white",

    cursor: "pointer",
  },
};

export default AdminLayout;
