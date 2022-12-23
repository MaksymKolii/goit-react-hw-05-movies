import { Link, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavItem>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </NavItem>
    </nav>
  );
};
