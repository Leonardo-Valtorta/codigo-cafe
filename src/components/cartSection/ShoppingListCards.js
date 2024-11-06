import ShoppingCard from "./ShoppingCard"

const ShoppingListCards = (props) => {
return (
<>
    <div>
        {
            console.log(props.itemsCards)
}
         {   props.itemsCards.map(item => <ShoppingCard item = {item} addToCart={props.addToCart} deleteFromCart={props.deleteFromCart}/> )
    }
    </div>
</>
)

}
export default ShoppingListCards