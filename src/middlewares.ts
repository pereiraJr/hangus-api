import { json, urlencoded } from 'body-parser';
import cors from 'cors';

export const middlewares = (app: any) => {
  app.use(cors());
	app.use(json());
	app.use(urlencoded({ extended: false }));
}