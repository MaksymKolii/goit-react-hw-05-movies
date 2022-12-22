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
    const getReviews = async () => {
      setIsLoading(true);
      try {
        Api.fetchReviews(movieId).then(setReview);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isFirstRender.current) {
      getReviews();
      isFirstRender.current = false;
      return;
    }
  }, [movieId]);

  console.log(reviews.length);

  return (
    <>
      {isLoading && <Loader />}
      {/* {reviews && <ReviewList reviews={reviews} />} */}

      {reviews.length === 0 && !isLoading ? (
        <p> We don't have any reviews</p>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </>
  );
};
