module.exports = {
	type: String,
	required: [true, 'Campo CPF é Obrigatório'],
	trim: true,
	validate: {
		validator: function(v) {
			return /^([0-9]{11})$/.test(v);
		},
		message: 'CPF invalido!'
	}
};