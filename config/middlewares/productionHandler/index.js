const util = require('util');
const logger = require('utils/logger');

module.exports = (err, req, res, next) => {
  const sendResponse = () => {
    if (res.headersSent) {
      return next(err);
    }
    if (err.statusCode) {
      res.statusCode = err.statusCode;
    }
    if (err.status) {
      res.statusCode = err.status;
    }
    if (res.statusCode < 400) {
      res.statusCode = 500;
    }
    return res.send();
  };

  const stack = err.stack;
  if (stack) {
    logger.error(stack);
    return sendResponse();
  }

  const str = String(err);
  if (str === Object.prototype.toString.call(err)) {
    logger.error(util.inspect(err));
    return sendResponse();
  }

  logger.error(util.inspect(str));

  return sendResponse();
};
