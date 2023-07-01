import { Router } from 'express';

import UserController from '../controllers/user.controller.js';
// me
const User = new UserController();

const router = Router();

router.get('/', User.find);
router.get('/:id', User.findOne);
router.post('/', User.create);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

export default router;
