const { formatUser, insertUser } = require("../models/User");

const validateUser = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  const isValid = !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email));

  if (!first_name || typeof first_name !== 'string') {
    return res.status(400).json({
      error: true,
      message: "O campo 'first_name' é obrigatório."
    });
  };
  if (!last_name || typeof last_name !== 'string') {
    return res.status(400).json({
      error: true,
      message: "O campo 'last_name' é obrigatório."
    });
  };
  if (!email || isValid) {
    return res.status(400).json({
      error: true,
      message: "Formato de 'email' inválido."
    });
  };
  if (!password || typeof password !== 'string' || password < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
  });
}

  next();
};

const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const addedUser = await insertUser(first_name, last_name, email, password);

  const user = formatUser({ id: addedUser[0].insertId, first_name, last_name, email });

  res.status(201).json(user);
}

module.exports = { validateUser, createUser };
