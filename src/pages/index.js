
import background from "../../public/bg.jpg";
import Image from "next/image";




export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between" >
         <div className="relative w-full">
         <div className="absolute -z-10 w-full">
            <Image src={background} alt="background image" className="w-full" width={1000} height={1000}/>

            </div>




            </div>

         <div>

         <Image src="/cafeteria.jpg" width={5184 / 10} height={3888 / 10} />

         
        </div>




     <h1 className="text-center font-semibold text-5xl mt-5">BIENVENIDOS</h1>

        <h2>Conoce la experiencia Codigo Cafe</h2>





  <main/>       
        


        
<div>

<Image src="/tasa cafe.jpg" width={235}  height={182} />
<Image src="/local-cafe.jpg" width={235} height={182} />
<Image src="/cafe con tostado.jpg" width={235} height={182} />
<Image src="/personal cafeteria.jpg" width={235} height={182} />


</div>













































































































































































































































































































































































































































































































        


     
        

     
       
    

   

    </main>
  );
}
