import React from "react";

function Hero() {
  const scrollToFleet = () => {
    const section = document.getElementById("fleet");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.glassBox}>
          <h1 style={styles.title}>ARKA LUXURY CAR RENTAL</h1>

          <p style={styles.subtitle}>Premium Car Rental in Dubai</p>

          <button style={styles.button} onClick={scrollToFleet}>
            EXPLORE FLEET
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",

    backgroundImage:
      "url('https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2070')",

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    animation: "zoomHero 20s ease-in-out infinite alternate",
  },

  overlay: {
    width: "100%",

    height: "100%",

    background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75))",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",
  },

  glassBox: {
    background: "rgba(0,0,0,0.45)",

    padding: "60px",

    borderRadius: "12px",

    backdropFilter: "blur(6px)",

    textAlign: "center",

    boxShadow: "0 0 40px rgba(0,0,0,0.6)",
  },

  title: {
    color: "white",

    fontSize: "64px",

    fontWeight: "600",

    letterSpacing: "4px",

    marginBottom: "20px",
  },

  subtitle: {
    color: "#c9a857",

    fontSize: "24px",

    marginBottom: "40px",
  },

  button: {
    padding: "18px 45px",

    fontSize: "16px",

    background: "#c9a857",

    border: "none",

    cursor: "pointer",

    fontWeight: "bold",

    letterSpacing: "1px",

    transition: "0.3s",
  },
};

export default Hero;
