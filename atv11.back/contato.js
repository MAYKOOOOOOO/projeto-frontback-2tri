const express = require('express');
const app = express();
const PORT = 3030; 

app.get('/', (req, res) => {
  res.send('para mais duvidas acesse o email:suportelulaticos@gmail.com');
});

app.listen(PORT, () => { 
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});