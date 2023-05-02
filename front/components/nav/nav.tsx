import React from "react";
import { Logo, Nav, NavItem, NavMenu } from "./nav.styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link href="/">Blog</Link>
      </Logo>
      <NavMenu>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="login">LogIn</Link>
        </NavItem>
        <NavItem>
          <Link href="signup">Sign-Up</Link>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
