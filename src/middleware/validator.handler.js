import { badRequest } from '@hapi/boom';

export function validateHandler(schema, property) {
  return (req, _, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(badRequest(error));
    } else next();
  };
}
