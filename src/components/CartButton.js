import { useContext, useEffect } from "react";
import { ShoppingContext } from "@/context/shoppingContextProvider";
import Link from "next/link";
import Image from "next/image";

const CartButton= () => {
    const {db, READ_DATA} = useContext(ShoppingContext);
        useEffect(() => {READ_DATA()}, []);
    return (<>
        <button>
            <Link className="relative w-6 h-auto" href="/cart">
                    <Image
                    src="/carrito-tienda.png" 
                    alt="Carrito"  
                    width={24} 
                    height={24} 
                    />
                    <span className="w-4 h-4 flex items-center justify-center absolute top-0 right-0 bg-red-500 text-white rounded-full text-[12px] transform translate-x-1/2 -translate-y-1/2">{db.cart.length}</span>
            </Link>
        </button>
    </>)
};

export default CartButton;