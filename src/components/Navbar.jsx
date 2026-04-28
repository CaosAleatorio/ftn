import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR — CONTACTOS */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-700 to-slate-800 text-white text-sm py-3 fixed w-full top-0 z-30">
        <div className="container mx-auto px-5 flex items-center justify-between">
          {/* LEFT: Contactos */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4" />
              <a href="mailto:coortferra@live.com" className="hover:text-green-400">coortferra@live.com</a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4" />
              <a href="tel:+258865090606" className="hover:text-green-400">+258 86 509 0606</a>
            </div>
          </div>

          {/* RIGHT: Redes Sociais */}
          <div className="flex items-center gap-4">
            <a href="#" title="Facebook" className="hover:text-green-400 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" title="Twitter" className="hover:text-green-400 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 002.856-10.02 10.002 10.002 0 01-2.825.797 4.996 4.996 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.992 4.992 0 00-8.506 4.55A14.148 14.148 0 011.392 6.059 4.993 4.993 0 003.258 16.45a4.981 4.981 0 01-2.261-.616v.06a4.993 4.993 0 003.997 4.888 4.996 4.996 0 002.263.084 4.998 4.998 0 004.666 3.463A10.025 10.025 0 010 14.966a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.001 10.001 0 0023.953 4.57z"/>
              </svg>
            </a>
            <a href="#" title="Instagram" className="hover:text-green-400 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" title="Pinterest" className="hover:text-green-400 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12c0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4-4 1.791-4 4z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white text-gray-800 fixed w-full top-12 lg:top-10 shadow-md z-20 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-5 py-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 lg:w-12 lg:h-12">
              <img
                src="/img/logo.jpg"
                alt="Logo Fórum Terra Nampula"
                className="rounded-full object-cover w-full h-full shadow-sm"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm lg:text-lg font-bold text-gray-900">Fórum Terra</span>
              <span className="text-xs lg:text-sm text-green-600 font-semibold">Nampula</span>
            </div>
          </Link>

          {/* BOTÃO MOBILE — SÓ MOBILE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          </button>

          {/* MENU DESKTOP — SÓ DESKTOP */}
          <div className="hidden lg:block">
            <ul className="flex gap-8 font-medium text-sm">
              <li><Link to="/" className="text-gray-700 hover:text-green-600 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-green-600 transition">FT Nampula</Link></li>
              <li>
                <button className="text-gray-700 hover:text-green-600 transition">Programas</button>
              </li>
              <li><Link to="/projects" className="text-gray-700 hover:text-green-600 transition">Projetos</Link></li>
              <li>
                <button className="text-gray-700 hover:text-green-600 transition">Equipe</button>
              </li>
              <li>
                <button className="text-gray-700 hover:text-green-600 transition">Boletim</button>
              </li>
              <li><Link to="/contact" className="text-gray-700 hover:text-green-600 transition">Contactos</Link></li>
            </ul>
          </div>

          {/* CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-gray-700 hover:text-green-600 transition p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/donate" className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition shadow-md">
              DOAR
            </Link>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENU LATERAL MOBILE */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white text-gray-800 z-40 lg:hidden
        transform transition-transform duration-300 shadow-xl
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-green-600 text-white">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)} className="p-1">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <ul className="p-5 space-y-3 font-medium">
          <li><Link to="/" onClick={() => setOpen(false)} className="text-gray-700 hover:text-green-600 block py-2">Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)} className="text-gray-700 hover:text-green-600 block py-2">FT Nampula</Link></li>
          <li><button className="text-gray-700 hover:text-green-600 block py-2 w-full text-left">Programas</button></li>
          <li><Link to="/projects" onClick={() => setOpen(false)} className="text-gray-700 hover:text-green-600 block py-2">Projetos</Link></li>
          <li><button className="text-gray-700 hover:text-green-600 block py-2 w-full text-left">Equipe</button></li>
          <li><button className="text-gray-700 hover:text-green-600 block py-2 w-full text-left">Boletim Informativo</button></li>
          <li><Link to="/contact" onClick={() => setOpen(false)} className="text-gray-700 hover:text-green-600 block py-2">Contactos</Link></li>

          {/* Divisor */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Links adicionais */}
          <li><Link to="/jobs" onClick={() => setOpen(false)} className="text-gray-700 hover:text-green-600 block py-2">Vagas</Link></li>
          <li><Link to="/volunteers" onClick={() => setOpen(false)} className="text-gray-700 hover:text-green-600 block py-2">Voluntários</Link></li>
          <li><Link to="/donate" onClick={() => setOpen(false)} className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold block text-center mt-6 hover:bg-green-600">DOAR</Link></li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
