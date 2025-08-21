import React from "react";
import "./Trip.css";
import { useNavigate } from "react-router-dom";

const Trip = () => {
  const navigate = useNavigate();
  const activities = [
    {
      title: "Mountain Hiking",
      img: "/IMG/img1.png",
      desc: "Explore scenic trails and enjoy breathtaking views from the peaks."
    },
    {
      title: "Beach Relaxation",
      img: "/IMG/15.png",
      desc: "Unwind on golden sands and listen to the soothing ocean waves."
    },
    {
      title: "Cultural Tours",
      img: "/IMG/16.png",
      desc: "Dive into the rich heritage and traditions of the local community."
    },
    {
      title: "River Cruises",
      img: "/IMG/17.png",
      desc: "Sail along peaceful rivers and witness stunning landscapes."
    },
    {
      title: "Local Shopping",
      img: "/IMG/18.png",
      desc: "Discover unique handmade crafts and souvenirs from local artisans."
    },
    {
      title: "Food & Wine Tasting",
      img: "/IMG/19.png",
      desc: "Taste the finest local dishes paired with exquisite wines."
    },
      {
    title: "Wildlife Safari",
    img: "/IMG/27.png",
    desc: "Get close to nature and witness exotic animals in their natural habitat."
  },
  {
    title: "Scuba Diving",
    img: "/IMG/21.png",
    desc: "Dive into crystal-clear waters and explore vibrant coral reefs."
  },
  {
    title: "Desert Camping",
    img: "/IMG/22.png",
    desc: "Experience the magic of the desert under a star-filled sky."
  },
  {
    title: "City Nightlife Tour",
    img: "/IMG/23.png",
    desc: "Discover the vibrant nightlife, from music to street food."
  },
  {
    title: "Hot Air Balloon Ride",
    img: "/IMG/24.png",
    desc: "Enjoy breathtaking aerial views from a colorful hot air balloon."
  },
  {
    title: "Historical Monuments Tour",
    img: "/IMG/26.png",
    desc: "Step back in time while exploring ancient architecture and stories."
  }
];

  return (
    
    <div className="activities-container">
      <h2>Activities You’ll Enjoy</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <img src={activity.img} alt={activity.title} />
            <h3>{activity.title}</h3>
            <p>{activity.desc}</p>
          </div>
        ))}
      </div>
      <button className="plan-btn" onClick={() => navigate("/Book")}>Plan Your Trip</button>
    </div>
  );
};

export default Trip;
