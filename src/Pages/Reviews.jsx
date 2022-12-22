import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';
import { ReviewList } from 'components/Review/ReviewList';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getReviews = async () => {
      try {
        Api.fetchReviews(movieId).then(setReview);
      } catch (error) {
        console.log(error);
      }
    };

    if (isFirstRender.current) {
      getReviews();
      isFirstRender.current = false;
      return;
    }

    setIsLoading(false);
  }, [movieId]);

  // console.log(reviews);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length === 0 && !isLoading ? (
        <p> We don't have any reviews</p>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </>
  );
};
