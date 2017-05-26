const express = require('express');

const router = new express.Router();

// Controllers
const TestController = require('api/controllers/test/test.controller');

// Validations
const TestValidation = require('api/controllers/test/test.validation');

router.get('/:id', TestValidation, TestController.index);

module.exports = router;
