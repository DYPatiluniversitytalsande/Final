import React, { useState } from "react";
import "./BusBooking.css";
import { FaBus } from "react-icons/fa";


const BusBooking = () => {
  const [seats, setSeats] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      seatNumber: `S${i + 1}`,
      isBooked: false
    }))
  );
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 15000;

  const toggleSeat = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  return (
    <div className="bus-booking">
      <h2><div style={{ fontSize: "50px", color: "blue", textAlign: "center" }}>
      <FaBus /> 
    </div> Bus Booking</h2>
      <p>Select your seats below:</p>

      <div className="seats-grid">
        {seats.map((seat) => (
          <button
            key={seat.seatNumber}
            className={`seat ${
              seat.isBooked
                ? "booked"
                : selectedSeats.includes(seat.seatNumber)
                ? "selected"
                : ""
            }`}
            disabled={seat.isBooked}
            onClick={() => toggleSeat(seat.seatNumber)}
          >
            {seat.seatNumber}
          </button>
        ))}
      </div>

      <div className="summary">
        <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <p>Total Price: ₹{selectedSeats.length * seatPrice}</p>
        <button
          className="book-btn"
          onClick={() => alert("Booking Confirmed!")}
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BusBooking;
