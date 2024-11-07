const Footer = () => {
    return (

<footer className="bg-verde rounded-lg shadow m-4 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      
    <ul className="sm:flex justify-center mt-3 text-sm font-medium text-white sm:mt-0">
        <li>
            <a href="/aboutUs" className="hover:underline me-4 md:me-6">Nosotros</a>
        </li>
        <li>
            <a href="/locales" className="hover:underline me-4 md:me-6">Locales</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Productos</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline">Contacto</a>
        </li>
    </ul>
    <span className="sm: flex justify-center text-sm text-white sm:text-center">Todos los derechos reservados.
    </span>
    </div>
</footer>
    )
      
}
export default Footer

