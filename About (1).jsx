import React, { useEffect } from 'react';
import './About.css';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const About = () => {
  const navigate = useNavigate(); 
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // change to "smooth" for animation
    });

  return (
    <div className="travel-section">
      <div className="travel-image">
        <img src="/IMG/img2.png" alt="Landmarks" />
      </div>

      <div className="travel-content">
        <button onClick={() => navigate("/ab")}>About Us</button>
        <h1>Your Journey, Our Passion</h1>
        <p>
          We believe that travel is more than just visiting new places; it's about creating memories,
          experiencing diverse cultures, and discovering the wonders of the world. With years of experience
          in the travel industry, our dedicated team is committed to providing exceptional travel experiences
          tailored to your unique desires and needs.
        </p>

        <ul className="features">
          <li><FaCheckCircle /> Budget-Friendly</li>
          <li><FaCheckCircle /> Luxurious Getaways</li>
          <li><FaCheckCircle /> Trusted Local Guides</li>
        </ul>

        <div className="rating">
          <span>4.7 Star Rating<br />Based on 3,571 Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default About;
