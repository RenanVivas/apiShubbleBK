const mongoose = require('mongoose');
const IngressoseFesta = require('../Models/ingressosefestasModel');

exports.registrarIngressoseFestas = function(req, res, next) {
    IngressoseFesta.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, ingressosefestas){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            IngressoseFesta: ingressosefestas //no plural que indica varios
        })
    })
}
exports.getTodoIngressoseFestas = function(req, res, next) {
    var query = IngressoseFesta.find()

    query.exec( function (err, ingressosefestas){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(ingressosefestas)    
    })
}