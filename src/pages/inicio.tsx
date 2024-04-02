import "../app/globals.css";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Image from "next/image"
import  headerInicio from "/public/headerInicio.svg"
import { GridContainer } from "@/components/grid";


export default function Inicio(){
    return(
     <div>
            <Header />
        <GridContainer>
        <div>
           <br></br>
            <div className="flex items-center justify-center">
            <Image 
                src={headerInicio}
                alt="headerInicio"
                width={1275}
                height={597}
                className="place-items-center"
                
                />
                </div>
              </div>
              </GridContainer>
            <Footer />
        </div>
        
    )
}