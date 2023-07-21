import express from 'express';

// ROUTER API
import { routerApi } from './api/routes/server/index.js';

// MIDDLEWARE
import { errorHanlder, boomErrHandler } from './middleware/err.handler.js';

const createApp = () => {
  const app = express();

  // SET
  app.use(express.json());

  app.get('/', (_, res) => res.send('Event Management In Real Time!'));

  // ROUTER API
  routerApi(app);

  // MIDDLEWARE
  app.use(errorHanlder);
  app.use(boomErrHandler);

  return app;
};

export default createApp;
