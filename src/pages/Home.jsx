import React from 'react';

function Home() {
  return (
    <section className="bg-white text-gray-800 p-9">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Organização</h1>
        <p className="text-lg mb-6">Transformando o mundo, um projeto de cada vez.</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
        <p className="text-sm text-gray-600 mt-4">Exemplo de conteúdo fictício: "Nossa organização foi fundada com o objetivo de criar um impacto positivo no mundo."</p>
      </div>
    </section>
  );
}

export default Home;