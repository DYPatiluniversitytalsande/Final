import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
