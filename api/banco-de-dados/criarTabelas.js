const ModeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedor');

// para conseguir pegar e criar nossas informacoes do modelo da tabela
//dentro do banco de dados precisamos sincronizar
ModeloTabela
    .sync() //retorna promessa  que deve ser tratada
    .then(() => console.log('Tabela criada com sucesso')) //node api/banco-de-dados/criarTabelas
    .catch(console.log)