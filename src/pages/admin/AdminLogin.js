import React, { useState } from "react";
import API from "../../services/api";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data);

      window.location.href = "/arka-admin-2026/dashboard";
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h1 style={styles.title}>ARKA ADMIN</h1>

        <input
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button}>LOGIN</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "#111",
    padding: "40px",
    borderRadius: "10px",
    width: "350px",
  },

  title: {
    color: "#c9a857",
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    background: "#222",
    border: "none",
    color: "white",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#c9a857",
    border: "none",
    fontWeight: "bold",
  },
};

export default AdminLogin;
