const Modelo = require('./ModeloTabelaFornecedor');
module.exports = {
    listar() {
        return Modelo.findAll(); //metodo em ingles do sequelize
    },
    inserir(fornecedor) {
        return Modelo.create(fornecedor);
    }
}