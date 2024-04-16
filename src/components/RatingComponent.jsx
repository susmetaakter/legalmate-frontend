import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai"

const RatingComponent = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
    onRatingChange(clickedRating);
  };

  return (
    <div className='flex'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: 'pointer',
            fontSize: '24px', // Adjust the size as needed
            color: star <= rating ? '#ffb33e' : 'lightgray', // Use your star icon colors
          }}
        >
          <AiFillStar/>
        </span>
      ))}
    </div>
  );
};

export default RatingComponent;
