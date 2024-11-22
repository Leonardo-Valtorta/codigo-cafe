import ShoppingSection from "@/components/cartSection/ShoppingSection";
import Header from "@/components/Header"
import Head from "next/head";

export default function Home() {
  return (
    <> 
    <Head>
      <title>Código Café - Carrito</title>
      <meta name="description" content="Esta es la página de los productos que pidió" />
    </Head>
    <Header/>
    <ShoppingSection/>
    </>
  );
}

