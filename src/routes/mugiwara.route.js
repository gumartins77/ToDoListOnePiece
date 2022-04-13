const route = require('express').Router();
const controllerMugiwaras = require('../controllers/mugiwara.controller');

route.get('/find-mugiwaras', controllerMugiwaras.findAllMugiwarasController);
route.get('/find-mugiwara/:id', controllerMugiwaras.findByIdMugiwaraController);
route.post('/create', controllerMugiwaras.createMugiwaraController);
route.put('/update/:id', controllerMugiwaras.updateMugiwaraController);
route.delete('/delete/:id', controllerMugiwaras.deleteMugiwaraController);

module.exports = route;
