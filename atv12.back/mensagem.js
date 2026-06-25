const express = require('express');
const app = express();

const mensagem = ['sistema esta ativo'];

app.get('/mensagem', (req, res) => {
  res.json(mensagem);
});

app.listen(4030, () => {
  console.log('Servidor rodando');
});