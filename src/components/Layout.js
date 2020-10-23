import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="background-hero-page"></div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;