import { useReducer } from "react";
import ShoppingFooter from "./ShoppingFooter"
import ShoppingListCards from "./ShoppingListCards"
import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import { TYPES } from "@/actions/actions"
import Product from "@/components/Product"

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

   const total = 7500 

   const {ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART } = TYPES;

   const ShoppingSection = () => {
    
           const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
   
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


return (
    <>
    
    <main className=" bg-bgShoppingCart">
{/**** PRODUCTOS DE MUESTRA ********/}
        <h3>Productos de muestra que hay que eliminar y pasar a la pagina productos</h3>
             <div className="flex flex-col justify-center">
            {
                products.map (product => <Product key={product.id} product = {product} addToCart={addToCart}/>)
            }
            </div>
{/**** FIN PRODUCTOS DE MUESTRA ********/}
    <div className="flex flex-col items-center bg-white py-1">
        <h4 className="font-titleCart text-2xl">Mi Pedido</h4>
    </div>
    <div className="flex flex-col items-center max-w-screen-sm m-auto">
    <section className="flex flex-col items-center w-4/5">
    <div className="flex flex-col justify-between p-0.5 w-4/5 ">
        <ShoppingListCards itemsCards={cart} deletefromCart= {deleteFromCart} addToCart={addToCart}/>
        <ShoppingFooter total= {total} clearCart = {clearCart}/>
    </div>
    </section>
    </div>
    </main>
    </>
    )
}
export default ShoppingSection