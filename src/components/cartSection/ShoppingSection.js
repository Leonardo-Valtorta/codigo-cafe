import { useReducer,useState } from "react";
import ShoppingFooter from "./ShoppingFooter"
import ShoppingListCards from "./ShoppingListCards"
import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import { TYPES } from "@/actions/actions"
import Product from "@/components/Product"
import PortadaDos from "../PortadaDos";

const itemsCards =[
    {
        description : 'Cafe con leche cremoso',
        price : 3500,
        quantity:1,
        image: './cafeconleche.jfif' }
    ,{
        description : 'Cafe con leche cremoso',
        price : 3500,
        quantity:1,
        image: './cafeconleche.jfif' }
    ];

   const {ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART } = TYPES;

   const ShoppingSection = () => {
    
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
        const init = (shoppingInitialState) =>{
            shoppingInitialState.products= getProducts();    
        // console.log(shoppingInitialState.Products);
            shoppingInitialState.cart= [];//getItemsCart();    
            return (shoppingInitialState) 
       }
        
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState, init)
   
           const {products, cart} = state

          
           const addToCart = (id) => dispatch ({type: ADD_TO_CART, payload: id})
           
           const deleteFromCart = (id, all = false) => {
               if (all) {
                   dispatch ({type: REMOVE_ALL_ITEMS, payload: id})
               } else {
                   dispatch ({type: REMOVE_ONE_ITEM, payload: id})
               }
           }
           const clearCart = () => dispatch ({type: CLEAR_CART})

           const { items, total } = cart.reduce(
            ({ items, total }, { price, quantity }) => ({
              items: items + quantity,
              total: total + quantity * price
            }),
            { items: 0, total: 0 }
          );

return (
    <>
    
    <main className=" bg-bgShoppingCart">
{/**** PRODUCTOS DE MUESTRA ********/}
        <h3>Productos de muestra que hay que eliminar y pasar a la pagina productos</h3><br></br>
             <div className="flex flex-col justify-center">
            {
                products.map (product => { return(<div><Product key={product.id} product = {product} addToCart={addToCart}/><hr></hr></div>)})
            }
            </div>
{/**** FIN PRODUCTOS DE MUESTRA ********/}

    <PortadaDos 
        titulo={'Mi Pedido'}
    />
    {/* <div className="flex flex-col items-center bg-white py-1">
        <h4 className="font-titleCart text-2xl">Mi Pedido</h4>
    </div> */}
    <div className="flex flex-col items-center max-w-screen-sm m-auto">
    <section className="flex flex-col items-center w-4/5">
    <div className="flex flex-col justify-between p-0.5 w-4/5 ">
        <ShoppingListCards itemsCards={cart} deleteFromCart= {deleteFromCart} addToCart={addToCart}/>
        <ShoppingFooter total= {total} clearCart = {clearCart}/>
    </div>
    </section>
    </div>
    </main>
    </>
    )
}
export default ShoppingSection