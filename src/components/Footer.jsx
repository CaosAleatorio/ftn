import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* MAIN FOOTER CONTENT */}
      <div className="section-padding border-b border-gray-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* COLUNA 1: SOBRE */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <img
                    src="/img/logo.jpg"
                    alt="Logo FTN"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Fórum Terra</h3>
                  <p className="text-xs text-green-400">Nampula</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Organização Nacional da Sociedade Civil dedicada à terra, florestas, vida selvagem e ambiente.
              </p>
              <div className="flex gap-4">
                <a href="#" title="Facebook" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" title="Twitter" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-10.02 10.002 10.002 0 01-2.825.797 4.996 4.996 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.992 4.992 0 00-8.506 4.55A14.148 14.148 0 011.392 6.059 4.993 4.993 0 003.258 16.45a4.981 4.981 0 01-2.261-.616v.06a4.993 4.993 0 003.997 4.888 4.996 4.996 0 002.263.084 4.998 4.998 0 004.666 3.463A10.025 10.025 0 010 14.966a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A10.001 10.001 0 0023.953 4.57z"/>
                  </svg>
                </a>
                <a href="#" title="Instagram" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" title="Pinterest" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12c0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4-4 1.791-4 4z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* COLUNA 2: LINKS RÁPIDOS */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-400 hover:text-green-400 transition">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition">Sobre Nós</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-green-400 transition">Projetos</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-green-400 transition">Eventos</Link></li>
                <li><Link to="/volunteer" className="text-gray-400 hover:text-green-400 transition">Voluntários</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Vagas de Emprego</a></li>
              </ul>
            </div>

            {/* COLUNA 3: RECURSOS */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Boletim Informativo</a></li>
                <li><Link to="/reports" className="text-gray-400 hover:text-green-400 transition">Relatórios</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Pesquisas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Publicações</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Biblioteca Digital</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">FAQ</a></li>
              </ul>
            </div>

            {/* COLUNA 4: CONTACTOS */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contacte-nos</h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPinIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Localização</p>
                    <p className="text-gray-400">Mutuanhas, Cidade de Nampula, Moçambique</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <PhoneIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Telefone</p>
                    <a href="tel:+258865090606" className="text-gray-400 hover:text-green-400 transition">+258 86 509 0606</a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:coortferra@live.com" className="text-gray-400 hover:text-green-400 transition">coortferra@live.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="bg-gray-800/50 py-8 border-b border-gray-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Mantenha-se Informado</h3>
              <p className="text-sm text-gray-400">Receba nossas últimas notícias, eventos e oportunidades por email</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-green-500 text-sm"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap">
                Subscrever
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; 2026 Fórum Terra Nampula. Todos os direitos reservados.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-400 transition">Política de Privacidade</Link>
              <Link to="/terms-of-use" className="text-gray-400 hover:text-green-400 transition">Termos de Uso</Link>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Auditar</a>
            </div>
          </div>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition z-10 hidden lg:flex"
        title="Voltar ao topo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;