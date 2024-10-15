import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
	static init(sequelize) {
		super.init(
			{
				nome: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						len: {
							args: [3, 255],
							msg: 'Campo nome deve ter entre 3 e 255 caracteres',
						},
					},
				},
				sobrenome: {
					type: Sequelize.STRING,
					defaultValue: '',
					validate: {
						len: {
							args: [3, 255],
							msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
						},
					},
				},
				email: {
					type: Sequelize.STRING,
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
					type: Sequelize.INTEGER,
					defaultValue: '',
					validate: {
						isInt: {
							msg: 'A idade precisa ser um número inteiro',
						},
					},
				},
				peso: {
					type: Sequelize.FLOAT,
					defaultValue: '',
					validate: {
						isInt: {
							msg: 'O peso precisa ser um número inteiro ou de ponto flutuante',
						},
					},
				},
				altura: {
					type: Sequelize.FLOAT,
					defaultValue: '',
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
}
