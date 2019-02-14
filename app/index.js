'use strict';

const config = require('./config');
const Service = require('./service');

const service = new Service(config);

service.init()
	.then(() => {
		service.start();
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
