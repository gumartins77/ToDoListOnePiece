const mugiwarasService = require('../services/mugiwara.service');

const findAllMugiwarasController = (req, res) => {
  const mugiwaras = mugiwarasService.findAllMugiwarasService();
  res.send(mugiwaras);
};

const findByIdMugiwaraController = (req, res) => {
  const paramId = Number(req.params.id);
  const chosenMugiwara = mugiwarasService.findByIdMugiwaraService(paramId);
  res.send(chosenMugiwara);
};

module.exports = {
  findAllMugiwarasController,
  findByIdMugiwaraController,
};
