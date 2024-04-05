
import dbconnection from "../../db"


export default async function postCadastro(req, res){

    if(req.method == 'POST'){
        const {cadastroUsername, cadastroSenha, email, cep, endereco, bairro} = req.body
       
        const verificarCadastro = await dbconnection.execute(`SELECT username FROM users WHERE username=?`, [cadastroUsername])
                 
        if(!(verificarCadastro[0][0]==null)){
            console.log("Usuário já cadastrado!")
            return res.status(500).json({success: false, message: "Usuário já cadastrado!"})  
        }

        try {

            const query = `INSERT INTO users (username, senha, email, cep, endereco, bairro) VALUES (?,?,?,?,?,?)`
            const values = [cadastroUsername, cadastroSenha, email, cep, endereco, bairro]
         
           
            await dbconnection.query(query, values)
           

            
            res.status(200).json({success: true, message: "Sucesso ao cadastrar usuário!"})
            
        } catch (error) {
            res.status(500).json({success: false, message:"Erro ao inserir o usuário!"})
            console.log("AQUIIIIIII1")
        }
    }else{
        return res.status(405).json({ success: false, message: "Método HTTP não permitido." });
    }
}