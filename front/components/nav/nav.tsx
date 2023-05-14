import React from "react";
import { Logo, Nav, NavItem, NavMenu } from "./nav.styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link href="/">Garbage Collector</Link>
      </Logo>
      <NavMenu>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        {localStorage.getItem("Token") ? (
          <button>
            LogOut
          </button>
        ) : (
          <>
            <NavItem>
              <Link href="login">LogIn</Link>
            </NavItem>
            <NavItem>
              <Link href="signup">Sign-Up</Link>
            </NavItem>
          </>
        )}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
