"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const models = [_Aluno2.default, _User2.default, _Foto2.default];

const connection = new (0, _sequelize.Sequelize)(process.env.DATABASE_URL, {
	dialect: 'postgres',
});

try {
	connection.sync();
	console.log('success');
} catch (error) {
	console.log('failure');
}

models.forEach((model) => model.init(connection));
models.forEach(
	(model) => model.associate && model.associate(connection.models),
);
