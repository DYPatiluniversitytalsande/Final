import React from "react";
import "./SA.css";
import { FaArrowRight } from "react-icons/fa";

const Sa = () => {
  return (
    <section className="travel-banner">
      <div className="travel-text">
        <h1>Ready to Start Your Adventure?</h1>
        <p>
          Let us help you create the perfect journey. Our travel experts are
          ready to craft your dream vacation.
        </p>
        <button className="start-btn">
          Start Planning <FaArrowRight className="arrow-icon" />
        </button>
      </div>

      <div className="travel-image">
        <img
          src="/IMG/img3.png"
          alt="Travel Girl"
        />
      </div>

    </section>
  );
};

export default Sa;
