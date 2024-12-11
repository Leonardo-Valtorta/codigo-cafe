import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NosotrosSection from "@/components/NosotrosSection";
import Portada from "@/components/Portada";


export default function aboutUs() {
    return (
        <>
            <Header />
            <Portada
                imagen={'/fondo-nosotros.png'}
                titulo={'"DISFRUTA EL AROMA, SABOREA EL MOMENTO"'}
            />
            <NosotrosSection />
            <Footer />
        </>
    )
}