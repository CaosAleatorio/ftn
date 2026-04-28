import React from 'react';

function About() {
  return (
    <>
      {/* Histórico da Organização */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Histórico da Organização</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Texto à Direita */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundação e Missão</h3>
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Fundada em 25 de Abril de 2003, através do BR №13, III Serie de 26 de Marco, o Fórum Terra Nampula (FT-N) é uma organização filantrópica de referência nacional sobre os assuntos ligados à promoção das boas práticas no setor de Recursos Naturais com ênfase na Terra.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Trajetória</h3>
                <p className="text-gray-700 leading-relaxed text-justify mb-4">
                  Durante mais de duas décadas, desenvolvemos programas inovadores e sustentáveis, promovendo o empoderamento socioeconômico das comunidades beneficiárias através da gestão participativa dos recursos naturais. Nossa trajetória é marcada pelo compromisso contínuo com a melhoria das condições de vida e a proteção ambiental.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Áreas de Atuação</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Trabalhamos em diversas áreas estratégicas, incluindo gestão de recursos naturais, conservação ambiental, empoderamento comunitário e advocacia política. Nossas iniciativas alcançam múltiplos distritos e beneficiam milhares de pessoas, reafirmando nosso compromisso com um desenvolvimento verdadeiramente sustentável e equitativo.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  <span className="font-semibold text-gray-900">Desde 2003</span> — Construindo um futuro mais seguro e sustentável para as comunidades de Moçambique.
                </p>
              </div>
            </div>

                        {/* Galeria de Fotos à Esquerda */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {/* Foto 1 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-48">
                  <img 
                    src="/img/f1.jpeg" 
                    alt="Trajetória FTN 1" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Foto 2 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-48">
                  <img 
                    src="/img/f2.jpeg" 
                    alt="Trajetória FTN 2" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Foto 3 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-48">
                  <img 
                    src="/img/f3.jpeg" 
                    alt="Trajetória FTN 3" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Foto 4 */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-48">
                  <img 
                    src="/img/f4.jpeg" 
                    alt="Trajetória FTN 4" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Missão, Visão e Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Colaborar para o empoderamento socioeconômico das comunidades beneficiárias através da gestão participativa dos recursos naturais, com perspectivas de valoração da qualidade do meio ambiente como fator fundamental para a melhoria das condições de vida.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                Terra Segura para Todos como instrumento para o empoderamento socioeconômico das comunidades e dos cidadãos, contribuindo para um desenvolvimento sustentável e equitativo rumo ao combate à pobreza.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <div className="space-y-2">
                <p className="text-gray-700 flex items-center">
                  <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Transparência
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Equidade
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Sustentabilidade
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Participação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações sobre a Equipe e Parceiros */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Equipe e Parceiros</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-3xl">
            Nossa equipe é composta por profissionais dedicados e contamos com o apoio de parceiros estratégicos que compartilham nossa visão de desenvolvimento sustentável. Juntos, trabalhamos para maximizar o impacto de nossas iniciativas e garantir que os objetivos de sustentabilidade ambiental e empoderamento comunitário sejam alcançados de forma integrada e participativa.
          </p>
        </div>
      </section>

      {/* Organigrama Institucional Executivo */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Organigrama Institucional Executivo</h2>
          
          <div className="flex flex-col items-center space-y-8">
            {/* Nível 1: Diretora Executiva */}
            <div className="w-full max-w-xs">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg p-6 text-center font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p>Directora Executiva</p>
              </div>
            </div>

            {/* Linha Divisória */}
            <div className="w-1 h-8 bg-gray-300"></div>

            {/* Nível 2: Dois Departamentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              {/* Administração e Finanças */}
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6 text-center font-semibold shadow-md w-full hover:shadow-lg transition-shadow duration-300">
                  <p>Administração e Finanças</p>
                </div>
                
                <div className="w-1 h-4 bg-gray-300"></div>

                {/* Subdivisões */}
                <div className="space-y-3 w-full">
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-blue-100 transition-colors duration-300">
                    Recursos Humanos
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-blue-100 transition-colors duration-300">
                    Pessoal de Apoio
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-blue-100 transition-colors duration-300">
                    Administração
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-blue-100 transition-colors duration-300">
                    Secretariado
                  </div>
                </div>
              </div>

              {/* Gestor de Programas */}
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg p-6 text-center font-semibold shadow-md w-full hover:shadow-lg transition-shadow duration-300">
                  <p>Gestor de Programas</p>
                </div>
                
                <div className="w-1 h-4 bg-gray-300"></div>

                {/* Subdivisões */}
                <div className="space-y-3 w-full">
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Salvaguarda Ambiental
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Gestor de Projeto
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Técnico Topógrafo
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Monitoria e Avaliação
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Províncias
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-4 text-center text-gray-700 font-medium hover:bg-emerald-100 transition-colors duration-300">
                    Distritos
                  </div>
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