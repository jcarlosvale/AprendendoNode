//importacao de bibliotecas
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';

//definicao de endereco / URL
const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    //identificando o nome do arquivo
    const urlparse = url.parse(request.url ? request.url : '', true);
    const params = parse(urlparse.search ? urlparse.search : '');
    const filename = 'users/' + params.id + '.txt';

    var resposta;

    //criar e atualizar um usuario
    if (urlparse.pathname == '/criar-usuario') {
        //receber informacao do usuario
        //salvar usuario
        writeFile(filename, JSON.stringify(params), function (err: any) {
        if (err) throw err;
        console.log('Saved!');
        });

        resposta = 'Usuario criado/atualizado com sucesso!';
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(resposta);
    }


});

//execução
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});