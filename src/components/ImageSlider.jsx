import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function ImageSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) {
    return <div className="h-96 bg-gray-300">Nenhuma imagem disponível</div>;
  }

  return (
    <div className="relative w-full h-96 lg:h-screen overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay — Azul Escuro */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/60 to-slate-900/70"></div>

            {/* Content */}
            {slide.title && (
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl">
                  {slide.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-xl text-emerald-300 mb-3 sm:mb-4 lg:mb-6 font-light tracking-wider uppercase">
                      {slide.subtitle}
                    </p>
                  )}
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  {slide.description && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md font-light">
                      {slide.description}
                    </p>
                  )}
                  {slide.cta && (
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                      {slide.cta.href ? (
                        <Link
                          to={slide.cta.href}
                          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-sm sm:text-base"
                        >
                          {slide.cta.label}
                        </Link>
                      ) : (
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                          {slide.cta.label}
                        </button>
                      )}
                      
                      {slide.cta.secondary && (
                        slide.cta.secondaryHref ? (
                          <Link
                            to={slide.cta.secondaryHref}
                            className="border-2 border-white hover:bg-white text-white hover:text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition duration-300 inline-block text-sm sm:text-base"
                          >
                            {slide.cta.secondary}
                          </Link>
                        ) : (
                          <button className="border-2 border-white hover:bg-white text-white hover:text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition duration-300 text-sm sm:text-base">
                            {slide.cta.secondary}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
        aria-label="Anterior"
        title="Anterior"
      >
        <ChevronLeftIcon className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
        aria-label="Próximo"
        title="Próximo"
      >
        <ChevronRightIcon className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition duration-300 ${
              index === currentSlide
                ? 'bg-green-500 w-8'
                : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
