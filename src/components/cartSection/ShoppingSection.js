import ShoppingFooter from "./ShoppingFooter"
import ShoppingListCards from "./ShoppingListCards"
const itemsCards =[
    {
        description : 'Cafe con leche cremoso',
        price : 3500,
        quantity:1,
        image: './cafeconleche.jfif' }
    ,{
        description : 'Cafe con leche cremoso',
        price : 3500,
        quantity:1,
        image: './cafeconleche.jfif' }
    ];

   const total = 7500 

const ShoppingSection = () => {
return (
    <>
    <main className=" bg-bgShoppingCart">
    <div className="flex flex-col items-center bg-white py-1">
        <h4 className="font-titleCart text-2xl">Mi Pedido</h4>
    </div>
    <div className="flex flex-col items-center max-w-screen-sm m-auto">
    <section className="flex flex-col items-center w-4/5">
    <div className="flex flex-col justify-between p-0.5 w-4/5 ">
        <ShoppingListCards itemsCards={itemsCards}/>
        <ShoppingFooter total= {total}/>
    </div>
    </section>
    </div>
    </main>
    </>
    )
}
export default ShoppingSection