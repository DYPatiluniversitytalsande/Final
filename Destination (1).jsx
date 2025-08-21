import React from "react";
import "./Destination.css";

const Destination = () => {
  const places = [
    { name: "Amazon Forest", image:"./IMG/amazon.jpeg"},
    { name: "London", image: "./IMG/london.jpeg" },
    { name: "Europe", image: "./IMG/europe.jpeg" },
    { name: "Africa", image:"./IMG/africa.jpeg"},
    { name: "India", image:"./IMG/India.jpeg"},
    { name: "Japan", image:"./IMG/Japan.jpeg"},
    { name: "Rashiya", image:"./IMG/Rashiya.jpeg"},
    { name: "China", image:"./IMG/China.jpeg"},
  ];

  return (
    <div className="destinations-section">
      <div className="text-content">
        <button className="choose-button">CHOOSE YOUR PLACE</button>
        <h2>Popular Destinations</h2>
        <p>
          Join us as we explore the wonders of the globe, one incredible journey
          at a time.
        </p>
      </div>

      <div className="destination-grid">
        {places.map((place, index) => (
          <div key={index} className="destination-card">
            <img src={place.image} alt={place.name} />
            <div className="destination-name">{place.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
