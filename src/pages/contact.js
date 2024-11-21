import Footer from "@/components/Footer";
import FormContact from "@/components/FormContact";
import Header from "@/components/Header";
import RedSocial from "@/components/RedSocial";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Código Café - Contacto</title>
        <meta name="description" content="Esta es la página de contacto" />
      </Head>
      <Header />
      <div className="bg-verde py-3">
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-gray-900">
          Contacto
        </h1>
        <div className="flex justify-center">
          <div className="lg:flex lg:justify-between">
            <RedSocial
              imagen="/assets/icono-instagram.png"
              sitio="#"
              texto="Instagram"
            />
            <RedSocial
              imagen="/assets/icono-whatsapp.png"
              sitio="#"
              texto="WhatsApp"
            />
            <RedSocial
              imagen="/assets/icono-facebook.png"
              sitio="#"
              texto="Facebook"
            />
            <RedSocial
              imagen="/assets/icono-twitter-x.png"
              sitio="#"
              texto="Twiter"
            />
            <RedSocial
              imagen="/assets/icono-internet.png"
              sitio="#"
              texto="www.codigocafe.com"
            />
          </div>
        </div>
        <div className="w-1/2 mr-auto ml-auto">
          <h2 className="text-white font-bold mt-5 mb-5 text-3xl">
            Contáctanos:
          </h2>
          <div className="z-0 py-4 bg-white/25 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
            <FormContact />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
