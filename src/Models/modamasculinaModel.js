const mongoose = require('mongoose')

var ModaMasculinaSchema = new mongoose.Schema({
    linkBanner: {
        type: String,
        required: [true, 'Informe o nome do Produto']
    },
    porcentagem: {
        type: String,
        required: [true, 'Informe a quantidade do Produto']
    },
    nome: {
        type: String,
        required: [true, 'Informe o valor do Produto']
    },
    valor: {
        type: String,
        required: [true, 'Informe a marca do Produto']
    },
    descricao: {
        type: String,
        required: [true, 'Informe a marca do Produto']
    },
    localizacao: {
        type: String,
        required: [true, 'Informe a Localização do Produto']
    },
    telefone: {
        type: String,
        required: [true, 'Informe a Telefone do Produto']
    },    
    valorMax: {
        type: String,
        required: [true, 'Informe o valorMax do Produto']
    },  
    valorMin: {
        type: String,
        required: [true, 'Informe o valorMin do Produto']
    } 

}, {
    timestamps: true
})

module.exports = mongoose.model('ModaMasculina', ModaMasculinaSchema)