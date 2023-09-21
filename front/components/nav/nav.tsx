import React, { useEffect, useState } from 'react';
import { Logo, Nav, NavItem, NavMenu } from './nav.styles';
import Link from 'next/link';

const Navbar = () => {
  const [token, setToken] = useState(false);

  const onLogout = () => {
    localStorage.removeItem('Token');
  };

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      setToken(true);
    } else {
      setToken(false);
    }
    console.log(token)
  }, [token]);

  return (
    <Nav>
      <Logo>
        <Link href="/">Garbage Collector</Link>
      </Logo>
      <NavMenu>
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        {token ? (
          <NavItem>
            <button onClick={onLogout}>LogOut</button>
          </NavItem>
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
