import express from 'express';

const createApp = () => {
  const app = express();

  app.get('/', (_, res) => res.send('Event Management In Real Time!'));

  return app;
};

export default createApp;
