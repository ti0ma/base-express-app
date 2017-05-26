// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Root path
require('app-module-path').addPath(__dirname);

const http = require('http');
const config = require('config/environment');
const logger = require('utils/logger');
const opbeat = require('utils/opbeat');

const express = require('config/express');
const server = http.createServer(express);
server.listen(config.port, () => {
  logger.info(`Server listening on ${config.port}, in ${config.env} mode`);
  logger.info(`Alright partner... Keep on rollin' baby... You know what time it is!!`);
});
