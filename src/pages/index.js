import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Head from "next/head";
import Slider from "@/components/Slider";



export default function Home() {
  return (
    <>
      <Head>
        <title>Código Café - Inicio</title>
        <meta name="description" content="Esta es la página de inicio" />
      </Head>

      <Header />
      <HomeSection />
      <Slider />
      <Footer />

    </>
  );
}