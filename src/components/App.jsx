

import { Routes, Route } from "react-router-dom";
import {Home} from "./Pages/Home";
import {Movies} from './Pages/Movies'
import { NotFound } from "./Pages/NotFound";
import { Container, Header, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header>
      <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movie">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      {/* <Movies/> */}
    </Container>
  );
};