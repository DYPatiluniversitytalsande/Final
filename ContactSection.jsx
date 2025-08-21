import React from "react";
import "./ContactSection.css";
// replace with your image path

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-hero">

        <h5>SAY HELLO TO NEW DESTINATIONS</h5>
        <h2>Ready to Explore? <br /> Contact Us!</h2>
        <div className="contact-hero-info">
          <span>Trusted Partner</span>
          <span>24/7 Support</span>
          <span>Best Price Guarantee</span>
        </div>
      </div>

      <div className="contact-container">
        <form className="contact-form">
          <label>Name *</label>
          <input type="text" placeholder="Your Name" required />
          <label>Email *</label>
          <input type="email" placeholder="Your Email" required />
          <label>Phone *</label>
          <input type="text" placeholder="Your Phone" required />
          <label>Your Message *</label>
          <textarea placeholder="Type your message..." required></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="contact-image">
          <img src="/IMG/img1.png" alt="Explore" />
          <div className="contact-image-text">Explore</div>
        </div>
      </div>

      <div className="contact-cards">
        <div className="card">
          <h4>Address</h4>
          <p>455 West Orchard Street Kings Mountain, NC 28087</p>
        </div>
        <div className="card">
          <h4>Phone</h4>
          <p>+088 (246) 642-27-10</p>
        </div>
        <div className="card">
          <h4>Email</h4>
          <p>info@example.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
