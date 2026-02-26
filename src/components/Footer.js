import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer style={styles.footer}>
      <img src={logo} alt="Arka Luxury Car Rental Logo" style={styles.logo} />

      <p style={styles.text}>© 2026 ARKA Luxury Car Rental Dubai</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#000",

    color: "#c9a857",

    textAlign: "center",

    padding: "40px",
  },

  logo: {
    width: "140px",

    marginBottom: "15px",
  },

  text: {
    fontSize: "14px",
  },
};

export default Footer;
