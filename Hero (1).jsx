import React from "react";
import "./Hero.css";
import Rating from "./Rating";

const destinations = [
  {
    id: 1,
    name: "Spain",
    price: "$2,499",
    location: "EUROPE",
    image: "/IMG/10.png",
  },
  {
    id: 2,
    name: "Australia",
    price: "$2,499",
    location: "EUROPE",
    image: "/IMG/11.png",
  },
  {
    id: 3,
    name: "Egypt",
    price: "$2,499",
    location: "EUROPE",
    image: "/IMG/12.png",
  },
];

export default function Hero() {
  return (
    <div>
      <hr/>
      <br/><br/>
      <span className="tag">POPULAR DESTINATIONS</span>
      <h1 className="heading">Handpicked Packages</h1>
      <div className="cards-container">
        {destinations.map((dest) => (
          <div className="card" key={dest.id}>
            <img src={dest.image} alt={dest.name} className="card-image" />
            <div className="card-rating"> <Rating max={5}
              onRatingChange={(value) => console.log(`You rated ${pkg.title} ${value} stars`)}
            />
            </div>
            <br />
            <div className="card-location">{dest.location}</div>
            <h3 className="card-title">{dest.name}</h3>
            <p className="card-price">From {dest.price}</p>
            
          </div>
          
        ))}
      </div>
      <br/>
            <hr/>
    </div>
  );
}
