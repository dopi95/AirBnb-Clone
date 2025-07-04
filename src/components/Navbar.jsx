import React from "react";
import "../index.css";
import airbnb from "../assets/airbnb-logo.png";
function Navbar() {
  return (
    <nav>
      <img src={airbnb} />
    </nav>
  );
}

export default Navbar;