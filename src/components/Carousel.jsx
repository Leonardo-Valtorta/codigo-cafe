import { useEffect, useState } from 'react';
import 'flowbite';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  useEffect(() => {
    const carouselElement = document.getElementById("default-carousel");
    if (carouselElement) {
  
    }
  }, []);

  const totalItems = 4; 

  const showItem = (index) => {
    setActiveIndex(index);
  };

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div className={`duration-700 ease-in-out ${activeIndex === 0 ? '' : 'hidden'}`} data-carousel-item="active">
          <img 
            src="/assets/cafeteria.jpg" 
            className="absolute block w-full h-full object-cover" 
            alt="Cafetería 1" 
          />
        </div>
        <div className={`duration-700 ease-in-out ${activeIndex === 1 ? '' : 'hidden'}`} data-carousel-item>
          <img 
            src="/assets/cafeteria2.jpg" 
            className="absolute block w-full h-full object-cover" 
            alt="Cafetería 2" 
          />
        </div>
        <div className={`duration-700 ease-in-out ${activeIndex === 2 ? '' : 'hidden'}`} data-carousel-item>
          <img 
            src="/assets/cafeteria3.jpg" 
            className="absolute block w-full h-full object-cover" 
            alt="Cafetería 3" 
          />
        </div>
        <div className={`duration-700 ease-in-out ${activeIndex === 3 ? '' : 'hidden'}`} data-carousel-item>
          <img 
            src="/assets/cafeteria4.jpg" 
            className="absolute block w-full h-full object-cover" 
            alt="Cafetería 4" 
          />
        </div>
      </div>

      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        <button type="button" className="w-3 h-3 rounded-full bg-white" onClick={() => showItem(0)}></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white" onClick={() => showItem(1)}></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white" onClick={() => showItem(2)}></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white" onClick={() => showItem(3)}></button>
      </div>

      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none" onClick={prevItem}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>

      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none" onClick={nextItem}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
