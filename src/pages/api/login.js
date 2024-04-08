
import jwt from 'jsonwebtoken'
import dbconnection from "../../db"






export default async function postLogin(req, res){
    const key = 'ryanzinhodev'
    try {
        if(!(req.method == 'POST')){
            return res.status(405).json({ success: false, message: "Método HTTP não permitido." });
        }
        const {loginUsername, loginSenha} = req.body
        const result = await dbconnection.execute(`SELECT username, senha FROM users WHERE username = ? AND senha = ?`, [loginUsername, loginSenha])
        if(result[0][0]==null){
            console.log("Usuário não achado no banco de dados")
            return  res.status(500).json({success: false, message: "Usuário não cadastrado!"})

            }else if(result[0][0].username==loginUsername && result[0][0].senha==loginSenha){            
                      
                    console.log("Usuario encontrado!")
                    
                     
                     const token = jwt.sign({username: result[0][0].username, usernameId: result[0][0].usernameId}, key, {expiresIn: '1h'})
                     return res.status(200).json({success: true, token: token})
            

            }else{
             console.log("Credenciais inválidas");
            return res.status(401).json({ success: false, message: "Credenciais inválidas!" });
     }   
    } catch (error) {
        console.error("Erro durante a execução do código:", error);
        return res.status(500).json({ success: false, message: "Ocorreu um erro durante o processamento." });
    }
    
    
           
      
    
    
}

