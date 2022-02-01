const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/books');
const authorController = require('./controllers/author');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);
app.get('/book/:id', booksController.getById);
app.get('/author/:name', authorController.getByAuthorName);
app.post('/book', booksController.createNew);
app.post('/book/:id', booksController.updateById);
app.delete('/book/:id', booksController.deleteById);

app.listen(PORT);