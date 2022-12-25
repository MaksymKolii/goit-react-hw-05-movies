import { MovieCard } from 'components/MovieCard/MovieCard';

export const MoviesCardList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ release_date, title, poster_path, id }) => (
          <li key={id}>
            <MovieCard
              id={id}
              release={release_date}
              title={title}
              poster={poster_path}
            />
          </li>
        ))}
    </ul>
  );
};
