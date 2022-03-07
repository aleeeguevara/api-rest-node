const TabelaFornecedor = require('./TabelaFornecedor');

class Fornecedor {
    constructor ({ id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao }) {
        this.id= id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

   async criar () {
        const resultado = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    async carregar() {
        const encontrado = await TabelaFornecedor.pegarPorId(this.id)
        this.empresa = encontrado.empresa
        this.email = encontrado.email
        this.categoria = encontrado.categoria
        this.dataCriacao = encontrado.dataCriacao
        this.dataAtualizacao = encontrado.dataAtualizacao
        this.versao = encontrado.versao
    }

    async atualizar() { 
        await TabelaFornecedor.pegarPorId(this.id) //metodo retorna promessa node esperar metodo terminar antes de seguir
        const campos = ['empresa', 'email', 'categoria'] //algumas propriedades como id, versao, datas o proprio mysql ja atualiza
        //verificar se os campos sao validos e fornecidos p conseguir pegar e enviar

        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if(typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })
        if(Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error('Não foram fornecidos dados para atualizar')
        } //função javascript que retorna lista com nome das chaves que o obj possui

        await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar)
    }    
}

module.exports = Fornecedor;