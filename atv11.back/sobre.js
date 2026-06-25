const express = require('express');
const app = express();
const PORT = 3010; 

app.get('/', (req, res) => {
  res.send('o projeto  foi desenvolvido para lidar com um dos principais problemas da nossa escola que era a falta de comunicaçao de pai e pedagogia, experienciado por quase todos os intefgrantes do nosso grupo. e muito legal, ele faz coisas tipo uma agenda so que tambem tem uma parte de feedback que faz um diferencial com formas de mandar avisos e recebelos tambem.');
});

app.listen(PORT, () => { 
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});