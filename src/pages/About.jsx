import React from 'react';

function About() {
  return (
    <section className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
        <p className="mb-4">Somos uma organização dedicada a transformar vidas e comunidades através de projetos inovadores e sustentáveis.</p>
        <p className="text-sm text-gray-600">Exemplo de conteúdo fictício: "Desde 2020, temos trabalhado para promover mudanças significativas em comunidades carentes."</p>
        <h2 className="text-2xl font-semibold mb-2">Missão</h2>
        <p className="mb-4">Promover o bem-estar social e ambiental através de iniciativas colaborativas.</p>
        <h2 className="text-2xl font-semibold mb-2">Visão</h2>
        <p className="mb-4">Ser referência em impacto positivo e transformação global.</p>
        <h2 className="text-2xl font-semibold mb-2">Valores</h2>
        <ul className="list-disc list-inside">
          <li>Transparência</li>
          <li>Inovação</li>
          <li>Colaboração</li>
          <li>Sustentabilidade</li>
        </ul>
      </div>
    </section>
  );
}

export default About;