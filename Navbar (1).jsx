import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home"); // default active link

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <nav className="navbar">
      <div className="logo">✈️ADVENTURE AURA</div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={active === "Home" ? "active" : ""}
            onClick={() => handleClick("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={active === "About" ? "active" : ""}
            onClick={() => handleClick("About")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Packages"
            className={active === "Services" ? "active" : ""}
            onClick={() => handleClick("Services")}
          >
            Packages
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={active === "Contact" ? "active" : ""}
            onClick={() => handleClick("Contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <button className="plan-btn">
          <Link
            to="/Trip"
            className={active === "Plan Trip" ? "active" : ""}
            onClick={() => handleClick("Plan Trips")}
          >
            Plan Trip
          </Link>
          </button>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
