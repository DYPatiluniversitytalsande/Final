import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Demo1.css"; // CSS file for styling

function Demo1() {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <FontAwesomeIcon icon={faUser} style={{ color: "#74C0FC", fontSize: "40px" }} /><br/>
        <h2>10+</h2><br/>
        <p>Years of Experience</p>
      </div>

      <div className="stat-item">
        <FontAwesomeIcon icon={faHeadphones} style={{ color: "#74C0FC", fontSize: "40px" }} /><br/>
        <h2>500+</h2><br/>
        <p>Destinations</p>
      </div>
     <br/>
      <div className="stat-item">
        <FontAwesomeIcon icon={faEarth} style={{ color: "#74C0FC", fontSize: "40px" }} /><br/>
        <h2>24/7+</h2><br/>
        <p>Customer Support</p>
      </div>
    </div>
  );
}

export default Demo1;
