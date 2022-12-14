import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';

import { Routes, Route, NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if (movies === null) {
    //   return;
    // }
    async function getMovies() {
      try {
        const array = await Api.fetchMostPopular();

        console.log(array);

        setMovies(array);
        // setMovies(prevMovies => [...prevMovies, ...array]);

        // setMovies(prevMovies => [...prevMovies, ...imagesMapper(array.hits)]);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  // array.map(({ title, id }) => {
  //   return console.log(title, id);

  // });

  return (
    <main>
      <h1>Trending today</h1>

      <ul>
        {movies.map(({ id, title }) => {
          return <NavLink key={id}>{title}</NavLink>;
        })}
      </ul>
    </main>
  );
};
