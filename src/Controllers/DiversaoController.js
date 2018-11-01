const mongoose = require('mongoose');
const Diversao = require('../Models/diversaoModel');

exports.registrarDiversao = function(req, res, next) {
    Diversao.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, diversoes){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            Diversao: diversoes //no plural que indica varios
        })
    })
}
exports.getTodoDiversao = function(req, res, next) {
    var query = Diversao.find()

    query.exec( function (err, diversoes){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(diversoes)    
    })
}