import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import Api from '../Services/apiFetcher';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const isFirstRender = useRef(true);
  const query = searchParams.get('moviename');
  const location = useLocation();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (query === null || query === '') {
      return;
    }
    // if (searchParams === null || searchParams === '') {
    //   return;
    // }

    async function getMovies() {
      try {
        const res = await Api.fetchMoviesByName(query);
        setMovies(res);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query, searchParams]);

  console.log(movies);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;

    setSearchParams({ moviename: form.elements.something.value.trim() });
    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="something" />
        <button>Search</button>
      </form>
      <ul>
        {movies &&
          query !== null &&
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
