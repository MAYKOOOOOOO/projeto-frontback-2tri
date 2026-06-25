const express = require('express');
const app = express();

const turmas = [
  'TURMA A- desenvolvimento de sistemas',
  'TURMA B- quimica',
  'TURMA C- mecatronica'
];

app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(4050, () => {
  console.log('Servidor rodando');
});