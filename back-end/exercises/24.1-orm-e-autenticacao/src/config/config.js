require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, MYSQL_HOST } = process.env;

const processEnv = {
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  host: MYSQL_HOST,
  dialect: 'mysql'
};

module.exports = {
  development: processEnv,
  test: processEnv,
  production: processEnv,
};
