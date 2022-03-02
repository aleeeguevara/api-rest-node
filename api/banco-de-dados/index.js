//exportar conexao com banco de dados
const Sequelize = require('sequelize');
const config = require('config'); // separar do nosso banco de dados a configuração dos dados de acesso

//vamos criar una nova instancia do sequelize
const instancia = new Sequelize( // configurações do banco de dados nova instancia do sequelize
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
);

module.exports = instancia;