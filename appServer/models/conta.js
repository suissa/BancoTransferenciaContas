'use strict';
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const _schema = {
	cpf:        require('../validator/cpf'),
	agencia:    require('../validator/agencia'),
	conta :     require('../validator/conta'),
	valor :     require('../validator/valor'),
	create_at : require('../validator/dt_criacao'),
	update_at : require('../validator/dt_update'),
	historico : []
};

const modelConta =  new Schema(_schema);

module.exports = mongoose.model('conta', modelConta);