import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-green-600 text-white fixed w-full top-0 shadow-md z-20">
        <div className="container mx-auto flex items-center justify-between px-5 py-4">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <img
                src="/img/logo.jpg"
                alt="Logo"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <span className="text-lg font-bold">Forum Terra Nampula</span>
          </div>

          {/* BOTÃO MOBILE — SÓ MOBILE */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>

          {/* MENU DESKTOP — SÓ DESKTOP */}
          <div className="hidden lg:block">
            <ul className="flex gap-6 font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Sobre Nós</Link></li>
              <li><Link to="/projects">Projetos</Link></li>
              <li><Link to="/donate">Doar</Link></li>
              <li><Link to="/contact">Contactos</Link></li>
              <li><a href="/jobs">Vagas</a></li>
              <li><a href="/reports">Denúncias</a></li>
              <li><a href="/volunteers">Voluntários</a></li>
            </ul>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENU LATERAL MOBILE */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-green-700 text-white z-40
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-green-500">
          <span className="font-bold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>

        <ul className="p-4 space-y-4 font-medium">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>Sobre Nós</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projetos</Link></li>
          <li><Link to="/donate" onClick={() => setOpen(false)}>Doar</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contactos</Link></li>
          <li><a href="/jobs">Vagas</a></li>
          <li><a href="/reports">Denúncias</a></li>
          <li><a href="/volunteers">Voluntários</a></li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
