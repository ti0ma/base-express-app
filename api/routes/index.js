const express = require('express');

const router = new express.Router();

// Routers
const apiRouter = require('./api');

// Controllers
const HomeController = require('api/controllers/home/home.controller');

router.get('/', HomeController.index);

router.use(`/api`, apiRouter);

module.exports = router;
