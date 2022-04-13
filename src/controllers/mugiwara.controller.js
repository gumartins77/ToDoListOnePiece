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

const createMugiwaraController = (req, res) => {
  const mugiwara = req.body;
  const newMugiwara = mugiwarasService.createMugiwaraService(mugiwara);
  res.send(newMugiwara);
};

const updateMugiwaraController = (req, res) => {
  const idParam = Number(req.params.id);
  const mugiwaraEdit = req.body;
  const updatedMugiwara = mugiwarasService.updateMugiwaraService(
    idParam,
    mugiwaraEdit,
  );
  res.send(updatedMugiwara);
};

const deleteMugiwaraController = (req, res) => {
  const idParam = req.params.id;
  mugiwarasService.deleteMugiwaraService(idParam);
  res.send({ message: 'Mugiwara deletado com sucesso!' });
};

module.exports = {
  findAllMugiwarasController,
  findByIdMugiwaraController,
  createMugiwaraController,
  updateMugiwaraController,
  deleteMugiwaraController,
};
