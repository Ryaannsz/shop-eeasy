import "../app/globals.css";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { GridContainer } from "@/components/grid";
import React, { useState } from 'react';

export default function Login(){
    
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
      };

        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                    <GridContainer>
                      <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 bg-white rounded-lg shadow-lg">
        {isLogin ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Usuario</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="username" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Senha</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" id="password" />
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Login</button>
            </form>
            <p className="mt-4 text-gray-700">Não tem uma conta? crie uma já! <button className="text-blue-500 hover:underline focus:outline-none" onClick={handleToggle}>Cadastre-se!</button></p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newUsername">Usuario</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="newUsername" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">Senha</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" id="newPassword" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" id="newPassword" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">CEP</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" id="newPassword" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endereco">Endereco</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" id="newPassword" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bairro">Bairro</label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" id="newPassword" />
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Sign Up</button>
            </form>
            <p className="mt-4 text-gray-700">Já tem uma conta? Faça seu login! <button className="text-blue-500 hover:underline focus:outline-none" onClick={handleToggle}>Login</button></p>
          </>
        )}
      </div>
    </div>
                    </GridContainer>
                <Footer />
            </div>
        )

}