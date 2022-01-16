const routeNotFound = (_req, res, next) => {
  res.status(404).json({ message: 'Opsss, route not found!' });
  next();
};

const handleError = (err, _req, res, _next) => {
  res.status(err.statusCode).json({ message: err.message });
};

module.exports = [routeNotFound, handleError];
