const Modelo = require('./ModeloTabelaFornecedor');
module.exports = {
    listar() {
        return Modelo.findAll(); //metodo em ingles do sequelize
    },
    inserir(fornecedor) {
        return Modelo.create(fornecedor);
    },
    async pegarPorId(id) {
        const encontrado = await Modelo.findOne({ //metodo sequelize encontra um, recebe obj
            where: { //clausulas para encontrar fornecedor
                id: id
            }
        })
        if(!encontrado) {
            throw new Error('Fornecedor não encontrado')
        }
        return encontrado
    },

    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id}  //objeto com as instruções para procurar qual a linha da nossa tabela que tem q atualizar, qual o fornecedor correto para atualizar
                //vai procurar um fornecedor para atualizar utilizando nosso id
            }
        )
    }
}