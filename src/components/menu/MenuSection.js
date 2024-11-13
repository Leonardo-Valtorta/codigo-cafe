
import { ShoppingContext } from "@/context/ShoppingContextProvider";
import ProductCard from "./ProductCard";

import { useContext, useState, useEffect } from "react";



  
 

const MenuSection = ({section,sectionName,category}) =>{
        
        const {db, READ_DATA, ADD_ITEM_TO_CART} = useContext(ShoppingContext);
        useEffect(() => {READ_DATA()}, []);
       
        const {products,cart} = db;
        
     
        return (<>    
           <section id={section} className="items-center mx-[6vw]">
                <h1 className="font-medium font-titleCart text-[6vh] md:text-[8vh] text-center md:text-left">{sectionName}</h1>
                
                <div className= "flex flex-col justify-center grid md:grid-cols-2 gap-4">
                    {products
                        .filter(product=> product.category === category)
                        .map ((product) =>  <ProductCard key={product.id} product = {product} addToCart={ADD_ITEM_TO_CART}/>)
                    }
                </div>
                
            </section>
            <hr className="border-t-2 border-black my-3 mx-[6vw]"/> 
            
          
        </>) 
};

export default MenuSection;
