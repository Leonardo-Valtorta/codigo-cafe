import PillButton from "../buttons/PillButton";
import IconPlus from "../icons/IconPlus";



const ProductCard = (product,addToCart) =>{

    const {id,name,price,image,description} = product;

    return (<>
        <div className="flex flex-col shadow-xl my-4">
            <h3 className="text-[20px] font-medium italic">{name}</h3>
            <h4 className="text-[10px] font-light italic">{description}</h4>
            <div className ="flex flex-row">
                <div className="w-2/6 p-1">
                    <img src = {image} w-full object-contain/>
                </div>
                <div className= "flex flex-col justify-between w-4/6 p-2">
                    <p className="py-2 font-bold-italic">Precio: $ {price}</p>
                    <div className="self-end">
                    <PillButton onClick = {() => addToCart(id)} className="bg-Btn-Agregar"><IconPlus/>Agregar al carrito</PillButton>
                    </div>
                </div>
            </div>   
        </div>
    </>)
}

export default ProductCard;

