import { useState } from 'react';
import Image from 'next/image';
import { fotosGaleria } from '../dados/fotosGaleria';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? fotosGaleria.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === fotosGaleria.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {fotosGaleria.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt={`Foto ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white"
      >
        Next
      </button>
    </div>
  );
}
