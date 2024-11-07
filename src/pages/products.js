import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortadaDos from "@/components/PortadaDos";
import ProductCard from "@/components/menuSection/ProductCard";
import Menu from "@/components/menuSection/Menu";


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
        
            <Menu />
        </div>
        <Footer />
    </>
    )
} 