import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Movies } from '../Pages/Movies';
import { Layout } from './Layout/Layout';
import { MovieDetails } from '../Pages/MovieDetails';
import { Cast } from '../Pages/Cast';
import { Reviews } from '../Pages/Reviews';
import { GlobalStyles } from '../utils/GlobalStyles';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
