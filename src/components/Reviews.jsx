import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </ul>
  );
};

export default Reviews;