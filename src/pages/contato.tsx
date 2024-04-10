import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GridContainer } from "@/components/grid"
import "../app/globals.css";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react";

interface JwtPayload{
    username: string
    email: string
}

export default function ContactPage(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const token = Cookies.get('token')

    useEffect(()=>{
        if (token) {
            try {
                const decoded: JwtPayload = jwtDecode(token);
                setName(decoded.username)
                setEmail(decoded.email)
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
            }
        }
    },[])


    return(
        <div className="flex flex-col min-h-screen">
        <Header />
            <GridContainer>
        <br></br>
        <form action="https://api.staticforms.xyz/submit" method="post" className="max-w-md mx-auto">
    <input type="hidden" name="accessKey" value="42b13411-075d-40dc-b6de-e7f79d36cad1" className="hidden"/> 
    {name ?(
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
        <input type="text" value={name} id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
    ):(
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
        <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
    </div>
    )}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Assunto:</label>
        <input type="text" id="subject" name="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
    </div>
    {email ?(
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" value={email} id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
    ):(
        <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
        </div>
    )}
    
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
        <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
        <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
    </div>
    <input type="submit" value="Enviar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
    <input type="hidden" name="redirectTo" value="http://localhost:3000/contato" className="hidden"/>
</form>
    <br></br>
        </GridContainer>
    <Footer />
    </div>

    )
}