import React, { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "./AdminLayout";
import { useNavigate } from "react-router-dom";

function AdminLeads() {
  const [leads, setLeads] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);

    if (!token) {
      navigate("/arka-admin-2026");

      return;
    }

    fetchLeads(token);
  }, [navigate]);

  const fetchLeads = (token) => {
    API.get("/contact", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

      .then((res) => {
        console.log("LEADS RESPONSE:", res.data);

        setLeads(res.data);
      })

      .catch((err) => {
        console.error(err);

        alert("Unauthorized");
      });
  };

  return (
    <AdminLayout>
      <h1 style={{ marginBottom: "20px" }}>Contact Leads</h1>

      <table style={table}>
        <thead>
          <tr style={header}>
            <th style={cell}>Name</th>

            <th style={cell}>Email</th>

            <th style={cell}>Phone</th>

            <th style={cell}>Message</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ padding: "20px" }}>
                No Leads Found
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr key={lead.id}>
                <td style={cell}>{lead.name || "-"}</td>

                <td style={cell}>{lead.email || "-"}</td>

                <td style={cell}>{lead.phone || "-"}</td>

                <td style={cell}>{lead.message || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

const table = {
  width: "100%",

  borderCollapse: "collapse",

  background: "white",
};

const header = {
  background: "#c9a857",

  color: "white",
};

const cell = {
  padding: "12px",

  border: "1px solid #ddd",
};

export default AdminLeads;
