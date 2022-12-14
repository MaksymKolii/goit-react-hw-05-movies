import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Movies } from '../Pages/Movies';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        {/* </Route> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
