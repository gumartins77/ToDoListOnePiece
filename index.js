const express = require('express');
const cors = require('cors');

const port = 3002;

const app = express();
app.use(express.json());
app.use(cors());

const mugiwaras = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    nickname: 'Chapéu de Palha',
    profession: 'Capitão',
    origin: 'East Blue',
    age: 19,
    reward: 1500000000,
    habilit: 'Gomo Gomo no Mi',
    description:
      'Monkey D. Luffy, também conhecido como Luffy Chapéu de Palha ou Chapéu de Palha, é um pirata e o protagonista do anime e mangá One Piece. Ele é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus principais lutadores. Seu sonho de vida é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.',
  },
];

app.get('/mugiwaras', (req, res) => {
  res.send(mugiwaras);
});

app.get('/mugiwaras/:id', (req, res) => {
  res.send(mugiwaras.find((mugiwara) => mugiwara.id === Number(req.params.id)));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
