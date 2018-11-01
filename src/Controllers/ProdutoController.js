const mongoose = require('mongoose');
const Protudo = require('../Models/ProdutoModel');

exports.registrarProduto = function(req, res, next) {
    Protudo.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, produtos){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            Protudo: produtos //no plural que indica varios
        })
    })
}
exports.getTodoProdutos = function(req, res, next) {
    var query = Protudo.find()

    query.exec( function (err, produtos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(produtos)    
    })
}