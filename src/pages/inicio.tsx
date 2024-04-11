import "../app/globals.css";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Image from "next/image"
import React, {useEffect, useState} from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import  headerInicio from "/public/headerInicio.svg"
import  headerDois from "/public/headerDois.svg"
import  headerTres from "/public/headerTres.svg"
import  headerQuatro from "/public/headerQuatro.svg"
import { GridContainer } from "@/components/grid";
import { Card } from "../components/cardproduct"
import Modal from "@/components/modal";


interface produto{
    produtosid: string
    nome: string
    preco: string
    descricao: string
    img: string
  }

export default function Inicio(){

    const [produto, setProduto]=useState([])

    //fetch getAllProdutos

    useEffect(()=>{

        const getProdutos = async () =>{
            try {
                const response = await fetch('/api/getProdutos')
                  if(!response.ok){
                    throw new Error("Erro ao selecionar produtos para o front!")
                  }
                  const data = await response.json()
                  setProduto(data)
                 
            } catch (error) {
                console.error("Erro ao buscar produtos: "+ error);
            }
          }

          getProdutos()
    },[])
    

    //modal
    const [modalOpen, setModalOpen] = useState(false);
    const [uniqueProduto, setUniqueProduto] = useState<produto | null>(null)

    const handleOpenModal = async (id: string) => {
        setModalOpen(true)
       
        try {
            const response = await fetch(`/api/${id}`)
            if(!response.ok){
                throw new Error('Erro ao selecionar o produto desejado!')
                return false
            }else{          
                const [data] = await response.json()
                setUniqueProduto(data)    
                
                return true
            }

        } catch (error) {
            console.log(error)
            return false
        }

    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const imgSlides = [
        {
            img: headerInicio
        },
        {
            img: headerDois
        },
        {
            img: headerTres
        },
        {
            img: headerQuatro
        }
    ]

    //fetch uniqueProduto

    


    //CARROSEL IMAGENS
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToSlide = (slideIndex: React.SetStateAction<number>) =>{
        setCurrentIndex(slideIndex)
    }

    const antSlide = () => {
        const isFirst = currentIndex === 0
        const newIndex = isFirst ? imgSlides.length-1 : currentIndex
        setCurrentIndex(newIndex)
    }

    const proxSlide = () => {
        const isLast = currentIndex === imgSlides.length-1
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    } 
    //CARROSEL IMAGENS


    return(
     <div className="flex flex-col min-h-screen">
            <Header />
        <GridContainer className="flex-grow">
         <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative mt-20">
            <Image src={imgSlides[currentIndex].img} alt={"imagem Slides"} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"/>
              

              <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <GoArrowLeft onClick={antSlide} size={30}/>
                 </div>

              <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <GoArrowRight onClick={proxSlide} size={30}/>
                 </div>

                 <div className="flex top-4 justify-center py-2">
                        {imgSlides.map((imgSlides, imgSlideIndex) =>(
                            <div key={imgSlideIndex} onClick={() => goToSlide(imgSlideIndex)} className="text-2xl cursor-pointer"> 
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>

                     </div>

                    <section className="px-20 mt-6">
                        <div className="">
                          
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                
                            {produto.map((produto, index)=>(
                                <Card openModal={(e) =>{handleOpenModal(e.target.id)}} key={index} produto={produto}/>
                            ))}
                            {uniqueProduto &&(
                            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                                <div className="flex flex-col items-center">
                                    <Image src={uniqueProduto.img} width={535} height={300} alt="img card test" />
                                    <div className="text-center mt-4">
                                    <p className="text-black font-bold">{uniqueProduto.nome}</p>
                                    <p className="text-gray-600">{uniqueProduto.descricao}</p>
                                    
                                    <strong className="text-violet-600">{uniqueProduto.preco}R$</strong>
                                 </div>
                                </div>
                            </Modal>
                        )}
                            </div>
                        </div>
                    </section>
                    <br></br>
              </GridContainer>  
            <Footer />
        </div> 
    )
}