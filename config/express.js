const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const celebrate = require('celebrate');
const config = require('config/environment');
const index = require('api/routes/index');
const accessControl = require('config/middlewares/accessControl');
const logger = require('utils/logger');
const opbeat = require('utils/opbeat');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(accessControl);

app.use('/', index);

if (config.opbeat.enable) {
  logger.info('Opbeat enabled');
  app.use(opbeat.middleware.express());
}

// Error handler
app.use(celebrate.errors());
if (config.env === 'production') {
  const productionHandler = require('config/middlewares/productionHandler');
  app.use(productionHandler);
} else {
  app.use(errorHandler({
    log: (error, str) => {
      logger.error(str);
    }
  }));
}

module.exports = app;
