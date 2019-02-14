'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

class Service {
	constructor(config = {}) {
		this.config = config;
		this.app = express();
	}

	async init() {
		this.app.enable('trust proxy');
		this.app.use(bodyParser.json());
		this.app.use(logger('tiny'));

		// TODO: move to /routes
		this.app.get('/*', (req, res) => {
			res.status(200).json({
				statusCode: 200,
				data: [],
				message: 'Hello there buddy bud'
			});
		});
	}

	start() {
		this.app.listen(this.config.service.port, () => {
			console.log(`Serice running on port ${this.config.service.port}`);
		});
	}
}

module.exports = Service;
