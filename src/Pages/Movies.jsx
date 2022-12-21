import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import Api from '../Services/apiFetcher';
import { SearchForm } from 'components/Form/Form';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');
  const location = useLocation();

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }

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

  // console.log(movies);

  const formSubmit = data => {
    setSearchParams(data);
    setMovies([]);
  };

  // const handleSubmit = ev => {
  //   ev.preventDefault();
  //   const form = ev.target;
  //   const check = form.elements.something.value;

  //   if (check.trim() === '') {
  //     return alert('nothing to search');
  //   }
  //   setSearchParams({ moviename: form.elements.something.value });
  //   form.reset();
  // };

  return (
    <main>
      <SearchForm formFunc={formSubmit} />

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
