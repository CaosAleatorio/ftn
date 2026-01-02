import React from 'react';
import { Link } from 'react-router-dom';

function NavbarMobile({ isOpen }) {
  return (
    isOpen && (
      <ul className="hidden md:block bg-blue-600 text-white space-y-2 p-4">
        <li><Link to="/" className="block hover:underline">Home</Link></li>
        <li><Link to="/about" className="block hover:underline">Sobre Nós</Link></li>
        <li><Link to="/projects" className="block hover:underline">Projetos</Link></li>
        <li><Link to="/donate" className="block hover:underline">Doar</Link></li>
        <li><Link to="/contact" className="block hover:underline">Contactos</Link></li>
      </ul>
    )
  );
}

export default NavbarMobile;