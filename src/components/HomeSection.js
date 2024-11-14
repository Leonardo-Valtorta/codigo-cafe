import dynamic from "next/dynamic";
import CardTurn from "./CardTurn";

const Carousel = dynamic(() => import("./Carousel"), { ssr: false });

const HomeSection = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <Carousel />
        <div className="relative w-full pb-5">
          <div className="absolute inset-0 bg-backgroundMain opacity-60"></div>
          <div className="relative z-10 flex flex-col w-full p-4">
            <h1 className="text-center font-extrabold drop-shadow-lg text-[36px] sm:text-[48px] opacity-100 blur-0">
              BIENVENIDOS
            </h1>
            <p className="text-start font-semibold font-title text-[20px] sm:text-[36px] opacity-100">
              Conocé la experiencia Codigo Café
            </p>
          </div>
          <div className="flex justify-center pt-3">
            <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 opacity-100">
              <CardTurn 
                imagen="/cafe.jpg" 
                pagina="/aboutUs" 
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
                pagina="/trabajaConNosotros"
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
