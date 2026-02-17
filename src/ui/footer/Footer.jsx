import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#27b4e0] via-[#1e90ff] to-[#8f5aff] text-white py-8 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/logo/logo.png"
            alt="PrimeNet Logo"
            className="h-10 w-10 rounded-full shadow-lg bg-white p-1"
          />
          <span className="font-extrabold text-2xl tracking-tight drop-shadow-lg">
            PrimeNet
          </span>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-6 text-base font-medium">
          <a href="#services" className="hover:text-[#ffe066] transition">
            Services
          </a>
          <a href="#applications" className="hover:text-[#ffe066] transition">
            Applications
          </a>
          <a href="#contact" className="hover:text-[#ffe066] transition">
            Contact
          </a>
        </nav>
        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#ffe066] transition"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.385.104-.79.16-1.208.16-.295 0-.582-.028-.862-.08.583 1.816 2.277 3.138 4.287 3.174A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#ffe066] transition"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#ffe066] transition"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.661 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163z" />
              <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} PrimeNet. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
