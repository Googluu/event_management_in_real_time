import { isBoom } from '@hapi/boom';

export const errorHanlder = (err, _, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
  next(err);
};

export const boomErrHandler = (err, req, res, next) => {
  if (isBoom(err)) {
    const { payload, statusCode } = err.output;
    res.status(statusCode).json(payload);
  } else next(err);
};
