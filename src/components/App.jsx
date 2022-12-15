import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Movies } from '../Pages/Movies';
import { Layout } from './Layout/Layout';
import { MovieDetails } from '../Pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            {/* <Route path="" element={<Cast />}>
              Cast
            </Route> */}
            {/* <Route path="" element={<Reviews />}>
              Reviews
            </Route> */}
          </Route>
        </Route>
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </>
  );
};
