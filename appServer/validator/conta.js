module.exports = {
	type: String,
	required: [true, 'Campo Conta é Obrigatório'],
	trim: true,
	validate: {
		validator: function(v) {
			return /^([0-9]{5})$/.test(v);
		},
		message: 'Conta invalida!'
	}
};