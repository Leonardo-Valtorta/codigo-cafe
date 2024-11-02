import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const botonMobile = isOpen ? (
    <svg 
      className="w-6 h-6 fill-current" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg 
      className="w-6 h-6 fill-current" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 50 50"
    >
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
    </svg>
  );

  return (
    <div className="sticky top-0 left-0 font-navbar text-xl bg-gradient-to-r from-navbarBackground via-navbarBackgroundThird to-navbarBackgroundSecond">
      <div className="flex flex-col mx-0 sm:mx-4 sm:flex-row items-center px-4 py-2">
        <div className="sm:w-[30%] lg:w-1/4 w-full flex flex-row items-center">
          <a href="/">
            <img src="logo-codigo-cafe.png" alt="Logo"/>
          </a>

          <button
            onClick={toggleNavbar}
            className="sm:hidden w-full flex items-end justify-end px-3 py-2 border rounded text-black border-transparent"
          >
            {botonMobile}
          </button>
        </div>

        <div className={`w-full sm:flex sm:items-center sm:w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col py-3 px-0 items-start justify-evenly w-full sm:flex-row sm:items-center sm:w-full">
            <li className="my-2 sm:my-0 hover:underline">
              <a href="/aboutUs" className="text-black px-3 py-2">NOSOTROS</a>
            </li>
            <li className="my-2 sm:my-0 hover:underline">
              <a href="/locales" className="text-black px-3 sm:pl-0 py-2">LOCALES</a>
            </li>
            <li className="my-2 sm:my-0 hover:underline">
              <a href="#productos" className="text-black px-3 sm:pl-0 py-2">PRODUCTOS</a>
            </li>
            <li className="my-2 sm:my-0 hover:underline">
              <a href="#trabaja" className="text-black pl-3 sm:pl-0 py-2 text-center">TRABAJA CON NOSOTROS</a>
            </li>
          </ul>
        </div>

        <div className={`w-full sm:justify-end sm:flex sm:items-center sm:w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col sm:px-0 py-3 px-3 items-start sm:flex-row sm:items-center justify-end w-full sm:w-auto">
            <li className="my-2 sm:my-0 flex items-center hover:underline">
              <a className="w-6 h-auto" href="/contact">
                <img src="telefono-contacto.png" alt="Contacto" />
              </a>
              <a href="/contact" className="text-black pr-3 pl-2 py-2">Contacto</a>
            </li>
            <li className="my-2 sm:my-0 flex items-center hover:underline">
              <a className="w-6 h-auto" href="/cart">
                <img src="carrito-tienda.png" alt="Tienda" />
              </a>
              <a href="/cart" className="text-black pr-3 pl-2 py-2">Tienda</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
