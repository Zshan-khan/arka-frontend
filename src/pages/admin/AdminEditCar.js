import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { useNavigate, useParams } from "react-router-dom";

function AdminEditCar() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const res = await axios.get("arka-backend-28zq.onrender.com/api/cars");

      const car = res.data.find((c) => c.id == id);

      setForm({
        name: car.name,
        brand: car.brand,
        dailyPrice: car.dailyPrice,
        weeklyPrice: car.weeklyPrice,
        monthlyPrice: car.monthlyPrice,
        description: car.description,
        image: null,
      });
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

  const handleImage = (e) => {
    setForm({
      ...form,

      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("brand", form.brand);
    formData.append("dailyPrice", form.dailyPrice);
    formData.append("weeklyPrice", form.weeklyPrice);
    formData.append("monthlyPrice", form.monthlyPrice);
    formData.append("description", form.description);

    if (form.image) formData.append("image", form.image);

    try {
      await axios.put(
        `arka-backend-28zq.onrender.com/api/cars/${id}`,

        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Car Updated");

      navigate("/arka-admin-2026/cars");
    } catch {
      alert("Error updating car");
    }
  };

  return (
    <AdminLayout>
      <h1>Edit Car</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          style={input}
        />

        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          style={input}
        />

        <input
          name="dailyPrice"
          value={form.dailyPrice}
          onChange={handleChange}
          style={input}
        />

        <input
          name="weeklyPrice"
          value={form.weeklyPrice}
          onChange={handleChange}
          style={input}
        />

        <input
          name="monthlyPrice"
          value={form.monthlyPrice}
          onChange={handleChange}
          style={input}
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          style={input}
        />

        <input type="file" onChange={handleImage} style={input} />

        <button style={button}>Update Car</button>
      </form>
    </AdminLayout>
  );
}

const formStyle = {
  maxWidth: "500px",

  marginTop: "20px",
};

const input = {
  width: "100%",

  padding: "12px",

  marginBottom: "10px",
};

const button = {
  padding: "12px",

  background: "#c9a857",

  border: "none",

  width: "100%",

  fontWeight: "bold",
};

export default AdminEditCar;
