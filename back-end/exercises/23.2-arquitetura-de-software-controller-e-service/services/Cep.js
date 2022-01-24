const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (cep) => {
  if (!CEP_REGEX.test(cep)) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido',
    }
  }

  const foundCep = await Cep.findAddressByCep(cep);

  if (!foundCep) return {
    error: {
      code: 'notFound',
      message: 'CEP não encontrado',
    }
  }

  return foundCep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const foundCep = await Cep.findAddressByCep(cep);

  if (foundCep) return {
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente',
    },
  };

  return Cep.create({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  create,
};
