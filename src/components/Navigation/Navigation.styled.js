import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    font-size: 24px;

    &.active {
      color: tomato;
    }
  }
`;

export const Nav = styled.nav`
  height: 80px;
  padding: 0 20px;
  background-color: #304040;

  @media (min-width: 768px) {
    width: 650px;
    padding: 0 40px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    width: 1020px;
    padding: 0 70px;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;
