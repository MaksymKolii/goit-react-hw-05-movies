import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import Api from '../Services/apiFetcher';
import { SearchForm } from 'components/Form/Form';
import { Button } from 'components/ButtonLoadMore/Button';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');
  // const page = searchParams.get('page');

  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      setIsloading(true);
      try {
        const array = await Api.fetchMoviesByName(query, page);

        if (!array.total_results) {
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (page === array.total_pages) {
          alert('Last Page');
        }
        setShowLoadMore(page < array.total_pages);

        console.log(array);
        console.log(array.total_pages);

        setMovies(prevMovies => [...prevMovies, ...array.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    getMovies();
  }, [page, query]);

  //*
  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const formSubmit = data => {
    // if (data !== query) {
    //   setSearchParams(data);
    //   setPage(1);
    //   setMovies([]);
    // }

    if (data === query) {
      return setSearchParams(data);
    }
    setSearchParams(data);
    setPage(1);
    setMovies([]);
  };

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
      {isLoading ? (
        <Loader />
      ) : (
        showLoadMore && <Button onClick={nextPage} loading={isLoading} />
      )}
    </main>
  );
};
