import { Sequelize } from 'sequelize';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
});

models.forEach((model) => model.init(connection));
models.forEach(
	(model) => model.associate && model.associate(connection.models),
);
