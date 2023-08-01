import { Router } from 'express';

import {
  createEvent,
  findEvents,
  findOneEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/event.controller.js';

const router = Router();

router.get('/', findEvents);
router.get('/:id', findOneEvent);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
