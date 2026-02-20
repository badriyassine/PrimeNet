import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className=" flex items-center justify-between max-w-7xl mx-auto px-4 py-2 md:py-3">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
