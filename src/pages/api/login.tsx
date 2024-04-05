

import dbconnection from "../../db"






export default async function postLogin(req, res){
    let response
    try {
        if(!(req.method == 'POST')){
            response = res.status(405).json({ success: false, message: "Método HTTP não permitido." });
        }
        const {loginUsername, loginSenha} = req.body
        const result = await dbconnection.execute(`SELECT username, senha FROM users WHERE username = ? AND senha = ?`, [loginUsername, loginSenha])
        if(result[0][0]==null){
            console.log("Usuário não achado no banco de dados")
            response=  res.status(500).json({success: false, message: "Usuário não cadastrado!"})

            }else if(result[0][0].username==loginUsername && result[0][0].senha==loginSenha){            
                      
                    console.log("Usuario encontrado!")
                    res.writeHead(302, { Location: 'http://localhost:3000/inicio' });
                     res.end();
                     return;
            

            }else{
             console.log("Credenciais inválidas");
            response = res.status(401).json({ success: false, message: "Credenciais inválidas!" });
     }   
    } catch (error) {
        console.error("Erro durante a execução do código:", error);
        response =res.status(500).json({ success: false, message: "Ocorreu um erro durante o processamento." });
    }
    
    
           
            return response
    
    
}

