import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function AdminCars() {
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    dailyPrice: "",
    weeklyPrice: "",
    monthlyPrice: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const res = await API.get("/cars");

    setCars(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const uploadCar = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      formData.append("image", image);

      await API.post("/cars/upload", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Car Uploaded Successfully");

      fetchCars();
    } catch {
      toast.error("Upload Failed");
    }
  };

  const deleteCar = async (id) => {
    if (!window.confirm("Delete this car?")) return;

    try {
      await API.delete(`/cars/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Car Deleted");

      fetchCars();
    } catch {
      toast.error("Delete Failed");
    }
  };

  return (
    <AdminLayout>
      <h1 style={styles.title}>Manage Cars</h1>

      <form onSubmit={uploadCar} style={styles.form}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="dailyPrice"
          placeholder="Daily Price"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="weeklyPrice"
          placeholder="Weekly Price"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="monthlyPrice"
          placeholder="Monthly Price"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input}
        />

        <button style={styles.button}>Upload Car</button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>

            <th>Brand</th>

            <th>Price</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>

              <td>{car.brand}</td>

              <td>{car.dailyPrice}</td>

              <td>
                <button
                  onClick={() =>
                    navigate(`/arka-admin-2026/edit-car/${car.id}`)
                  }
                  style={styles.edit}
                >
                  Edit
                </button>

                <button onClick={() => deleteCar(car.id)} style={styles.delete}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

const styles = {
  title: { color: "#c9a857", marginBottom: "20px" },

  form: { marginBottom: "40px" },

  input: {
    display: "block",

    padding: "12px",

    marginBottom: "10px",

    width: "300px",

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

  table: { width: "100%" },

  edit: {
    background: "#c9a857",

    border: "none",

    padding: "8px",

    marginRight: "10px",

    cursor: "pointer",

    color: "white",
  },

  delete: {
    background: "red",

    border: "none",

    padding: "8px",

    cursor: "pointer",

    color: "white",
  },
};

export default AdminCars;
