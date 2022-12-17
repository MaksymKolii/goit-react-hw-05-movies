// import { useState, useEffect, useRef } from 'react';
// import Api from '../Services/apiFetcher';
import { Link, Outlet } from 'react-router-dom';
import { useFetchMovie } from '../hooks/useFetchMovie';

export const MovieDetails = () => {
  const movie = useFetchMovie();

  // console.log(movie);

  return (
    movie && (
      <>
        <h2>{movie.title}</h2>
        <img
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : 'https://louisville.edu/history/images/noimage.jpg/image'
          }
          alt={movie.title}
          width="300"
        ></img>
        <h3>Genres</h3>
        <p>
          {movie.genres.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </p>

        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Tagline</h3>
        <p>{movie.tagline}</p>
        <p>User score: {movie.vote_average}</p>
        <h4>Additional information</h4>
        <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
        <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        <Outlet />
      </>
    )
  );
};
