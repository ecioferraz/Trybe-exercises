const User = require('../models/User');

const findUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) return res.status(404).json({
    error: true,
    message: 'Usuário não encontrado',
  });

  res.status(200).json(user);
};

module.exports = findUserById;
