import axios from "axios"
import { useEffect, useState } from "react";

const Api = () =>{

    const readState = async() =>{

        const ENDPOINT= "http://localhost:5000/products";
        const response = axios.get(ENDPOINT);
        const dbProducts = (await response).data;
        console.log(dbProducts);

    }
    useEffect(() => {
    readState() 
    }, [])
    
    return (dbProducts)
}
export default Api;
