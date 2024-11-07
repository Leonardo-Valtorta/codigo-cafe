import ProductCard from "./ProductCard";
import { estadoInicial } from "@/context/estadoInicial";

const Menu = () =>{
        
        const products = estadoInicial.products;
        const addToCart = 0;    
        return (<>    
           <section id="cafes" className="text-wrap items-center">
                <h1 className="font-medium italic text-[24px] text-center md:text-left">Cafes</h1>
                
                <div className= "flex flex-col justify-center">
                    {products
                        .filter(product=> product.category === "cafe")
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

export default Menu;
