const mongoose = require('mongoose');
const Cosmetico = require('../Models/cosmeticosModel');

exports.registrarCosmeticos = function(req, res, next) {
    Cosmetico.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, cosmeticos){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            Cosmetico: cosmeticos //no plural que indica varios
        })
    })
}
exports.getTodoCosmeticos = function(req, res, next) {
    var query = Cosmetico.find()

    query.exec( function (err, cosmeticos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(cosmeticos)    
    })
}