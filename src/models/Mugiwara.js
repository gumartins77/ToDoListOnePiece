const mongoose = require('mongoose');

const MugiwaraSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  profession: {
    type: String,
    require: true,
  },
  origin: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  reward: {
    type: Number,
    require: true,
  },
  habilit: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Mugiwara = mongoose.model('mugiwaras', MugiwaraSchema);

module.exports = Mugiwara;
