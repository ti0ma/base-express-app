const winston = require('winston');
const config = require('config/environment');

const consoleTransport = new winston.transports.Console({
  json: false,
  timestamp: true,
  prettyprint: true,
  colorize: true
});

module.exports = new winston.Logger({
  level: config.logLevel,
  transports: [
    consoleTransport
  ]
});
