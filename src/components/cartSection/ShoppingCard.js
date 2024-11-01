import PillButton from "../buttons/PillButton";
import IconButton from "../buttons/IconButton";
import IconRemove from "../icons/IconRemove";
import IconMore from "../icons/IconMore"; 
import IconLess from "../icons/IconLess";

const ShoppingCard = ({ item, deleteFromCart}) =>{
      const {name, price, id} = item;

    return (<>
  <div className="flex flex-col bg-bgShoppingCard p-2 shadow-xl my-4">
    <h4 className="bg-Coffee p-2 font-bold">{name}</h4>
    <div className ="flex flex-row">
      <div className="w-2/6 p-1">
        <img src = "cafeconleche.jfif"w-full object-contain/>
      </div>
      <div className= "flex flex-col justify-between w-4/6 p-2">
        <p className="py-2">Subtotal: $ {price}</p>
        <div>
            <IconButton icon = {<IconMore/>}/>
            <span className="text-xl">1</span>
            <IconButton icon = {<IconLess/>}/>
        </div>
        <div className="self-end">
        <PillButton onClick={()=> deleteFromCart(id)} className="bg-btnRemoveItem hover:bg-btnRemoveItemHover"><IconRemove/>Quitar</PillButton>
        </div>
      </div>
    </div>
{/* FIN CARD DE ITEM DE CARRITO */}     
  </div>
    </>)
}

export default ShoppingCard;