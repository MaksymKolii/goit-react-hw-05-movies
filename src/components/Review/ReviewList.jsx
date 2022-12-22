import PropTypes from 'prop-types';
import {
  ReviewsUl,
  ReviewsLi,
  ReviewsH4,
  ReviewsSpan,
  ReviewsP,
  ReviewsH5,
} from './Review.styled';

export const ReviewList = ({ reviews }) => {
  const timeReduser = data => {
    const year = data.slice(0, 10);
    const time = data.slice(11, 19);
    return year + ' ' + time;
  };
  return (
    <ReviewsUl>
      {reviews &&
        reviews.map(({ author, content, updated_at, id }) => {
          return (
            <ReviewsLi key={id}>
              <ReviewsH4>
                Author: <ReviewsSpan>{author}</ReviewsSpan>
              </ReviewsH4>
              <ReviewsP>{content}</ReviewsP>
              <ReviewsH5>
                Last update:{' '}
                <ReviewsSpan>{timeReduser(updated_at)}</ReviewsSpan>
              </ReviewsH5>
            </ReviewsLi>
          );
        })}
    </ReviewsUl>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
