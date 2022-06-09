//incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

//definicao de endereco / URL
const hostname = '127.0.0.1';
const port = 3000;

//Implementação da regra de negócio
const server = http.createServer((req, res) => {

  let answer;
  const urlparse = url.parse(req.url, true);
  const params = queryString.parse(urlparse.search);
  const filename = 'users/' + params.id + '.txt';

  //criar e atualizar um usuario
  if (urlparse.pathname == '/criar-usuario') {
    //receber informacao do usuario
    //salvar usuario
    fs.writeFile(filename, JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    answer = 'Usuario salvo com sucesso!';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(answer);
  }
  //Selecionar usuario
  else if(urlparse.pathname == '/selecionar-usuario') {
    fs.readFile(filename, function(err, data) {
        answer = data;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(answer);
      });
  }
  //remover usuario
  else if(urlparse.pathname == '/remover-usuario') {
    fs.unlink(filename, function (err) {
      console.log('File deleted!');
      answer = err ? "Usuario nao encontrado" : "Usuario removido com sucesso!";

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(answer);
    });
  }
});

// Execução do servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//localhost:3000/?nome=teste&idade=10&id=1
//localhost:3000/criar-usuario?nome=teste&idade=10&id=1
//localhost:3000/selecionar-usuario?nome=teste&idade=10&id=1
