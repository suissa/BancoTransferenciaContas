'use strict';

const Conta   = require('../../models/conta');
const Exibir  = require('../../jsonExibir/exibir');

function testarValor(idOrigem, valor, res) {
	const erro = (err) => err;
	const sucesso = (err, data) => {
		if(valor >= data.valor) return res.json({message: "valor indisponivel"});
		res.json(data.valor);
	}
	return Conta.findById(idOrigem, Exibir).exec();
}

module.exports = testarValor;

