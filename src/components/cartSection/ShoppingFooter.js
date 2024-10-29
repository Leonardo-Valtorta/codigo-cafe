import IconTrash from "../icons/IconTrash.js";
import PillButton from "../buttons/PillButton.js";
import PillButtonXL from "../buttons/PillButtonXL.js";
const ShoppingFooter =(props) => {
return (
    <>
    <div className="flex flex-col justify-between items-center m-3">
        <p className="font-bold text-lg">Total: ${props.total}</p>
        <div>
            <PillButtonXL className="bg-btnBuy hover:bg-btnBuyAllHover">Comprar</PillButtonXL> 
        </div>
        <div>
            <PillButton className="bg-btnDeleteAll hover:bg-btnDeleteAllHover"><IconTrash/>Vaciar Carrito</PillButton>
        </div>
    </div>
    </>
)
}
export default ShoppingFooter;