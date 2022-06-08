import express, { response } from 'express';
import { ApolloServer, gql } from 'apollo-server-express'

const app = express();

async function startServer() {

    const server = new ApolloServer({
        typeDefs: gql`
            type Client {
                id: ID!
                name: String
            }
            type Demand {
                id: ID!
                name: String
                client: Client
                deadline: String
            }
            type Query {
                demands: [Demand]!
            }
            `,
        resolvers: {
            Query: {
                demands: () => [],
            },
        },
    });

    await server.start();

    server.applyMiddleware({ 
        app,
        cors: {
            origin: 'http://localhost:3000'
        },
    });
};

startServer();

// server.get('/status', (_, response) => {
//     response.send({
//         status: 'ok'
//     });
// });

// server
// .options('/authenticate', enableCors)
// .post('/authenticate', enableCors, express.json(), (request, response) => {
//         console.log(request.body.email + ' ' + request.body.password);
//         response.send({
//             Okay: true,
//         });
//     });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';


app.listen(PORT, HOSTNAME, () => {
        console.log(`Server listening on http://${HOSTNAME}:${PORT}`);
});
