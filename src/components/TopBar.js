import React from "react";

function TopBar() {
  return (
    <div style={styles.bar}>
      <div style={styles.container}>
        <div>📞 +971 54 513 9999</div>

        <div>📍 1601A, One by Omniyat, Business Bay, Dubai</div>
      </div>
    </div>
  );
}

const styles = {
  bar: {
    background: "#0a0a0a",

    color: "#c9a857",

    fontSize: "14px",

    padding: "8px 0",

    borderBottom: "1px solid #222",
  },

  container: {
    maxWidth: "1300px",

    margin: "auto",

    display: "flex",

    justifyContent: "space-between",

    padding: "0 20px",
  },
};

export default TopBar;
