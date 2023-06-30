import express from 'express';

import userRouter from './api/routes/user.router.js';

const createApp = () => {
  const app = express();

  app.get('/', (_, res) => res.send('Event Management In Real Time!'));

  // ROUTER
  app.use(userRouter);

  return app;
};

export default createApp;
