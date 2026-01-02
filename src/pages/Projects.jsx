import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projeto A',
      description: 'Descrição do Projeto A.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Projeto B',
      description: 'Descrição do Projeto B.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Projeto C',
      description: 'Descrição do Projeto C.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="bg-white text-gray-800 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projetos</h1>
        <p className="text-sm text-gray-600 mb-4">Exemplo de conteúdo fictício: "Nossos projetos incluem iniciativas de educação, saúde e sustentabilidade."</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;