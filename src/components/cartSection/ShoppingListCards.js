import ShoppingCard from "./ShoppingCard"

const ShoppingListCards = (props) => {

    const {itemsCards , deleteOneFromCart, deleteFromCart, addToCart}= props;

return (
<>
    <div>
         {
         itemsCards.map ((item, i) => <ShoppingCard key={i} item = {item} deleteOneFromCart={deleteOneFromCart} deleteFromCart={deleteFromCart} addToCart={addToCart}/>)
    }
    </div>
</>
)

}
export default ShoppingListCards