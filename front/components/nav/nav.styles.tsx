import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #f2f2f2;
  @media screen and (max-width: 768px) {
    height: 60px;
    font-size: .8rem;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
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
  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 0 0.4rem;
    & a {
      font-weight: 500;
    }
  }
  
`;
