'use strinct'
//connect with bank
require('./appServer/Config/connecDB');
const debug            = require('debug')('contatos:server');
const express          = require('express');
const bodyParser       = require('body-parser');
const path 		       = require('path');
const app              = express();

//requisicao cliente
const StartAPI      = require('./appServer/controller/get/StartAPI');
const getContas     = require('./appServer/controller/get/getContas');
const postConta     = require('./appServer/controller/post/postConta');
const putConta      = require('./appServer/controller/put/putConta');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/appClient/public'));


app.all('*',function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT, HEAD');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.get('/buscarContas', getContas);
app.post('/postarConta', postConta);
app.put('/atualizarConta/:idOrigem/:idDestino', putConta);

//verifica porta
const port = Number(process.env.PORT || '3000');

app.listen(port);
console.log('servidor rodando na porta :' + port);

