const mongoose = require('mongoose');
const Destaque = require('../Models/destaqueModel');

exports.registrarDestaque = function(req, res, next) {
    Destaque.create({
        imgDestaque1: req.body.imgDestaque1,
        imgDestaque2: req.body.imgDestaque2,
        imgDestaque3: req.body.imgDestaque3,
        imgDestaque4: req.body.imgDestaque4,
        imgDestaque5: req.body.imgDestaque5

    }, function(err, destaques){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar destaque',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Imagem destaque crianda com sucesso',
            Destaque: destaques
        })
    })
}
exports.getTodoDestaques = function(req, res, next) {
    var query = Destaque.find()

    query.exec( function (err, destaques){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos as Imagens destaques',
                erro: err
            })
        return res.status(200).json(destaques)    
    })
}