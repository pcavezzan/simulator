import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Express } from 'express';
import * as cors from 'cors';

export const expressConfig = () => {
  const app: Express = express();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(cors());

  return app;
};
