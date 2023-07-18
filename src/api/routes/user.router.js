import { Router } from 'express';

import {
  signup,
  login,
  verifyToken,
  getUser,
} from '../controllers/user.controller.js';

import { checkEmailExists } from '../../middleware/checkEmailExists.js';

const router = Router();

router.post('/signup', checkEmailExists, signup);
router.post('/login', login);
router.get('/user', verifyToken, getUser);

export default router;
