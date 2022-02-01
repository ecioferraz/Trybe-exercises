const { Book } = require('../src/models');

const getByAuthorName = async (req, res) => {
  try {
    const { name } = req.params;
    const books = await Book.findAll({ where: { author: name } });

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getByAuthorName,
};