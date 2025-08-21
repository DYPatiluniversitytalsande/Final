import React from "react";
import "./Contact1.css"
import Navbar from "./Navbar";
import "./App.css";
     
function Contact1() {
  return (
    <div>
      <Navbar />
      <section className="contact-hero">
        
        <div className="contact-overlay">
          <div className="contact-buttons">
            <button className="btn-primary">Say Hello to New Destinations</button>
          </div>
          <h1>Ready to Explore?<br />Contact Us!</h1>
          <span>☑Trusted Partners</span>  
          <span>⏳24/7 Support </span>
          <span> 🏷Best Price Guarantee</span>
        
        </div>
        </section>
        <div className="contact-container">
      <div className="contact-wrapper">
            <form className="contact-form">
                <fieldset>
                    <label>Name*</label>
                    <input type="text" required/>
                </fieldset>
                <fieldset>
                    <label>Email*</label>
                    <input type="email" required/>
                </fieldset>
                <fieldset>
                    <label>Phone*</label>
                    <input type="tel" required/>
                </fieldset>
                <fieldset>
                    <label>Your message*</label>
                    <textarea rows="4" required/>
                </fieldset>
                
                <button type="submit">Submit</button>
                
            </form>
            <div className="contact-image">
                <img src="/public/IMG/11.png"/>
              
            </div>
        </div>
    </div>
  </div>
  );
}
export default Contact1;