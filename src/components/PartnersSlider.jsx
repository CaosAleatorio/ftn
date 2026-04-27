import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function PartnersSlider({ partners = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [needsSlider, setNeedsSlider] = useState(false);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const itemsPerView = 4;

  // Detectar se precisa slider baseado em largura
  useEffect(() => {
    const checkIfNeedsSlider = () => {
      if (!containerRef.current || itemsRef.current.length === 0) return;

      const containerWidth = containerRef.current.offsetWidth;
      const totalWidth = itemsRef.current.reduce((sum, item) => {
        return sum + (item?.offsetWidth || 0);
      }, 0);

      // Considera gap entre items (16px = gap-4)
      const gapWidth = (partners.length - 1) * 16;
      setNeedsSlider(totalWidth + gapWidth > containerWidth);
    };

    // Verificar após render
    const timer = setTimeout(checkIfNeedsSlider, 100);
    window.addEventListener('resize', checkIfNeedsSlider);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkIfNeedsSlider);
    };
  }, [partners.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - itemsPerView + partners.length) % Math.max(1, partners.length));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerView) % Math.max(1, partners.length));
  };

  if (!partners || partners.length === 0) {
    return <div className="h-32 bg-gray-50 flex items-center justify-center text-gray-400">Nenhum parceiro disponível</div>;
  }

  // Cálculo do offset para transição suave
  const offsetX = needsSlider ? -(currentIndex * (100 / itemsPerView)) : 0;

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="container-custom">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
          Parceiros Institucionais
        </h2>

        <p className="text-center text-gray-600 text-base mb-12">
          Confiando em parcerias estratégicas para maximizar nosso impacto
        </p>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Container com overflow hidden para slider */}
          <div
            ref={containerRef}
            className={`overflow-hidden rounded-lg bg-white px-10 py-4 sm:px-12 md:px-14 lg:px-8 lg:py-8 ${
              !needsSlider ? 'bg-gray-50' : ''
            }`}
          >
            {/* Items Container - transição suave */}
            <div
              className="flex gap-4 transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${offsetX}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="flex items-center justify-center h-24 sm:h-28 lg:h-40 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-md transition-shadow duration-300 p-3 sm:p-4 lg:p-6 flex-shrink-0"
                  style={{ minWidth: needsSlider ? '25%' : '25%', flex: needsSlider ? '0 0 25%' : '1 1 25%', maxWidth: needsSlider ? '25%' : '280px' }}
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name || `Parceiro ${index + 1}`}
                      className="w-full h-full object-contain"
                      title={partner.name}
                      onError={(e) => {
                        // Fallback se imagem não carregar
                        e.target.style.display = 'none';
                        const sibling = e.target.nextElementSibling;
                        if (sibling) {
                          sibling.style.display = 'block';
                        }
                      }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-semibold">
                        {partner.name || `Parceiro ${index + 1}`}
                      </div>
                    </div>
                  )}
                  {partner.logo && (
                    <div className="hidden text-center">
                      <div className="text-gray-400 text-sm font-semibold">
                        {partner.name || `Parceiro ${index + 1}`}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Setas de Navegação — Apenas quando precisa slider */}
          {needsSlider && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 p-1.5 sm:p-2 rounded-full border border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Parceiros anteriores"
                title="Anterior"
              >
                <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 p-1.5 sm:p-2 rounded-full border border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Próximos parceiros"
                title="Próximo"
              >
                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default PartnersSlider;
