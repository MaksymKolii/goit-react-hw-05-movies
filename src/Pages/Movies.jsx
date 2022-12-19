import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Api from '../Services/apiFetcher';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  const isFirstRender = useRef(true);
  const query = searchParams.get('moviename');

  useEffect(() => {
    if (!query) {
      // alert('enter something');
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
    if (isFirstRender.current) {
      console.log(isFirstRender);
      isFirstRender.current = false;
      return;
    }
  }, [query]);

  console.log(movies);

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    if (query && query.trim() === '') {
      return alert('Put something in input');
    }
    setSearchParams({ moviename: form.elements.something.value });
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
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </main>
  );
};
