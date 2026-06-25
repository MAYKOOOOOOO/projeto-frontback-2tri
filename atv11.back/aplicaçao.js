const express = require('express');
const app = express();
const PORT = 3090;


app.get('/', (req, res) => {
  res.send('Seja bem-vindo à página inicial');
});


app.get('/sobre', (req, res) => {
  res.send('Esta é a página Sobre: Conheça mais sobre o nosso projeto.');
});


app.get('/contato', (req, res) => {
  res.send('Esta é a página de Contato: Fale conosco em contato@email.com');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});