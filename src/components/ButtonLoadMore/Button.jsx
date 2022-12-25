import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick, loading }) => {
  return (
    <LoadMoreButton onClick={onClick} type="button" disabled={loading}>
      Load more
    </LoadMoreButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
