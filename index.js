const express = require('express');
const cors = require('cors');

const port = 3002;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
