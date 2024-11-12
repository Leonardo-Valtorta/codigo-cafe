import axios from "axios"
import { useEffect, useState } from "react";

const Api = () =>{

    const getProducts = async() =>{

        const ENDPOINT= "http://localhost:5000/products";
        const response = axios.get(ENDPOINT);
        const dbProducts = (await response).data;
        console.log(dbProducts);
    }

    const getItemsCart = async() =>{

        const ENDPOINT= "http://localhost:5000/cart";
        const response = axios.get(ENDPOINT);
        const dbItems = (await response).data;
        console.log(dbItems);
    }


    useEffect(() => {
    getItemsCart()
    getProducts() 
    }, [])
    
    return (
        <>
        hola
        </>
        )
}
export default Api;
