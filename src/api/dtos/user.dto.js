import Joi from 'joi';

// const id = Joi.object().id();
const name = Joi.string().min(3).max(15);
const email = Joi.string().email();
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'));
const avatar = Joi.string().uri();
const role = Joi.string().min(5);

export const createUser = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  avatar: avatar.required(),
  role: role.required(),
});
