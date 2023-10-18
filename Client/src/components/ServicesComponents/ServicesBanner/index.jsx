import React from "react";
import "./style.css";
export default function Banner() {
  return (
    <div style={{ width: "100vw", height: "500px" }}>
      <img
        src="./HPdesk.svg"
        alt="aa"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div className="bannerTextWrapper">
        <h1>Welcome to repair center</h1>
        <p>Choose the best option for yourself</p>
      </div>
    </div>
  );
}
