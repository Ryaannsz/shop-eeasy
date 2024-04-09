import dbconnection from "../../db";

export default async function getProdutos(req, res) {

    async function selectProdutos(){
        try {
            const query = `SELECT * FROM produtos`
            const [data] = await dbconnection.execute(query)
            res.send(data)
            return res.status(200).json({success: true, message: "Produtos selecionados com sucesso!", data:data})
        } catch (error) {
            console.log("Erro: "+error)
            return res.status(500).json({success: false, message: "Erro ao selecionar produtos: "+error})
        }
    }
    
    selectProdutos()
}