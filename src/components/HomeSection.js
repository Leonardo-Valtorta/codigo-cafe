import Link from 'next/link';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('./Carousel'), { ssr: false });

const HomeSection = () => {
    return (
        <>
            <main className="flex flex-col items-center justify-between bg-backgroundMain">
              <Carousel />
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full p-6">
                    <h1 className="text-center font-semibold font-title text-[36px] mt-5 sm:text-[48px]">BIENVENIDOS</h1>
                    <p className="text-start font-semibold font-title text-[20px] sm:text-[36px]">Conocé la experiencia Codigo Café</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:py-1">
                    <div className="flex flex-row justify-center w-full px-6 py-4 sm:justify-end">
                      <div className="flex flex-col mx-4 my-2 bg-backgroundCafe bg-cover">
                        <Link className="font-title font-bold text-white py-10 px-10" href="/aboutUs">
                          NOSOTROS
                        </Link>
                      </div>
                      <div className="flex flex-col mx-4 my-2 bg-backgroundLocal bg-cover">
                        <Link className="font-title font-bold text-white py-10 px-10" href="/locales">
                          LOCALES
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full px-6 py-4 sm:justify-start">
                      <div className="flex flex-col mx-4 my-2 bg-backgroundTostado bg-cover">
                        <Link className="font-title font-bold text-white py-10 px-10" href="/products">
                          PRODUCTOS
                        </Link>
                      </div>
                      <div className="flex flex-col mx-4 my-2 bg-backgroundPersonal bg-cover">
                        <Link className="font-title font-bold text-white py-10 px-10" href="/aboutUs">
                          TRABAJA
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>  
            </main>
        </>
    )
}

export default HomeSection;