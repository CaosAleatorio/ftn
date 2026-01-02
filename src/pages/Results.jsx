import React from 'react';

function Results() {
  return (
    <>
      {/* Resultados Alcançados */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Resultados Alcançados</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Legalizadas mais de 224 áreas comunitárias, totalizando 1.792.000 hectares.</li>
            <li className="mb-2">Mediados mais de 298 conflitos de terra.</li>
            <li className="mb-2">Entregues 224 certidões de posse de terra.</li>
            <li className="mb-2">Entregues 93 títulos de DUAT (Direito de Uso e Aproveitamento de Terra).</li>
            <li className="mb-2">Legalizadas 80 OCB’s (Organizações Comunitárias de Base).</li>
            <li className="mb-2">Implementados 45 projetos comunitários junto das OCB’s.</li>
            <li className="mb-2">48% das mulheres participam em atividades de geração de renda.</li>
          </ul>
        </div>
      </section>

      {/* Indicadores de Impacto */}
      <section className="bg-white text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Indicadores de Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Áreas Comunitárias Delimitadas</h3>
              <p className="text-lg">1.087.000 hectares</p>
            </div>
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Conflitos Mediados</h3>
              <p className="text-lg">202 conflitos</p>
            </div>
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Limites de Terras Definidos</h3>
              <p className="text-lg">332 limites</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Results;