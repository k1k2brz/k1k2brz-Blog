import React from 'react'
import Navbar from './nav/nav';
import Footer from './footer/footer';

interface typing {
    children: React.ReactNode;
}

const AppLayout = ({ children }: typing) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default AppLayout;