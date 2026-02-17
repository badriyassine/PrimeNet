import React, { useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Mobile", link: "/mobile" },
  { name: "Wifi", link: "/wifi" },
  { name: "Plans & Pricing", link: "/plans-pricing" },
  { name: "Contact", link: "/contact" },
  { name: "Support", link: "/support" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="hidden md:flex space-x-8 font-medium pr-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-[#073651] hover:text-[#27b4e0] transition-colors duration-200 px-2 py-1 rounded-lg focus:outline-none focus:bg-blue-50"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile/tablet nav */}
      {menuOpen && (
        <div className="absolute right-0 top-12 z-50 w-48 bg-white shadow-lg rounded-lg py-4 animate-fade flex flex-col items-start md:hidden border border-blue-100">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-full px-6 py-2 text-[#073651] hover:text-blue-500 hover:bg-blue-50 transition-colors duration-200 rounded-lg focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
