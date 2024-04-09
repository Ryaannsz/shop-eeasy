import "../app/globals.css";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Image from "next/image"
import React, {useState} from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
import  headerInicio from "/public/headerInicio.svg"
import  headerDois from "/public/headerDois.svg"
import  headerTres from "/public/headerTres.svg"
import  headerQuatro from "/public/headerQuatro.svg"
import { GridContainer } from "@/components/grid";
import { Card } from "../components/cardproduct"



export default function Inicio(){
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

    const cardArray = Array.from({ length: 4 }, (_, index) => index + 1);
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
                                
                            {/*AQUI COLOCAR TIPO BANCODEDADOS.LENGHT*/[0,1,2,3,4].map((index)=>(
                                <Card key={index} cardIndex={index}/>
                            ))}

                            </div>
                        

                        </div>


                    </section>
                    <br></br>
              </GridContainer>  
            <Footer />
        </div>
        
    )
}