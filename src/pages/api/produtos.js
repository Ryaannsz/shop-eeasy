import dbconnection from "../../db";


export default async function handler(req, res){
    //const srcImg = '/card1.svg'
   

  //INSERINDO PRODUTOS HARD CODE
      async function inserirProdutos(nome, preco, descricao, img){

        if(!(await verificarProdutos(nome))){

            try {
                const query = `INSERT INTO produtos (nome, preco, descricao, img) VALUES (?, ?, ?, ?)`
                const values= [nome, preco, descricao, img]
                const [data] = await dbconnection.execute(query, values)
        
                res.status(200).json({success: true, message:"Produto inserido com sucesso no banco de dados!"})
        
              } catch (error) {
                console.log(error)
                res.status(500).json({success: false, message: "Erro ao Inserir o produto o produto"})
               
              }

        }else{
            
            res.status(200).json({sucess: true, message:"Já há esse produto no banco de dados!"})
        }
      }

      async function verificarProdutos(nome){
        try{
            
            const [verificacaoResultado] = await dbconnection.execute(`SELECT nome FROM produtos WHERE nome='${nome}'`)
            if(verificacaoResultado.length>0){
                return true;
                res.status(200).json({success: true, message:"Produto achado com sucesso no banco de dados!"})
            }else{
                return false;
                res.status(200).json({success: true, message:"Não há esse produto no banco de dados!"})
            }
        }catch(error){
            console.log(error)
            res.status(500).json({success: false, message: "Erro ao verificar o produto!"})
        }
      }
      inserirProdutos("Porta de madeira", 157, "Uma porta de madeira qualquer", "/card1.svg")
      inserirProdutos("Abacate de madeira", 1000, "Um abacate feito de madeira", "/card2.svg")
      inserirProdutos("Mouse Gamer", 500, "Um mouse para gamers!", "/card3.svg")

   // INSERINDO PRODUTOS HARD CODE   

}

