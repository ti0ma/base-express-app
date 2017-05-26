const path = require('path');
const _ = require('lodash');

const envConfig = require(`./${(process.env.NODE_ENV || 'development')}.js`);

const rootPath = path.normalize(`${__dirname}/../..`);

const all = {
  env: process.env.NODE_ENV,

  root: rootPath,

  port: process.env.BACK_PORT || 9000,

  opbeat: {
    enable: false
    // Uncomment if enabled
    // organizationId: '',
    // secretToken: '',
    // appId: ''
  }
};

const config = _.merge(all, envConfig);
module.exports = config;
