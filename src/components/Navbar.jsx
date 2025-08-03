import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure the logo is here

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-gray-900' : 'bg-transparent text-white'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TruCare Logo" className="h-10 w-auto" />
          <span className="text-xl font-semibold">TruCare Medical</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/geotek" className="hover:text-blue-600 transition">Geotek</Link>
          <Link to="/rz" className="hover:text-blue-600 transition">RZ</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
