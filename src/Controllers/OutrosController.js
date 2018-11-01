const mongoose = require('mongoose');
const Outro = require('../Models/outrosModel');

exports.registrarOutros = function(req, res, next) {
    Outro.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, outros){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            Outro: outros //no plural que indica varios
        })
    })
}
exports.getTodoOutros = function(req, res, next) {
    var query = Outro.find()

    query.exec( function (err, outros){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(outros)    
    })
}