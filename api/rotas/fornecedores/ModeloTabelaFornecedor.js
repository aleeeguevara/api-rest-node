const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados') ;
//modelo representa nossa colunas na tabela e a representacao que queremos


const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
};

const opcoes = { //configuracao com o sequelize
    freezeTableName: true,
    tableName: 'fornecedores', //nome tabela no mysql
    timestamps: true, //datas
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao',
}
//declarar e utlizar modelo da tabela no nosso código exportar a conexao do nosso banco definindo nosso modelo
module.exports = instancia.define('fornecedor', colunas, opcoes) //configuramos nome no codigo 
