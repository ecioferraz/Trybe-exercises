const { Book } = require('../src/models');

const errMessage = { message: 'Something went wrong!' };

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(errMessage);
  };
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(errMessage);
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({ title, author, pageQuantity });

    res.status(201).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(errMessage);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.update({
      title, author, pageQuantity
    }, { where: { id } });

    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(errMessage);
  };
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    await book.destroy();

    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(errMessage);
  };
}

module.exports ={
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
