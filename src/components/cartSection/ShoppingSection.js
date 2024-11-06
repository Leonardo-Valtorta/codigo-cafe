import { useReducer } from "react";
import ShoppingFooter from "./ShoppingFooter"
import ShoppingListCards from "./ShoppingListCards"
import { shoppingReducer } from "@/reducer/shoppingReducer";
import { shoppingInitialState } from "@/reducer/shoppingInitialState";
import { TYPES } from "@/actions/actions";


const {ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART } = TYPES;

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

const ShoppingSection = () => {
    
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {cart} = state
        
    const addToCart = (id) => dispatch ({type: ADD_TO_CART, payload: id})
        
    const deleteFromCart = (id, all = false) => {
        if (all) {
            dispatch ({type: REMOVE_ALL_ITEMS, payload: id})
        } else {
            dispatch ({type: REMOVE_ONE_ITEM, payload: id})
        }
    }
return (    
    <>
    
    <main className=" bg-bgShoppingCart">
    <div className="flex flex-col items-center bg-white py-1">
        <h4 className="font-titleCart text-2xl">Mi Pedido</h4>
    </div>
    <div className="flex flex-col items-center max-w-screen-sm m-auto">
    <section className="flex flex-col items-center w-4/5">
    <div className="flex flex-col justify-between p-0.5 w-4/5 ">
        <ShoppingListCards itemsCards={cart} addToCart={addToCart} deleteFromCart={deleteFromCart}/>
        <ShoppingFooter total= {total}/>
    </div>
    </section>
    </div>
    </main>
    </>
    )
}
export default ShoppingSection