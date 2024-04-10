import Image from "next/image"
import { useEffect, useState } from "react";
import Modal from "./modal";

interface produto{
  produtosid: string
  nome: string
  preco: string
  descricao: string
  img: string
}

interface CardProps{
  produto: produto
  openModal: (e :any) => void
}

export function Card( {openModal, produto}: CardProps){

  const [currentProduto, setCurrentProduto] = useState(produto)

    useEffect(()=>{
      setCurrentProduto(produto)
    },[produto])

      
return(
<div className="bg-white rounded-lg shadow-lg p-3 relative hover:shadow-lg transform hover:scale-105 transition duration-300 select-none">

    <div>
     
    <Image src={currentProduto.img} width={535} height={300} alt="imgProduct" />
     
    </div>

    <div className="flex justify-between gap-3 my-3">
        <div>
        <p className="text-black font-bold">{currentProduto.nome}</p>
        </div>
        <div className="flex flex-col items-end">
        <strong className="text-violet-600">{currentProduto.preco}R$</strong>
        <br></br>
        </div>
        

    </div>

    

    <div className="flex justify-center place-items-center">

    <button
        className="mx-2 select-none rounded-lg bg-gradient-to-tr from-purple-600 to-purple-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        type="button"
        onClick={openModal}
        id={produto.produtosid}
      >
        Mais informações
      </button>
    </div>
</div>
)
}