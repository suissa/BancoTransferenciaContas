'use strict';
const Conta            = require('../../models/conta');
const VerificarSaldo   = require('../get/VerificarSaldo');

module.exports = (req, res)=>{

	const idOrigem  = {_id   : req.params.idOrigem};
	const idDestino = {_id   : req.params.idDestino};
	const valor     = {valor : req.body.valor};

	VerificarSaldo(idOrigem, valor.valor, res).then(sucesso).catch(error);

	// const Origem = {
	// 	valor : valor.valor
	// };
	// const Destino = {
	// 	valor : valor.valor
	// }
	
	// Conta.update(idOrigem, valor, function(err, data){
	// 	if(err) return 
	// 		res.json({message : "Tranferência efetuada com sucesso!"});
	// });
};
