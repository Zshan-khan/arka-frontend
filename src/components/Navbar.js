import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.container}>
        <img src={logo} alt="logo" style={styles.logo} />

        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            HOME
          </Link>

          <Link to="/contact" style={styles.link}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    position: "absolute",

    width: "100%",

    top: "40px",

    zIndex: 100,
  },

  container: {
    maxWidth: "1300px",

    margin: "auto",

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    padding: "20px",
  },

  logo: {
    height: "45px",
  },

  links: {
    display: "flex",

    gap: "40px",
  },

  link: {
    color: "white",

    textDecoration: "none",

    fontSize: "16px",

    letterSpacing: "1px",
  },
};

export default Navbar;
