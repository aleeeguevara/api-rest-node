const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor');
const Fornecedor = require('./Fornecedor');

//roteador do express agrupa rotas para exportar
roteador.get('/', async (req, res) => {
    const resultados = await TabelaFornecedor.listar()
    res.status(200)
    res.send(
        JSON.stringify(resultados)
    );
});
roteador.post('/', async (req, res) => {
    try{

        const dadosRecebidos = req.body
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar()
        res.status(201)
        res.send(
            JSON.stringify(fornecedor)
            )
    }catch(erro){
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
        })

roteador.get('/:idFornecedor', async (req, res) => {
    try{ //tentar executar o codigo para tratar caso ocorra erro no metodo pegarPorId
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        res.status(200)
        res.send(
            JSON.stringify(fornecedor)
        )
    }
    catch(erro) {
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idFornecedor', async (req, res) => { //método put atualizar colocar informações novas
    try{
        const id = req.params.idFornecedor
        const dadosRecebidos= req.body
        const dados = Object.assign({}, dadosRecebidos, { id: id }) //funçao javascript que consegue juntar varios objetos em um só
        const fornecedor = new Fornecedor(dados) //instancia so recebe um objeto e no caso temos dois, por isso criamos const dados
        await fornecedor.atualizar()
        res.status(204)
        res.end() //quando faz atualização em api rest nao precisa retornar informacao para quem esta consumindo a api, so precisa mostrar que a requisição teve sucesso para simbolizar que conseguiu atualizar 
    }
    catch(erro) {
        res.send(   
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete('/:idFornecedor', async (req, res) => {
    try{
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.carregar()
        await fornecedor.remover()
        res.status(204)
        res.end()

    }catch(erro){
        res.send(
            JSON.stringify({
            mensagem: erro.message
            })
        )
    }
})

module.exports = roteador;