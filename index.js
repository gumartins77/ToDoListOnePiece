const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/mugiwara.route');
const connectToDatabase = require('./src/database/database');

const port = 3002;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use('/mugiwaras', routes);

app.listen(port, () => {
  console.log(
    `Servidor rodando em http://localhost:${port}/mugiwaras/find-mugiwaras`,
  );
});
