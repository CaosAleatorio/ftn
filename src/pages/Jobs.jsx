import React from 'react';

function Jobs() {
  return (
    <>
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Vagas Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Vaga 1</h3>
              <p className="text-gray-600">Descrição breve da vaga.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Inscrever-se</button>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Vaga 2</h3>
              <p className="text-gray-600">Descrição breve da vaga.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Inscrever-se</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobs;