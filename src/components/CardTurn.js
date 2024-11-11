import Link from "next/link";

function CardTurn({ imagen, pagina, texto }) {
  return (
    <>
      <div className="card-turn">
        <div className="card-inner">
          <div className="card-front flex  items-center justify-center">
            <img
              src={imagen}
              alt={texto}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-title text-white font-bold p-4">{texto}</p>
            </div>
          </div>
          <div className="card-back flex items-center justify-center rounded-lg bg-cafe">
            <div>
            <Link href={pagina}>
              <div className="flex flex-col items-center justify-center h-full w-full">
                <h2 className="font-title text-white font-bold p-4 hover:text-yellow-900">{texto}</h2>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardTurn;
