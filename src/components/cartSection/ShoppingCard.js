import PillButton from "../buttons/PillButton";
import IconButton from "../buttons/IconButton";
import IconRemove from "../icons/IconRemove";
import IconMore from "../icons/IconMore"; 
import IconLess from "../icons/IconLess";

const ShoppingCard = ({item, deleteFromCart, addToCart}) => {
      const {name, price, id, quantity} = item;

    return (<>
  <div className="flex flex-col bg-bgShoppingCard p-2 shadow-xl my-4">
    <h4 className="bg-Coffee p-2 font-bold">{name}</h4>
    <div className ="flex flex-row">
      <div className="w-2/6 p-1">
        <img src = "cafeconleche.jfif"w-full object-contain/>
      </div>
      <div className= "flex flex-col justify-between w-4/6 p-2">
        <p className="py-2">Subtotal: $ {price} x {quantity} = $ {price * quantity} </p>
        <div>
            <IconButton onClick = {() => addToCart(id)} icon = {<IconMore/>}/>
            <span className="text-xl">1</span>
            <IconButton onClick = {()=> deleteFromCart(id)} icon = {<IconLess/>}/>
        </div>
        <div className="self-end">
       
   {/* <PillButton onClick = {()=> deleteFromCart(id)} className="bg-btnRemoveItem hover:bg-btnRemoveItemHover"><IconRemove/>Eliminar uno</PillButton>*/ }
       
        <PillButton onClick= {()=> deleteFromCart(id, true)} className="bg-btnRemoveItem hover:bg-btnRemoveItemHover"><IconRemove/>Eliminar</PillButton>
        </div>
      </div>
    </div>
{/* FIN CARD DE ITEM DE CARRITO */}     
  </div>
    </>)
}

export default ShoppingCard;