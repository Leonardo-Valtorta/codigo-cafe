import ShoppingCard from "./ShoppingCard"

const ShoppingListCards = (props) => {
return (
<>
    <div>
        {
        props.itemsCards.map(item => <ShoppingCard item = {item}/> )
    }
    </div>
</>
)

}
export default ShoppingListCards