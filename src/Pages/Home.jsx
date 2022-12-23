import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';

import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);
  const location = useLocation();
  // console.log('useLocation -', location);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const array = await Api.fetchMostPopular();
        setMovies(array);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (isFirstRender.current) {
      getMovies();
      isFirstRender.current = false;
      return;
    }
  }, []);

  return (
    <main>
      <h2>Trending today</h2>

      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
