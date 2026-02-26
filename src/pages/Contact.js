import React, { useState } from "react";
import API from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/contact", form);

      setStatus("SUCCESS");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Contact Arka Luxury</h2>

        <p style={styles.subtitle}>Our team will contact you within minutes</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />

          <button style={styles.button}>Send Inquiry</button>
        </form>

        {status === "SUCCESS" && (
          <p style={styles.success}>Inquiry Sent Successfully</p>
        )}

        {status === "ERROR" && (
          <p style={styles.error}>Error sending inquiry</p>
        )}
      </div>
    </div>
  );
}

export default Contact;

const styles = {
  container: {
    background: "black",

    color: "white",

    minHeight: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "20px",
  },

  box: {
    width: "500px",

    background: "#111",

    padding: "40px",

    borderRadius: "10px",
  },

  title: {
    fontSize: "32px",

    marginBottom: "10px",
  },

  subtitle: {
    color: "#c9a857",

    marginBottom: "30px",
  },

  form: {
    display: "flex",

    flexDirection: "column",

    gap: "15px",
  },

  input: {
    padding: "12px",

    background: "#222",

    border: "1px solid #333",

    color: "white",
  },

  textarea: {
    padding: "12px",

    height: "120px",

    background: "#222",

    border: "1px solid #333",

    color: "white",
  },

  button: {
    background: "#c9a857",

    border: "none",

    padding: "15px",

    fontWeight: "bold",

    cursor: "pointer",
  },

  success: {
    color: "green",

    marginTop: "20px",
  },

  error: {
    color: "red",

    marginTop: "20px",
  },
};
