import React, { useState } from "react";
import axios from "axios";

function HomeContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("arka-backend-28zq.onrender.com/api/contact", form);

      setSuccess("Message sent successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      alert("Error sending message");
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>CONTACT US</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
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

        <button style={styles.button}>SEND MESSAGE</button>

        <p style={styles.success}>{success}</p>
      </form>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "black",
    color: "white",
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    marginBottom: "40px",
  },

  form: {
    maxWidth: "500px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "15px",
    fontSize: "16px",
  },

  textarea: {
    padding: "15px",
    height: "120px",
  },

  button: {
    padding: "15px",
    background: "#c9a857",
    color: "black",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },

  success: {
    marginTop: "10px",
    color: "#c9a857",
  },
};

export default HomeContact;
