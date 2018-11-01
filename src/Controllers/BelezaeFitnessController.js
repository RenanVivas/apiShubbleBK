const mongoose = require('mongoose');
const BelezaeFitness = require('../Models/BelezaeFitnessModel');

exports.registrarBelezaeFitness = function(req, res, next) {
    BelezaeFitness.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, BelezaseFitness){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            BelezaeFitness: BelezaseFitness //no plural que indica varios
        })
    })
}
exports.getTodoBelezaFitness = function(req, res, next) {
    var query = BelezaeFitness.find()

    query.exec( function (err, BelezaseFitness){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(BelezaseFitness)    
    })
}