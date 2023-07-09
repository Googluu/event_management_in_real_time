import express from 'express';

import userRouter from './api/routes/user.router.js';
import eventRouter from './api/routes/event.router.js';

import { errorHanlder } from './middleware/err.handler.js';

const createApp = () => {
  const app = express();

  // SET
  app.use(express.json());

  app.get('/', (_, res) => res.send('Event Management In Real Time!'));

  // ROUTER
  app.use('/users', userRouter);
  app.use('/events', eventRouter);

  // MIDDLEWARE
  app.use(errorHanlder);

  return app;
};

export default createApp;
