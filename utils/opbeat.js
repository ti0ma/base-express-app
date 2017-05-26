const config = require('config/environment');
const opbeat = require('opbeat').start(config.opbeat);;

module.exports = opbeat;
