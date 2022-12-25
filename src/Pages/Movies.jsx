import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import Api from '../Services/apiFetcher';
import { SearchForm } from 'components/Form/Form';
import { Button } from 'components/ButtonLoadMore/Button';
import { Loader } from 'components/Loader/Loader';
import { MoviesCardList } from '../components/MoviesCardList/MoviesCardList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryP = searchParams.get('moviename');

  const [pageP, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!queryP) {
      return;
    }
    async function getMovies() {
      setIsloading(true);
      try {
        const array = await Api.fetchMoviesByName(queryP, pageP);

        if (!array.total_results) {
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (pageP === array.total_pages && pageP > 1) {
          alert('Last Page');
        }
        setShowLoadMore(pageP < array.total_pages);

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
  }, [pageP, queryP]);

  //*
  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const formSubmit = query => {
    if (query !== queryP) {
      setSearchParams(query);
      setPage(1);
      setMovies([]);
    }
    if (query === queryP) {
      return alert('they are equal');
    }
  };

  return (
    <>
      <SearchForm formFunc={formSubmit} />
      {queryP !== null && <MoviesCardList movies={movies} />}

      {isLoading ? (
        <Loader />
      ) : (
        showLoadMore && <Button onClick={nextPage} loading={isLoading} />
      )}
    </>
  );
};
