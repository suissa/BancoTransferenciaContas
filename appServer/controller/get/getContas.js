'use strict';
const Conta   = require('../../models/conta');
const Exibir  = require('../../jsonExibir/exibir');

module.exports = (req, res)=>{
	Conta.find({}, Exibir, (err, data)=>{
		if(err) return res.json(err);
		res.json(data);
	});
};