import React from 'react';

function About() {
  return (
    <>
      {/* Histórico da Organização */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Histórico da Organização</h2>
          <p className="text-lg mb-4">
            Fundada em 25 de Abril de 2003, através do BR №13, III Serie de 26 de Marco, o Fórum Terra Nampula (FT-N) é uma organização filantrópica de referência nacional sobre os assuntos ligados à promoção das boas práticas no setor de Recursos Naturais com ênfase na Terra.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-white text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Missão, Visão e Valores</h2>
          <p className="text-lg mb-4">
            <strong>Missão:</strong> Colaborar para o empoderamento socioeconômico das comunidades beneficiárias através da gestão participativa dos recursos naturais, com perspectivas de valoração da qualidade do meio ambiente como fator fundamental para a melhoria das condições de vida.
          </p>
          <p className="text-lg mb-4">
            <strong>Visão:</strong> Terra Segura para Todos como instrumento para o empoderamento socioeconômico das comunidades e dos cidadãos, contribuindo para um desenvolvimento sustentável e equitativo rumo ao combate à pobreza.
          </p>
          <p className="text-lg mb-4">
            <strong>Valores:</strong> Transparência, Equidade, Sustentabilidade e Participação.
          </p>
        </div>
      </section>

      {/* Informações sobre a Equipe e Parceiros */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Equipe e Parceiros</h2>
          <p className="text-lg mb-4">
            Nossa equipe é composta por profissionais dedicados e contamos com o apoio de parceiros estratégicos que compartilham nossa visão de desenvolvimento sustentável.
          </p>
        </div>
      </section>

      {/* Organigrama Institucional Executivo */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Organigrama Institucional Executivo</h2>
          <div className="flex flex-col items-center">
            {/* Diretora Executiva */}
            <div className="bg-yellow-200 border border-yellow-400 rounded p-4 mb-4 text-center">
              <p className="font-bold">Directora Executiva</p>
            </div>

            {/* Administração e Finanças e Gestor de Programas */}
            <div className="flex justify-center space-x-8 mb-4">
              <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                <p className="font-bold">Administração e Finanças</p>
              </div>
              <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                <p className="font-bold">Gestor de Programas</p>
              </div>
            </div>

            {/* Subdivisões */}
            <div className="flex justify-center space-x-8 mb-4">
              {/* Administração e Finanças Subdivisões */}
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Recursos Humanos</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Pessoal de Apoio</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Administração</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Secretariado</p>
                </div>
              </div>

              {/* Gestor de Programas Subdivisões */}
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Salvaguarda Ambiental</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Gestor de Projeto</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Técnico Topógrafo</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Monitoria e Avaliação</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Províncias</p>
                </div>
                <div className="bg-yellow-200 border border-yellow-400 rounded p-4 text-center">
                  <p>Distritos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;