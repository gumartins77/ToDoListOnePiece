const route = require('express').Router();
const controllerMugiwaras = require('../controllers/mugiwara.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/mugiwara.middleware');

route.get('/find-mugiwaras', controllerMugiwaras.findAllMugiwarasController);
route.get(
  '/find-mugiwara/:id',
  validId,
  controllerMugiwaras.findByIdMugiwaraController,
);
route.post(
  '/create-mugiwara',
  validObjectBody,
  controllerMugiwaras.createMugiwaraController,
);
route.put(
  '/update-mugiwara/:id',
  validId,
  validObjectBody,
  controllerMugiwaras.updateMugiwaraController,
);
route.delete(
  '/delete-mugiwara/:id',
  validId,
  controllerMugiwaras.deleteMugiwaraController,
);

module.exports = route;
