import React from "react";
import { FaHotel, FaCar, FaShip, FaPlane } from "react-icons/fa";
import "./Demo2.css";

const packages = [
  {
    id: 1,
    region: "AFRICA",
    title: "Enchanting Mauritius",
    duration: "6 Days / 5 Nights",
    price: "₹1,00,450 / Person",
    rating: 5,
    note: "This price is lower than the average in April",
    image:"/IMG/1.jpeg",
  },
  {
    id: 2,
    region: "ASIA",
    title: "Majestic Maldives",
    duration: "6 Days / 5 Nights",
    price: "₹1,00,450 / Person",
    rating: 5,
    note: "This price is lower than the average in April",
    image:"/IMG/2.jpeg"
  },
  {
    id: 3,
    region: "ASIA",
    title: "Vibrant Vietnam",
    duration: "6 Days / 5 Nights",
    price: "₹1,00,450 / Person",
    rating: 5,
    note: "This price is lower than the average in April",
    image:"/IMG/3.jpeg"
  },
  {
    id: 4,
    region: "NORTH AFRICA",
    title: "Mystical Morocco",
    duration: "6 Days / 5 Nights",
    price: "₹1,00,450 / Person",
    rating: 5,
    note: "This price is lower than the average in April",
    image:"/IMG/4.jpeg"
  },
];

const Demo2 = () => {
  return (
    <div className="package-container">
      {packages.map((pkg) => (
        <div key={pkg.id} className="package-card">
          <img src={pkg.image} alt={pkg.title} className="package-image" />
          <div className="package-details">
            <span className="region">{pkg.region}</span>
            <h3>{pkg.title}</h3>
            <p className="duration">{pkg.duration}</p>
            <div className="icons">
              <button><FaPlane/></button><br/><button><FaCar /></button><br/>
              <button><FaShip /></button><br/> 
            </div>
            <p className="price">{pkg.price}</p>
            <p className="note">{pkg.note}</p>
            <div className="footer">
              <div className="rating">
                <br/><br/><br/>
                {"⭐".repeat(pkg.rating)}
              </div>
              <br/><br/><br/>
              <button className="start-btn">Start Trip</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Demo2;
