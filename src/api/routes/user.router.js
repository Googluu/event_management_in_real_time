import { Router } from 'express';

import UserController from '../controllers/user.controller.js';

const router = Router();

router.get('/users', UserController.findAll);
router.get('/users/:id', UserController.findOne);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

export default router;
