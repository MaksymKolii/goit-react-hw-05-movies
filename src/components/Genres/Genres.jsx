import PropTypes from 'prop-types';
export const Genres = ({ genreArray }) => {
  return (
    <ul>
      {genreArray.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
Genres.propTypes = {
  genreArray: PropTypes.array.isRequired,
};
