import React, { useState } from "react";
import "./HotelBooking.css";

const HotelBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "Standard",
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="hotel-booking">
      <h2>🏨 Hotel Booking</h2>
      <p>Plan your stay with comfort and ease.</p>

      {isBooked ? (
        <div className="success-message">
          ✅ Booking Confirmed! <br />
          Enjoy your stay, {formData.name}.
        </div>
      ) : (
        <form onSubmit={handleBooking} className="booking-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Check-in Date:</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />

          <label>Check-out Date:</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />

          <label>Number of Guests:</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <label>Room Type:</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="Standard">Standard Room</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Suite</option>
          </select>

          <button type="submit" className="book-btn">
            Confirm Booking
          </button>
        </form>
      )}
    </div>
  );
};

export default HotelBooking;
