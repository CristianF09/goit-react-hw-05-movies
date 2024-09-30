import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from './api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId); 
        setReviews(movieReviews.results || []); 
      } catch (err) {
        setError('Failed to fetch reviews. Please try again later.');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <p>Loading reviews...</p>; 
  }

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