import React, { useEffect, useState } from "react";
import API from "../services/api";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    API.get("/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>OUR LUXURY FLEET</h2>

      <div style={styles.grid}>
        {cars.map((car) => (
          <div
            key={car.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={car.imageUrl} alt={car.name} style={styles.image} />

            <div style={styles.overlay} />

            <div style={styles.content}>
              <h3 style={styles.name}>
                {car.brand} {car.name}
              </h3>

              <p style={styles.price}>AED {car.dailyPrice} / DAY</p>

              <button style={styles.button}>RENT NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 60px",

    background: "#0b0b0b",

    color: "white",

    textAlign: "center",
  },

  heading: {
    fontSize: "42px",

    marginBottom: "60px",

    letterSpacing: "2px",
  },

  grid: {
    display: "grid",

    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",

    gap: "40px",
  },

  card: {
    position: "relative",

    height: "420px",

    borderRadius: "20px",

    overflow: "hidden",

    cursor: "pointer",

    transition: "0.4s",

    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  },

  image: {
    width: "100%",

    height: "100%",

    objectFit: "cover",

    objectPosition: "center",

    position: "absolute",

    top: 0,

    left: 0,
  },

  overlay: {
    position: "absolute",

    width: "100%",

    height: "100%",

    background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1))",
  },

  content: {
    position: "absolute",

    bottom: "0",

    padding: "25px",

    textAlign: "left",
  },

  name: {
    fontSize: "24px",

    marginBottom: "10px",
  },

  price: {
    fontSize: "18px",

    color: "#d4af37",

    marginBottom: "15px",

    fontWeight: "bold",
  },

  button: {
    padding: "12px 25px",

    background: "#d4af37",

    border: "none",

    borderRadius: "5px",

    fontWeight: "bold",

    cursor: "pointer",
  },
};

export default CarList;
