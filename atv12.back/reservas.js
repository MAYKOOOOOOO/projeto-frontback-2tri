const express = require('express');
const app = express();

const reservas = [
  'casa ocm pscina',
  'casa com 3 andar',
  'casa com porao'
];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.listen(4020, () => {
  console.log('Servidor rodando');
});