import Joi from 'joi';
import { listTimeZones } from 'timezone-support';

const id = Joi.string().id();
const title = Joi.string().min(3).max(50);
const description = Joi.string().min(20);
const date = Joi.date().min(2023).max(2024);
const location = Joi.string().valid(...listTimeZones());
const creator = Joi.string().id();
const participants = Joi.string().id();

export const createEventDto = Joi.object({
  title: title.required(),
  description: description.required(),
  date: date.required(),
  location: location.required(),
  creator: creator.required(),
  participants: participants.required(),
});

export const updateEventDto = Joi.object({
  title,
  description,
  date,
  location,
  creator,
  participants,
});

export const getEventDto = Joi.object({
  id: id.required(),
});
