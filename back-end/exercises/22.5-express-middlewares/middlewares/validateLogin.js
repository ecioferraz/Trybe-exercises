const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if (username.length < 3) return res.status(400).json({ message: 'invalid data' });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const isValid = !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email));

  if (isValid) return res.status(400).json({ message: 'invalid data' });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 3 || password.length > 9 || !password.match(/^[0-9]*$/)) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = { validateUsername, validateEmail, validatePassword };
