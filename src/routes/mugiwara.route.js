const route = require('express').Router();
const controllerMugiwaras = require('../controllers/mugiwara.controller');

route.get('/find-mugiwaras', controllerMugiwaras.findAllMugiwarasController);
route.get('/find-mugiwara/:id', controllerMugiwaras.findByIdMugiwaraController);

module.exports = route;
