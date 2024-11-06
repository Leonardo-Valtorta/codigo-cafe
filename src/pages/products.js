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
                
                <div className="p-4 border-4 border-black">
                    <p>Otras Bebidas</p>
                </div>
                <div className="p-4 border-4 border-black">
                    <p>Comida</p>
                </div>
            </div>
            <div id="cafes" className="">
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </div>
            <div id="otras-bebidas" className="">
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </div>
            <div id="comida" className="">
                <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            </div>
        </div>
        

        <Footer />
    </>
    )
} 