import { Router } from 'express';

// ROUTES
import userRouter from '../user.router.js';
import eventRouter from '../event.router.js';

export function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/events', eventRouter);
}
