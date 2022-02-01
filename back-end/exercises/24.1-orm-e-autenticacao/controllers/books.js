const { Book } = require('../src/models');

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll({
      order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]
    });

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200).json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    res.status(200).json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  deleteById,
  getAll,
  getById,
  updateById,
  createNew,
};