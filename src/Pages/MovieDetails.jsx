import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';
import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Genres } from 'components/Genres/Genres';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

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

  const normalizeVotes = data => Math.round(data * 10) + '%';
  const normalizeYear = data => data.slice(0, 4);
  return (
    movie && (
      <>
        <button
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </button>
        {isLoading && <Loader />}
        <h2>
          {movie.title}
          <span>(</span>
          <span>{normalizeYear(movie.release_date)}</span>
          <span>)</span>
        </h2>
        <img
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : 'https://louisville.edu/history/images/noimage.jpg/image'
          }
          alt={movie.title}
          width="300"
        ></img>

        <Genres genreArray={movie.genres} />

        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Tagline</h3>
        <p>{movie.tagline}</p>
        <p>User score: {normalizeVotes(movie.vote_average)}</p>
        <h4>Additional information</h4>
        <Link to={`/movies/${movie.id}/cast`} state={location.state}>
          Cast
        </Link>
        <Link to={`/movies/${movie.id}/reviews`} state={location.state}>
          Reviews
        </Link>
        <Outlet />
      </>
    )
  );
};
