const connection = require('./connection');

const formatCep = (cep) => {
  const CEP_REGEX = /\d{5}-?\d{3}/;

  if (CEP_REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({ cep: formatCep(cep), logradouro, bairro, localidade, uf});

const findAddressByCep = async (cep) => {

  const noHyphenCep = cep.replace('-', '');

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;';

  const [result] = await connection.execute(query, [noHyphenCep]);

  const address = result.length ? result[0] : null;

  if (!address) return null;

  return getNewCep(address);
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {

  const noHyphenCep = cep.replace('-', '');

  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);';

  await connection.execute(query, [noHyphenCep, logradouro, bairro, localidade, uf]);

  return { cep: noHyphenCep, logradouro, bairro, localidade, uf };
}

module.exports = {
  findAddressByCep,
  create,
};
