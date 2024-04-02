import Image from "next/image"
import Link from "next/link"
import Logo from "/public/logo.svg"
import { GridContainer } from "./grid"


export function Footer(){
    return(
       
            <footer className="absolute bottom-0 mt-auto w-full h-40 bg-blue-hover flex flex-col items-center justify-center">
            
            <GridContainer className="flex items-center justify-center">
            <Image 
                src={Logo}
                alt="logo"
                width={125}
                height={107}
                className="place-items-center"
                 />

                 
            </GridContainer>

            <div className="">

        <svg className="grid grid-cols-4 gap-1 place-items-center w-40 mr-auto"width="164" height="20" viewBox="0 0 164 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.0400085C4.5 0.0400085 0 4.53001 0 10.06C0 15.06 3.66 19.21 8.44 19.96V12.96H5.9V10.06H8.44V7.85001C8.44 5.34001 9.93 3.96001 12.22 3.96001C13.31 3.96001 14.45 4.15001 14.45 4.15001V6.62001H13.19C11.95 6.62001 11.56 7.39001 11.56 8.18001V10.06H14.34L13.89 12.96H11.56V19.96C13.9164 19.5879 16.0622 18.3855 17.6099 16.5701C19.1576 14.7546 20.0054 12.4457 20 10.06C20 4.53001 15.5 0.0400085 10 0.0400085Z" fill="#828282"/>
        <path d="M65 1C65.5304 1 66.0391 1.21071 66.4142 1.58579C66.7893 1.96086 67 2.46957 67 3V17C67 17.5304 66.7893 18.0391 66.4142 18.4142C66.0391 18.7893 65.5304 19 65 19H51C50.4696 19 49.9609 18.7893 49.5858 18.4142C49.2107 18.0391 49 17.5304 49 17V3C49 2.46957 49.2107 1.96086 49.5858 1.58579C49.9609 1.21071 50.4696 1 51 1H65ZM64.5 16.5V11.2C64.5 10.3354 64.1565 9.5062 63.5452 8.89483C62.9338 8.28346 62.1046 7.94 61.24 7.94C60.39 7.94 59.4 8.46 58.92 9.24V8.13H56.13V16.5H58.92V11.57C58.92 10.8 59.54 10.17 60.31 10.17C60.6813 10.17 61.0374 10.3175 61.2999 10.5801C61.5625 10.8426 61.71 11.1987 61.71 11.57V16.5H64.5ZM52.88 6.56C53.3256 6.56 53.7529 6.383 54.0679 6.06794C54.383 5.75288 54.56 5.32556 54.56 4.88C54.56 3.95 53.81 3.19 52.88 3.19C52.4318 3.19 52.0019 3.36805 51.685 3.68499C51.3681 4.00193 51.19 4.43178 51.19 4.88C51.19 5.81 51.95 6.56 52.88 6.56ZM54.27 16.5V8.13H51.5V16.5H54.27Z" fill="#828282"/>
        <path d="M104 13L109.19 10L104 7V13ZM115.56 5.17C115.69 5.64 115.78 6.27 115.84 7.07C115.91 7.87 115.94 8.56 115.94 9.16L116 10C116 12.19 115.84 13.8 115.56 14.83C115.31 15.73 114.73 16.31 113.83 16.56C113.36 16.69 112.5 16.78 111.18 16.84C109.88 16.91 108.69 16.94 107.59 16.94L106 17C101.81 17 99.2 16.84 98.17 16.56C97.27 16.31 96.69 15.73 96.44 14.83C96.31 14.36 96.22 13.73 96.16 12.93C96.09 12.13 96.06 11.44 96.06 10.84L96 10C96 7.81 96.16 6.2 96.44 5.17C96.69 4.27 97.27 3.69 98.17 3.44C98.64 3.31 99.5 3.22 100.82 3.16C102.12 3.09 103.31 3.06 104.41 3.06L106 3C110.19 3 112.8 3.16 113.83 3.44C114.73 3.69 115.31 4.27 115.56 5.17Z" fill="#828282"/>
        <path d="M149.8 0H158.2C161.4 0 164 2.6 164 5.8V14.2C164 15.7383 163.389 17.2135 162.301 18.3012C161.214 19.3889 159.738 20 158.2 20H149.8C146.6 20 144 17.4 144 14.2V5.8C144 4.26174 144.611 2.78649 145.699 1.69878C146.786 0.61107 148.262 0 149.8 0ZM149.6 2C148.645 2 147.73 2.37928 147.054 3.05442C146.379 3.72955 146 4.64522 146 5.6V14.4C146 16.39 147.61 18 149.6 18H158.4C159.355 18 160.27 17.6207 160.946 16.9456C161.621 16.2705 162 15.3548 162 14.4V5.6C162 3.61 160.39 2 158.4 2H149.6ZM159.25 3.5C159.582 3.5 159.899 3.6317 160.134 3.86612C160.368 4.10054 160.5 4.41848 160.5 4.75C160.5 5.08152 160.368 5.39946 160.134 5.63388C159.899 5.8683 159.582 6 159.25 6C158.918 6 158.601 5.8683 158.366 5.63388C158.132 5.39946 158 5.08152 158 4.75C158 4.41848 158.132 4.10054 158.366 3.86612C158.601 3.6317 158.918 3.5 159.25 3.5ZM154 5C155.326 5 156.598 5.52678 157.536 6.46447C158.473 7.40215 159 8.67392 159 10C159 11.3261 158.473 12.5979 157.536 13.5355C156.598 14.4732 155.326 15 154 15C152.674 15 151.402 14.4732 150.464 13.5355C149.527 12.5979 149 11.3261 149 10C149 8.67392 149.527 7.40215 150.464 6.46447C151.402 5.52678 152.674 5 154 5ZM154 7C153.204 7 152.441 7.31607 151.879 7.87868C151.316 8.44129 151 9.20435 151 10C151 10.7956 151.316 11.5587 151.879 12.1213C152.441 12.6839 153.204 13 154 13C154.796 13 155.559 12.6839 156.121 12.1213C156.684 11.5587 157 10.7956 157 10C157 9.20435 156.684 8.44129 156.121 7.87868C155.559 7.31607 154.796 7 154 7Z" fill="#828282"/>
            </svg>

         </div>
            

        </footer>
        
     
       
    )
}