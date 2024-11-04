import axios from "axios"
import { useEffect } from "react";

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
    
    return (
        <>
          {/*  {dbProducts.map(item => <h1>item.name</h1>)} */}
         </>
    )
}
export default Api;