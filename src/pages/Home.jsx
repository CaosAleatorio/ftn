import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import PartnersSlider from '../components/PartnersSlider';

function Home() {
  // Slides data for the banner slider
  const bannerSlides = [
    {
      image: '/img/empoderamento-economico.JPG',
      subtitle: 'Uso Sustentável dos Recursos Naturais',
      title: 'Junte-se a nossa Causa',
      description: 'A FTN é uma Organização Nacional da Sociedade Civil, criada em 2003 através da BR.n 13 de 26 de Março IIISérie, reúne membros individuais e coletivos que lidam diretamente com questões relacionadas com Terra, Florestas e Vida Selvagem e Ambiente no que diz respeito ao fortalecimento da capacidade organizacional de grupos e organizações comunitárias de base para a sua participação no empoderamento comunitário à luz das políticas setoriais desenvolvidas no país no contexto do combate e erradicação da pobreza absoluta de acordo com a Agenda 20-30 de Desenvolvimento Sustentável.',
      cta: {
        label: 'CONTACTAR →',
        href: '/contact',
        secondary: 'Ver Eventos',
        secondaryHref: '/events'
      }
    },
    {
      image: '/img/posse-segura.JPG',
      subtitle: 'Conservação Ambiental',
      title: 'Protegendo Florestas e Comunidades',
      description: 'Iniciativas dedicadas à proteção e gestão sustentável de recursos naturais, promovendo o bem-estar das comunidades locais e a preservação do ambiente para gerações futuras.',
      cta: {
        label: 'SABER MAIS →',
        href: '/about',
        secondary: 'Nossos Projetos',
        secondaryHref: '/projects'
      }
    },
    {
      image: '/img/Comites.JPG',
      subtitle: 'Empoderamento Comunitário',
      title: 'Fortalecendo Capacidades Locais',
      description: 'Programas de capacitação e educação voltados para o desenvolvimento organizacional e participação ativa das comunidades em decisões que as afetam.',
      cta: {
        label: 'SER VOLUNTÁRIO →',
        href: '/volunteers',
        secondary: 'Saiba Mais',
        secondaryHref: '/about'
      }
    }
  ];

  // Partners data
  const partners = [
    { name: 'Parceiro Institucional 1', logo: '/img/Website-Logos-10.png' },
    { name: 'Parceiro Institucional 2', logo: '/img/partner-2.png' },
    { name: 'Parceiro Institucional 3', logo: '/img/partner-3.png' },
    { name: 'Parceiro Institucional 4', logo: '/img/partner-4.png' },
    { name: 'Parceiro Institucional 5', logo: '/img/partner-5.png' },
    { name: 'Parceiro Institucional 6', logo: '/img/partner-6.png' },
    { name: 'Parceiro Institucional 7', logo: '/img/partner-7.png' },
    { name: 'Parceiro Institucional 8', logo: '/img/partner-8.png' }
  ];

  return (
    <>
      {/* IMAGE SLIDER BANNER */}
      <ImageSlider slides={bannerSlides} />

      {/* QUEM SOMOS — INFORMAÇÃO DETALHADA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nossa Identidade
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Fórum Terra Nampula é uma organização de base dedicada ao fortalecimento da capacidade organizacional de grupos e organizações comunitárias na sua participação em empoderamento comunitário.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Focamos em políticas setoriais desenvolvidas no país no contexto do combate e erradicação da pobreza absoluta de acordo com a Agenda 20-30 de Desenvolvimento Sustentável da ONU.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Comunidades Empoderadas</h4>
                    <p className="text-gray-600 text-sm">Capacitamos grupos e organizações comunitárias para a participação ativa</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sustentabilidade Ambiental</h4>
                    <p className="text-gray-600 text-sm">Protegendo Terra, Florestas e Vida Selvagem para gerações futuras</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Erradicação da Pobreza</h4>
                    <p className="text-gray-600 text-sm">Alinhados com os Objetivos de Desenvolvimento Sustentável</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Saiba Mais sobre Nós
              </Link>
            </div>

            <div className="relative h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
              <img src="/img/tringulo ftn.png" alt="Comunidades locais" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS E ÁREAS DE FOCO */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Nossos Programas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programa 1 */}
            <div className="card card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestão Ambiental</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Programas focados na conservação de florestas, proteção da biodiversidade e gestão sustentável de recursos naturais.
              </p>
              <Link to="/projects" className="text-green-600 font-semibold hover:text-green-700">
                Ver Projetos →
              </Link>
            </div>

            {/* Programa 2 */}
            <div className="card card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 6a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zM9 16a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zM9 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capacitação Comunitária</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Formação e empoderamento de comunidades locais para participação ativa em decisões que lhes afetam.
              </p>
              <Link to="/volunteers" className="text-green-600 font-semibold hover:text-green-700">
                Ser Voluntário →
              </Link>
            </div>

            {/* Programa 3 */}
            <div className="card card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advocacia Política</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Influência em políticas públicas para assegurar desenvolvimento sustentável e proteção ambiental.
              </p>
              <a href="#" className="text-green-600 font-semibold hover:text-green-700">
                Saiba Mais →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & IMPACT SECTION */}
      <section className="section-padding bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
            Nosso Impacto
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Metric 1 - Assistidos */}
            <div className="text-center p-8 lg:p-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition duration-300 transform hover:scale-105">
              <div className="mb-4">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  2M+
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-medium">
                Pessoas Assistidas
              </p>
            </div>

            {/* Metric 2 - Títulos Entregues */}
            <div className="text-center p-8 lg:p-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition duration-300 transform hover:scale-105">
              <div className="mb-4">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  1.1K+
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-medium">
                Títulos Entregues
              </p>
            </div>

            {/* Metric 3 - Distritos */}
            <div className="text-center p-8 lg:p-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition duration-300 transform hover:scale-105">
              <div className="mb-4">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  21+
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-medium">
                Distritos Alcançados
              </p>
            </div>

            {/* Metric 4 - Projetos */}
            <div className="text-center p-8 lg:p-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition duration-300 transform hover:scale-105">
              <div className="mb-4">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  118
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/90 font-medium">
                Projectos Implementados
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-center text-white/80 text-sm sm:text-base mt-12 max-w-3xl mx-auto">
            Desde 2003, a Fórum Terra Nampula tem trabalhado incansavelmente para fortalecer comunidades, proteger o ambiente e criar oportunidades sustentáveis.
          </p>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <PartnersSlider partners={partners} />

      {/* EVENTOS & NOTÍCIAS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eventos */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Eventos Próximos</h2>
              <div className="space-y-4">
                <div className="card">
                  <div className="flex gap-4">
                    <div className="text-center bg-green-50 px-4 py-3 rounded min-w-20">
                      <p className="text-2xl font-bold text-green-600">25</p>
                      <p className="text-xs text-gray-600">Abr</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Seminário de Sustentabilidade</h4>
                      <p className="text-sm text-gray-600">Nampula, Moçambique</p>
                      <button className="text-green-600 text-sm font-semibold mt-2 hover:text-green-700">Registrar →</button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex gap-4">
                    <div className="text-center bg-green-50 px-4 py-3 rounded min-w-20">
                      <p className="text-2xl font-bold text-green-600">12</p>
                      <p className="text-xs text-gray-600">Mai</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Workshop Comunitário</h4>
                      <p className="text-sm text-gray-600">Distritos Rurais</p>
                      <button className="text-green-600 text-sm font-semibold mt-2 hover:text-green-700">Registrar →</button>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/events" className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Ver Todos os Eventos
              </Link>
            </div>

            {/* Notícias */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Últimas Notícias</h2>
              <div className="space-y-4">
                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-2">Avanços na Conservação Florestal</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Nampula alcança marco de 5.000 hectares reflorestados em 2026...
                  </p>
                  <a href="#" className="text-green-600 text-sm font-semibold hover:text-green-700">Ler Mais →</a>
                </div>

                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-2">Novas Parcerias Estratégicas</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    FTN estabelece colaborações com organizações internacionais para projetos conjuntos...
                  </p>
                  <a href="#" className="text-green-600 text-sm font-semibold hover:text-green-700">Ler Mais →</a>
                </div>

                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-2">Boletim Informativo Mensal</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Subscribe e receba aquele boletim com as últimas atualizações...
                  </p>
                  <a href="#" className="text-green-600 text-sm font-semibold hover:text-green-700">Subscribe →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION FINAL */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-green-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Junte-se a Nós na Mudança
          </h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            Sua contribuição ajuda comunidades a prosperar e o ambiente a regenerar-se.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              DOAR AGORA
            </Link>
            <Link to="/volunteers" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Ser Voluntário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
