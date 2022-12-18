import { useState, useEffect } from 'react';
// import { useFetchMovie } from '../hooks/useFetchMovie';
import { Link } from 'react-router-dom';
import Api from '../Services/apiFetcher';

export const Movies = () => {
  const [movies, setMovies] = useState('');
  const query = 'batman';

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await Api.fetchMoviesByName(query);
        setMovies(res);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  console.log(movies);

  return (
    <main>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
