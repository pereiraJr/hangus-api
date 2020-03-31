import http from 'http'
import express, {Router} from 'express';
import { middlewares } from './middlewares';
import { routes } from './routes';
import { BaseController } from './controller/base.controller'

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const baseController = new BaseController();

middlewares(app);

routes(
  app,
  baseController
);

server.on('error', (err) => {
	console.error(err.message);
});

server.listen(PORT, () => {
	console.info(`Server listening at ${PORT}`);
});
