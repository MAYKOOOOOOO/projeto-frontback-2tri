const express = require('express');
const app = express();
const PORT = 3020; 

app.get('/', (req, res) => {
  res.send('prezada equipe, é com seio no objetivo que vos digo que o projeto sera de extremo sucesso, e agradeço por todo o trabalho.');
});

app.listen(PORT, () => { 
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});