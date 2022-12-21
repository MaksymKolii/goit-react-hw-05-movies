import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';
import { ReviewList } from 'components/Review/ReviewList';

export const Reviews = () => {
  const [reviews, setReview] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    try {
      Api.fetchReviews(movieId).then(setReview);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  console.log(reviews);

  return <>{reviews && <ReviewList reviews={reviews} />}</>;
};
