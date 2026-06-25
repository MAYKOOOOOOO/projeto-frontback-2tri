const express = require('express');
const app = express();

const tarefas = [
  'fazer o backend',
  'fazer o frontend',
  'fazer o bando de dados'
];

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.listen(4010, () => {
  console.log('Servidor rodando');
});