const mongoose = require('mongoose')

var DestaqueSchema = new mongoose.Schema({
    imgDestaque1: {
        type: String,
        required: [true, 'Informe o link da Imagem Destaque']
    },
    imgDestaque2: {
        type: String,
        required: [true, 'Informe o link da Imagem Destaque']
    },
    imgDestaque3: {
        type: String,
        required: [true, 'Informe o link da Imagem Destaque']
    },
    imgDestaque4: {
        type: String,
        required: [true, 'Informe o link da Imagem Destaque']
    },
    imgDestaque5: {
        type: String,
        required: [true, 'Informe o link da Imagem Destaque']
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Destaque', DestaqueSchema)