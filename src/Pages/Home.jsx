import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';

import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      Api.fetchMostPopular().then(setMovies);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      <ul>
        {movies &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <NavLink>{title}</NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};
