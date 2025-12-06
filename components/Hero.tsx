'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Restaurant Furniture",
      description: "Discover the perfect blend of comfort and style with our extensive collection of premium restaurant furniture, soulfully made by best of the craftsmens.",
      buttonText: "VIEW COLLECTION",
      image: "/api/placeholder/1920/800"
    },
    {
      title: "Cafe Furniture",
      description: "Create the perfect ambiance for your cafe with our curated collection of stylish and comfortable furniture pieces.",
      buttonText: "EXPLORE NOW",
      image: "/api/placeholder/1920/800"
    },
    {
      title: "Bar Furniture",
      description: "Elevate your bar experience with our premium collection of bar stools, tables, and accessories.",
      buttonText: "VIEW MORE",
      image: "/api/placeholder/1920/800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center h-full px-4 md:px-8">
              <div className="text-center text-white max-w-3xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-[font-2] mb-4 md:mb-6">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 px-4 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-gray-500 hover:bg-gray-600 text-white font-[font-1] py-3 px-8 md:py-4 md:px-10 transition-colors duration-300 text-sm md:text-base">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 items-center justify-center group border-white border"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 items-center justify-center group border-white border"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      

      {/* Dots Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 border-white border-2  ${
              index === currentSlide 
                ? 'bg-white w-6 md:w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;