const Joi = require('joi');
const celebrate = require('celebrate');

module.exports = celebrate({
  params: {
    id: Joi.string().uuid().required()
  }
});
