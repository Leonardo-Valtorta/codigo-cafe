import RedSocial from "@/components/RedSocial";


export default function Contact() {
  return (
  <>
  
    <div className="bg-verde py-3">
      <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-gray-900">
        Contacto
      </h1>
      <div>
        <RedSocial 
          imagen='/assets/icono-instagram.png'
          sitio='#'
          texto='Instagram'
        />
        <RedSocial 
          imagen='/assets/icono-whatsapp.png'
          sitio='#'
          texto='WhatsApp'
        />
        <RedSocial 
          imagen='/assets/icono-facebook.png'
          sitio='#'
          texto='Facebook'
        />
        <RedSocial 
          imagen='/assets/icono-twitter-x.png'
          sitio='#'
          texto='Twiter'
        />
        <RedSocial 
          imagen='/assets/icono-internet.png'
          sitio='#'
          texto='www.codigocafe.com'
        />
      </div>
      
    </div>
  </>
  )
}