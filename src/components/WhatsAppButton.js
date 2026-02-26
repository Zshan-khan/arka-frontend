import React from "react";

import whatsapp from "../assets/whatsapp.svg";

function WhatsAppButton() {
  const phone = "971545139999";

  const message =
    "Hello, I want to rent a luxury car from ARKA Luxury Car Rental";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
    >
      <img src={whatsapp} alt="WhatsApp" style={styles.icon} />
    </a>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    padding: "14px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
    zIndex: 9999,
    cursor: "pointer",
  },

  icon: {
    width: "32px",
    height: "32px",
    display: "block",
  },
};

export default WhatsAppButton;
