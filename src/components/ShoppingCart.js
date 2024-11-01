import { shoppingInitialState } from "@/reducer/shoppingInitialState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import Product from "./Product"
import { TYPES } from "@/actions/actions"
import { useReducer } from "react"
import ShoppingCard from "./cartSection/ShoppingCard"

const {ADD_TO_CARD, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CLEAR_CART } = TYPES;

const ShoppingCart = () => {
 
        const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

        const {products, cart} = state

        const addToCart = (id) => dispatch ({type: ADD_TO_CARD, payload: id})
        
        const deleteFromCart = () => dispatch ({type: REMOVE_ONE_ITEM, payload: id})
        const clearCart = () => dispatch ({type: CLEAR_CART})

    return (
    <>
    <h2>Carrito de Compras</h2>
    <h3>Productos</h3>
    <div className="box grid-responsive">
        {
            products.map (product => <Product key={product.id} product = {product} addToCart={addToCart}/>)
        }
    </div>
    <h3>Carrito</h3>
    <div className="box">
        {
            cart.map ((item, i) => <ShoppingCard key={i} item = {item} />)
        }
    </div>
    <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  )
}

export default ShoppingCart