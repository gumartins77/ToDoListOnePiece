const Mugiwaras = require('../models/Mugiwara');

const findAllMugiwarasService = async () => {
  return await Mugiwaras.find();
};

const findByIdMugiwaraService = async (idParam) => {
  return await Mugiwaras.findById(idParam);
};

const createMugiwaraService = async (newMugiwara) => {
  return await Mugiwaras.create(newMugiwara);
};

const updateMugiwaraService = async (idParam, editedMugiwara) => {
  return await Mugiwaras.findByIdAndUpdate(idParam, editedMugiwara);
};

const deleteMugiwaraService = async (idParam) => {
  return await Mugiwaras.findByIdAndDelete(idParam);
};

module.exports = {
  findAllMugiwarasService,
  findByIdMugiwaraService,
  createMugiwaraService,
  updateMugiwaraService,
  deleteMugiwaraService,
};
