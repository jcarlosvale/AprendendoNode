import {createServer} from 'http';

const server = createServer((req, res) => {
    switch (req.url) {
        case '/status': {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('OK');
            res.end();
            return
        }
    }
});

server.listen(8000, '127.0.0.1', () => {
        console.log('Server listening on http://127.0.0.1:8000');
});
