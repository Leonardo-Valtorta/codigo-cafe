import ShoppingCard from "./ShoppingCard"

const ShoppingListCards = (props) => {

    const {itemsCards , deleteFromCart, addToCart}= props;

return (
<>
    <div>
         {
         itemsCards.map ((item, i) => <ShoppingCard key={i} item = {item} deleteFromCart={deleteFromCart} addToCart={addToCart}/>)
    }
    </div>
</>
)

}
export default ShoppingListCards