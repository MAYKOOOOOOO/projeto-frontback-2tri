const express = require('express');
const app = express();

const usuarios = [
  'Anaís fundos',
  'jose enrique',
  'tahis pode ser'
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.listen(4000, () => {
  console.log('Servidor rodando');
});