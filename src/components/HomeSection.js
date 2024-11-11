import Link from "next/link";
import dynamic from "next/dynamic";
import CardTurn from "./CardTurn";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

const HomeSection = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-between bg-backgroundMain">
        <Carousel />
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full p-6">
            <h1 className="text-center font-semibold font-title text-[36px] mt-5 sm:text-[48px]">
              BIENVENIDOS
            </h1>
            <p className="text-start font-semibold font-title text-[20px] sm:text-[36px]">
              Conocé la experiencia Codigo Café
            </p>
          </div>
          <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-4">
              <CardTurn 
                imagen="/cafe.jpg" 
                pagina="/aboutUS" 
                texto="NOSOTROS" 
              />
              <CardTurn 
                imagen="/local.jpg" 
                pagina="/locales" 
                texto="LOCALES" 
              />
              <CardTurn
                imagen="/tostado.jpg"
                pagina="/products"
                texto="PRODUCTOS"
              />
              <CardTurn
                imagen="/personal.jpg"
                pagina="/aboutUs"
                texto="TRABAJA"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeSection;
