import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Mobile", link: "/mobile" },
  { name: "Wifi", link: "/wifi" },
  { name: "Plans & Pricing", link: "/plans-pricing" },
  { name: "FAQ", link: "/faq" },
  { name: "Support", link: "/support" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative">
      {/* Hamburger for mobile/tablet */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Open menu"
          className="text-[#073651] hover:text-blue-500 focus:outline-none p-2"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex space-x-4 font-medium pr-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={
              `px-2 py-1 rounded-lg focus:outline-none focus:bg-[#27b4e0] transition-colors duration-200 font-medium ` +
              (location.pathname === item.link
                ? "text-white bg-[#27b4e0]"
                : "text-[#073651] hover:text-[#27b4e0]")
            }
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile/tablet nav */}
      {menuOpen && (
        <div className="absolute right-0 top-12 z-50 w-48 bg-white shadow-lg rounded-lg py-4 animate-fade flex flex-col items-start md:hidden border border-blue-100">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={
                `w-full px-6 py-2 rounded-lg focus:outline-none transition-colors duration-200 ` +
                (location.pathname === item.link
                  ? "text-[#27b4e0] bg-blue-50"
                  : "text-[#073651] hover:text-blue-500 hover:bg-blue-50")
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
