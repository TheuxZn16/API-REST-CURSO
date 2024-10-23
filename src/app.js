import dotenv from 'dotenv';
dotenv.config();
import { resolve } from 'node:path';

import './db';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whitelist = ['http://35.247.243.116', 'http://localhost:3000'];

const corsOptions = {
	origin: (origin, cb) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			cb(null, true);
		} else {
			cb(new Error('Not allowed by CORS'));
		}
	},
};

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}
	middlewares() {
		this.app.use(cors(corsOptions));
		this.app.use(helmet());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(
			'/images/',
			express.static(resolve(__dirname, '..', 'uploads', 'images')),
		);
	}
	routes() {
		this.app.use('/', homeRoutes);
		this.app.use('/users/', userRoutes);
		this.app.use('/token/', tokenRoutes);
		this.app.use('/alunos/', alunoRoutes);
		this.app.use('/fotos/', fotoRoutes);
	}
}
export default new App().app;
