import React from "react";
import "./Ab.css";

export default function AdventureAura() {
  return (
    
    <div className="about-container">
      <h1 className="title">Welcome to <span>Adventure Aura</span> — your gateway to unforgettable experiences!</h1>
        <div className="container">
      {/* Left Side - Images */}
      <div className="image-grid">
        <img src="/IMG/6.jpeg" alt="Travel 1" />
        <img src="/IMG/7.jpeg" alt="Travel 2" />
        <img src="/IMG/8.jpeg" alt="Travel 3" />
        <img src="/IMG/4.jpeg" alt="Travel 4" />
      </div>

      <div className="about-text">
        <h1>We Make Travel Accessible and Enjoyable</h1>
        <p>
          Our mission is to make travel accessible and enjoyable for all.
          That's why we pride ourselves on being budget-friendly, without
          compromising on quality or experience. Our partnerships with trusted
          local guides and accommodations ensure that you receive the best value
          wherever you go.
        </p>
      </div>
    </div>
      <section className="section">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, Adventure Aura was born from a passion for exploration and a love for the great outdoors.
          From serene treks in the Himalayas to thrilling scuba dives in the Andaman, we curate adventures that
          connect you with nature, culture, and yourself.
        </p>
      </section>

      <section className="section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>1. Handpicked adventure packages for every skill level</li>
          <li>2. Experienced guides and certified instructors</li>
          <li>3. Safety-first approach with top-quality gear</li>
          <li>4. Seamless booking and personalized itineraries</li>
          <li>5. 24/7 support throughout your journey</li>
        </ul>
      </section>

      <section className="section">
        <h2>Our Vision</h2>
        <p>
          To inspire and enable people to step out of their comfort zones, explore the unknown,
          and create stories worth telling — making Adventure Aura the most trusted name in travel
          and outdoor experiences across India and beyond.
        </p>
      </section>
     
    </div>
  );
}
