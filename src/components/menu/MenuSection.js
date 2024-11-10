import ProductCard from "./ProductCard";
import { estadoInicial } from "@/context/estadoInicial";

const MenuSection = ({section,sectionName,category}) =>{

        
        
        const products = estadoInicial.products;
        const addToCart = 0;    
        return (<>    
           <section id={section} className="items-center mx-[6vw]">
                <h1 className="font-medium italic text-[6vh] md:text-[8vh] text-center md:text-left underline">{sectionName}</h1>
                
                <div className= "flex flex-col justify-center grid md:grid-cols-2 gap-4">
                    {products
                        .filter(product=> product.category === category)
                        .map (product => { return (<div><ProductCard key={product.id} product = {product} addToCart={addToCart}/></div>)})
                    }
                </div>
                
            </section>
            <hr className="border-t-2 border-black my-3 mx-[6vw]"/> 
            
          
        </>) 
};

export default MenuSection;
