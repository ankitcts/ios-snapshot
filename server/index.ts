import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import webSockets from './src/lib/websockets';
import apiRoutes from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


//register routes
apiRoutes(app);

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

// subscribe Sockets

webSockets(server);

