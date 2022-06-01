import { createServer} from 'http';
import { readFile } from 'fs';
import { resolve } from 'path';

const server = createServer((req, res) => {
    switch (req.url) {
        case '/status': {
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.write(
                JSON.stringify({
                    status: 'ok'
                })
            );
            res.end();
            return
        }
        case '/sign-in': {
            const filePath = resolve(__dirname, './pages/sign-in.html');
            readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.write(err.message);
                    res.end();
                    return
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
            return;
        } 
        case '/authenticate': {
            return;
        } 
        default: {
            res.writeHead(404, 'Service Not Found');
            res.end();
            return
        }
    }
});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


server.listen(PORT, HOSTNAME, () => {
        console.log(`Server listening on http://${HOSTNAME}:${PORT}`);
});
