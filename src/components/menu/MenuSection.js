import ProductCard from "./ProductCard";
import { estadoInicial } from "@/context/estadoInicial";

const MenuSection = ({section,sectionName,category}) =>{

        
        
        const products = estadoInicial.products;
        const addToCart = 0;    
        return (<>    
           <section id={section} className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">{sectionName}</h1>
                
                <div className= "flex flex-col justify-center">
                    {products
                        .filter(product=> product.category === category)
                        .map (product => { return (<div><ProductCard key={product.id} product = {product} addToCart={addToCart}/><hr></hr></div>)})
                    }
                </div>
                
            </section>
            <hr className="border-t-2 border-black my-3 mx-20"/> 
            <section id="otras-bebidas" className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">Otras Bebidas</h1>
                <div className= "flex flex-col justify-center">
                    {products
                        .filter(product=> product.category === "otras")
                        .map (product => { return (<div><ProductCard key={product.id} product = {product} addToCart={addToCart}/><hr></hr></div>)})
                    }
                </div>
            </section>
            <hr className="border-t-2 border-black my-3 mx-20"/> 
            <section id="comida" className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">Comida</h1>
                <div className= "flex flex-col justify-center">
                    {products
                        .filter(product=> product.category === "comida")
                        .map (product => { return (<div><ProductCard key={product.id} product = {product} addToCart={addToCart}/><hr></hr></div>)})
                    }
                </div>
            </section>
          
        </>) 
};

export default MenuSection;
