const route = require('express').Router();
const controllerMugiwaras = require('../controllers/mugiwara.controller');

route.get('/find-mugiwaras', controllerMugiwaras.findAllMugiwarasController);
route.get('/find-mugiwara/:id', controllerMugiwaras.findByIdMugiwaraController);
route.post('/create-mugiwara', controllerMugiwaras.createMugiwaraController);
route.put('/update-mugiwara/:id', controllerMugiwaras.updateMugiwaraController);
route.delete(
  '/delete-mugiwara/:id',
  controllerMugiwaras.deleteMugiwaraController,
);

module.exports = route;
