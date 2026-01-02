import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/public/img/montanha.jpg')" }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Forum Terra Nampula</h1>
          <p className="text-xl mb-6">Transformando o mundo, um projeto de cada vez.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
          <p className="text-sm text-gray-300 mt-4">Nossa organização foi fundada com o objetivo de criar um impacto positivo no mundo.</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Evento 1</h3>
              <p className="text-gray-600">Descrição breve do evento.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Evento 2</h3>
              <p className="text-gray-600">Descrição breve do evento.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Notícia 1</h3>
              <p className="text-gray-600">Resumo da notícia.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Leia Mais</button>
            </div>
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Notícia 2</h3>
              <p className="text-gray-600">Resumo da notícia.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Leia Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* Vagas Section */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Vagas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Vaga 1</h3>
              <p className="text-gray-600">Descrição breve da Vaga.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Vaga 2</h3>
              <p className="text-gray-600">Descrição breve da vaga.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;