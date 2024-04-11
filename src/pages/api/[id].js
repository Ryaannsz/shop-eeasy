
import dbconnection from "@/db"


export default async function getUniqueProduto(req, res) {
    const { id } = req.query
    try {   
        const query = `SELECT * FROM produtos WHERE produtosid=?`
        const [data] = await dbconnection.execute(query, [id])
        res.send(data)
        return res.status(200).json({success: true, message: "Produto selecionado com sucesso!", data:data})
    } catch (error) {
       return res.status(500).json({success: false, message: "Erro ao selecionar produtos: "+error})
    }  
}