import React, { useEffect, useState, useCallback } from "react";
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

  // Wrap fetchCar in useCallback
  const fetchCar = useCallback(async () => {
    try {
      const res = await API.get("/cars");
      const car = res.data.find((c) => String(c.id) === String(id));
      if (car) {
        setForm(car);
      } else {
        alert("Car not found");
      }
    } catch (error) {
      console.error("Error loading car:", error);
      alert("Error loading car");
    }
  }, [id]);

  useEffect(() => {
    fetchCar();
  }, [fetchCar]); // Include fetchCar in the dependency array

  useEffect(() => {
    // Your existing logic that uses 'navigate'
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      alert("Please upload a valid image file");
    }
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

        <input type="file" style={styles.input} onChange={handleFileChange} />

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
