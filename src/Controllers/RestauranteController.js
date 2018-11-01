const mongoose = require('mongoose');
const Restaurante = require('../Models/restauranteModel');

exports.registrarRestaurante = function(req, res, next) {
    Restaurante.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, restaurantes){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            Restaurante: restaurantes //no plural que indica varios
        })
    })
}
exports.getTodoRestaurantes = function(req, res, next) {
    var query = Restaurante.find()

    query.exec( function (err, restaurantes){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(restaurantes)    
    })
}