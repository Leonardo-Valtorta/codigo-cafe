import PillButton from "../buttons/PillButton";
import IconButton from "../buttons/IconButton";
import IconRemove from "../icons/IconRemove";
import IconMore from "../icons/IconMore"; 
import IconLess from "../icons/IconLess";

const ShoppingCard = ({item, deleteOneFromCart, deleteFromCart, addToCart}) => {
  
  const {name, price, id, qty,image} = item;
  
  /*const handleAddOne = () => ADD_ITEM_TO_CART(id); */

  const handleDeleteOne = () => {
    if (parseInt(item.qty, 10) > 1) { 
      deleteOneFromCart(item.id);
    } else { 
      const isConfirmed = window.confirm("Quieres eliminar el item del carrito?");
      if (isConfirmed) { deleteFromCart(id); }
    }
  };

  const handleDeleteAll = () => {
    const isConfirmed = window.confirm(  `Quieres eliminar el item del carrito?` );
    if (isConfirmed) { deleteFromCart(id); }
  };


  

    return (<>
  <div className="flex flex-col bg-bgShoppingCard p-2 shadow-xl my-4">
    <h4 className="bg-Coffee p-2 font-bold">{name}</h4>
    <div className ="flex flex-row">
      <div className="w-2/6 p-1">
        <img src = {image} className= "w-full h-full object-cover " />
      </div>
      <div className= "flex flex-col justify-between w-4/6 p-2">
        <p className="py-2">Subtotal: $ {price} x {qty} = $ {price * qty} </p>
        <div>
            <IconButton onClick = {() => addToCart(id)} icon = {<IconMore/>}/>
            <span className="text-xl">{qty}</span>
            <IconButton onClick ={handleDeleteOne}  icon = {<IconLess/>}/>
        </div>
        <div className="self-end">
        <PillButton onClick= {handleDeleteAll} className="bg-btnRemoveItem hover:bg-btnRemoveItemHover"><IconRemove/>Eliminar</PillButton>
        </div>
      </div>
    </div>
{/* FIN CARD DE ITEM DE CARRITO */}     
  </div>
    </>)
}

export default ShoppingCard;


