import express, { Application } from 'express';
import cors from 'cors';
import { RequestLimiter } from './middlewares/request-limiter';
import { router } from './routes';
import { NotFound } from './middlewares/404';

function buildApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.disable('x-powered-by'); // don't expose that this application use express

  app.use(RequestLimiter);

  app.use(router);

  app.use(NotFound);

  return app;
}

export default buildApp();
