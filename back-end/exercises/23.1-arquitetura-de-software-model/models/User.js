const connection = require('./connection');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return { id, firstName, lastName, email };
};

const insertUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
  return await connection.execute(query, [firstName, lastName, email, password]);
};

const findUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users;');
  return users.map(formatUser);
};

const findById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users WHERE id = ?;', [id]);
  
  if (!user[0]) return null;

  return formatUser(user[0]);
};

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;';

  await connection.execute(query, [firstName, lastName, email, password, id]);

  return findById(id);
}

module.exports = {
  formatUser,
  insertUser,
  findUsers,
  findById,
  updateUser,
};
