import PropTypes from 'prop-types';

export const Genres = ({ genreArray }) => {
  const commaGenres = data => {
    if (data === null) return;
    return data.map(gen => gen.name).join(', ');
  };
  return (
    <>
      <h3>Genres</h3>
      <p>{`${commaGenres(genreArray)}`}</p>
    </>

    // <ul>
    //   {genreArray.map(({ id, name }) => (
    //     <li key={id}>{name}</li>
    //   ))}
    // </ul>
  );
};
Genres.propTypes = {
  genreArray: PropTypes.array.isRequired,
};
