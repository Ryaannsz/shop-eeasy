import "../app/globals.css";
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { GridContainer } from "@/components/grid";
import React, { useState } from 'react';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login(){
  const router= useRouter()
    //Cadastro
    const [isLogin, setIsLogin] = useState(true);
    const [cadastroUsername, setCadastroUsername] = useState('')
    const [cadastroSenha, setCadastroSenha] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')


    //Login
    const [loginUsername, setLoginUsername] = useState('')
    const [loginSenha, setLoginSenha] = useState('')


    const handleToggle = () => {
        setIsLogin(!isLogin);
      };

   
    const postCadastro = async (e) => {
       e.preventDefault()
            const response = await fetch('api/cadastro',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({cadastroUsername, cadastroSenha, email, cep, endereco, bairro})
            })
            
            if(response.ok){
                console.log("Requisição bem sucedida")
                alert("Cadastro realizado com sucesso!")
                window.location.reload()
            }else{
                console.log("Erro na requisição "+response.statusText)
            }
    }

    const postLogin = async (e) => {
      e.preventDefault()
      const response = await fetch('api/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({loginUsername, loginSenha})
      })

      if(response.ok){
        console.log("Requisição bem sucedida")
        router.push('/inicio')
        
      }else{
        toast.error("Usuário não encontrado!",{
          theme: 'colored'
        })
      }
    }

    const complementoEndereco = async (e) =>{
      
      e.preventDefault()
      fetch('https://viacep.com.br/ws/'+cep+'/json')
      .then(response=>{
        if(!response.ok){
          throw new Error('Erro ao identificar o cep')
        }
        return response.json()
      }).then(data =>{
        setEndereco(data.logradouro)
        setBairro(data.bairro)
        console.log("oIIi")
        toast.success("CEP localizado com sucesso!", {
          theme: 'colored'
        })
      }).catch(error=>{
        console.error('Erro: ', error)
        toast.error("O CEP informado não foi localizado!", {
          theme: 'colored'
        })
      })
        
    }

        return (
            <div className="flex flex-col min-h-screen">
              <ToastContainer />
                <Header />
                    <GridContainer>
                      <div className="flex h-screen bg-gray-100">
      <div className="m-auto p-6 bg-white rounded-lg shadow-lg">
        {isLogin ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Usuario</label>
                <input value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
                <input value={loginSenha} onChange={(e) => setLoginSenha(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" />
              </div>
              <button onClick={postLogin} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Login</button>
            </form>
            <p className="mt-4 text-gray-700">Não tem uma conta? crie uma já! <button className="text-blue-500 hover:underline focus:outline-none" onClick={handleToggle}>Cadastre-se!</button></p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Cadastro</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Usuario</label>
                <input value={cadastroUsername} onChange={(e) => setCadastroUsername(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
                <input value={cadastroSenha} onChange={(e) => setCadastroSenha(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="password" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">CEP</label>
                <input value={cep} onChange={(e) => setCep(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text"/>
                <button onClick={complementoEndereco} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Encontrar CEP</button>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >Endereco</label>
                <input value={endereco} onChange={(e) => setEndereco(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Bairro</label>
                <input value={bairro} onChange={(e) => setBairro(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text"/>
              </div>
              <button onClick={postCadastro} className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Cadastre-se</button>
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