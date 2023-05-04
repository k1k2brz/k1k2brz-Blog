import React from 'react'
import Navbar from './nav/nav';

interface typing {
    children: React.ReactNode;
}

const AppLayout = ({ children }: typing) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default AppLayout;