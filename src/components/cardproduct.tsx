import Image from "next/image"
import { FaRegStar } from "react-icons/fa";
import card1 from "/public/card1.svg"
import card2 from "/public/card2.svg"
import card3 from "/public/card3.svg"
import card4 from "/public/card4.svg"
import card5 from "/public/card5.svg"

export function Card({cardIndex}){

 

  



    const arrayImg=[card1, card2,card3,card4,card5]

    const imgIndex = cardIndex < arrayImg.length ? cardIndex:0

return(
<div className="bg-white rounded-lg shadow-lg p-3 relative hover:shadow-lg transform hover:scale-105 transition duration-300 select-none">

    <div>
     
    <Image src={arrayImg[cardIndex]} alt="imgProduct" />
     
    </div>

    <div className="flex justify-between gap-3 my-3">
        <div>
        <p className="text-black font-bold">TITULO PRODUTO</p>
        <p className="text-gray-600">Descrição</p>
        </div>
        <div className="flex flex-col items-end">
        <strong className="text-violet-600">1200R$</strong>
        <a className="text-gray-400">175R$</a>
        </div>
        

    </div>

    

    <div className="flex justify-center place-items-center">

    <button
        className="mx-2 select-none rounded-lg bg-gradient-to-tr from-purple-600 to-purple-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        type="button"
      >
        Mais informações
      </button>

    <button
        className="select-none rounded-lg bg-gradient-to-tr from-purple-600 to-purple-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        type="button"
      >
        Compre agora!
      </button>
      

    </div>

</div>
)
}