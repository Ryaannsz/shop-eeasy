'use client'
import Image from "next/image"
import Link from "next/link"
import Logo from "/public/logo.svg"
import { GridContainer } from "./grid"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode"
    
interface JwtPayload{
    username: string
}


export function Header(){

    const [openMenu, setOpenMenu] = useState(false)

    const clickMenu = () =>{
        setOpenMenu(!openMenu)
    }


    function logout(){
        Cookies.remove('token')
        window.location.reload()
    }

    const [username, setUsername] = useState('')
    const token = Cookies.get('token');
    useEffect(()=>{    
      
        if (token) {
            try {
                const decoded: JwtPayload = jwtDecode(token);
                setUsername(decoded.username)
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
                    <nav className="hidden md:flex items-baseline">
                        <Link href="/inicio" className="px-3 py-1 text-white text-sm font-semibold hover:text-gray-300">Inicio</Link>
                        <Link href="/contato" className="px-3 py-1 text-white text-sm font-semibold hover:text-gray-300">Contato</Link>
                        {username ?(
                            <div className="mx-4">
                            <a className="text-white ">Seja bem-vindo, {username}!</a>
                            <button onClick={logout} className="mx-2 select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                            <a>Logout</a>
                            </button>
                            </div>
                        ): (
                            <div>
                            <a className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" href="/login">Fazer Login</a>
                            </div>
                        )}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setOpenMenu(!openMenu)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    {openMenu && (
                        <div className="absolute top-16 right-0 w-48 bg-white rounded-md shadow-md">
                            <div className="p-4">
                            {username ? (
                                <div className="flex flex-col gap-2">
                                    <span className="text-purple-600">Seja bem-vindo, {username}!</span>
                                    <Link href="/inicio" className="px-3 py-1 text-purple-600 text-sm font-semibold hover:text-gray-300">Inicio</Link>
                                    <Link href="#" className="px-3 py-1 text-purple-600 text-sm font-semibold hover:text-gray-300">Contato</Link>
                                    <button onClick={logout} className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                                        <a>Logout</a>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <Link href="/inicio" className="px-3 py-1 text-purple-600 text-sm font-semibold hover:text-gray-300">Inicio</Link>
                                    <Link href="#" className="px-3 py-1 text-purple-600 text-sm font-semibold hover:text-gray-300">Contato</Link>
                                    <a className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" href="/login">Fazer Login</a>
                                </div>
                            )}
                        </div>
                    </div>
                    )}
                </div>
            </GridContainer>
        </header>
    )
}