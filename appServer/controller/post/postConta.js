'use strict';
const Conta          = require('../../models/conta');

module.exports = (req, res) =>{
	const body = req.body;
	
	Conta.create(body, function(err, data){
		if(err) return  res.json(err);
		res.json({message : "Conta criada com sucesso!"});
	});
};