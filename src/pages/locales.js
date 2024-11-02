import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LocalesCard from "@/components/LocalesCard";
import Portada from "@/components/Portada";



export default function locales() {
    return (
        <>
            <Header />
            <Portada 
                imagen={'/fondo-locales.png'}
                titulo={'LOCALES'}
            />
            <div className="p-8 bg-cafeLight sm:pb-0">
                <h1 className="font-medium italic text-[24px]">
                    Nuestras sucursales
                </h1>
            </div>
            <div className="flex flex-col sm:flex-row">
                <LocalesCard 
                    nombreSucursal={'CÓDIGO CAFÉ MENDOZA'}
                    direccion={'San Martín 1315, Capital'}
                    telefono={'+261-5451234'}
                    horario={'Lunes a Viernes de 8 a 20hs'}
                />
                <LocalesCard 
                    nombreSucursal={'CÓDIGO CAFÉ CÓRDOBA'}
                    direccion={'Rivadavia 1464, Capital'}
                    telefono={'+351-4568138'}
                    horario={'Lunes a Sábado de 9 a 21hs'}
                    />
                <LocalesCard 
                    nombreSucursal={'CÓDIGO CAFÉ BUENOS AIRES'}
                    direccion={'Cabildo 785, CABA'}
                    telefono={'+11-4681351'}
                    horario={'Lunes a Domingo de 8 a 20hs'}
                />
                <LocalesCard 
                    nombreSucursal={'CÓDIGO CAFÉ SANTA FE'}
                    direccion={'25 de Mayo 2542, Capital'}
                    telefono={'+261-5481354'}
                    horario={'Lunes a Viernes de 9 a 21hs'}
                />
            </div>
            <Footer />
        </>
    )
}