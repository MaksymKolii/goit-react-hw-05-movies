import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, Card } from './MoviesCardList.styled';
export const MoviesCardList = ({ movies }) => {
  return (
    <List>
      {movies &&
        movies.map(({ release_date, title, poster_path, id }) => (
          <Card key={id}>
            <MovieCard
              id={id}
              release={release_date}
              title={title}
              poster={poster_path}
            />
          </Card>
        ))}
    </List>
  );
};
