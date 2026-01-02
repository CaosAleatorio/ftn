import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© 2026 Organização. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Ajuda</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;