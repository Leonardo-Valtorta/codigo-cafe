import Header from "@/components/Header";
import Portada from "@/components/Portada";

export default function aboutUs() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center">
                <Portada
                    imagen={'/fondo-nosotros.png'}
                    titulo={'DISFRUTA EL AROMA, SABOREA EL MOMENTO'}
                />
                <div className="flex flex-col bg-cafe p-8 font-bodyNosotros w-full justify-center sm:flex-row">
                    <div className="py-4 sm:px-6 sm:w-[50%] sm:py-12">
                        <div className="flex justify-start sm:justify-center sm:py-6">
                            <h1 className="font-medium italic text-[24px]">
                                Bienvenidos a Código Café
                            </h1>
                        </div>
                        <div className="flex justify-start">
                            <p className="text-[20px] font-light italic">
                                Somos Codigo Café, una pasión por el dulce y el sabor auténtico. 
                                Nuestro objetivo es llevar un toque de nostalgia y deleite a cada 
                                uno de nuestros clientes con nuestras deliciosas medialunas caseras 
                                y mermeladas artesanales.
                            </p>
                        </div> 
                    </div> 
                    <div className="py-4 sm:px-6 sm:w-[50%] sm:py-12">
                        <div className="flex justify-start sm:justify-center sm:py-6">
                            <h1 className="font-medium italic text-[24px]">
                                Nuestra historia
                            </h1>
                        </div>
                        <div className="flex justify-start">
                            <p className="text-[20px] font-light italic">
                            Nacimos con el sueño de compartir el amor por el pan y la fruta. Fundados 
                            por un grupo de entusiastas culinarios, Codigo Café surge como un tributo a la 
                            tradición argentina, mezclando ingredientes típicos con técnicas modernas para 
                            crear experiencias gastronómicas únicas.
                            </p>
                        </div> 
                    </div> 
                </div>
            </div>
        </>
    )
}