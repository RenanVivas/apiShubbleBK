const mongoose = require('mongoose');
const ComercioeServicos = require('../Models/ComercioeServicosModel');

exports.registrarComercioeServicos = function(req, res, next) {
    ComercioeServicos.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, ComercioseServicos){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            ComercioeServicos: ComercioseServicos //no plural que indica varios
        })
    })
}
exports.getTodoComercioeServicos = function(req, res, next) {
    var query = ComercioeServicos.find()

    query.exec( function (err, ComercioseServicos){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(ComercioseServicos)    
    })
}