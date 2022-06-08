//incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//definicao de endereco / URL
const hostname = '127.0.0.1';
const port = 3000;

//Implementação da regra de negócio
const server = http.createServer((req, res) => {

  //Pegar a pergunta na URL
  const params = queryString.parse(url.parse(req.url, true).search);

  //Verificar a pergunta e escolher uma resposta
  let resposta;
  if (params.pergunta == 'melhor-filme') {
    resposta = 'star wars';
  } else {
    if (params.pergunta == 'melhor-tecnologia') {
      resposta = 'nodejs';
    } else {
      resposta = 'Não sei';
    }
  }

  //Retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execução do servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});