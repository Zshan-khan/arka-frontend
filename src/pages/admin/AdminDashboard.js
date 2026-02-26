import React, { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/arka-admin-2026");

      return;
    }

    fetchCars();
  }, [navigate]);

  const fetchCars = () => {
    API.get("/cars").then((res) => setCars(res.data));
  };

  const deleteCar = (id) => {
    const token = localStorage.getItem("token");

    API.delete(`/cars/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => fetchCars());
  };

  return (
    <AdminLayout>
      <h1>Cars</h1>

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
                <button style={styles.delete} onClick={() => deleteCar(car.id)}>
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  delete: {
    background: "red",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
};

export default AdminDashboard;
