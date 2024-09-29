import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './api'; // Adjust the path as necessary
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch reviews. Please check your internet connection.");
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (reviews.length === 0) {
    return <div className={styles.noReviews}>No reviews available for this movie.</div>;
  }

  return (
    <ul className={styles.reviewsList}>
      {reviews.map(review => (
        <li key={review.id} className={styles.reviewItem}>
          <h3 className={styles.reviewAuthor}>Author: {review.author}</h3>
          <p className={styles.reviewContent}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;