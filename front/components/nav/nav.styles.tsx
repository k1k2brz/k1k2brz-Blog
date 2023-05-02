import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #f2f2f2;
`;

export const Logo = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  color: #222;
  & a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  height: 80px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  cursor: point;
  & a {
    color: #4e5250;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      color: #69a386;
    }
  }
`;

export const NavLink = styled.p`
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
`;
