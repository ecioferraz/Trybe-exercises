const express = require('express');
const bodyParser = require('body-parser');
const Books = require('./controllers/books');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get('/books', Books.getAll);

app.route('/book/:id')
.get(Books.getById)
.post(Books.updateBook)
.delete(Books.deleteBook);

app.post('/book', Books.createBook);

app.listen(3000);
