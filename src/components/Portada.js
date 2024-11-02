const Portada = ({imagen, titulo}) => {
    return (
        <>
            <div 
                className="flex w-full bg-cover bg-center h-80 items-end justify-center pb-4"
                style={{ backgroundImage: `url(${imagen})` }}
            >
                <p className="text-center text-[32px] font-titleCart sm:text-[48px] px-8">
                    {titulo}
                </p>
            </div>
        </>
    )
} 

export default Portada;