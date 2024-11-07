import Image from "next/image"
import Link from "next/link"


function RedSocial({imagen, sitio, texto}) {
  return (
    <>
      <div className="ml-8 mt-3 mb-3">
        <div class="flex items-center gap-4 hover:scale-105">
          <Image
            src={imagen}
            width={48}
            height={48}
            alt="Icono de instagram"
          />
          <div className="font-medium text-white hover:text-cyan-200 dark:text-white">
              <Link href={sitio}>
                <div>{texto}</div>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RedSocial