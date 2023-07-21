import { Router } from 'express';

import {
  signup,
  login,
  verifyToken,
  getUser,
} from '../controllers/user.controller.js';

import { checkEmailExists } from '../../middleware/checkEmailExists.js';
import { validateHandler } from '../../middleware/validator.handler.js';
import { createUser } from '../dtos/user.dto.js';

const router = Router();

router.post(
  '/signup',
  validateHandler(createUser, 'body'),
  checkEmailExists,
  signup
);
router.post('/login', login);
router.get('/user', verifyToken, getUser);

export default router;
