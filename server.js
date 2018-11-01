
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const expressMongoDb = require('express-mongo-db');
const express = require('express');

dotenv.load({
        path:'.env'      
});
const app = express();

const server = require("http").Server(app);

app.use(expressMongoDb('mongodb://renanvivas:Renans2pietro@ds263710.mlab.com:63710/shubble'));
app.set('port', process.env.PORT_SITE || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(cors ({
    origin:'*',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));
app.use(errorHandler());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', function(){
    console.error('Falha ao conectar com o Banco de dados');
    process.exit(1);
});

const router = require('./src/routes/api')(app);

server.listen(app.get('port'), function(){
    console.log('Servidor está rodando na porta' + app.get('port') + 'em modo' + app.get('env'));
});
module.exports = app;