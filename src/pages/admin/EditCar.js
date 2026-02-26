import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import API from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

function EditCar() {
  const { id } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: "",
    brand: "",
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const res = await API.get("/cars");

      const car = res.data.find((c) => c.id == id);

      setForm(car);
    } catch {
      alert("Error loading car");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const updateCar = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("brand", form.brand);
      formData.append("dailyPrice", form.dailyPrice);
      formData.append("weeklyPrice", form.weeklyPrice);
      formData.append("monthlyPrice", form.monthlyPrice);
      formData.append("description", form.description);

      if (image) formData.append("image", image);

      await API.put(`/cars/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Car Updated Successfully");

      navigate("/arka-admin-2026/cars");
    } catch {
      alert("Update failed");
    }
  };

  return (
    <AdminLayout>
      <h1 style={styles.title}>Edit Car</h1>

      <form onSubmit={updateCar} style={styles.form}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          style={styles.input}
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Brand"
          style={styles.input}
        />

        <input
          name="dailyPrice"
          value={form.dailyPrice}
          onChange={handleChange}
          placeholder="Daily Price"
          style={styles.input}
        />

        <input
          name="weeklyPrice"
          value={form.weeklyPrice}
          onChange={handleChange}
          placeholder="Weekly Price"
          style={styles.input}
        />

        <input
          name="monthlyPrice"
          value={form.monthlyPrice}
          onChange={handleChange}
          placeholder="Monthly Price"
          style={styles.input}
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          style={styles.input}
        />

        <input
          type="file"
          style={styles.input}
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button style={styles.button}>Update Car</button>
      </form>
    </AdminLayout>
  );
}

const styles = {
  title: {
    color: "#c9a857",
    marginBottom: "20px",
  },

  form: {
    width: "400px",
  },

  input: {
    display: "block",
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    background: "#111",
    color: "white",
    border: "1px solid #333",
  },

  button: {
    padding: "12px",
    background: "#c9a857",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default EditCar;
