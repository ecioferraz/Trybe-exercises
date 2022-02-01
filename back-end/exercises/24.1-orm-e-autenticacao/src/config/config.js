require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, HOSTNAME } = process.env;

const processEnv = {
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  host: HOSTNAME,
  dialect: 'mysql',
};

module.exports = {
  development: processEnv,
  test: processEnv,
  production: processEnv,
};