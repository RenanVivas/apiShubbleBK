const mongoose = require('mongoose');
const ModaFeminina = require('../Models/modafemininaModel');

exports.registrarModaFeminina = function(req, res, next) {
    ModaFeminina.create({
        linkBanner: req.body.linkBanner,
        porcentagem: req.body.porcentagem,
        nome: req.body.nome,
        valor: req.body.valor,
        descricao: req.body.descricao,
        localizacao: req.body.localizacao,
        telefone: req.body.telefone,
        valorMax: req.body.valorMax,
        valorMin: req.body.valorMin

    }, function(err, modafemininas){
        if(err)
        return res.status(500).send({
            message: 'Erro ao criar produto',
            erro: err
        })
    
        return res.status(200).send({
            message: 'Protudo criando com sucesso',
            ModaFeminina: modafemininas //no plural que indica varios
        })
    })
}
exports.getTodoModaFeminina = function(req, res, next) {
    var query = ModaFeminina.find()

    query.exec( function (err, modafemininas){
        if(err)
            return res.status(500).send({
                message: 'Erro ao adquirir todos os produtos',
                erro: err
            })
        return res.status(200).json(modafemininas)    
    })
}