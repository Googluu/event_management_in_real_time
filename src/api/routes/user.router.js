import { Router } from 'express';

import UserController from '../controllers/user.controller.js';
// melara
const User = new UserController();

const router = Router();

router.get('/users', User.findAll);
router.get('/users/:id', User.findOne);
router.post('/users', User.create);
router.put('/users/:id', User.update);
router.delete('/users/:id', User.delete);

export default router;
