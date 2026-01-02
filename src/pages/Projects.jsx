import React from 'react';

const projetos = [
  {
    nome: "Terra Segura para Todos (Fase 3)",
    periodo: "2020-2026",
    distritos: "Mecuburi, Erati, Nacaroa, Malema, Ribaue, Chiure",
    atividades: "Empoderamento das comunidades, defesa de direitos",
    financiador: "PPM",
  },
  {
    nome: "VozPoBA",
    periodo: "2023-2026",
    distritos: "Nampula, Muecate, Murrupula",
    atividades: "Fortalecimento da participação da base",
    financiador: "União Europeia",
  },
  {
    nome: "Campanha de Advocacia sobre Exploração Florestal",
    periodo: "2016-2019",
    distritos: "Corredores de escoamento na Província de Nampula",
    atividades: "Promoção de conservação e corredores de escoamento",
    financiador: "WWF",
  },
  {
    nome: "Terra Segura para Todos (Fase 1)",
    periodo: "2016-2019",
    distritos: "Murrupula, Lalaua, Muecate, Meconta, Nacala-a-Velha, Mogovolas, Mecuburi",
    atividades: "Formalização de direitos e promoção de atividades de rendimento",
    financiador: "PPM & CCFD",
  },
  {
    nome: "Apoio na Formalização dos Direitos",
    periodo: "2011-2013",
    distritos: "Lalaua, Mecuburi",
    atividades: "Delimitação de terras comunitárias",
    financiador: "ITC",
  },
  {
    nome: "Mapeamento de Comunidades",
    periodo: "2014-2015",
    distritos: "Palma (Cabo Delgado)",
    atividades: "Mapeamento e criação de identidades legais",
    financiador: "SCDS",
  },
  {
    nome: "MOZ NORTE",
    periodo: "2024-2026",
    distritos: "Erati",
    atividades: "Projetos de responsabilidade social",
    financiador: "WE EFFECT",
  },
];

function Projects() {
  return (
    <>
      {/* Projetos Implementados */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projetos Implementados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((projeto, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <h3 className="text-xl font-semibold mb-2">{projeto.nome}</h3>
                <p><strong>Período:</strong> {projeto.periodo}</p>
                <p><strong>Distritos:</strong> {projeto.distritos}</p>
                <p><strong>Atividades:</strong> {projeto.atividades}</p>
                <p><strong>Financiador:</strong> {projeto.financiador}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;