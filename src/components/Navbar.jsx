import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Organização</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">Sobre Nós</Link></li>
          <li><Link to="/projects" className="hover:underline">Projetos</Link></li>
          <li><Link to="/donate" className="hover:underline">Doar</Link></li>
          <li><Link to="/contact" className="hover:underline">Contactos</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;