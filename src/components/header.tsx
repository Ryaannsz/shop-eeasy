'use client'
import Image from "next/image"
import Link from "next/link"
import Logo from "/public/logo.svg"
import { GridContainer } from "./grid"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode"
    


export function Header(){


    function logout(){
        Cookies.remove('token')
        window.location.reload()
    }

    const [username, setUsername] = useState('')
    const token = Cookies.get('token');
    useEffect(()=>{    
      
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsername(decoded.username)
                console.log(decoded);
                console.log(username)
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            }
        }
    }, [token])

    
    return (
        <header className="relative w-full h-32 bg-blue-hover flex items-center">
            
            <GridContainer className="flex items-center justify-between">
               
            <Image 
                src="/logo.svg"
                alt="logo"
                width={125}
                height={117}
                className="flex mr-20"
                
                />
            

                  
                <div className="flex items-center gap-8">

                    <nav>
                        <Link href="/inicio" className="px-3 py-1 text-white text-sm font-semibold hover:text-gray-300">Inicio</Link>
                        <Link href="#" className="px-3 py-1 text-white text-sm font-semibold hover:text-gray-300">Contato</Link>
                    </nav>

                    <div>
                        { username ? (
                            <div className="flex gap-2">
                                <a className="text-white font-bold bg-gradient-to-tr from-gray-900 to-gray-800 px-4 py-2 rounded-full">Seja bem-vindo, {username}!</a>
                                <button onClick={logout} className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                                <a>Logout</a>
                            </button>
                                </div>
                        ):(

                            <a className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" href="/login">Fazer Login</a>

                             )}
                    </div>
                </div>
           
            </GridContainer>
        </header>
    )
}