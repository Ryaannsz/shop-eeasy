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

    return(
     <div className="flex flex-col min-h-screen">
            <Header />
        <GridContainer className="flex-grow">
         <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
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
              </GridContainer>
             
            <Footer />
        </div>
        
    )
}