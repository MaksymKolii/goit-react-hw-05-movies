import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';
import { MovieDetailsList } from '../components/MoviesDetailsList/MoviesDetailsList';
import { Loader } from 'components/Loader/Loader';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);
      try {
        const res = await Api.fetchMovieById(movieId);

        setMovie(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isFirstRender.current) {
      getMovie();
      isFirstRender.current = false;
      return;
    }
  }, [movieId]);

  return (
    movie && (
      <>
        <ButtonGoBack />

        {isLoading && <Loader />}
        {movie && <MovieDetailsList movieInfo={movie} />}
      </>
    )
  );
};
