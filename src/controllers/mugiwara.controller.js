const mugiwarasService = require('../services/mugiwara.service');

const findAllMugiwarasController = async (req, res) => {
  const mugiwaras = await mugiwarasService.findAllMugiwarasService();
  if (mugiwaras.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum Mugiwara cadastrado!' });
  }
  res.send(mugiwaras);
};

const findByIdMugiwaraController = async (req, res) => {
  const chosenMugiwara = await mugiwarasService.findByIdMugiwaraService(
    Number(req.params.id),
  );
  if (!chosenMugiwara) {
    return res.status(404).send({ message: 'Mugiwara não encontrado!' });
  }
  res.send(chosenMugiwara);
};

const createMugiwaraController = async (req, res) => {
  await res.send(mugiwarasService.createMugiwaraService(req.body));
};

const updateMugiwaraController = async (req, res) => {
  await res.send(
    mugiwarasService.updateMugiwaraService(Number(req.params.id), req.body),
  );
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
