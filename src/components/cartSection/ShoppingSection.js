import { useReducer } from "react";
import ShoppingFooter from "./ShoppingFooter"
import ShoppingListCards from "./ShoppingListCards"
import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import { TYPES } from "@/actions/actions"
import PortadaDos from "../PortadaDos";
import { ShoppingContext } from "@/context/shoppingContextProvider";
import { useContext, useEffect } from "react";

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

   

   

   const ShoppingSection = () => {

        const {db, READ_DATA, ADD_ITEM_TO_CART, DELETE_ITEM_IN_CART, DELETE_ONE_ITEM_IN_CART, EMPTY_CART} = useContext(ShoppingContext);
        useEffect(() => {READ_DATA()}, []);

        const {products,cart} = db;

        const total = cart.reduce((acumulator, item) => acumulator + item.price * item.qty, 0);
          {/* const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
   
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
          );  */}

return (
    <>
    
    <main className=" bg-bgShoppingCart">
    {/* /**** PRODUCTOS DE MUESTRA 
        <h3>Productos de muestra que hay que eliminar y pasar a la pagina productos</h3><br></br>
             <div className="flex flex-col justify-center">
            {
                products.map ((product) => <Product key={product.id} product = {product} addToCart={addToCart}/>)
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
        <ShoppingListCards itemsCards={cart} deleteOneFromCart= {DELETE_ONE_ITEM_IN_CART} deleteFromCart={DELETE_ITEM_IN_CART} addToCart={ADD_ITEM_TO_CART}/>
        <ShoppingFooter total= {total} emptyCart= {EMPTY_CART}/>
    </div>
    </section>
    </div>
    </main>
    </>
    )
}
export default ShoppingSection