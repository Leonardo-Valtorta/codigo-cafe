import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortadaDos from "@/components/PortadaDos";
import MenuSection from "@/components/menu/MenuSection";


export default function Products() {
    return (
    <>
    
        <div>
            <Header />
        </div>
            <PortadaDos
                titulo={'PRODUCTOS'}
            />
        <div>
            <div className="sticky z-20 top-0  text-center bg-cafeLight w-full h-20 pb-4 md:h-30 grid grid-cols-3 font-navbar text-2xl font-bold">
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
        
    
            <div className="flex flex-col bg-cafeLight  pb-8 font-body">
                
            
                <MenuSection section="cafes" sectionName="Cafés" category="cafe" />
                <MenuSection section="otras-bebidas" sectionName="Otras Bebidas" category="otras" />
                <MenuSection section="comida" sectionName="Comida" category="comida" />
            </div>
        </div>
        <Footer />
        
    </>
    )
} 