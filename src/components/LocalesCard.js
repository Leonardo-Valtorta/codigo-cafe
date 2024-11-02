const LocalesCard = ({nombreSucursal, direccion, telefono, horario}) => {
    return (
        <>
            <div className="flex flex-col bg-cafeLight py-4 px-8 font-body w-full justify-center sm:flex-row sm:p-0">
                <div className="sm:px-0 sm:py-6">
                    <div className="flex justify-start sm:justify-start sm:py-6">
                        <h2 className="font-medium italic text-[18px]">
                            {nombreSucursal}
                        </h2>
                    </div>
                    <div className="flex justify-start text-[16px] font-light italic py-4">
                        <ul>
                            <li><span className="font-bold">Dirección: </span>{direccion}</li>
                            <li><span className="font-bold">Whatsapp: </span>{telefono}</li>
                            <li><span className="font-bold">Horarios: </span>{horario}</li>
                        </ul>
                    </div> 
                </div>
            </div>   
        </>
    )
}

export default LocalesCard;