import Link from "next/link"
import RedSocial from "./RedSocial"

const Footer = () => {
    return (

<footer className="bg-verde rounded-lg shadow m-4 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      
    <ul className="sm:flex items-center mt-auto text-sm font-medium text-white sm:mt-0">
        <li>
            <RedSocial
              imagen="/assets/icono-instagram.png"
              sitio="#"
              texto="Instagram"
            />
           
        </li>
        <li>
            <RedSocial
              imagen="/assets/icono-whatsapp.png"
              sitio="#"
              texto="WhatsApp"
            />
            
        </li>
        <li>
            <RedSocial
              imagen="/assets/icono-facebook.png"
              sitio="#"
              texto="Facebook"
            />
           
           
        </li>
        <li>
            <RedSocial
              imagen="/assets/icono-twitter-x.png"
              sitio="#"
              texto="Twiter"
            />
        </li>
    </ul>
    <div className= "sm:flex self-end">
    <ul className="sm:flex items-center mt-auto text-sm font-medium text-white sm:mt-0">   
        <li>
            <Link href="/aboutUs" className="hover:underline me-4 md:me-6">Nosotros</Link>
        </li>
        <li>
            <Link href="/locales" className="hover:underline  me-4 md:me-6">Locales</Link>
        </li>
        <li>
            <Link href="/products" className="hover:underline  me-4 md:me-6">Productos</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6">Contacto</Link>
        </li>
    </ul>
    <span className="sm: flex justify-center text-sm text-white sm:text-center">Todos los derechos reservados.
    </span>
    </div>
    </div>
</footer>
    )
      
}
export default Footer

