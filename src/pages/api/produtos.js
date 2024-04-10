import dbconnection from "../../db";


export default async function produtos(req, res){
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
      inserirProdutos("Teclado Gamer RGB", 799, "Teclado foda para gamers!", "/card4.svg")
      inserirProdutos("Aviaozinho de Papel", 250, "Tem nem o que falar aqui", "/card5.svg")
      inserirProdutos("Porta de madeira", 157, "Uma porta de madeira qualquer", "/card1.svg")
      inserirProdutos("Abacate de madeira", 1000, "Um abacate feito de madeira", "/card2.svg")
      inserirProdutos("Violino de avental", 10421, "Violino especifico feito com detalhes de lã de avental", "/card3.svg")
      

   // INSERINDO PRODUTOS HARD CODE   

}

