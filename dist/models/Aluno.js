"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: _sequelize2.default.STRING,
					defaultValue: '',
					validate: {
						len: {
							args: [3, 255],
							msg: 'Campo nome deve ter entre 3 e 255 caracteres',
						},
					},
				},
				sobrenome: {
					type: _sequelize2.default.STRING,
					defaultValue: '',
					validate: {
						len: {
							args: [3, 255],
							msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
						},
					},
				},
				email: {
					type: _sequelize2.default.STRING,
					defaultValue: '',
					unique: {
						msg: 'Email já existe',
					},
					validate: {
						isEmail: {
							msg: 'Email inválido',
						},
					},
				},
				idade: {
					type: _sequelize2.default.INTEGER,
					validate: {
						isInt: {
							msg: 'A idade precisa ser um número inteiro',
						},
					},
				},
				peso: {
					type: _sequelize2.default.FLOAT,
					validate: {
						isInt: {
							msg: 'O peso precisa ser um número inteiro ou de ponto flutuante',
						},
					},
				},
				altura: {
					type: _sequelize2.default.FLOAT,
					validate: {
						isInt: {
							msg: 'A altura precisa ser um número inteiro ou de ponto flutuante',
						},
					},
				},
			},
			{
				sequelize,
			},
		);
		return this;
	}
	static associate(models) {
		this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
	}
} exports.default = Aluno;
