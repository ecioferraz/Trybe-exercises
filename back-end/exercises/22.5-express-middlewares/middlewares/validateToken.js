const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token.match(/^[a-zA-Z0-9]{12}$/)) {
    return res.status(401).json({ message: 'invalid token' });
  };

  next();
};

module.exports = validateToken;
