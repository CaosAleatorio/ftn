import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-zinc-950 flex items-center justify-center"
        style={{ backgroundImage: "url('/img/montanha.JPG')" }}
      >
        <div className="text-center bg-opacity-50 p-8 rounded">
          <h1 className="text-5xl text-zinc-950 font-bold mb-4">Bem-vindo ao Forum Terra Nampula</h1>
          <p className="text-xl text-white mb-6">Transformando o mundo, um projeto de cada vez.</p>
          <Link to="/About" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Saiba Mais</Link>
          <p className="text-sm text-gray-300 mt-4">Nossa organização foi fundada com o objetivo de criar um impacto positivo no mundo.</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-100 text-gray-800 p-8 flex justify-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Evento 1</h3>
              <p className="text-gray-600">Descrição breve do evento.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Saiba Mais</button>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Evento 2</h3>
              <p className="text-gray-600">Descrição breve do evento.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Saiba Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white text-gray-800 p-8 flex justify-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Notícia 1</h3>
              <p className="text-gray-600">Resumo da notícia.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Leia Mais</button>
            </div>
            <div className="bg-gray-100 p-4 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">Notícia 2</h3>
              <p className="text-gray-600">Resumo da notícia.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Leia Mais</button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="bg-gray-100 text-gray-800 p-8 flex justify-center">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Datas Importantes</h2>
          <ul className="timeline inline-block text-left">
            <li className="mb-4">
              <span className="font-bold text-lg">15/11/2025</span>
              <p>Início de submissão de resumos</p>
            </li>
            <li className="mb-4">
              <span className="font-bold text-lg">31/01/2026</span>
              <p>Prazo final para a submissão de resumos</p>
            </li>
            <li className="mb-4">
              <span className="font-bold text-lg">28/02/2026</span>
              <p>Notificação aos autores</p>
            </li>
            <li className="mb-4">
              <span className="font-bold text-lg">30/03/2026 - 30/05/2026</span>
              <p>Pagamento da inscrição e envio das cartas de aceitação</p>
            </li>
            <li className="mb-4">
              <span className="font-bold text-lg">16 e 17/09/2026</span>
              <p>Realização do Congresso</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Areas of Intervention and Results Section */}
      <section className="bg-gray-100 text-gray-800 p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Áreas de Intervenção e Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Posse da Terra Segura */}
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold mb-4">Posse da Terra Segura</h3>
              <p className="text-gray-600">Legalização de 224 áreas comunitárias, beneficiando 700.000 famílias em duas províncias.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>224 certidões de posse de terra entregues</li>
                <li>93 títulos de DUAT emitidos</li>
                <li>80 OCB’s legalizadas</li>
                <li>298 conflitos de terra mediados</li>
              </ul>
            </div>

            {/* Uso Sustentável dos Recursos Naturais */}
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold mb-4">Uso Sustentável dos Recursos Naturais</h3>
              <p className="text-gray-600">Reflorestamento e promoção de atividades sustentáveis.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>13 mil hectares reflorestados</li>
                <li>80 OCB’s capacitadas</li>
                <li>32 associações comunitárias legalizadas</li>
                <li>Atividades de manejo florestal sustentável promovidas</li>
              </ul>
            </div>

            {/* Advocacia & Lobby */}
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold mb-4">Advocacia & Lobby</h3>
              <p className="text-gray-600">Participação ativa na revisão de políticas e leis nacionais.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Órgão interlocutor em processos de revisão de políticas</li>
                <li>Facilitador de consultas comunitárias</li>
                <li>Alocação de taxas de retorno sobre exploração de recursos naturais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;