const isPromise = require('ispromise');

const Layer = require('express/lib/router/layer');

Layer.prototype.handle_error = function handle_error(error, req, res, next) { // eslint-disable-line no-underscore-dangle
  var fn = this.handle;

  if (fn.length !== 4) {
    // not a standard error handler
    return next(error);
  }

  try {
    const handler = fn(error, req, res, next);
    if (isPromise(handler)) {
      handler.catch(next);
    }
  } catch (err) {
    next(err);
  }
};

Layer.prototype.handle_request = function handle(req, res, next) { // eslint-disable-line no-underscore-dangle
  var fn = this.handle;

  if (fn.length > 3) {
    // not a standard request handler
    return next();
  }

  try {
    const handler = fn(req, res, next);
    if (isPromise(handler)) {
      handler.catch(next);
    }
  } catch (err) {
    next(err);
  }
};
