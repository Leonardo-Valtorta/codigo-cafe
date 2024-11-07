import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortadaDos from "@/components/PortadaDos";
import Product from "@/components/Product";


export default function Products() {
    return (
    <>
        <Header />
        <PortadaDos
            titulo={'PRODUCTOS'}
        />
        
        
        <div className="flex flex-col bg-cafeLight w-full pb-8 font-body">
            <div className="sticky text-center bg-cafeLight w-full h-20 pb-4 md:h-30 grid grid-cols-3 font-navbar text-2xl font-bold">
                <Link href="#cafes" className="p-4 border-2 hover:border-white hover:text-white px-3 sm:pl-0 py-2 hover:underline hover:bg-navbarBackgroundSecond">
                    CAFES
                </Link>
                <Link href="#otras-bebidas" className="p-4 border-2 hover:border-white hover:text-white px-3 sm:pl-0 py-2 hover:underline hover:bg-navbarBackgroundSecond">
                    OTRAS BEBIDAS
                </Link>
                <Link href="#comida" className="p-4 border-2 hover:border-white hover:text-white px-3 sm:pl-0 py-2 hover:underline hover:bg-navbarBackgroundSecond">
                    COMIDA
                </Link>
              
                
            </div>
            <section id="cafes" className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">Cafes</h1>
                <p className="text-[20px] font-light italic text-center">AAAAAAAAAAAAAAAAAAAA</p>
            </section>
            <hr className="border-t-2 border-black my-3 mx-20"/> 
            <section id="otras-bebidas" className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">Otras Bebidas</h1>
                <p>AAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </section>
            <hr className="border-t-2 border-black my-3 mx-20"/> 
            <section id="comida" className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">Comida</h1>
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </section>
        </div>
        

        <Footer />
    </>
    )
} 