import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const TrabajaConNosotros = () => {
  return (
    <>
    <Header />
    <section className="rounded-lg font-sans flex flex-col items-center gap-6 md:gap-24 md:flex-row md:justify-around lg:px-12 m-8">
      <h2 className="text-[24px] font-bold md:hidden">TRABAJA CON NOSOTROS</h2>
      
      <div className="md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <img src="../mozos.jpg" alt="Mozos en la cafetería" className="rounded-lg shadow-lg w-full h-auto mb-8 mt-4 md:mt-8" />
        <p className="text-gray-700 text-center md:text-left mb-8">
        Ofrecemos un ambiente de trabajo agradable, oportunidades de aprendizaje y un equipo que valora la 
        colaboración. Consulta nuestras vacantes actuales y aplica hoy mismo. 
        ¡Tu próximo paso en el mundo del café comienza aquí!
        </p>
      </div>
      
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          ¡Únete a nuestro equipo!
        </h2>
        <p className="text-gray-700 mb-10">
        Forma parte de una cafetería donde la pasión por el café y la buena atención hacen la diferencia! 
        Estamos en constante búsqueda de personas comprometidas y con ganas de crecer junto a nosotros. 
        Si te encanta el mundo del café, tienes un espíritu amable y disfrutas brindando un excelente servicio, 
        queremos conocerte.
        </p>
        <img src="../mozo2.jpg" alt="Mozos en la cafetería" className="rounded-lg shadow-lg w-full h-auto mb-6 mt-6" />
        <div className="flex justify-center w-full mt-10">
          <button className="bg-Btn-Agregar text-white py-2 px-4 rounded hover:bg-Btn-Quitar hover:text-black transition duration-300">
            Deja tu CV aquí
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default TrabajaConNosotros;
