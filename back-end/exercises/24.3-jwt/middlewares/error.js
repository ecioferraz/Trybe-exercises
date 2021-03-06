module.exports = (err, _req, res, _next) => {
  const status = err.code || 500;

  const message = err.message || 'Internal server error';
  res.status(status).json({ message });
};
