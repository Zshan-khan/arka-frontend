import React from "react";

function Requirements() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>REQUIREMENTS</h2>

      <p style={styles.text}>
        To rent a premium car in Dubai with ARKA Luxury Car Rental, you’ll need
        to provide the correct documentation.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px",

    background: "#111",

    color: "white",
  },

  heading: {
    fontSize: "32px",

    marginBottom: "20px",
  },

  text: {
    color: "#ccc",
  },
};

export default Requirements;
