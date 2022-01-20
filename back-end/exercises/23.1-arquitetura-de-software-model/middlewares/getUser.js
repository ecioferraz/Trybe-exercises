const rescue = require('express-rescue');
const { findUsers } = require('../models/User');

const getUsers = rescue(async (_req, res) => {
  const users = await findUsers() || [];
  res.status(200).json(users);
});

module.exports = getUsers;
