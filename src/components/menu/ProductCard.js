import PillButton from "../buttons/PillButton";
import IconPlus from "../icons/IconPlus";



const ProductCard = ({product,addToCart}) =>{

    const {id,name,price,image,description} = product;

    return (<>
        <div className="h-64 shadow-xl my-4 w-full h-full">
            <h3 className="text-[20px] font-medium italic">{name}</h3>
            <h4 className="text-[15px] font-light italic">{description}</h4>
            <div className ="flex flex-row mt-auto mb-1">
                <div className="p-1 md:w-150 md:h-150">
                    <img src = {image} alt={name} className="w-[20vh] h-[20vh] md:w-[16vw] md:h-[16vw] object-cover "/>
                </div>
                <div className= "flex flex-col  self-end w-4/6 p-2 md:w-300">
                    <p className="py-2 font-bold-italic text-right">Precio: $ {price}</p>
                    <div className="self-end">
                    <PillButton onClick = {() => addToCart(id)} className="bg-Btn-Agregar"><IconPlus/>Agregar al carrito</PillButton>
                    </div>
                </div>
            </div>   
        </div>
    </>)
}

export default ProductCard;

