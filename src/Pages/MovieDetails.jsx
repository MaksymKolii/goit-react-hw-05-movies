// import { useState, useEffect, useRef } from 'react';
// import Api from '../Services/apiFetcher';
import { useFetchMovie } from '../hooks/useFetchMovie';

export const MovieDetails = () => {
  const movie = useFetchMovie();

  console.log(movie);

  return (
    // * <h2>Test</h2> Рендерится !! а movie нет
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
          width="400"
        ></img>
        {/* <p>{movie.genres}</p> */}
        <p>{movie.overview}</p>
        <p>{movie.tagline}</p>
        <p>{movie.vote_average}</p>
      </>
    )
  );
};
