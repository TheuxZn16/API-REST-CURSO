"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();
var _nodepath = require('node:path');

require('./db');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

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
		this.app = _express2.default.call(void 0, );
		this.middlewares();
		this.routes();
	}
	middlewares() {
		this.app.use(_cors2.default.call(void 0, corsOptions));
		this.app.use(_helmet2.default.call(void 0, ));
		this.app.use(_express2.default.urlencoded({ extended: true }));
		this.app.use(_express2.default.json());
		this.app.use(
			'/images/',
			_express2.default.static(_nodepath.resolve.call(void 0, __dirname, '..', 'uploads', 'images')),
		);
	}
	routes() {
		this.app.use('/', _homeRoutes2.default);
		this.app.use('/users/', _userRoutes2.default);
		this.app.use('/token/', _tokenRoutes2.default);
		this.app.use('/alunos/', _alunoRoutes2.default);
		this.app.use('/fotos/', _fotoRoutes2.default);
	}
}
exports. default = new App().app;
