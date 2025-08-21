import React, { useState } from "react";
import "./Book.css";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert with submitted data
    alert(
      `Booking Details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Destination: ${formData.destination}\n` +
      `Date: ${formData.date}\n` +
      `Message: ${formData.message}`
    );

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      date: "",
      message: ""
    });
  };

  return (
    <div className="book-bg">
      <div className="book-container">
        <h2>Book Your Trip</h2>
        <form onSubmit={handleSubmit} className="book-form">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Enter Destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Book;
