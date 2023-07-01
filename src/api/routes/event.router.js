import { Router } from 'express';

import EventController from '../controllers/event.controller.js';
const Event = new EventController();

const router = Router();

router.get('/', Event.find);
router.get('/:id', Event.findOne);
router.post('/', Event.create);
router.put('/:id', Event.update);
router.delete('/:id', Event.delete);

export default router;
