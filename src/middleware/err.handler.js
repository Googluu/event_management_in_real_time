export const errorHanlder = (err, _, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
  next(err);
};
