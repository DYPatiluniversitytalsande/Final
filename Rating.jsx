// Rating.js
import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ max = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0); // Selected rating
  const [hover, setHover] = useState(0);   // Hover effect

  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value); // send rating back to parent
    }
  };

  return (
    <div className="rating">
      {[...Array(max)].map((_, i) => {
        const value = i + 1;
        return (
          <span
            key={i}
            className={value <= (hover || rating) ? "star filled" : "star"}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
