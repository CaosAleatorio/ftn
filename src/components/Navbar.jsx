import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarMobile from './NavbarMobile';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-5 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Organization Name */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12">
            <img
              src="/img/logo.jpg"
              alt="Logo"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <span className="text-lg font-bold">Forum Terra Nampula</span>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">Sobre Nós</Link></li>
          <li><Link to="/projects" className="hover:underline">Projetos</Link></li>
          <li><Link to="/donate" className="hover:underline">Doar</Link></li>
          <li><Link to="/contact" className="hover:underline">Contactos</Link></li>
        </ul>

        {/* Hamburger menu for smaller screens */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown menu for smaller screens */}
      <NavbarMobile isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default Navbar;