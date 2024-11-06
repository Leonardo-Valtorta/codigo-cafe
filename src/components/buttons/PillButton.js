const PillButton = ({ children, className, onClick }) => {
    return (
      <button onClick={onClick}
        className={` text-white font-bold py-2 px-4 my-2 rounded-full inline-flex items-center ${className}`}
      >
        {children}
      </button>
    )
  }
   
  export default PillButton

  /* EJEMPLO DE USO DEL BOTON
    =========================
      Usar como un botón tradicional 
      Agregar los colores deseados y el texto
      Para agregar el icono usar el componente deseado

   <PillButton className="bg-btnRemoveItem hover:bg-btnRemoveItemHover">
      <IconRemove/>
      Quitar
    </PillButton>
  */ 