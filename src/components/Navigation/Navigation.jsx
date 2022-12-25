import { Link, NavList, Nav, NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavWrapper>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </NavList>
      </NavWrapper>
    </Nav>
  );
};
