const mongoose = require('mongoose');

const validId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send({ message: 'ID inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.nickname ||
    !req.body.profession ||
    !req.body.origin ||
    !req.body.age ||
    !req.body.reward ||
    !req.body.habilit ||
    !req.body.description ||
    !req.body.image
  ) {
    return res.status(400).send({
      message:
        'Ação não pôde ser efetuado, por favor, envie o formulario completo!',
    });
  }

  next();
};

module.exports = {
  validId,
  validObjectBody,
};
