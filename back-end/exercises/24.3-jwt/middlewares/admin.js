module.exports = (req, _res, next) => {
  const { user } = req;

  if (!user) {
    const err = new Error('This endpoint requires authentication');

    err.code = 401;

    return next(err);
  };

  if (!user.admin) {
    const err = new Error('Restricted access');

    return next(err);
  }

  return next();
};