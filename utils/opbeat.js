const opbeat = require('opbeat');
const config = require('config/environment');

opbeat.start(config.opbeat);

module.exports = opbeat;
