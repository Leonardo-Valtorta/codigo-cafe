import PillButton from "../buttons/PillButton";
import IconButton from "../buttons/IconButton";


const ProductCard = (props) =>{
    return (<>
        <div className="flex flex-col shadow-xl my-4">
            <h3 className="text-[20px] font-light italic">{props.item.name}</h3>
            <h4 className="text-[10px] font-light italic">{props.item.description}</h4>
            <div className ="flex flex-row">
                <div className="w-2/6 p-1">
                    <img src = {props.item.image} w-full object-contain/>
                </div>
                <div className= "flex flex-col justify-between w-4/6 p-2">
                    <p className="py-2">Subtotal: $ {props.item.price}</p>
                    <div>
                        <IconButton icon = {<IconMore/>}/>
                        <span className="text-xl">{props.item.quantity}</span>
                        <IconButton icon = {<IconLess/>}/>
                    </div>
                    <div className="self-end">
                    <PillButton className="bg-btnRemoveItem hover:bg-btnRemoveItemHover"><IconRemove/>Quitar</PillButton>
                    </div>
                </div>
            </div>   
        </div>
    </>)
}

export default ProductCard;