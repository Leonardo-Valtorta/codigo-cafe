const PillButtonXL = ({ children, className }) => {
return (
    <>
    <button className={`text-white font-bold py-2 px-10 my-2 rounded-full drop-shadow-lg inline-flex items-center ${className}`}> 
        {children}
    </button>
    </>
)
}

export default PillButtonXL


  /* EJEMPLO DE USO DEL BOTON
    =========================
      Usar como un botón tradicional 
      Agregar los colores deseados y el texto

   <PillButtonXL className="bg-btnRemoveItem hover:bg-btnRemoveItemHover">
      Comprar
    </PillButtonXL>
  */ 