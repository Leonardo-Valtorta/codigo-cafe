import IconTrash from "../icons/IconTrash.js";
import PillButton from "../buttons/PillButton.js";
import PillButtonXL from "../buttons/PillButtonXL.js";
import Swal from 'sweetalert2';

const ShoppingFooter =(props) => {

    const {total, emptyCart} = props;

   const handleClear = () => {
    Swal.fire({
        background: "#FCF3CF",
        icon: "warning",
        title: "¿Estás seguro?",
        text: "¿Quieres vaciar el carrito?",
        customClass: {
          icon: 'custom-icon',
          container: 'sweet-alert-box',
        },
        showCancelButton: true,
        confirmButtonColor: "#15605B",
        cancelButtonColor: "#D33",
        confirmButtonText: "Sí",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          emptyCart(); 
          Swal.fire({
            title: "Vacío!",
            text: "Tu carrito está vacío",
            icon: "success",
            confirmButtonColor: "#15605B",
            confirmButtonText: "Aceptar",
          });
        }
      });
   }

    return (
    <>
    <div className="flex flex-col justify-between items-center m-3">
        <p className="font-bold text-lg">Total: ${total}</p>
        <div className="w-full text-center">
            <PillButtonXL className="bg-btnBuy hover:bg-btnBuyAllHover">Comprar</PillButtonXL> 
        </div>
        <div className= "w-full text-center">
            <PillButton className="bg-btnDeleteAll hover:bg-btnDeleteAllHover" onClick={handleClear}><IconTrash/>Vaciar Carrito</PillButton>
        </div>
    </div>
    </>
)
}
export default ShoppingFooter;