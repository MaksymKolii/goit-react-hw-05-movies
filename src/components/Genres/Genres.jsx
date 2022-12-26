import PropTypes from 'prop-types';
import { TitleH3, Span } from './Genres.styled';

export const Genres = ({ genreArray }) => {
  const commaGenres = data => {
    if (data === null) return;
    return data.map(gen => gen.name).join(', ');
  };
  return (
    <>
      <TitleH3>Genres: {<Span>{`${commaGenres(genreArray)}`}</Span>}</TitleH3>
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
