'use strict';
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const url = 'mongodb://bancoibm:ibm123@ds141209.mlab.com:41209/bancoibm';

mongoose.connect(url);

mongoose.connection.on('connected', () => {  
	console.log('Conectado com sucesso');
});

mongoose.connection.on('error', (err) => {  
	console.log('erro de conexao: ' + err);
});

mongoose.connection.on('disconnected', () => {  
	console.log('dataBase desconectada');
});

mongoose.connection.on('open', () => {  
	console.log('Conexao aberta');
});

process.on('SIGINT', () => {  
	mongoose.connection.close(() => {
		console.log('Sua conexao foi desconectada');
		process.exit(0);
	});
});