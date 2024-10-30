import PillButton from "./PillButton" 

const PillButtonXL = ({ children, className }) => {
return (
    <>
    <PillButton className={`px-14 ${className}`}> 
        {children}
    </PillButton>
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