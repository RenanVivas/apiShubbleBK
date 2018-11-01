const express = require('express')
const ProdutoController = require('../Controllers/ProdutoController');
const DestaqueController = require('../Controllers/DestaqueController');
const BelezaeFitnessController = require('../Controllers/BelezaeFitnessController');
const ComercioeServicosController = require('../Controllers/ComercioeServicosController');
const CosmeticosController = require('../Controllers/CosmeticosController');
const DiversaoController = require('../Controllers/DiversaoController');
const IngressoseFestasController = require('../Controllers/IngressoseFestasController');
const ModaFemininaController = require('../Controllers/ModaFemininaController');
const ModaMasculinaController = require('../Controllers/ModaMasculinaController');
const OutrosController = require('../Controllers/OutrosController');
const RestauranteController = require('../Controllers/RestauranteController');

module.exports = function (app) {

    const cosmeticosRoute = express.Router()
    const produtoRoute = express.Router()
    const comercioeServicosRoute = express.Router()
    const belezaefitnessRoute = express.Router()
    const destaqueRoute = express.Router()
    const diversaoRoute = express.Router()
    const IngressoseFestasRoute = express.Router()
    const ModaFemininaRoute = express.Router()
    const ModaMasculinaRoute = express.Router()
    const OutrosRoute = express.Router()
    const RestauranteRoute = express.Router()
    
    app.use('/produto',
        produtoRoute.post('/', ProdutoController.registrarProduto),
        produtoRoute.get('/',ProdutoController.getTodoProdutos)
    )   
    app.use('/destaque',
        destaqueRoute.post('/', DestaqueController.registrarDestaque),
        destaqueRoute.get('/', DestaqueController.getTodoDestaques)
    )
    app.use('/comercioeservicos',
        comercioeServicosRoute.post('/', ComercioeServicosController.registrarComercioeServicos),
        comercioeServicosRoute.get('/', ComercioeServicosController.getTodoComercioeServicos)
    )

    app.use('/belezaefitness',
        belezaefitnessRoute.post('/', BelezaeFitnessController.registrarBelezaeFitness),
        belezaefitnessRoute.get('/', BelezaeFitnessController.getTodoBelezaFitness)
    )
    app.use('/cosmeticos',
        cosmeticosRoute.post('/', CosmeticosController.registrarCosmeticos),
        cosmeticosRoute.get('/', CosmeticosController.getTodoCosmeticos)
    )
    app.use('/diversao',
        diversaoRoute.post('/', DiversaoController.registrarDiversao),
        diversaoRoute.get('/', DiversaoController.getTodoDiversao)
    ) 
    app.use('/ingressosefestas',
        IngressoseFestasRoute.post('/', IngressoseFestasController.registrarIngressoseFestas),
        IngressoseFestasRoute.get('/', IngressoseFestasController.getTodoIngressoseFestas)
    )
    app.use('/modafeminina',
        ModaFemininaRoute.post('/', ModaFemininaController.registrarModaFeminina),
        ModaFemininaRoute.get('/', ModaFemininaController.getTodoModaFeminina)
    )
    app.use('/modamasculina',
        ModaMasculinaRoute.post('/', ModaMasculinaController.registrarModaMasculina),
        ModaMasculinaRoute.get('/', ModaMasculinaController.getTodoModaMasculina)
    )
    app.use('/outros',
        OutrosRoute.post('/', OutrosController.registrarOutros),
        OutrosRoute.get('/', OutrosController.getTodoOutros)
    )
    app.use('/restaurante',
        RestauranteRoute.post('/', RestauranteController.registrarRestaurante),
        RestauranteRoute.get('/', RestauranteController.getTodoRestaurantes)
    )
    
    
}

