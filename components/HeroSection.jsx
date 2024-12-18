'use client';

import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const slides = [
    { id: 1, src: '/hero1.jpg', title: 'Explore our Products...', titleColor: 'text-gray-100' },
    { id: 2, src: '/hero3.jpg', title: 'Shopping Experience like an in-store purchase feel with detailed descriptions on each product', titleColor: 'text-gray-100' },
    { id: 3, src: '/hero2.jpg', title: 'Free doorstep delivery within 7 days of order', titleColor: 'text-gray-100' },
    { id: 4, src: '/hero5.webp', title: 'Safe and Secure Payment Options...', titleColor: 'text-green-400' },
    { id: 5, src: '/hero4.jpg', title: 'Happy Shopping!', titleColor: 'text-gray-100' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gray-200">
      <div className="h-[44rem] w-full overflow-hidden relative sm:h-[30rem]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ${
              index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover filter blur-sm" 
            />
            <h2
              className={`absolute inset-0  flex items-center justify-center text-3xl sm:text-2xl font-bold bg-black/50 ${slide.titleColor}`}
            >
              {slide.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
      >
        &lt; 
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
      >
         &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
    