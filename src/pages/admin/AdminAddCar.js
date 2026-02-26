import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";

function AdminAddCar() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,

      [name]: value,
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

    if (!token) {
      alert("Login first");

      return;
    }

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("brand", form.brand);
    formData.append("dailyPrice", form.dailyPrice);
    formData.append("weeklyPrice", form.weeklyPrice);
    formData.append("monthlyPrice", form.monthlyPrice);
    formData.append("description", form.description);
    formData.append("image", form.image);

    try {
      await axios.post(
        "arka-backend-28zq.onrender.com/api/cars/upload",

        formData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Car Added Successfully");

      navigate("/arka-admin-2026/cars");
    } catch (err) {
      console.error(err);

      alert("Error adding car");
    }
  };

  return (
    <AdminLayout>
      <h1>Add New Car</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="name"
          placeholder="Car Name"
          onChange={handleChange}
          style={input}
        />

        <input
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          style={input}
        />

        <input
          name="dailyPrice"
          placeholder="Daily Price"
          onChange={handleChange}
          style={input}
        />

        <input
          name="weeklyPrice"
          placeholder="Weekly Price"
          onChange={handleChange}
          style={input}
        />

        <input
          name="monthlyPrice"
          placeholder="Monthly Price"
          onChange={handleChange}
          style={input}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          style={input}
        />

        <input type="file" onChange={handleImage} style={input} />

        <button style={button}>Add Car</button>
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

export default AdminAddCar;
