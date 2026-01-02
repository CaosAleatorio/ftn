import React from 'react';

function Donate() {
  return (
    <section className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Apoie Nossa Causa</h1>
        <p className="mb-6">Sua doação ajuda a transformar vidas e comunidades. Contribua para um futuro melhor.</p>
        <p className="text-sm text-gray-600">Exemplo de conteúdo fictício: "Cada doação é um passo para transformar vidas e construir um futuro melhor."</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Doar Agora</button>
      </div>
    </section>
  );
}

export default Donate;