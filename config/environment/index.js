const path = require('path');
const _ = require('lodash');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;
const envConfig = require(`./${env}.js`);

const rootPath = path.normalize(`${__dirname}/../..`);

const all = {
  env,

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
