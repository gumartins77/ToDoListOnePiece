const mugiwarasService = require('../services/mugiwara.service');
const mongoose = require('mongoose');

const findAllMugiwarasController = async (req, res) => {
  const allMugiwaras = await mugiwarasService.findAllMugiwarasService();
  if (allMugiwaras.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum Mugiwara cadastrado!' });
  }
  res.send(allMugiwaras);
};

const findByIdMugiwaraController = async (req, res) => {
  const chosenMugiwara = await mugiwarasService.findByIdMugiwaraService(
    req.params.id,
  );
  if (!chosenMugiwara) {
    return res.status(404).send({ message: 'Mugiwara não encontrado!' });
  }
  res.send(chosenMugiwara);
};

const createMugiwaraController = async (req, res) => {
  const createMugiwara = await mugiwarasService.createMugiwaraService(req.body);
  res.status(201).send(createMugiwara);
};

const updateMugiwaraController = async (req, res) => {
  const updateMugiwara = await mugiwarasService.updateMugiwaraService(
    req.params.id,
    req.body,
  );
  res.send(updateMugiwara);
};

const deleteMugiwaraController = async (req, res) => {
  await mugiwarasService.deleteMugiwaraService(req.params.id);
  res.send({ message: 'Mugiwara deletado com sucesso!' });
};

module.exports = {
  findAllMugiwarasController,
  findByIdMugiwaraController,
  createMugiwaraController,
  updateMugiwaraController,
  deleteMugiwaraController,
};
