import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NosotrosSection from "@/components/NosotrosSection";
import Portada from "@/components/Portada";
import Head from "next/head";


export default function aboutUs() {
    return (
        <>
            <Head>
                <title>Código Café - Acerca de...</title>
                <meta name="description" content="En esta página encontrarás información sobre nosotros" />
            </Head>
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