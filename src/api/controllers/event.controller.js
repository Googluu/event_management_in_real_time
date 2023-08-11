import EventService from '../services/event.service.js';
import { validateHandler } from '../../middleware/validator.handler.js';
import { checkRoles } from '../../middleware/auth.handler.js';
import {
  createEventDto,
  updateEventDto,
  getEventDto,
} from '../dtos/event.dto.js';

const eventService = new EventService();

export const createEvent = (req, res, next) => {
  try {
    const body = req.body;

    validateHandler(createEventDto, 'body');
    checkRoles('admin' || 'organizador');

    const newEvent = eventService.create(body);
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};

export const findEvents = (_, res, next) => {
  try {
    const events = eventService.find();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

export const findOneEvent = (req, res, next) => {
  try {
    const { id } = req.params;

    validateHandler(getEventDto, 'params');

    const event = eventService.findOne(id);
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

export const updateEvent = (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    validateHandler(getEventDto, 'params');
    validateHandler(updateEventDto, 'body');
    checkRoles('admin' || 'organizador');

    const updateEvent = eventService.update(id, body);
    res.status(200).json(updateEvent);
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = (req, res) => {
  try {
    const { id } = req.params;

    validateHandler(getEventDto, 'params');
    checkRoles('admin' || 'organizador');

    const removeEvent = eventService.delete(id);
    res.status(204).json(removeEvent);
  } catch (error) {
    next(error);
  }
};
