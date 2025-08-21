import "./Packages.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Rating from "./Rating";
import { FaPlane } from "react-icons/fa";


const packagesData = [
  {
    id: 1,
    region: "AFRICA",
    title: "Japan",
    duration: "6 Days / 5 Nights",
    price: "₹1,00,450 / Person",
    note: "This price is lower than the average in April",
    rating: 3,
    img: "/IMG/2.jpeg",
  },
  {
    id: 2,
    region: "ASIA",
    title: "Enchanting Mauritius",
    duration: "6 Days / 5 Nights",
    price: "₹1,8,450 / Person",
    note: "This price is lower than the average in April",
    rating: 2,
     img: "/IMG/img1.png",
    
  },
  {
    id: 3,
    region: "India",
    title: "Dubai",
    duration: "6 Days / 5 Nights",
    price: "₹1,5,450 / Person",
    note: "This price is lower than the average in April",
    rating: 5,
   img: "/IMG/1.jpeg",
  },
  {
    id: 4,
    region: "America",
    title: "Rashiya",
    duration: "6 Days / 5 Nights",
    price: "₹1,18,450 / Person",
    note: "This price is lower than the average in April",
    rating: 4,
    img: "/IMG/3.jpeg",
  },
   {
    id: 5,
    region: "south AFRICA",
    title: "koria",
    duration: "4 Days / 3 Nights",
    price: "₹1,45,450 / Person",
    note: "This price is lower than the average in April",
    rating: 3,
    img: "/IMG/4.jpeg",
  },
   {
    id: 6,
    region: "NORTH AFRICA",
    title: "America",
    duration: "3 Days / 2 Nights",
    price: "₹1,2,450 / Person",
    note: "This price is lower than the average in May",
    rating: 4,
    img: "/IMG/5.jpeg",
  },
];

const Packages = () => {
  const navigate = useNavigate();
  return (
    

    <div className="packages-container">
      <h class="a">Discover Your Perfect Adventure</h>
      {packagesData.map((pkg) => (
        <div className="package-card" key={pkg.id}>
          
          <img src={pkg.img} alt={pkg.title} className="package-img" />
          <div className="package-details">
            <span className="region">{pkg.region}</span>
            <h3>{pkg.title}</h3>
            <p className="duration">{pkg.duration}</p>
            <div className="icons">
              <span><button style={{backgroundColor:"gold"}} onClick={() => navigate("/HotelBooking")}> 🏨Hotel</button></span>  
                
              <span><button style={{backgroundColor:"gold"}}  onClick={() => navigate("/BusBooking")}>  🚌Bus</button></span>
              <br/>
              <span><button style={{backgroundColor:"gold"}} onClick={() => navigate("/Ship")}>⚓Cruises</button></span>
              <span><button style={{backgroundColor:"gold"}} onClick={() => navigate("/Aroplane")}>✈️Flight</button></span>
            </div>
            <div className="price">{pkg.price}</div>
            <Rating max={5}
              onRatingChange={(value) => console.log(`You rated ${pkg.title} ${value} stars`)}
            />
            
            <h3 className="note">{pkg.note}</h3>
            <button style={{backgroundColor:"orangered"}}  onClick={() => navigate("/Book")}>Book</button>
            
          </div>
        </div>
      
      ))}
      <br/><br/><br/><br/>
    </div>
    
  );
}
export default Packages;
